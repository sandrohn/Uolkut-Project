import { Form } from "../../components/Form";
import { FormNewPassword } from "../../components/Form/FormNewPassword";

export const NewPassword = () => {
  return (
    <Form.Root headerText="Nova senha">
      <FormNewPassword />
    </Form.Root>
  );
};
