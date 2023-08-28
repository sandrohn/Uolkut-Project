import { Form } from "../../components/Form";
import { FormRecover } from "../../components/Form/FormRecover";

export const Recover = () => {
  return (
    <>
      <Form.Root headerText="Recupere a senha">
        <FormRecover />
      </Form.Root>
    </>
  );
};
