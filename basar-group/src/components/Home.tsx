import React from "react";
import { Button, ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#52c41a",
  },
};


const HomePage = () => (
  <ConfigProvider theme={theme}>
   
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  </ConfigProvider>
);

export default HomePage;
