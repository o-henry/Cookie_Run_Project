import React, { Children } from 'react'
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
        // eslint-disable-next-line react/no-unescaped-entities
        <button className={classNames('Button', style)} onClick={onClick}>{children}</button>
    )
}

Button.defaultProps = {
    style: ''
};



export default Button