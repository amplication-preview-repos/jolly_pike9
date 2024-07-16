import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DemoRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Edit>
  );
};
