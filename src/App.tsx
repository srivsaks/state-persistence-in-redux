import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem } from "./actions";

export default function App() {
  const state = useSelector((state) => state.userReducer);
  const items = state.items;
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(addItem(val));
        }}
      >
        Add a item
      </button>
      <input
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      {items.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}
