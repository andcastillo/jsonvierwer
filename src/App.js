import { Container } from "reactstrap"
import React, {useEffect, useState, useMemo } from 'react';
import TableC from "./TableC"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch('https://api.publicapis.org/entries');
      const responseJson = await response.json();

      let cols = [];
      let entry = responseJson.entries[0];
      for (let key of Object.keys(entry)) {
        cols.push({'Header': key, 'accessor': key})
      }
      responseJson['columns'] = cols;
      setData(responseJson.entries);
      setColumns(responseJson.columns)
    };
    doFetch();
  }, []);

  return (
    <Container style={{ marginTop: 100 }}>
      <TableC columns={columns} data={data} />
    </Container>
  );

}

export default App;