import React, { useState } from 'react';
import ResvTemplate from './templates/ResvTemplate';
import { FormInput } from 'components';
import { useMutation } from '@apollo/react-hooks';
import { POST_PHONE_NUMBER } from 'graphql/mutation';


function Reservation(): React.ReactElement {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [projectId, setProjectId] = useState('');
    const [submit, { data, loading, error }] = useMutation(POST_PHONE_NUMBER, {
        onCompleted({ submit: { alreadyExists } }) {
            alert(`이미 존재하나요? ${alreadyExists} `)
        }
    });

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error</p>

    const handleClick = (): void => {
        setProjectId('2020-lch-c47348')
        submit({ variables: { projectId, phoneNumber } });
    }

    console.log('data', data, 'phoneNumber', phoneNumber, 'id', projectId)

    return (
        <ResvTemplate
            content={
                <FormInput
                    placeholder="'-' 없이 숫자만 입력해주세요"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    onClick={handleClick}
                />
            }
        />
    )
};


export default Reservation;
