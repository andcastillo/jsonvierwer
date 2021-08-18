import React from "react";
import { Input, CustomInput } from "reactstrap";
import PropTypes from "prop-types";

const Filter = ({ column }) => {
  return (
    <div style={{ marginTop: 5 }}>
      {column.canFilter && column.render("Filter")}
    </div>
  );
};

const DefaultColumnFilter = ({
  column: {
    filterValue,
    setFilter,
    preFilteredRows: { length },
  },
}) => {
  return (
    <Input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`search (${length}) ...`}
    />
  );
};

const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  return (
    <CustomInput
      id="custom-select"
      type="select"
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </CustomInput>
  );
};

Filter.propTypes = {
  column: PropTypes.any,
  "column.canFilter": PropTypes.bool,
  "column.render": PropTypes.func,
};

DefaultColumnFilter.propTypes = {
  column: PropTypes.any,
  "column.filterValue": PropTypes.func,
  "column.setFilter": PropTypes.func,
  "column.preFilteredRows": PropTypes.any,
  "column.preFilteredRows.forEach": PropTypes.func,
};

SelectColumnFilter.propTypes = {
  column: PropTypes.any,
  "column.filterValue": PropTypes.func,
  "column.setFilter": PropTypes.func,
  "column.preFilteredRows": PropTypes.any,
  "column.preFilteredRows.forEach": PropTypes.func,
  "column.id": PropTypes.any,
};

export { Filter, DefaultColumnFilter, SelectColumnFilter };
