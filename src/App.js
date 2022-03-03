import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';

const longestSerieComputed = (series) => {
  // Implementation goes here
}

function App() {
  const [tvSeries, setTvSeries] = useState(["Breaking bad", "Dr. House", "The walking dead"]);
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(5);
  const [longestSerie, setLongestSerie] = useState("");

  const multiplyNumbers = () => {
    // Implementation goes here
  }

  useEffect(() => {
    setLongestSerie(longestSerieComputed(tvSeries));
  }, [tvSeries, counter])

  const handleOnChange = (e) => {
    setInput(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h2>The longest serie name is: {longestSerie}</h2>
      {
        tvSeries.map((serie, index) => (
          <div key={index} className="seriesList">
            <h3 key={index}>{serie}</h3>
          </div>
        ))}
      <div className="form">
        <form onSubmit={handleOnSubmit}>
          <label>
            Serie:
            <input id="inputSerie" type="text" name="serie" value={input} onChange={handleOnChange} />
          </label>
          <input type="submit" value="Add tv serie" className="button" />
        </form>
      </div>
      <div className="counter">
        <h3>{counter}</h3>
        <button className="button" >Increment counter</button>
        <List multiplyNumbers={multiplyNumbers}></List>
      </div>
    </div>
  );
}

export default App;
