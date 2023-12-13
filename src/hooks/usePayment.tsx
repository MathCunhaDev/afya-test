import { useEffect, useReducer, useState } from "react";
import { formatPrice } from "~common/utils/formatPrice";
import { getPaymentData } from "~store/services/apiService";
import * as Props from "~models/IPayment";

const paymentReducer = (state: any, action: any) => (state = action);

export const usePayment = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [paymentData, setPaymentData] = useState<Props.IPaymentData[]>([]);
  const [paymentState, paymentDispatch] = useReducer(paymentReducer, {
    id: 0,
    installments: 0,
  });

  const loadData = async () => {
    try {
      const { data } = await getPaymentData();

      const dataFormatted = data.map((payment: Props.IPayment) => ({
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

      setPaymentData(dataFormatted);
    } catch (error) {
      console.log("An error occurred while loading:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (paymentData.length === 0) loadData();
  }, []);

  return { isLoading, paymentData, paymentState, paymentDispatch };
};
