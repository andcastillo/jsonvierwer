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
      const data = await loadData();
      setData(data.entries);
      setColumns(data.columns);
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
