import React from "react";
import { Field, Formik, FormikValues } from "formik";

import { isValidUserName } from "../../../helpers/validators/validators";
import { useModal } from "../../../context/ModalContext";
import { Styled } from "./styles";

export const FeedbackForm: React.FC = () => {
  const { setIsOpenFeedback } = useModal();
  return (
    <Formik
      initialValues={{
        name: "",
        text: "",
      }}
      onSubmit={(values) => {
        //eslint-disable-next-line
        alert(`Thank you for feedback`);
        setIsOpenFeedback(false);
      }}
    >
      {({ errors, touched }) => (
        <Styled.FormContainer>
          <Styled.Input
            name="name"
            placeholder="name"
            validate={isValidUserName}
            error={!!errors.name}
            touched={!!touched.name}
          />
          <Field
            name="text"
            component={CustomTextArea}
            placeholder="feedback..."
          />
          <Styled.SendButton type="submit">Send</Styled.SendButton>
        </Styled.FormContainer>
      )}
    </Formik>
  );
};

const CustomTextArea: React.FC<FormikValues> = ({ field, ...props }) => (
  <Styled.TextArea type="text" {...field} {...props} />
);
