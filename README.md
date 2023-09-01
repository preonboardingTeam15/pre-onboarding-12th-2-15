# 🚀 프리온보딩 프론트엔드 인턴십 [12th] - 2Week

> - 원티드 프리온보디 프론트엔드 15팀입니다.
> - Facebook의 React repository의 이슈 목록, 이슈 상세내용을 확인할 수 있는 웹 사이트 구현 과제입니다.

</br>

## 🗓️ 진행 기간

### 2023.08.29 ~ 2023.09.01

</br>

## 🤝🏻 참여 멤버

<table>
  <tbody>
    <tr>
       <td align="center"><a href="https://github.com/junsobi"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/127650045?v=4"/><br /><sub><b>김준섭</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/seongm2n"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/62044613?v=4"/><br /><sub><b>신성민</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/ofcpire"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/115693464?v=4"/><br /><sub><b>이세환</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/whThswh"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/71033487?v=4"/><br /><sub><b>조정현</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/tjswo2292"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/55657931?v=4"/><br /><sub><b>최선재</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/Nyes98"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/111405218?v=4"/><br /><sub><b>박예성</b></sub></a><br /></td>
  </tbody>
</table>
</br>

## 💻 진행 방법

- **Notion** 활용  
  → 각자 Assignment 1~5구현 방법 설명 기록하고 코드 설명
  → 회의를 통해 팀원들의 코드를 분석하고 Best Practice 정하기  
  → 커밋 메세지 컨벤션, Team 규칙을 정하기 위해 활용

- **Discord** 패널을 활용  
  → 팀원들의 의사소통 및 화면 공유를 통한 협업 툴로 활용

  </br>

## ✅ 규칙

### 커밋 메세지

| Commit Type | Format                                                                   |
| ----------- | ------------------------------------------------------------------------ |
| feat        | 새로운 기능 추가                                                         |
| fix         | 버그 수정                                                                |
| docs        | 문서수정                                                                 |
| style       | 코드 스타일 변경(코드 포매팅,세미콜론 누락 등)</br>기능 수정이 없는 경우 |
| design      | 사용자 UI 디자인 변경(CSS 등)                                            |
| test        | 테스트 코드, 리팩토링 테스트 코드 추가                                   |
| refactor    | 코드 리팩토링                                                            |
| build       | 빌드 파일 수정                                                           |
| perf        | 성능 개선                                                                |
| chore       | 빌드 업무 수정, 패키지 매니저 수정(gitignore수정 등)                     |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                                        |
| remove      | 파일을 삭제만 한 경우                                                    |

### ESLint

```shell
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "no-var": "error",
    "no-multiple-empty-lines": "error",
    "eqeqeq": "error",
    "dot-notation": "error"
  }
}
```

### Prettier

```shell
{
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "printWidth": 100,
  "singleQuote": true,
  "arrowParens": "avoid"
}
```

</br>

## 🔧 프로젝트 실행방법

```shell
git clone https://github.com/preonboardingTeam15/pre-onboarding-12th-2-15.git

cd pre-onboarding-12th-2-15
```

```
npm install
```

```
npm start
```

</br>

## 🎥 데모 영상

