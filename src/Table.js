import React from "react";

function Table ({columns,data}){
    return (
            <table boder="5" bordercolor="black">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map(({ id, title, author, publisher, userId}) => (
                  <tr key={id} boder="3" bodercolor="black">
                    <td >{id}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>{publisher}</td>
                    <td>{userId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        );
    
}

export default Table;