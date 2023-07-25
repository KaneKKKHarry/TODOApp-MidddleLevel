import React from 'react'
import '../App.css'

export default function EditTodo(props) {
    const { todo, onChange, onClick, Cancel } = props
    return (
        <>
            <div className='input-area'>
                <input onChange={onChange} value={todo} type='text' placeholder='編集内容を入力' />
                <button onClick={onClick} className='input-button'>保存</button>
                <button onClick={Cancel} className='input-button'>キャンセル</button>
                <select className='select-button'>
                        <option value='0%'>0%</option>
                        <option value='25%'>25%</option>
                        <option value='50%'>50%</option>
                        <option value='75%'>75%</option>
                </select>
            </div>
        </>
    )
}
