"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";

import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Home/Nav";

const inter = Inter({ subsets: ["latin"] });

import { metadata } from "./metadata"; // นำเข้าจากไฟล์แยก

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }
  return (
    <Provider store={storeRef.current}>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {children}
        </body>
      </html>
    </Provider>
  );
}
