import { Container } from "reactstrap";
import React, { useEffect, useState } from "react";
import TableC from "./TableC";
import loadData from "./loadData";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 *  Main app
 * @returns Container
 */
function App() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      try {
        const data = await loadData();
        setData(data.entries);
        setColumns(data.columns);
      } catch (e) {
        console.error("Problem in data ingestion " + e);
      }
    };
    doFetch();
  }, []);

  return (
    <Container style={{ marginTop: 20 }}>
      <TableC columns={columns} data={data} />
    </Container>
  );
}

export default App;
