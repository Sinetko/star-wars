import React from "react";
import { Route, Routes } from "react-router-dom";

import { Content, Films, People, Planets } from "../Content";

import { Home, Login } from "../../pages";

import { Market } from "../Market/Market";
import { Modal } from "../Modal/Modal";

import { Portal } from "../Portal/Portal";
import { ProductPage } from "../ProductPage/ProductPage";
import { Providers } from "../../providers/Providers";
import { Register } from "../Register/Register";
import { RequireAuth } from "../RequireAuth/RequireAuth";
import { Chat } from "../Chat";
import { FeedbackForm } from "../Forms";
import { Footer } from "../Footer";

import { Header } from "../Header";
import { Navigation } from "../Navigation";
import { Styled } from "./styles";

export const App = () => {
  return (
    <Providers>
      <Styled.GlobalStyles />
      <Styled.App>
        <Header />
        <Navigation />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Register />} />
            <Route path="films" element={<Films />} />
            <Route
              path="people"
              element={
                <RequireAuth>
                  <People />
                </RequireAuth>
              }
            />
            <Route
              path="planets"
              element={
                <RequireAuth>
                  <Planets />
                </RequireAuth>
              }
            />
            <Route path="market" element={<Market />} />
            <Route path="market/:id" element={<ProductPage />} />
          </Routes>
        </Content>
        <Chat />
        <Portal>
          <Modal title={"left feedback..."}>
            <FeedbackForm />
          </Modal>
        </Portal>
        <Footer />
      </Styled.App>
    </Providers>
  );
};
