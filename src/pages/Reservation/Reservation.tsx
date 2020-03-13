import React, { useState } from 'react';
import ResvTemplate from './templates/ResvTemplate';
import { useMutation } from '@apollo/react-hooks';
import { POST_PHONE_NUMBER } from 'graphql/mutation';

const Reservation: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [projectId, setProjectId] = useState('');
    const [post, { loading, error }] = useMutation(POST_PHONE_NUMBER);

    const handleClick = () => {
        post({ variables: phoneNumber, projectId });
        setPhoneNumber('');
        setProjectId('');
    };

    return <ResvTemplate />;
};
export default Reservation;
