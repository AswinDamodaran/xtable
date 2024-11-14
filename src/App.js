import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {

  const [filteredData,setFilteredData]=useState([])

  const handleViews=()=>{
    const sortedByViews=[...filteredData].sort((a,b)=> a.views-b.views )
    setFilteredData(sortedByViews)
  }

  const handleDate=()=>{
    const sortedByDate=[...filteredData].sort((a,b)=> new Date(a.date)- new Date(b.date))
    setFilteredData(sortedByDate)
  }

  useEffect(()=>{
    setFilteredData(data)
  },[])


  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={handleDate} >Sort by Date</button>
        <button onClick={handleViews} >Sort by Views</button>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
