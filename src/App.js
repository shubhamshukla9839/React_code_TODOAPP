import { useState } from "react";
import "./styles.css";
import TodoList from "./TodoList";
import "./App.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddBoxIcon from "@material-ui/icons/AddBox";

const App = () => {
  const [inputlist, setInput] = useState("");
  const [items, setItem] = useState([]);
  const onInput = (event) => {
    const val = event.target.value;
    //const arr = [];
    setInput(val);
  };
  const buttonClick = () => {
    setItem((olditem) => {
      return [...olditem, inputlist];
    });
    setInput("");
  };
  const tasklist = {
    align: "center",
    marginLeft: "110px",
    fontStyle: "initial",
    fontSize: "20px",
    marginTop: "30px",
    paddingTop: "22px"
  };
  const input = {
    marginLeft: "60px",
    marginTop: "8px",
    //marginBottom:"40px"
    height: "72px",
    fontSize: "19px",
    borderRadius: "10PX",
    fontStyle: "-moz-initial"
  };
  const mainwindow = {
    fontSize: "20px",
    borderRadius: "50px",
    height: "50px",
    width: "290px",
    backgroundColor: "red",
    //padding:"20px"
    paddingLeft: "0px",
    //  paddingTop: "10px",
    alighItems: "center",
    marginLeft: "110px"
    // marginTop:"20px"
  };
  const butt = {
    marginLeft: "80px",
    marginTop: "50px",
    height: "52px",
    width: "111px",
    marginLeft: "110px",
    marginBottom: "40px",
    borderRadius: "52px",
    backgroundColor: "green"
  };
  const shubham = {
    fontFamily: "fantasy",
    borderRadius: "2px",
    backgroundColor: "skyblue",
    paddingTop: "50px",
    paddingLeft: "30px"
  };
  const deleteItem = (id) => {
    console.log("deleted");
    setItem((olditem) => {
      return olditem.filter((arrElm, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div
        style={{
          height: "8050px",
          width: "500px",
          backgroundColor: "skyblue",
          borderRadius: "30px"
        }}
      >
        <div style={mainwindow}>
          <h1 align="center"> TODO list </h1>
        </div>
        <h2 style={shubham}> Developed by : shubham shukla </h2>

        <div
          style={{
            marginLeft: "80px",
            marginTop: "10px",
            borderRadius: "10px",
            backgroundColor: "pink",
            width: "350px"
          }}
        >
          <input
            style={input}
            onChange={onInput}
            type="text"
            value={inputlist}
          />
          <div style={{ marginTop: "2px" }}>
            <button className="App-logo" style={butt} onClick={buttonClick}>
              <span
                style={{
                  fontSize: "28px",
                  backgroundColor: "pink",
                  borderRadius: "10px"
                }}
              >
                <AddBoxIcon />
              </span>
            </button>
          </div>
          <div
            style={{
              borderRadius: "22px",
              backgroundColor: "yellow",
              marginTop: "50px"
            }}
          >
            <h3 className="App-title" style={tasklist}>
              {" "}
              MY TASK LIST <AddShoppingCartIcon />{" "}
            </h3>
            <ol>
              <span style={{ fontFamily: "cursive" }}>
                {items.map((itemval, index) => {
                  return (
                    <TodoList
                      key={index}
                      id={index}
                      text={itemval}
                      onSelect={deleteItem}
                    />
                  );
                })}
              </span>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
