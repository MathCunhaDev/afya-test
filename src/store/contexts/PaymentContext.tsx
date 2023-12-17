import React, { ReactNode, useState } from "react";
import { IPaymentConfirmation } from "~models/IPayment";

interface PaymentConfirmationProviderProps {
  children: ReactNode;
}

interface IPaymentConfirmationContext {
  paymentConfirmation: IPaymentConfirmation;
  setPaymentConfirmation: (value: IPaymentConfirmation) => void;
}

export const PaymentConfirmationContext =
  React.createContext<IPaymentConfirmationContext>(
    {} as IPaymentConfirmationContext
  );

export const PaymentConfirmationProvider: React.FC<
  PaymentConfirmationProviderProps
> = ({ children }) => {
  const [paymentConfirmation, setPaymentConfirmation] =
    useState<IPaymentConfirmation>({} as IPaymentConfirmation);

  return (
    <PaymentConfirmationContext.Provider
      value={{ paymentConfirmation, setPaymentConfirmation }}
    >
      {children}
    </PaymentConfirmationContext.Provider>
  );
};
