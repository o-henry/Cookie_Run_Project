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

    if (loading) return <Loader>{"쿠키가 구워지고 있어요..."}</Loader>

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
                    style='lang' onClick={handleClick}
                />
            }
            formInput={
                <FormInput
                    style="resv"
                    placeholder={t('placeholder.input')}
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)
                    }
                    onClick={handleClick}
                >{t('button.content')}</FormInput >
            }
            content={
                [
                    <Content key={1}>{t('content.message1')}</Content>,
                    <Content key={2} style={'event'}>{t('content.message2')}</Content>,
                    <Content key={3}>{t('content.message3')}</Content>
                ]}
        />
    )
};

export default Reservation;
