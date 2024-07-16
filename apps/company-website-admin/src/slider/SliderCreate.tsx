import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SliderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="imageUrl" source="imageUrl" />
        <NumberInput step={1} label="order" source="order" />
      </SimpleForm>
    </Create>
  );
};
