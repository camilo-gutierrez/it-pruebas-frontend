import React from "react";
import { MenuStyle, LiStyle } from "../styles";
import { useDispatch } from "react-redux";
import { getFlight } from "../../redux/slices/flights";

export default function Menu() {
  const dispatch = useDispatch();

  return (
    <MenuStyle>
      {json.menuItems.map((item) => {
        return (
          <>
            <LiStyle key={item.id} onClick={() => dispatch(getFlight(item))}>
              {item.name}
            </LiStyle>
          </>
        );
      })}
    </MenuStyle>
  );
}

let json = {
  menuItems: [
    {
      id: "1",
      name: "Vivair",
    },
    {
      id: "2",
      name: "Avianca",
    },
    {
      id: "3",
      name: "vuela",
    },
    {
      id: "4",
      name: "vueloBarato",
    },
    {
      id: "5",
      name: "fly",
    },
    {
      id: "6",
      name: "fly-red",
    },
    {
      id: "7",
      name: "black-fly",
    },
    {
      id: "8",
      name: "vuelosVerdes",
    },
    {
      id: "9",
      name: "red-air",
    },
  ],
};
