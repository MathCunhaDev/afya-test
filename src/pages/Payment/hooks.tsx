import { useEffect, useReducer, useState } from "react";
import { usePaymentConfirmationContext } from "~hooks/usePaymentConfirmationContext";
import { getPaymentData, postSubscription } from "~store/services/apiService";
import { validateForm } from "~common/utils/validateForm";
import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import * as Props from "~models/IPayment";
import * as Utils from "~common/utils";

export const usePayment = () => {
  const navigate = useNavigate();
  const { setPaymentConfirmation } = usePaymentConfirmationContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [options, setOptions] = useState<Props.IOption[]>([]);
  const [paymentData, setPaymentData] = useState<Props.IPaymentData[]>([]);
  const [planSelected, setPlanSelected] = useState<Props.IPlanSelected>(
    {} as Props.IPlanSelected
  );

  const paymentReducer = (_state: any, action: any) => {
    const newOptions: Props.IOption[] = Array.from({
      length: action.installments,
    }).map((_, index) => ({
      value: (index + 1).toString(),
      label: (index + 1).toString(),
    }));

    setOptions(newOptions);
    setPlanSelected(action);

    return (_state = action);
  };

  const [paymentState, paymentDispatch] = useReducer(paymentReducer, {
    id: 0,
    installments: 0,
    title: "",
    installmentType: "",
    bestPrice: "",
    installmentPrice: "",
  });

  const handleSubscription = async (data: FieldValues) => {
    if (validateForm(data)) {
      try {
        const result: any = await postSubscription(data);

        if (result.status === 200) {
          setPaymentConfirmation({
            id: planSelected.id,
            installments: planSelected.installments,
            title: planSelected.title,
            cpf: data.cpf,
            price: `R$ ${planSelected.bestPrice} | ${planSelected.installments}x R$ ${planSelected.installmentPrice}`,
            email: "fulano@cicrano.com",
          });
        } else {
          console.log("Ocorreu um erro, verifique os dados e tente novamente.");
        }
      } catch (error) {
        console.log("Ocorreu um erro, tente novamente mais tarde:", error);
      } finally {
        navigate("/confirmation");
      }
    } else {
      console.log("Formulário inválido. Corrija os erros antes de enviar.");
    }
  };

  const loadData = async () => {
    try {
      const { data } = await getPaymentData();

      const sortedData = data.sort(
        (a: Props.IPayment, b: Props.IPayment) => b.order - a.order
      );

      const formattedData = sortedData.map((payment: Props.IPayment) => ({
        id: payment.id,
        title: payment.title,
        fullPrice: Utils.formatPrice(payment.fullPrice),
        bestPrice: Utils.formatPrice(
          payment.fullPrice - payment.discountAmmount
        ),
        discount: `-${payment.discountPercentage * 100}%`,
        installments: payment.installments,
        installmentPrice: Utils.formatPrice(
          (payment.fullPrice - payment.discountAmmount) / payment.installments
        ),
        installmentType: payment.description,
      }));

      paymentDispatch({
        id: formattedData[0].id,
        installments: formattedData[0].installments,
        title: formattedData[0].title,
        installmentType: formattedData[0].installmentType,
        bestPrice: formattedData[0].bestPrice,
        installmentPrice: formattedData[0].installmentPrice,
      });

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

  return {
    isLoading,
    paymentData,
    paymentState,
    paymentDispatch,
    options,
    handleSubscription,
  };
};
