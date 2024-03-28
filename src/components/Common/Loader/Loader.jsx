import { Space, Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen "> <p className="m-2">Loading... please wait.</p> <div className="">
       
    <Space size="middle">
      <Spin size="large" />
    </Space>
  </div></div>
   
  );
};

export default Loader;
