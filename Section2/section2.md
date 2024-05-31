# 폴더 구조를 고민하는 사람들에게 해주고 싶은 말

`YAGNI`

you ain't gonna need it

\*# 레이아웃

- 배치가 중요함
- 고정인 부분이 중요함

> postion:fixed, width: 100%라고 할 때 부모의 width를 그대로 안 가져옴
>
> ```css
> width: inherit;
> ```
>
> 이 유용함

> a 태그에 `inline-blcok`을 줌
>
> ```css
> display: inline-block;
> ```

> flex:1
>
> 부모 요소인 .부모class의 남은 세로 공간을 모두 차지
>
> ```css
> .부모class {
>   display: flex;
>   flex-direction: column;
> }
> .자식class {
>   flex: 1;
> }
> ```

> `onClick`이 있으면 'use client'를 사용하면 된다고 생각하면 됨

> svg 복사하는 법
>
> 요소에서 가르켜서 -> 복사 -> outerHTML 복사

# 알면 좋을 것 같은 사이트

> npmtrends.com

# 라이브러리

- dayjs
- classnames

  - 하나의 div 가 class를 여러개 가질 때, 조건부로 가질 수 있음(class가 달랄질 수 있음)

    ```tsx
    const commented = false;
    const reposted = true;
    const liked = true;

    <div className={cx(style.commentButton, commented && style.commented)}></div> //(1) 방법
    <div className={cx(style.repostButton, reposted && style.reposted)}></div>
    <div className={cx([style.heartButton, liked && style.liked])}></div>   // (2) 방법
    ```

# Parellel Routes

- `@modal` 폴더에 default.tsx 파일 만들어주기
- layout에 modal 자리 만들어주기

# `usePathname`

> ex) localhost:3000/explore

Pathname이란 / 뒤부터 물음표 앞까지(Query String, Search Parameter)

```tsx
const pathname = usePathname();

if (pathname === "/explore") return null;
```

# `useSearchParams`

# `onClickCapture`

# `우클릭 -> Refactor -> Move`

move 기능

export 하는 무언가를 다른 파일에 옮기면

import 하는 곳에 모두 업데이트 됨

리펙토링을 자주하는 사람은 웹스톰 추천
