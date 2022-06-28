import { useState } from "react";
import menu from "./data";
import Categories from "./Categories";
import Menu from "./Menu";
import "./App.css";

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState([]);

  return (
    <main className="App">
      <section className="menu-section">
        <div className="title">
          <h2>our menu</h2>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
