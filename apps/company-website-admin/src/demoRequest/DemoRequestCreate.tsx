import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DemoRequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Create>
  );
};
