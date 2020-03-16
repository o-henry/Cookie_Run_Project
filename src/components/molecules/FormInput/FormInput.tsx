import React from 'react'
import { Button, Input } from 'components'
import 'sass/main.scss'

interface Props {
    value: string;
    placeholder?: string;
    style?: string;
    children: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: string) => void;
}

function FormInput({ value, placeholder, onChange, onClick, style, children }: Props): React.ReactElement {
    return (
        <div className="forminput">
            <Input style={style} value={value} placeholder={placeholder} onChange={onChange} />
            <Button style={style} onClick={onClick}>{children}</Button>
        </div>
    )
}
export default FormInput