**[배포 링크](https://pre-onboarding-12th-2-15.vercel.app/)**

</br>

## 📚 스택

- Environment  
  ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
  ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
  ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
- Development  
   ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![react-router-dom](https://img.shields.io/badge/react--router--dom-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Styled-Components](https://img.shields.io/badge/styled--components%20CSS-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
  ![ESLint](https://img.shields.io/badge/ESLint-blue?style=for-the-badge&logo=eslint)
  ![Prettier](https://img.shields.io/badge/Prettier-ff69b4?style=for-the-badge&logo=prettier)
  [![Octokit](https://img.shields.io/badge/Octokit-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/octokit/octokit.js)

- Communication  
  ![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)
  ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)

</br>

## 📂 프로젝트 구조

```bash
📦src
 ┣ 📂api
 ┃ ┣ 📂hook
 ┃ ┃ ┣ 📜useFetchInitialData.ts
 ┃ ┃ ┗ 📜useFetchNextPage.ts
 ┃ ┣ 📜constants.ts
 ┃ ┗ 📜core.ts
 ┣ 📂components
 ┃ ┣ 📂detail
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂error
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📂hook
 ┃ ┃ ┃ ┗ 📜useInfiniteScrollIssues.tsx
 ┃ ┃ ┣ 📜AdBanner.tsx
 ┃ ┃ ┣ 📜IssueCard.tsx
 ┃ ┃ ┣ 📜IssueCardWrapper.tsx
 ┃ ┃ ┣ 📜IssueListSection.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📜LoadingCard.tsx
 ┣ 📂context
 ┃ ┗ 📜LodingContext.tsx
 ┣ 📂image
 ┃ ┗ 📜AdImage.webp
 ┣ 📂layout
 ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┗ 📜Layout.tsx
 ┣ 📂router
 ┃ ┣ 📜Router.tsx
 ┃ ┗ 📜routes.ts
 ┣ 📂util
 ┃ ┣ 📜dateSlice.ts
 ┃ ┣ 📜sortingComments.ts
 ┃ ┣ 📜sortingIsOpen.ts
 ┃ ┗ 📜type.ts
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts

```

</br>

## ✨ 주요 기능 목표 및 구현 설명

### Assignment 1. 이슈 목록 화면

#### 구현

- **이슈 목록 가져오기 API 활용**   
  → `octokit` 라이브러리 사용  
- **open 상태의 이슈 중 코멘트가 많은 순으로 정렬**   
  → 커스텀 훅 useFetchInitialData 에서 CORE_API 함수를 호출하여  정렬 기준을 "comments"로 설정   
→ sortingOpen함수로 open인 issue만 추출후 sortingComments함수로 open인 경우 코멘트 많은 순으로 정렬
- **각 행에는 '이슈번호, 이슈제목, 작성자, 작성일, 코멘트수'를 표시**   
  → api 호출 후 저장한 데이터를 usestate 를 이용해 배열로 저장하고 배열을 `map` 메서드를 이용하여 item.title, item.number 등으로 표시
- **다섯번째 셀마다 광고 이미지 출력**   
  → `issueList` 배열에 `map 메소드` 사용, `(idx + 1) % 4 === 0` 조건으로 `AdBanner` 컴포넌트 표시
- **화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)**   
  → `useInfiniteScrollIssues` 훅을 만들어 사용   
    - 훅 내부에서는 `IntersectionObserver API`를 활용하여
    스크롤이 페이지 하단에 도달했는지 감지   
    - `lastIssueRef` 콜백 함수를 통해 마지막 이슈 항목에 관찰자(observer)를 부착하고, 이 관찰자가 해당 요소와 교차할 때(즉, 화면에 보일 때) 페이지 번호를 증가시킴   
    (setPage((prevPage) => prevPage + 1)). 페이지 번호가 증가하면
    그에 따라 다음 페이지의 데이터를 가져오는 `fetchNextPage` 함수가 실행    

  → `IssueList` 컴포넌트에서는 위에서 생성한 `lastIssueRef`를 마지막 이슈 항목의 ref로 설정하여 마지막 항목이 화면에 나타나면 추가 데이터를 불러옴.

</br>

### Assignment 2. 이슈 상세 화면

#### 구현

- **이슈의 상세 내용 표시**  
  → 마크다운 렌더링을 @uiw/react-markdown-preview 라이브러리 사용
    
- **'이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시**   
  → api 호출 후 저장한 데이터를 usestate 를 이용해 배열로 저장하고 배열을 map을 이용하여 item.title, item.number 등으로 표시    
</br>


### Assignment 3. 공통 헤더

#### 구현

- **두 페이지는 공통 헤더를 공유합니다.**   
  → 각 페이지(레이아웃)에 공통된 Header 컴포넌트 적용
- **헤더에는 Organization Name / Repository Name이 표시됩니다.**   
  → 하드코딩으로 표시

</br>

---
### ‼️ 필수 요구사항

### Assignment 4. 에러 처리

#### 구현

- **에러 화면 구현**   
  → `createBrowserRouter`의 `errorElement` 사용시 error 발생하면 error페이지로 이동

### Assignment 5. 데이터 요청 중 로딩 처리

#### 구현

- **데이터 요청 중 로딩 표시**   
  → `context api`에서 loding을 useState를 사용하여 상태 관리   
  → 패칭하는 과정의 앞뒤에 loding의 상태를 변경함    
  → loding의 상태에 따라 각 페이지 컴포넌츠에서 로딩컴포넌츠를 조건부 랜더링   

