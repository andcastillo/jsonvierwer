import { Fragment } from "react";
import PropTypes from "prop-types";

const TableBody = (props) => {
  const getTableBodyProps = props.functions.getTableBodyProps;
  const prepareRow = props.functions.prepareRow;
  const renderRowSubComponent = props.functions.renderRowSubComponent;

  const page = props.value.page;
  const visibleColumns = props.value.visibleColumns;

  return (
    <tbody {...getTableBodyProps()}>
      {page.map((row) => {
        prepareRow(row);
        return (
          <Fragment key={row.getRowProps().key}>
            <tr>
              {row.cells.map((cell, index) => {
                return (
                  <td key={"rowb_" + index} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
            {row.isExpanded && (
              <tr>
                <td colSpan={visibleColumns.length}>
                  {renderRowSubComponent(row)}
                </td>
              </tr>
            )}
          </Fragment>
        );
      })}
    </tbody>
  );
};

TableBody.propTypes = {
  functions: PropTypes.any,
  "functions.getTableBodyProps": PropTypes.func,
  "functions.prepareRow": PropTypes.func,
  value: PropTypes.any,
  "value.page": PropTypes.number,
  "value.visibleColumns": PropTypes.any,
};

export default TableBody;
