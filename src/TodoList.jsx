import React from "react";
import MyButton from "./MyButton";
import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const TodoList = (props) => {
  return (
    <>
      <div
        style={{
          height: "300px",
          backgroundRepeat: "no-repeat"
        }}
      >
        <li
          onClick={() => {
            props.onSelect(props.id);
          }}
          className="App-header"
        >
          {" "}
          {props.text}{" "}
          <p style={{ paddingLeft: "52px" }}>
            {" "}
            <MyButton />{" "}
          </p>
        </li>{" "}
      </div>
    </>
  );
};

export default TodoList;
