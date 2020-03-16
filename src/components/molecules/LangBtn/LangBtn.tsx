import React from 'react'
import { Button } from 'components'
import 'sass/main.scss'

interface Props {
    onClick: () => void;
    style?: string;
}

function LangBtn({ onClick, style }: Props): React.ReactElement {
    return (
        <div className="langbtn">
            <Button style={style} onClick={onClick}>Ko</Button>
            <div id="divide">⎜</div>
            <Button style={style} onClick={onClick}>En</Button>
        </div>
    )
}

export default LangBtn