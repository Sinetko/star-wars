import * as React from "react";
import { Formik } from "formik";
import { isValidEmail, isValidPassword } from "../../../helpers/validators";
import Styled from "./styles";

const SignInForm = () => (
  <>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Styled.FormContainer>
          <Styled.FormInput
            type="email"
            name="email"
            placeholder="Email"
            validate={isValidEmail}
            errors={errors.email}
            touched={touched.email}
          />
          {errors.email && touched.email && (
            <Styled.Error>{errors.email}</Styled.Error>
          )}

          <Styled.FormInput
            type="password"
            name="password"
            placeholder="Password"
            errors={errors.password}
            touched={touched.password}
            validate={isValidPassword}
          />
          {errors.password && touched.password && (
            <Styled.Error>{errors.password}</Styled.Error>
          )}

          <Styled.Button type="submit">Login</Styled.Button>
        </Styled.FormContainer>
      )}
    </Formik>
  </>
);

export default SignInForm;
