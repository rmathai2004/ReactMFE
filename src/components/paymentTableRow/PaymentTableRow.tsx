import getAllPayments from '../../data/DataFunctions'
import PaymentType from '../../data/DataFunctions'

const PaymentTableRow1 = (): JSX.Element => {

    return (
        <tbody>
            <tr>
                <td>1</td><td>OrderId1</td><td>2020-05-22</td><td>USA</td><td>USD</td><td>17.55</td>
            </tr>
            <tr>
                <td>2</td><td>OrderId2</td><td>2020-05-23</td><td>UK</td><td>GBP</td><td>36.50</td>
            </tr>
            <tr>
                <td>3</td><td>OrderId2</td><td>2020-05-24</td><td>SWE</td><td>EUR</td><td>42.00</td>
            </tr>

            <getAllPayments/>

        </tbody>
    );
}
const PaymentTableRow = (props: PaymentType) : JSX.Element => {

    return <tr>
        <td>{props.id}</td>
        <td>{props.orderId}</td>
        <td>{props.date}</td>
        <td>{props.country}</td>
        <td>{props.currency}</td>
        <td>{props.amount}</td>
</tr>;
};


export default PaymentTableRow;
