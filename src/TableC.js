import React, { Fragment } from "react";
import PropTypes from "prop-types";

import {
  useTable,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from "react-table";

import { Table } from "reactstrap";
import { Filter, DefaultColumnFilter } from "./filters";
import PageControlsRow from "./PageControlsRow";
import TableBody from "./TableBody";

const TableC = ({ columns, data, renderRowSubComponent }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    visibleColumns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "🔽🔼";
  };

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };

  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };

  return (
    <Fragment>
      <Table bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, indexR) => (
            <tr key={"row_" + indexR} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, indexC) => (
                <th
                  key={"col_" + indexR + "_" + indexC}
                  {...column.getHeaderProps()}
                >
                  <div {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    {generateSortingIndicator(column)}
                  </div>
                  <Filter column={column} />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <TableBody
          value={{
            page,
            visibleColumns,
          }}
          functions={{
            getTableBodyProps,
            prepareRow,
            renderRowSubComponent,
          }}
        />
      </Table>

      <PageControlsRow
        value={{
          canPreviousPage,
          pageOptions,
          pageIndex,
          pageSize,
          nextPage,
          canNextPage,
          pageCount,
        }}
        functions={{
          gotoPage,
          onChangeInInput,
          onChangeInSelect,
          previousPage,
          nextPage,
        }}
      />
    </Fragment>
  );
};

TableC.propTypes = {
  columns: PropTypes.any,
  data: PropTypes.any,
  renderRowSubComponent: PropTypes.func,
};

export default TableC;
