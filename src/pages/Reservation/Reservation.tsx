import React, { useState } from 'react';
import ResvTemplate from './templates/ResvTemplate';
import { useMutation } from '@apollo/react-hooks';
import { FormInput } from 'components';
import { POST_PHONE_NUMBER } from 'graphql/mutation';

function Reservation(): React.ReactElement {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [projectId, setProjectId] = useState('');

    console.log('phoneNumber', phoneNumber)

    return <ResvTemplate
        content={
            <FormInput
                placeholder="'-' 없이 숫자만 입력해주세요"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
            />
        }
    />;
};


export default Reservation;
