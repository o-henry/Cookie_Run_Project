import React, { useState } from 'react';
import ResvTemplate from './templates/ResvTemplate';
import { FormInput, Content } from 'components';
import { useMutation } from '@apollo/react-hooks';
import { POST_PHONE_NUMBER } from 'graphql/mutation';

function Reservation(): React.ReactElement {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [projectId, setProjectId] = useState('');
    const [submit, { loading, error }] = useMutation(POST_PHONE_NUMBER, {
        onCompleted({ submit: { alreadyExists } }) {
            if (!alreadyExists) {
                alert(`사전 예약이 완료 되었습니다.`)
            } else {
                alert(`이미 사전예약이 완료된 번호입니다.`)
            }
        }
    });

    const handleClick = (): void => {
        setProjectId('2020-lch-c47348')
        submit({ variables: { projectId, phoneNumber } });
    }

    return (
        <ResvTemplate
            formInput={
                <FormInput
                    style="resv"
                    placeholder="'-' 없이 숫자만 입력해주세요"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    onClick={handleClick}
                />
            }
            content={[
                <Content>{'사전예약을 신청하신'}</Content>,
                <Content style={'event'}>{'모든분들께 5만원 상당의'}</Content>,
                <Content>{'아이템을 드립니다!'}</Content>
            ]}
        />
    )
};

export default Reservation;
