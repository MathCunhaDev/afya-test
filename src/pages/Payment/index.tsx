import { Flex } from "antd";
import * as Molecules from "~/components/Molecules";
import * as Atoms from "~/components/Atoms";

export const Payment = () => {
  return (
    <>
      <Molecules.Header />
      <Atoms.Container>
        <Flex justify="space-between">
          <Molecules.PaymentForm key="paymentForm" />
          <Molecules.Card
            key="1"
            title=""
            fullPrice=""
            bestPrice=""
            discount=""
            installments=""
            installmentPrice=""
          />
        </Flex>
      </Atoms.Container>
    </>
  );
};
