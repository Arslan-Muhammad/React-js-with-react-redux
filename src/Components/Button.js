import React from 'react'

export default function Button(props) {
    return (
        <div className='container mt-2'>
            <div className='row '>
                <div className='col-md-3 text-center'>
                    <button type="button" className="btn btn-secondary" onClick={props.click1}>-1</button>
                </div>
                <div className='col-md-3 text-center'>
                    <button type="button" className="btn btn-secondary" onClick={props.click2}>+1</button>
                </div>
                <div className='col-md-3 text-center'>
                    <button type="button" className="btn btn-secondary" onClick={props.click3}>+2</button>
                </div>
                <div className='col-md-3 text-center'>
                    <button type="button" className="btn btn-secondary" onClick={props.click4}>-2</button>
                </div>
            </div>
        </div>
    )
}
