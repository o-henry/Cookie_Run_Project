import React from 'react';
import { Grid } from 'pages'
import 'sass/main.scss'

interface Props {
    content: React.ReactNode;
}

function ResvTemplate({ content }: Props): React.ReactElement {
    return (
        <Grid>
            <div className='ResvTemplate'>
                {content}
            </div>
        </Grid>
    );
};




export default ResvTemplate;
