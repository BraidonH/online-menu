import React from "react";

export default function Categories({ categories, filteredCategories }) {
  return (
    <div>
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index} onClick={() => filteredCategories(category)}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
