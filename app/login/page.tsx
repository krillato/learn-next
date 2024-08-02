"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { login } from "./action";
import { useFormState } from "react-dom";

function page() {
  const initState: any = {
    message: "",
  };
  const [state, fromAction] = useFormState(login, initState);
  return (
    <div>
      <form action={fromAction}>
        ID : <input type="text" name="id" id="" />
        <br />
        Password : <input type="text" name="password" id="" />
        <br />
        Message : {state.message} <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default page;
