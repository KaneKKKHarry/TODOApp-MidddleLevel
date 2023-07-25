import React, { useState } from 'react'
import '../App.css'

    export default function CompleteTodo(props) {
        const { CompleteLists, Back, Edit } = props
    return (
        <div id='complete' className='complete-area'>
            <p className='title'>完了のTODO</p>
            <ol className='list-row'>
                {CompleteLists.map((todo)=> {
                        return(
                            <>
                                <li key={CompleteLists.id}>
                                    <span className='list-string'>{todo.content}</span>
                                    <button onClick={()=>Back(todo)} className='list-button'>戻す</button>
                                    <button onClick={()=>Edit(todo)} className='list-button'>編集</button>
                                </li>
                            </>
                        )
                })}
            </ol>
        </div>
    )
}
