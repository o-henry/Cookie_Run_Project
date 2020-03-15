import React from 'react'
import 'sass/main.scss';
import classNames from 'classnames';

interface Props {
    // onClick setState handler
    onClick?: () => void;
    // style
    style?: string;
}

function Button({ onClick, style }: Props): React.ReactElement {
    return (
        // eslint-disable-next-line react/no-unescaped-entities
        <button className={classNames('Button', style)} onClick={onClick}>사전예약하기 ></button>
    )
}

Button.defaultProps = {
    style: ''
};



export default Button