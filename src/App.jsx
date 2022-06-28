import { useState } from "react";
import menu from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = [
  "all",
  ...new Set(menu.map((menuItem) => menuItem.category)),
];

console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filteredCategories = (category) => {
    return category === "all"
      ? setMenuItems(menu)
      : setMenuItems(menu.filter((item) => item.category === category));
  };

  return (
    <main className="App">
      <section className="menu-section">
        <div className="title">
          <h2>our menu</h2>
        </div>
        <Categories
          categories={categories}
          filteredCategories={filteredCategories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
