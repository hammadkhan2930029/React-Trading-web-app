import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import "./form.css"
import app from '../../../firebase';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../navbar/style.css';
import { object, string, number, date } from 'yup';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';


const validationSchema = object({
    stockName: string()
        .required('Stock is required'),
    trade_date: date()
        .required('Trade Date is required'),
    sett_date: date()
        .required('sett date is required'),
    buy_QTY: number()
        .required('buy Qty required'),
    buy_rate: number()
        .required('buy rate required'),
    sell_QTY: number()
        .required('sell Qty required'),
    sell_rate: number()
        .required('sell rate required'),
    buy_amount: number()
        .required('buy amount required'),
    sell_amount: number()
        .required('sell amount required'),
    broker_amount: number()
        .required('broker amount required'),
    fed_amount: number()
        .required('fed amount required'),
    net_amount: number()
        .required('net amount required'),

})
const a = {
    stockName: '',
    sett_date: '',
    trade_date: '',
    buy_QTY: '',
    buy_rate: '',
    sell_QTY: '',
    sell_rate: '',
    buy_amount: '',
    sell_amount: '',
    broker_amount: '',
    fed_amount: '',
    net_amount: ''

}

export const Form = () => {
    //-----------------------------------------------------
    const [startdate, setStartDate] = useState(new Date())
    const db = getFirestore(app)
    const addData = async (value) => {
        try {
            const docRef = await addDoc(collection(db, "formdata"), value)
            console.log("form data", docRef)
            alert("Data successfuly added")


        } catch (e) {
            console.log("Try catch error", e)
        }
    }

    return (

        <div >



            <Formik
                initialValues={{
                    stockName: '',
                    sett_date: '',
                    trade_date: '',
                    // --------------------
                    buy_QTY: '',
                    buy_rate: '',
                    buy_amount: '',
                    buy_broker_amount: '',
                    buy_fed_amount: '',
                    // --------------------
                    sell_QTY: '',
                    sell_rate: '',
                    sell_amount: '',
                    sell_broker_amount: '',
                    sell_fed_amount: '',
                    net_amount: ''

                }}
                onSubmit={(values, { resetForm }) => {
                    addData(values)
                    resetForm();
                }}

            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid, touched, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>

                        <div className='form-main'>

                            <div className='form'>
                                <div className='form-input'>
                                    <label className='input-field'>Stock Name</label>
                                    <input
                                        className='input'
                                        type="text"
                                        placeholder="Stock name..."
                                        name='stockName'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.stockName}
                                    />
                                </div>

                                <div className='form-input'>
                                    <label className='input-field'>Trade Date</label>
                                    <DatePicker
                                        selected={values.trade_date}
                                        onChange={(date) => handleChange({ target: { name: "trade_date", value: date } })} // Handle date change
                                        onBlur={handleBlur}
                                        dateFormat="dd/MM/yyyy"
                                        className="input"
                                        placeholderText='Select trade date'
                                    />
                                </div>

                                <div className='form-input'>
                                    <label className='input-field'>Sett Date</label>
                                    <DatePicker
                                        selected={values.sett_date}
                                        onChange={(date) => handleChange({ target: { name: "sett_date", value: date } })} // Handle date change
                                        onBlur={handleBlur}
                                        dateFormat="dd/MM/yyyy"
                                        className="input"
                                        placeholderText=' Select sett date'
                                    />
                                </div>

                                {/* -------------------------Buy Form Data----------------------------------------- */}
                                <div className='form-input'>
                                    <label className='input-field'>Buy QTY</label>
                                    <input
                                        className='input'
                                        type="number"

                                        placeholder="buy QTY..."
                                        name='buy_QTY'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.buy_QTY}
                                    />
                                </div>

                                <div className='form-input'>
                                    <label className='input-field'>Buy Rate</label>
                                    <input
                                        className='input'
                                        type="text"
                                        placeholder="buy rate..."
                                        name='buy_rate'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.buy_rate}
                                    />
                                </div>

                                <div className='form-input'>
                                    <label className='input-field'>Buy Amount</label>
                                    <input
                                        className='input'
                                        type="number"
                                        placeholder="buy amount..."
                                        name='buy_amount'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.buy_amount}
                                    />
                                </div>

                                <div className='form-input'>
                                    <label className='input-field'>Broker Amount (Buy)</label>
                                    <input
                                        className='input'
                                        type="number"
                                        placeholder="Broker Amount (Buy)..."
                                        name='buy_broker_amount'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.buy_broker_amount}
                                    />
                                </div>

                                <div className='form-input'>
                                    <label className='input-field'>FED amount (Buy)</label>
                                    <input
                                        className='input'
                                        type="number"
                                        placeholder="Fed amount (buy)..."
                                        name='buy_fed_amount'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.buy_fed_amount}
                                    />
                                </div>

                                {/* --------------------Sell form data---------------------------------------------- */}

                                <div className='form-input'>
                                    <label className='input-field'>Sell QTY</label>
                                    <input
                                        className='input'
                                        type="number"
                                        placeholder="sell QTY..."
                                        name='sell_QTY'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sell_QTY}
                                    />
                                </div>

                                <div className='form-input'>
                                    <label className='input-field'>Sell Rate</label>
                                    <input
                                        className='input'
                                        type="number"
                                        placeholder="sell_rate..."
                                        name='sell_rate'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sell_rate}
                                    />
                                </div>

                                <div className='form-input'>
                                    <label className='input-field'>Sell Amount</label>
                                    <input
                                        className='input'
                                        type="number"
                                        placeholder="sell amount..."
                                        name='sell_amount'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sell_amount}
                                    />
                                </div>

                                <div className='form-input'>
                                    <label className='input-field'>Broker Amount (Sell)</label>
                                    <input
                                        className='input'
                                        type="number"
                                        placeholder="broker amount (Sell)..."
                                        name='sell_broker_amount'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sell_broker_amount}
                                    />
                                </div>

                                <div className='form-input'>
                                    <label className='input-field'>FED Amount (Sell)</label>
                                    <input
                                        className='input'
                                        type="number"
                                        placeholder="Sell fed amount..."
                                        name='sell_fed_amount'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sell_fed_amount}
                                    />
                                </div>

                                <div className='form-input'>
                                    <label className='input-field'>Net Amount</label>
                                    <input
                                        className='input'
                                        type="number"
                                        placeholder="net amount..."
                                        name='net_amount'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.net_amount}
                                    />
                                </div>

                            </div>

                            <Box sx={{ '& > :not(style)': { m: 1 } }}>

                                <Fab variant="extended" color="primary" type="submit">
                                    <SendIcon sx={{ mr: 1.5 }} />
                                    Submit
                                </Fab>
                            </Box>

                        </div>
                    </form>
                )}

            </Formik>
        </div>

    )
}
