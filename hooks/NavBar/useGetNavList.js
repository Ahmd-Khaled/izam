"use client";
import { useEffect, useState } from "react";
import { baseUrl } from "../urls";
import { getDataClient } from "@/functions/getDataClient";

const useGetNavList = () => {
  const [navList, setNavList] = useState([]);

  useEffect(() => {
    const run = async () => {
      const response = await getDataClient(`${baseUrl}/nav`);
      // console.log("-----------------response:", response);
      if (response) {
        setNavList(response);
      }
    };

    run();
  }, []);

  return [navList];
};

export default useGetNavList;
