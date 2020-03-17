import React from 'react'
import { Button, Input } from 'components'
import 'sass/main.scss'

interface Props {
    /** 입력 값 */
    value: string;
    /** Placeholder 값 */
    placeholder?: string;
    /** 클래스이름에 따른 style */
    style?: string;
    /** 버튼 이름 */
    children: string;
    /** onChange setState handler */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** onClick setState handler */
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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