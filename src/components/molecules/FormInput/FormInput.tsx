import React from 'react'
import { Button, Input } from 'components'

interface Props {
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

function FormInput({ value, placeholder, onChange, onClick }: Props): React.ReactElement {
    return (
        <div>
            <Input value={value} placeholder={placeholder} onChange={onChange} />
            <Button onClick={onClick} />
        </div>
    )
}
export default FormInput