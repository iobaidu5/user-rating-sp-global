import React from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="main-wrapper">
        <Header />
        {children}
      </div>
      <Footer text="Created by Obaid Ullah for S&P Global" />
    </div>
  );
};

export default Layout;
