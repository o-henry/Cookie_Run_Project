import React from 'react';
import { Grid } from 'pages'
import { cherry, crystal, jungle, reward } from 'static/index'
import 'sass/main.scss'

interface Props {
    formInput: React.ReactNode;
}

function ResvTemplate({ formInput }: Props): React.ReactElement {
    return (
        <Grid>
            <div className='ResvTemplate'>
                <img id='cherry' src={cherry} alt={'cherry-cookie'} />
                <img id='jungle' src={jungle} alt={'jungle-cookie'} />
                <img id="reward" src={reward} alt={'reward'} />
                <img id="crystal" src={crystal} alt={'crystal'} />
                {formInput}
            </div>
        </Grid>
    );
};


export default ResvTemplate;
