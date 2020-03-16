import React from 'react';
import { Grid } from 'pages'
import { cherry, crystal, jungle, reward } from 'static/index'
import 'sass/main.scss'

interface Props {
    langbtn: React.ReactNode;
    formInput: React.ReactNode;
    content: React.ReactNode;
}

function ResvTemplate({ langbtn, formInput, content }: Props): React.ReactElement {
    return (
        <Grid>
            <div className='ResvTemplate'>
                {langbtn}
                <img id='cherry' src={cherry} alt='cherry-cookie' />
                <img id='jungle' src={jungle} alt='jungle-cookie' />
                <img id="reward" src={reward} alt='reward' />
                <img id="crystal" src={crystal} alt='crystal' />
                {formInput}
                {content}
            </div>
        </Grid>
    );
};


export default ResvTemplate;
