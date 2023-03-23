import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const id = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/design/");
    }, 0);
  }, []);

  return <div>Welcome to my portfolio!</div>;
};

export default id;
