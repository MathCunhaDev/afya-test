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

export type { IPaymentData, IPayment, IOption };
