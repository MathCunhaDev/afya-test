import { useEffect, useReducer, useState } from "react";
import { formatPrice } from "~common/utils/formatPrice";
import { getPaymentData } from "~store/services/apiService";
import * as Props from "~models/IPayment";

export const usePayment = () => {
  const paymentReducer = (state: any, action: any) => {
    const newOptions: Props.IOption[] = Array.from({
      length: action.installments,
    }).map((_, index) => ({
      value: (index + 1).toString(),
      label: (index + 1).toString(),
    }));

    setOptions(newOptions);

    return (state = action);
  };
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [options, setOptions] = useState<Props.IOption[]>([]);
  const [paymentData, setPaymentData] = useState<Props.IPaymentData[]>([]);
  const [paymentState, paymentDispatch] = useReducer(paymentReducer, {
    id: 0,
    installments: 0,
  });

  const loadData = async () => {
    try {
      const { data } = await getPaymentData();

      const sortedData = data.sort(
        (a: Props.IPayment, b: Props.IPayment) => b.order - a.order
      );

      paymentDispatch({
        id: sortedData[0].id,
        installments: sortedData[0].installments,
      });

      const formattedData = sortedData.map((payment: Props.IPayment) => ({
        id: payment.id,
        title: payment.title,
        fullPrice: formatPrice(payment.fullPrice),
        bestPrice: formatPrice(payment.fullPrice - payment.discountAmmount),
        discount: `-${payment.discountPercentage * 100}%`,
        installments: payment.installments,
        installmentPrice: formatPrice(
          (payment.fullPrice - payment.discountAmmount) / payment.installments
        ),
        installmentType: payment.description,
      }));

      setPaymentData(formattedData);
    } catch (error) {
      console.log("An error occurred while loading:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (paymentData.length === 0) loadData();
  }, []);

  return { isLoading, paymentData, paymentState, paymentDispatch, options };
};
