import React, { useState } from "react";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [categoryList, setCategoryList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} categoryList={categoryList} />
      <MenuCard menuData={menuData} />
    </>
  );
};
export default Restaurant;
