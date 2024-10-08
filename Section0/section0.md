# Next 13 이후에 바뀐 점

- Using App Router
  - 신기능이 여기에 담겨 있음
  - 디렉토리 기능이 많이 바뀜
  - 레이아웃 기능 추가
  - 페이지별로 권한 체크 (관리자, 로그인한 사람만)
  - React18 Version (서버 컴포넌트 적극적 활용)
    - 서버에서 완성된 HTML이 옴
    - 서버 부담이 늘어남 -> 서버 쪽에 캐싱을 적극적 활용
- Using Pages Router
  - 아쉬운 점으로, 레이아웃 기능이 없었음

# 클론 코딩의 장단점

**단점**

클론 코딩을 할 때는 절대 뇌 빼고 하지 말자!

뇌 빼고 하면 타자 연습일 뿐!

> 뇌 장착하자! ㅋㅋㅋㅋㅋ

**장점**

아주 우수한 개발잘들이 만든 코드를 만들어볼 수 있음

개인적으로 안 했던 것들을 할 수 있는 기회가 있음

클론 코딩에서 구현한 것은 가능하다는 것을 증명한 것임

따라서 만들다보면 공식문서를 읽어보게 됨

# 리액트 압축 요약 강좌

## React가 왜 나왔을까

- 페이지 전환없이 앱 같은 느낌을 원함
- 한 페이지에서 다 하는 SPA(Single Page Application) 방식의 유행
  - 데이터 유지
- 프론트의 비중이 점점 높아짐(데이터를 많이 다룸)
- MVC 등의 개발 방식은 대규모 개발에 적합치 않음

angular의 등장

> 양방향 데이터 `2way binding`
>
> Gmail(AJAX) SPA

SPA으로 MVC 구현

앱 같은 느낌은 성공 하지만, MVC라서 동알한 문제

> react는 FLUX 패턴을 사용함
>
> `lway binding`: 데이터의 흐름이 하나로 일관성 있어짐
>
> 데이터가 바뀌었을 때 추적하기 쉬워짐

`JSX`

확장자는 jsx(타입스크립트는 .tsx)

당연히 브라우저가 알아듣지 못함
-> 바벨, 웹팩, vite, swc 등의 툴로 js로 변환해주어야 함

이 때 여러 .jsx 파일을 하나의 .js 파일로 합쳐주기도 함

## short-react

1\) 데이터를 생각해줘야 한다.

2\) 변하는 가 확인해야 한다.

> `React 대원칙`
>
> 1\) 화면에서 바뀌는 데이터를 상태(state)로 만들자
>
> 2\) 반복 사용되는 것을 컴포넌트로 만들다
>
> 3\) 비슷한데 다른 부분을 props로 만들자
>
> 4\) 화면은 미리 다 만들어두고 보였다 안보였다 한다

> `부모 자식 데이터 바꾸기`
>
> 부모가 자식의 데이터를 바꾸고 싶으면? 데이터를 처음부터 부모의 state로 만들어서 자식에게 props로 내려줌
>
> 자식이 부모의 데이터를 바꾸고 싶으면? 부모 데이터를 props로 받아온 뒤, 부모의 데이터를 바꾸는 set 함수도 같이 받아옴
