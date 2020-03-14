import React from 'react'
import { Button, Input } from 'components'

interface Props {
    value: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => string | void;
}

function FormInput({ value, placeholder, onChange }: Props): React.ReactElement {
    return (
        <div>
            <Input value={value} placeholder={placeholder} onChange={onChange} />
            <Button />
        </div>
    )
}
export default FormInput