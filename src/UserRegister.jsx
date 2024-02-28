import React, { useEffect, useState } from "react";
import { useAPI } from "./Common/apiService/useApi";

export const UserRegister = () => {
  const { doCall } = useAPI();
  const [data, setData] = useState([]);

  const getUserRecords = async () => {
    doCall({
      method: "get",
      url: "user/users",
      //successMessage: 'hello rahul'
    }).then(
      (res) => {
        setData(res.data);
        console.log(res);
      },
      (_err) => {
        console.log(_err);
      }
    );
  };

  useEffect(() => {
    getUserRecords();
  }, []);

  return (
    <>
      <h1>hello world</h1>
    </>
  );
};
