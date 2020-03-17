import React, { useState } from 'react';
import ResvTemplate from './templates/ResvTemplate';
import { FormInput, Content, Loader, LangBtn } from 'components';
import { useMutation } from '@apollo/react-hooks';
import { POST_PHONE_NUMBER } from 'graphql/mutation';
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';

function Reservation(): React.ReactElement {
    const { t } = useTranslation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [projectId, setProjectId] = useState('');
    const [submit, { loading }] = useMutation(POST_PHONE_NUMBER, {
        onCompleted({ submit: { alreadyExists } }) {
            if (!alreadyExists) {
                swal(`사전 예약이 완료 되었습니다.`, { buttons: ['확인', false] })
            } else {
                swal(`이미 사전예약이 
                완료된 번호입니다.`, { buttons: ['확인', false] })
            }
        }
    });

    if (loading) return <Loader />

    const handleClick = (): void => {
        setProjectId('2020-lch-c47348')
        // check number
        const checkNumber = /^\d{3}\d{4}\d{4}$/;
        if (checkNumber.test(phoneNumber)) {
            submit({ variables: { projectId, phoneNumber } });
        } else {
            swal(`입력 양식에 맞춰 
            다시 입력 해주세요!`, { buttons: ['확인', false] })
        }
    }


    return (
        <ResvTemplate
            langbtn={
                <LangBtn
                    style='lang'
                />
            }
            formInput={
                <FormInput
                    style="resv"
                    placeholder={t('placeholder.input')}
                    value={phoneNumber}
                    onChange={(e): void => setPhoneNumber(e.target.value)
                    }
                    onClick={handleClick}
                >{t('button.content')}</FormInput >
            }
            content={
                [
                    <Content key={1} style='lang'>{t('content.msg1')}</Content>,
                    <Content key={2} style='event'>{t('content.msg2')}</Content>,
                    <Content key={3} style='lang'>{t('content.msg3')}</Content>
                ]}
        />
    )
};

export default Reservation;
