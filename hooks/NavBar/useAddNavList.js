"use client";
import { sendDataClient } from "@/functions/sendDataClient";
import { useEffect, useState } from "react";
import { baseUrl } from "../urls";
import notify from "../notify/useNotification";

const useAddNavList = () => {
  const [responseFromApi, setResponseFromApi] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const submitNewList = async (list) => {
    setIsLoading(true);
    const response = await sendDataClient(`${baseUrl}/nav`, list);
    setResponseFromApi(response);
    console.log("**************** response:", response);
  };

  useEffect(() => {
    if (responseFromApi) {
      setIsLoading(false);
      if (Number(responseFromApi.status) === 204) {
        console.log("================ status 204", responseFromApi.status);
        notify("Success", "success");
      }
      if (Number(responseFromApi.status) === 400) {
        console.log("================ status 400", responseFromApi.status);
        notify("Bad Request", "error");
      }
    }
  }, [responseFromApi]);
  return [submitNewList, isLoading];
};

export default useAddNavList;
