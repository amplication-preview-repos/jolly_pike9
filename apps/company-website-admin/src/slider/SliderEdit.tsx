import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SliderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="imageUrl" source="imageUrl" />
        <NumberInput step={1} label="order" source="order" />
      </SimpleForm>
    </Edit>
  );
};
