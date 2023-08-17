import { useState, useRef } from "react";
import Navbar from "./Navbar";
export default function Layout() {
  return (
    <>
      <header className="w-full h-16 bg-primary-100 flex justify-center items-center">
        <Navbar />
      </header>
      <main></main>
      <footer>
        <div>
          <article></article>
        </div>
        <form action=""></form>
        <div></div>
      </footer>
    </>
  );
}
