"use client";

import { useState, useEffect } from "react";
import Home from "./home/page";
import "../app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState(null);
  /*
  useEffect(() => {
    fetch("http://localhost/api.php")
      .then((response) => response.json())
      .then((data) => setData(data)).catch(error => console.error('Error fetching data:', error));
  }, []);
           {data  ? <div>{JSON.stringify((data as any).message)}</div> : <div>Loading...</div>}
  */

  return (
    <html lang="en">
      <body>
        <Home/>
      </body>
    </html>
  );
}