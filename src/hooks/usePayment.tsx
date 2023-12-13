import { useEffect, useReducer, useState } from "react";
import { formatPrice } from "~common/utils/formatPrice";
import { getPaymentData } from "~store/services/apiService";

export interface IPaymentData {
  id: number;
  title: string;
  fullPrice: string;
  bestPrice: string;
  discount: string;
  installments: number;
  installmentPrice: string;
  installmentType: string;
}

export interface IPayment {
  id: number;
  storeId: string;
  title: string;
  description: string;
  caption: string;
  fullPrice: number;
  discountAmmount: number;
  discountPercentage: number;
  periodLabel: string;
  period: string;
  discountCouponCode: null;
  order: number;
  priority: number;
  gateway: string;
  splittable: boolean;
  installments: number;
  acceptsCoupon: boolean;
}

const paymentReducer = (state: any, action: any) => {
  console.log("aqui 1", action, state);
  return (state = action);
};

export const usePayment = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [paymentData, setPaymentData] = useState<IPaymentData[]>([]);
  const [paymentState, paymentDispatch] = useReducer(paymentReducer, {
    id: 0,
    installments: 0,
  });

  const loadData = async () => {
    try {
      const { data } = await getPaymentData();

      const dataFormatted = data.map((payment: IPayment) => ({
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
