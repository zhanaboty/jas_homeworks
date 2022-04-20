import { useState } from "react";
import { tableData } from "../data";
import "../Styles/Hello.css";

function FirstTable() {
  const [count, setCount] = useState(false);
  const [instalment, setInstalment] = useState(false);
  const [sortBy, setSortBy] = useState("id");
  const [sortDirection, setSortDirection] = useState('asc')
  const countOfColor = 6;
  const renderData = tableData
  .filter((row) => {
    if (instalment) {
      return row.instalment;
    } else {
      return true;
    }
  })
  .filter((row) => {
    if (count) {
      return row.count;
    } else {
      return true;
    }
  })
  .sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy) {
      if (sortDirection === 'asc') {
        return a[sortBy] - b[sortBy];
      } else {
        return b[sortBy] - a[sortBy];
      }
    }      
    return 1;
  })


  const sortCol = (col) => {
    setSortDirection(sortDirection === 'asc' ? 'des' : 'asc')
    setSortBy(col)
  }

  return (
    <div className="App">
          <label htmlFor="instalment">
            <input
              type="checkbox"
              id="instalment"
              checked={instalment}
              onChange={(e) => {
                setInstalment(e.target.checked);
              }}
            />
            В рассрочку
          </label>
          <label htmlFor="count">
            <input
              type="checkbox"
              id="count"
              checked={count}
              onChange={(e) => {
                setCount(e.target.checked);
              }}
            />
            Есть в наличии
          </label>
          
          <table border="1">
            <thead>
              <tr>
                <th onClick={() => sortCol("id")}>#</th>
                <th onClick={() => sortCol("name")}>Название</th>
                <th onClick={() => sortCol("price")}>Цена</th>
                <th onClick={() => sortCol("count")}>Кол-во</th>
                <th onClick={() => sortCol("instalment")}>Кол-во</th>
              </tr>
            </thead>
            <tbody>
          {renderData.map((row) => (
            <tr style={{backgroundColor: countOfColor > row.count ? '#FFDDBD': true }} key={row.id}>
              <td>{row.id}</td>
              <td className="dots">{row.name}</td> 
              <td>{row.price}</td>
              <td>{row.count}</td>
              <td>{row.instalment && "✅"}</td>
            </tr>
          ))}
        </tbody>
          </table>
      </div>
  );
}
export default FirstTable;


