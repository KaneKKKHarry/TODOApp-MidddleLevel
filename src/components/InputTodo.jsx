import React, { useState } from 'react'
import '../App.css'

export default function InputTodo(props) {
    const { todo, onChange, onClick } = props
    return (
        <>
            <div className='input-area'>
                <input onChange={onChange} value={todo} type='text' placeholder='TODOを入力' />
                <button onClick={onClick} className='input-button'>追加</button>
                <span className='progress'>絞り込み</span>
                <select>
                    <option value='0%'>0%</option>
                    <option value='25%'>25%</option>
                    <option value='50%'>50%</option>
                    <option value='75%'>75%</option>
                </select>
            </div>
        </>
    )
}
