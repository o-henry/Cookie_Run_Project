import React from 'react'
import 'sass/main.scss';
import classNames from 'classnames';


interface Props {
    // style
    style?: string;
}

function Image({ style }: Props): React.ReactElement {
    return (
        <div className={classNames('Image', style)}>

        </div>
    )
}

Image.defaultProps = {
    style: ''
};

export default Image