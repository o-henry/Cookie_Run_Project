import React from 'react'

interface Props {
    // input state value 
    value: string;
    // place holder
    placeholder?: string;
    // onChange setState handler
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => string | void;

}

function Input({ value, placeholder, onChange }: Props): React.ReactElement {
    return (
        <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}


export default Input