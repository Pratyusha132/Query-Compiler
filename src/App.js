import "./App.css";
import React, { useState, Suspense} from "react";
import data from "./suppliers-data.json";
import Table from "./Table.js";
const Vis = React.lazy(() => import("./Vis.js"));


function App() {
  const [query, setquery] = useState("");
  const [output, setOutput] = useState("");
  const [head, setHead] = useState("");
  const [chart, setChart] = useState(false);

  const Head = <table>
    <thead>
      <tr>
        <th>SupplierID</th>
        <th>CompanyName</th>
        <th>ContactName</th>
        <th>ContactTitle</th>
        <th>Address</th>
        <th>City</th>
        <th>Region</th>
        <th>PostalCode</th>
        <th>Country</th>
      </tr>
    </thead>
  </table>
  

  const inOut = () => {
    if(query === "SELECT * FROM Supplier;"){
      setHead(Head)
      setOutput(<Table data = {data}/>);
    }
    else if(query ==="SELECT * FROM Supplier WHERE SupplierID = '2';"){
      setHead(Head)
      setOutput(<Table data = {data}/>);
    }
    else if(query ==="SELECT * FROM Supplier WHERE Country = 'Germany';"){
      setHead(Head)
      setOutput(<Table data = {data}/>);
    }
    else if(query ==="SELECT * FROM Supplier WHERE Region IS  NULL;"){
      setHead(Head)
      setOutput(<Table data = {data}/>);
    }
  }

  const handleSubmit = async () => {
    inOut();
    setChart(true);
  };

  return (
    <div className="App">
      <h1 style ={{textAlign : 'center'}}>Online Query Compiler</h1>
      <div>
        <label>Language: </label>
        <select>
          <option>SQL</option>
        </select>
      </div>
      <br />
      <br />
      <textarea
        rows="15"
        cols="90"
        value={query}
        onChange={(e) => {
          setquery(e.target.value);
        }}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>RUN</button>
      <div>{head}</div>
      <div>{output}</div>
      <div>
        {chart ? 
        <Suspense fallback={<div>Loading...</div>}>
          <Vis />
        </Suspense> : 
        <></>}
      </div>
    </div>
  );
}

export default App;