### 쿠키런

#### 목표

20xx년 xx월 xx일 쿠키런 IP를 활용한 신작 게임 쿠키XX가 출시됩니다.
기존 쿠키런 플레이어들과 잠재고객들에게 런칭 전 쿠키XX 게임을 널리 알리기 위한 사전예약 사이트를 만들어야 합니다.

#### Check list

Must have:

- 입력폼 UI 작성: 휴대폰 번호를 입력한 다음 사전예약하기 버튼을 눌러 서버로 요청을 전송할 수 있어야 함
- 사전예약이 성공했을 경우 처리: 사전예약 완료 모달을 보여주어야 함
- 사전예약이 실패했을 경우 처리: 오류 모달을 보여주어야 함

Nice to have:

- 반응형 처리 (다양한 크기의 모바일 웹 브라우저에서 문제없이 볼 수 있어야 합니다)
- 다국어 처리 (페이지를 영어로도, 한국어로도 볼 수 있어야 합니다)
- 입력 폼 유효성 체크 (유효한 휴대전화 번호를 입력했는지 체크해야 합니다)
- 서버의 응답을 기다리는 동안 로딩 인디케이터 보여주기
- 쿠키 일러스트 애니메이션 (공중에 부유하는 듯한 느낌의 애니메이션을 넣어주세요)
- 모달 애니메이션 (사전예약 완료, 오류 모달이 자연스럽게 나타나야 합니다)

### 기술 스택

- Typescript
- React
- GraphQl
- Scss

### Requirements

- CRA
- TypeScript
- eslint / Prettier
- SCSS
- GraphQL
- i18n
- sweetalert

### 구조

- 아토믹 디자인 패턴

```js

components

    atoms ( 가장 작은 단위 / 태그 단순 기능 )
        Button
        Input
        Content
        Loader

    molecules ( atoms 조합 )
        FormInput : 번호를 입력하는 Input Form ( Button component + Input component )
        LangBtn : 언어 변환 버튼 i18n + Button component )

    pages
        Layout
            Grid : 모든 페이지에 공통적으로 default 가 될 레이아웃
        Reservation
            Reservation : 비즈니스 로직이 작성되는 Page component
            template
                ResvTemplate : 레이아웃을 구현하는 컴포넌트 ( atoms + molecules + Grid )

graphql

    mutation / query 관리

hooks

    custom hooks 관리

i18n

    다국어 처리 관리

static

    에셋 관리
```

```js
/* Prop Drilling */
Reservation (Business Logic /  상태 관리)
  ResvTemplate
    Grid
      Content
      img
      Langbtn
          Button
          i18n
      FormInput
          Input
          Button
```

### 설치 및 실행

> npm i 또는 yarn add
> npm start
