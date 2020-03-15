import React from 'react';
import 'sass/main.scss';
import classNames from 'classnames';


interface Props {
    // input state value 
    value: string;
    // place holder
    placeholder?: string;
    // onChange setState handler
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // style
    style?: string;
}

function Input({ value, placeholder, onChange, style }: Props): React.ReactElement {
    return (
        <input
            className={classNames('Input', style)}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

Input.defaultProps = {
    style: ''
};



export default Input