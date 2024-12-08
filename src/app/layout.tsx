"use client";

import Home from "./home/page";
import "../app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <body>
        <Home/>
      </body>
    </html>
  );
}