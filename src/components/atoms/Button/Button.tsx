import React from 'react'

interface Props {
    // onClick setState handler
    onClick?: () => void;
}

function Button({ onClick }: Props): React.ReactElement {
    return (
        <button onClick={onClick}>사전예약하기</button>
    )
}


export default Button