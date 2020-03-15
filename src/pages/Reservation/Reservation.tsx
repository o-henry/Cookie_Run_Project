/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import ResvTemplate from './templates/ResvTemplate';
import { FormInput, Content } from 'components';
import { useMutation } from '@apollo/react-hooks';
import { POST_PHONE_NUMBER } from 'graphql/mutation';
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';

function Reservation(): React.ReactElement {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [projectId, setProjectId] = useState('');
    const [submit, { loading, error }] = useMutation(POST_PHONE_NUMBER, {
        onCompleted({ submit: { alreadyExists } }) {
            if (!alreadyExists) {
                swal(`사전 예약이 완료 되었습니다.`, { buttons: ['확인', false] })
            } else {
                swal(`이미 사전예약이 
                완료된 번호입니다.`, { buttons: ['확인', false] })
            }
        }
    });

    const handleClick = (): void => {
        setProjectId('2020-lch-c47348')
        submit({ variables: { projectId, phoneNumber } });
    }

    const { t } = useTranslation();

    return (
        <ResvTemplate
            formInput={
                <FormInput
                    style="resv"
                    placeholder={t('placeholder.input')}
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    onClick={handleClick}
                >{t('button.content')}</FormInput>
            }
            content={[
                <Content key={1}>{t('content.message1')}</Content>,
                <Content key={2} style={'event'}>{t('content.message2')}</Content>,
                <Content key={3}>{t('content.message3')}</Content>
            ]}
        />
    )
};

export default Reservation;
