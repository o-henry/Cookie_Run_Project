import React, { useState } from 'react';
import ResvTemplate from './templates/ResvTemplate';
import { FormInput, Content, Loader, LangBtn } from 'components';
import { useNumber } from 'hooks'
import { useMutation } from '@apollo/react-hooks';
import { POST_PHONE_NUMBER } from 'graphql/mutation';
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';

function Reservation(): React.ReactElement {
    const { t } = useTranslation();
    const [phoneNumber, setPhoneNumber] = useNumber();
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
        const checkNumber = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
        if (checkNumber.test(phoneNumber)) {
            submit({ variables: { projectId, phoneNumber } });
        } else {
            swal(`입력 양식에 맞춰 
            다시 입력 해주세요!`, { buttons: ['확인', false] })
        }
    }

    const contents = [
        { id: 1, style: 'lang', desc: t('content.msg1') },
        { id: 2, style: 'event', desc: t('content.msg2') },
        { id: 3, style: 'lang', desc: t('content.msg3') }
    ]

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
                    onChange={setPhoneNumber}
                    onClick={handleClick}
                >{t('button.content')}</FormInput >
            }
            content={
                contents.map(content => {
                    return (
                        <Content key={content.id} style={content.style}>{content.desc}</Content>
                    )
                })
            }
        />
    )
};

export default Reservation;
