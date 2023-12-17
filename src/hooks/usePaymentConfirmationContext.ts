import { useContext } from "react";
import { PaymentConfirmationContext } from "~store/contexts/PaymentContext";

export const usePaymentConfirmationContext = () =>
  useContext(PaymentConfirmationContext);
