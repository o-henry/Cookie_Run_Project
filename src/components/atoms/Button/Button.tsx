import React from 'react'
import 'sass/main.scss';
import classNames from 'classnames';

interface Props {
    // onClick setState handler
    onClick?: () => void;
    // style
    style?: string;
    // 내용
    children: string;
}

function Button({ onClick, style, children }: Props): React.ReactElement {
    return (
        <button className={classNames('Button', style)} onClick={onClick}>{children}</button>
    )
}

Button.defaultProps = {
    style: '',
};



export default Button