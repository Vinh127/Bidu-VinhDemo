import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Head from "next/head";

export interface LayoutProps {
  children: ReactNode;

  props: ReactNode;
  isType: ReactNode;
  setIsType: ReactNode;
  shown: ReactNode;
  close: ReactNode;
  setIsShow: ReactNode;
  isShow: ReactNode;
  setIsModalVisible: ReactNode;
  isModalVisible: ReactNode;
}

const Layout = ({
  children,
  props,
  isType,
  setIsType,
  shown,
  close,
  setIsModalVisible,
  isModalVisible,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Bidu E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        setIsType={setIsType}
        isType={isType}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;