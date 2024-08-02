"use server";

import { importJWK, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState: any, fromData: any) {
  try {
    const id = fromData.get("id");
    const password = fromData.get("password");
    if (id !== "time" && password !== "123456") {
      return { message: "Login Failed!!" };
    } else {
      //pass
      const secertJWK = {
        kty: "oct",
        k: process.env.JOSE_SECERT,
      };

      const secertKey = await importJWK(secertJWK, "HS256");
      const token = await new SignJWT({ id })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(secertKey);

      cookies().set("token", token);
      redirect("manage/blog");
    }
  } catch (error) {
    console.log("err:", error);
  }
}
