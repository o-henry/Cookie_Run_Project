import React from 'react'
import 'sass/main.scss';

interface Props {
    // style
    children: string;
}

function Loader({ children }: Props): React.ReactElement {
    return (
        <div className="loader">
            {children}
        </div>
    )
}

export default Loader