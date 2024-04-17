import PropTypes from "prop-types";

const IncomesAverage = ({netIncomes}) => {

    const incomesMapped = netIncomes.map((netIncome) => {
        netIncome.income
    });

    const sum = incomesMapped.reduce((acc, current) => acc + current, 0);
    const average = sum / incomesMapped.length;

    

    return(
        <p>Promedio de ingresos de las diferentes compañías: {average}</p>
    );
};

IncomesAverage.propTypes = {
    netIncomes: PropTypes.array
};

export default IncomesAverage;