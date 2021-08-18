import { Row, Col, Button, Input, CustomInput } from "reactstrap";
import PropTypes from "prop-types";

/**
 * Page Controls for the table
 * @returns Container
 */
const PageControlsRow = (props) => {
  // Shortcut for prop values
  const canPreviousPage = props.value.canPreviousPage;
  const pageOptions = props.value.pageOptions;
  const pageIndex = props.value.pageIndex;
  const pageSize = props.value.pageSize;
  const canNextPage = props.value.canNextPage;
  const pageCount = props.value.pageCount;

  // Shortcut for prop functions
  const gotoPage = props.functions.gotoPage;
  const onChangeInSelect = props.functions.onChangeInSelect;
  const previousPage = props.functions.previousPage;
  const onChangeInInput = props.functions.onChangeInInput;
  const nextPage = props.functions.nextPage;

  // |<<|<| Page 1 of 91 |1| Show 10 ⌵| > | >> |
  return (
    <Row
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Col md={3}>
        <Button
          color="primary"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </Button>
        <Button
          color="primary"
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          {"<"}
        </Button>
      </Col>
      <Col md={2} style={{ marginTop: 7 }}>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </Col>
      <Col md={2}>
        <Input
          type="number"
          min={1}
          style={{ width: 70 }}
          max={pageOptions.length}
          defaultValue={pageIndex + 1}
          onChange={onChangeInInput}
        />
      </Col>
      <Col md={2}>
        <CustomInput type="select" value={pageSize} onChange={onChangeInSelect}>
          &gt;
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </CustomInput>
      </Col>
      <Col md={3}>
        <Button color="primary" onClick={nextPage} disabled={!canNextPage}>
          {">"}
        </Button>
        <Button
          color="primary"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </Button>
      </Col>
    </Row>
  );
};

PageControlsRow.propTypes = {
  props: PropTypes.any,
  value: PropTypes.any,
  functions: PropTypes.any,
  "props.value": PropTypes.any,
  "props.functions": PropTypes.any,
  "props.value.canPreviousPage": PropTypes.bool,
  "props.value.pageOptions": PropTypes.any,
  "props.value.pageIndex": PropTypes.number,
  "props.value.pageSize": PropTypes.number,
  "props.value.canNextPage": PropTypes.bool,
  "props.value.pageCount": PropTypes.number,
  "props.functions.gotoPage": PropTypes.function,
  "props.functions.onChangeInSelect": PropTypes.function,
  "props.functions.previousPage": PropTypes.function,
  "props.functions.onChangeInInput": PropTypes.function,
  "props.functions.nextPage": PropTypes.function,
};

export default PageControlsRow;