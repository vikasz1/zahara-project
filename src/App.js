import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home";
import data from "./data.js";
import Contact from "./pages/Contact.jsx";
import { useState } from "react";
import List from "./List.jsx";
export default function App() {
  const [people, setPeople] = useState(data);
  const count = 0;
  return (
    <main>
      <section className="container">
        <h3>There are {people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
        <button
          onClick={() => {
            setPeople(people.splice(count, people.length - 1));
          }}
        >
          clear last
        </button>
      </section>
    </main>
  );
}
