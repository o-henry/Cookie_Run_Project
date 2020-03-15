import React from 'react'
import { Button, Input } from 'components'
import 'sass/main.scss'

interface Props {
    value: string;
    placeholder?: string;
    style?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

function FormInput({ value, placeholder, onChange, onClick, style }: Props): React.ReactElement {
    return (
        <div className="forminput">
            <Input style={style} value={value} placeholder={placeholder} onChange={onChange} />
            <Button style={style} onClick={onClick} />
        </div>
    )
}
export default FormInput