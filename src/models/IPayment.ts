import { FieldValues } from "react-hook-form";

interface IPaymentData {
  id: number;
  title: string;
  fullPrice: string;
  bestPrice: string;
  discount: string;
  installments: number;
  installmentPrice: string;
  installmentType: string;
}

interface IPayment {
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

type IOption = {
  value: string;
  label: string;
};

interface IPaymentFormItem {
  id: string;
  label: string;
  placeholder: string;
}

interface IPaymentForm {
  options: IOption[];
  handleSubscription: (data: FieldValues) => void;
}

interface IPaymentSubmitObject {
  cardNumber: string;
  cpf: string;
  cvv: string;
  installments: string;
  name: string;
  validity: string;
}

interface IPaymentConfirmation {
  id: string | number;
  installments: string | number;
  title: string;
  cpf: string;
  price: string;
  email: string;
}

interface IPlanSelected {
  id: string | number;
  installments: string | number;
  title: string;
  installmentType: string;
  bestPrice: string;
  installmentPrice: string;
}

export type {
  IPaymentData,
  IPayment,
  IOption,
  IPaymentFormItem,
  IPaymentForm,
  IPaymentSubmitObject,
  IPaymentConfirmation,
  IPlanSelected,
};
