import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';
import List from './components/List';

const longestSerieComputed = (series) => {
  console.log('Computing the word...')
  let longest = '';

  series.forEach(serie => {
    if (serie.length > longest.length) {
      longest = serie;
    }
  });

  return longest;
}

function App() {
  const [tvSeries, setTvSeries] = useState(["Breaking bad", "Dr. House", "The walking dead"]);
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(5);
  const [longestSerie, setLongestSerie] = useState("");

  const multiplyNumbers = useCallback(() => {
    return [counter, counter ** 2, counter ** 3];
  },[counter])

  const longestSerieMemo = useMemo(() => longestSerieComputed(tvSeries), [
    tvSeries
  ])

  useEffect(() => {
    setLongestSerie(longestSerieMemo);
  }, [tvSeries, counter, longestSerieMemo])

  const handleOnChange = (e) => {
    setInput(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setTvSeries([...tvSeries, input]);
    setInput("");
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
            <input type="text" name="serie" value={input} onChange={handleOnChange} />
          </label>
          <input type="submit" value="Add tv serie" className="button" />
        </form>
      </div>
      <div className="counter">
        <h3>{counter}</h3>
        <button className="button" onClick={() => setCounter(counter + 1)}>Increment counter</button>
        <List multiplyNumbers={multiplyNumbers}></List>
      </div>
    </div>
  );
}

export default App;

