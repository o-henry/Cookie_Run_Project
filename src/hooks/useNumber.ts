import { useState } from 'react';

export default function (): Array<any> {
    const [phoneNumber, setPhoneNumber] = useState('');
    const updatePhoneNumber = (e: any) => {
        const phoneNumber = e.target.value;
        setPhoneNumber(phoneNumber)
    }
    return [phoneNumber, updatePhoneNumber]
}