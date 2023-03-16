import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';


export const TransactionHistory = ({transactions}) => {
    return (
            <table className={css.transactionHistory}>
                <thead className={css.transactionHistoryThead}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(({ id, type, amount, currency }) => {
                        return (
                            <tr key={id} className={css.transactionRow}>
                                <td className={css.transactionCell}>{type}</td>
                                <td className={css.transactionCell}>{amount}</td>
                                <td className={css.transactionCell}>{currency}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    )
}



TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currence: PropTypes.string.isRequired,
        })
    )
}