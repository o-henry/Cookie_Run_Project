import React from 'react';
import 'sass/main.scss'

interface Props {
    content: React.ReactNode;
}

function ResvTemplate({ content }: Props): React.ReactElement {
    return (
        <div className='ResvTemplate'>
            {content}
        </div>
    );
};




export default ResvTemplate;
