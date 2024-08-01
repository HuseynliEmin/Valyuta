import React, { useState } from 'react'
import './Valyuta.css'
import axios from 'axios'
function Valyuta() {
    let [amount, setAmount] = useState(1)
    let [firstSelect, setFirstSelect] = useState('USD')
    let [second, setSecondSelect] = useState('JPY')
    let [result, setResult] = useState()


    async function change() {
        const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_N7tz72tybm39TWB2f2Hx9GES1JHYwfYGz6GLv7Ba&base_currency${firstSelect}`)
        const currency = response ? response : []
        const currencyAmount = (currency.data.data[second] * amount).toFixed(2)
        setResult(currencyAmount)

    }


    return (
        <div className='parent'>
            <div className='valyuta'>
                <input onChange={(e) => setAmount(e.target.value)} type="number" className='amount' value={amount} />
                <select onChange={(e) => setFirstSelect(e.target.value)} className='select'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>JPY</option>
                    <option>TRY</option>
                    <option>RUB</option>
                    <option>GBP</option>
                </select>
                <select onChange={(e) => setSecondSelect(e.target.value)} className='select2'>
                    <option>JPY</option>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>TRY</option>
                    <option>RUB</option>
                    <option>GBP</option>
                </select>
                <input value={result} type="number" className='result' />
                <button onClick={change}>Change</button>
            </div>
        </div>
    )
}

export default Valyuta