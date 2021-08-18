const MODE = process.env.NODE_ENV || "";
const url = "https://api.publicapis.org/entries";

// console.log(process);

const loadData = async function () {
  let dataJson = {};
  console.log(`Working in ${MODE} mode `);
  try {
    if (MODE === "test") {
      dataJson = await fetch("data.json");
    } else {
      dataJson = await fetch(url);
    }
  } catch (e) {
    console.error(`Could not fetch the data from ${url}. \n Exception: ${e}`);
    return null;
  }
  try {
    dataJson = await dataJson.json();
  } catch (e) {
    console.error(
      `Could not convert data to JSON \n ${dataJson}. \n Exception: ${e}`
    );
    return null;
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
