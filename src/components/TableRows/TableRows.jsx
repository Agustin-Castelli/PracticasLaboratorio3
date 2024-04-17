import PropTypes from "prop-types";

const TableRows = ({rows}) => {
    const TableRowsMapped = rows.map((row) => (
        <>
            <tr>
                <td>{row.brand}</td>
                <td>{row.income}</td>
            </tr>
        </>
    ));
    return TableRowsMapped;
}

TableRows.propTypes = {
    rows: PropTypes.array
}

export default TableRows;