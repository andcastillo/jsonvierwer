const MODE = process.env.MODE || "";

const loadData = async function () {
  let dataJson = {};
  if (MODE === "local") {
    const response = await fetch("data.json");
    dataJson = await response.json();
  } else {
    const response = await fetch("data.json"); // "https://api.publicapis.org/entries");
    dataJson = await response.json();
  }

  const columns = [];
  const entry = dataJson.entries[0];
  for (const key of Object.keys(entry)) {
    columns.push({ Header: key, accessor: key });
  }
  dataJson.columns = columns;
  return dataJson;
};

export default loadData;
