import PropTypes from "prop-types";
import TableRows from "../TableRows/TableRows";
import IncomesAverage from "../IncomesAverage/IncomesAverage"

const Table = ({ netIncomes }) => {
  return (
  <>
    <div className="d-flex flex-column">
        <table className="table m-5 table-bordered border">
            <tr className="table-active text-danger border-right">
                <td>Nombre</td>
                <td>Ingreso Neto</td>
            </tr>
            <TableRows rows={netIncomes}/>
        </table>
        <div className="ms-5">
        <IncomesAverage netIncomes={netIncomes}/>
        </div>
    </div>
  </>
  );
};

Table.propTypes = {
  netIncomes: PropTypes.array,
};

export default Table;