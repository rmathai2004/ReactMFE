import { ChangeEvent, FormEvent, useReducer, useState, useEffect } from "react";
import { PaymentType, addNewTransaction } from "../../data/DataFunctions";
import { AxiosResponse } from 'axios';

const NewTransactions = (): JSX.Element => {

    const reducerFunction = (state: PaymentType, data: { field: string, value: any }) => {
        return { ...state, [data.field]: data.value }
    }

    const initialNewTransactionState: PaymentType = {
        id: null,
        orderId: "",
        date: new Date().toISOString().slice(0, 10),
        amount: 0,
        country: "USA",
        currency: "USD",
        taxCode: 0,
        taxRate: 0.21,
        type: "SALE",
    };

    const [newTransaction, dispatch] = useReducer(reducerFunction, initialNewTransactionState);

    /*
    const [country, setCountry] = useState<string>("");
    console.log(country);
    */

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //console.log("saving " + country);

/*
        useEffect(() => {
            const newTransPromise: Promise<AxiosResponse<PaymentType>> = addNewTransaction(newTransaction);

            newTransPromise
                .then(result => {
                    if (result.status === 200) {
                        console.log("new Transaction added" + newTransPromise.)
                    }
                    else {
                        console.log("something went wrong " + result.status)
                    }
                }).catch(error => {
                    console.log("something bad happened " + error);
                })
        }, [])
        */
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        //setCountry(e.target.value);
        dispatch({ field: e.target.id, value: e.target.value });
    };

    return (
        <form className="addTransactionsForm">
            <h2>New transaction</h2>
            <label htmlFor="orderId">Order Id</label>
            <input type="text" id="orderId" onChange={handleChange} value={newTransaction.orderId} />
            <br />
            <label htmlFor="date">Date</label>
            <input type="date" id="date" onChange={handleChange} value={newTransaction.date} />
            <br />
            <label htmlFor="country">Country</label>
            <input type="text" id="country" onChange={handleChange} value={newTransaction.country} />
            <br />
            <label htmlFor="currency">Currency</label>
            <input type="text" id="currency" onChange={handleChange} value={newTransaction.currency} />
            <br />
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" onChange={handleChange} value={newTransaction.amount} />
            <br />
            <label htmlFor="taxCode">Tax Code</label>
            <input type="text" id="taxCode" onChange={handleChange} value={newTransaction.taxCode} />
            <br />
            <label htmlFor="taxRate">Tax Rate</label>
            <input type="text" id="taxRate" onChange={handleChange} value={newTransaction.taxRate} />
            <br />
            <label htmlFor="type">Type</label>
            <input type="text" id="type" onChange={handleChange} value={newTransaction.type} />
            <br />
            <button type="submit">Save</button>
        </form>
    )
};

export default NewTransactions;
