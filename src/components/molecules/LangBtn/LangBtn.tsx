import React from 'react'
import { Button } from 'components'
import i18n from 'i18next';
import 'sass/main.scss'

interface Props {
    /** language에 따른 style */
    style?: string;
}

function LangBtn({ style }: Props): React.ReactElement {
    const changeLanguage = (lng: string): void => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="langbtn">
            <Button style={style} onClick={(): void => changeLanguage('ko')}>KO</Button>
            <div id="divide"> ⎜ </div>
            <Button style={style} onClick={(): void => changeLanguage('en')}>EN</Button>
        </div >
    )
}

export default LangBtn