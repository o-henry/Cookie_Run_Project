import React from 'react';
import 'sass/main.scss'

interface Props {
    children: React.HTMLAttributes<HTMLDivElement>;
}

const Grid = ({ children }: Props): React.ReactElement => {
    return (
        <div className="container">
            <div className="main">
                {children}
            </div>
        </div>
    )
};

export default Grid;
