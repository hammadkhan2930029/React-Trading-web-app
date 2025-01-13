import React, { useEffect, useState } from 'react'
import app from '../../../firebase';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import './details.css'


export const Details = () => {
    const db = getFirestore()
    //----------------------------------------------------
    const [data, setdata] = useState([])

    const getData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'formdata'));
            const dataDetails = querySnapshot.docs.map((item) => item.data())
            console.log('Data :', dataDetails)
            setdata(dataDetails)

        } catch (e) {
            console.log('try catch error', e)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(data)
    return (
       
        <div>
            <table>
                <thead className='t_head'>
                    <tr className='t_head_row'>
                        <th>Stock Name</th>
                        <th>Trade Date</th>
                        <th>Sett Date</th>
                        {/* ---------------------------- */}
                        <th>Buy QTY</th>
                        <th>Buy Rate</th>
                        <th>Buy Amount</th>
                        <th>Broker Amount (Buy)</th>
                        <th>FED Amount (Buy)</th>
                        {/* -------------------------- */}
                        <th>Sell QTY</th>
                        <th>Sell Rate</th>
                        <th>Sell Amount</th>
                        <th>Broker Amount (Sell)</th>
                        <th>FED Amount (Sell)</th>
                        <th>Net Amount</th>
                    </tr>
                </thead>
                <tbody className='t_body'>
                    {data.map((item, index) => (
                        <tr key={index} className='t_body_row'>
                            <td>{item.stockName}</td>
                            <td>{item.sett_date?.seconds ? new Date(item.sett_date.seconds * 1000).toLocaleString() : 'N/A'}</td> 
                            <td>{item.trade_date?.seconds ? new Date(item.trade_date.seconds * 1000).toLocaleString() : 'N/A'}</td> 
                            {/* ---------------------------------------- */}
                            <td>{item.buy_QTY}</td>
                            <td>{item.buy_rate}</td>
                            <td>{item.buy_amount}</td>
                            <td>{item.buy_broker_amount}</td>
                            <td>{item.buy_fed_amount}</td>


                            {/* ---------------------------------- */}
                            <td>{item.sell_QTY}</td>
                            <td>{item.sell_rate}</td>
                            <td>{item.sell_amount}</td>
                            <td>{item.sell_broker_amount}</td>
                            <td>{item.sell_fed_amount}</td>
                            <td>{item.net_amount}</td>

                          </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
