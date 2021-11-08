import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#ffa100").all(5));

  const handlesubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(5);
      console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3> &nbsp;&nbsp;
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            name="colorname"
            placeholder="#ffa100"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          ></input>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
      <br />
    </>
  );
}

export default App;
