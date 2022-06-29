import { useState } from "react";
import menu from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = [
  "all",
  ...new Set(menu.map((menuItem) => menuItem.category)),
];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const [search, setSearch] = useState("");

  const filteredCategories = (category) => {
    return category === "all"
      ? setMenuItems(menu)
      : setMenuItems(menu.filter((item) => item.category === category));
  };

  const filteredSearch = menuItems.filter((item) => {
    return item.title.includes(search);
  });

  return (
    <main className="App">
      <input
        placeholder="search menu"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <section className="menu-section">
        <div className="title">
          <h2>our menu</h2>
        </div>
        <Categories
          categories={categories}
          filteredCategories={filteredCategories}
        />
        <Menu items={filteredSearch} />
      </section>
    </main>
  );
}

export default App;
