import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatTitle } from "../chat/ChatTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="chat.id" reference="Chat" label="chat">
          <SelectInput optionText={ChatTitle} />
        </ReferenceInput>
        <TextInput label="sender" source="sender" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
