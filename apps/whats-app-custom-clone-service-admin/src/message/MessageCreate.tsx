import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatTitle } from "../chat/ChatTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="chat.id" reference="Chat" label="chat">
          <SelectInput optionText={ChatTitle} />
        </ReferenceInput>
        <TextInput label="sender" source="sender" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
