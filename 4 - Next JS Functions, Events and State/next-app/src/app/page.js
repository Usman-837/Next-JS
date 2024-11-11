"use client"

import { useState } from "react";

export default function Home() {

  // const [name, setName] = useState("Apple")
  let name = "Apple";
  const apple = () => {
    // alert("Fruit")
    // setName("Bnana")
    name = "Bnana"

  }
  return (
    <main className="text-center space-y-40">
      {/* <h1 className="text-center pt-24">{name}</h1> */}
      <h1 className="text-center pt-24">{name}</h1>
      {/* <button type="button" className="bg-slate-400" onClick={() => alert("Hello Events in Next JS")}>Click Me</button> */}
      <button type="button" className="bg-slate-400" onClick={apple}>Click Me</button>
    </main>
  );
}
