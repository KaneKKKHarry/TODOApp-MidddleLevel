import React, { useState } from 'react'
import '../App.css'

export default function IncompleteTodo(props) {
    const { IncompleteLists, Complete, Delete, Edit } = props

    return (
        <div id='incomplete' className='incomplete-area'>
            <p className='title'>未完了のTODO</p>
            <ol className='list-row'>
                {IncompleteLists.map((todo)=> {
                    return(
                        <>
                            <li key={IncompleteLists.id}>
                                <span className='list-string'>{todo.content}</span>
                                <span>
                                    <button onClick={()=>Complete(todo)} className='list-button'>完了</button>
                                    <button onClick={()=>Delete(todo)} className='list-button'>削除</button>
                                    <button onClick={()=>Edit(todo)} className='list-button'>編集</button>
                                </span>
                                <span className='progress'>進捗率</span>
                                <select>
                                    <option value='0%'>0%</option>
                                    <option value='25%'>25%</option>
                                    <option value='50%'>50%</option>
                                    <option value='75%'>75%</option>
                                </select>
                                <span className='progress'>対応期限</span>
                                <input type='date'/>
                            </li>
                        </>
                    )
                })}
            </ol>
        </div>
    )
}
