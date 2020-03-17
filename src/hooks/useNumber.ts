import { useState } from 'react';

export default function (): Array<string | any> {
    const [phoneNumber, setPhoneNumber] = useState('');
    const updatePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const phoneNumber = e.target.value;
        setPhoneNumber(phoneNumber)
    }
    return [phoneNumber, updatePhoneNumber]
}