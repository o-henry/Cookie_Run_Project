import React from 'react'
import 'sass/main.scss';


function Loader(): React.ReactElement {
    return (
        <div className="loading load">
            <span>쿠</span>
            <span>키</span>
            <span>가</span>
            <span>&nbsp;</span>
            <span>구</span>
            <span>워</span>
            <span>지</span>
            <span>고</span>
            <span>&nbsp;</span>
            <span>있</span>
            <span>어</span>
            <span>요</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>
    )
}

export default Loader