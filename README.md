# ✨ 원티드 클론 프로젝트
* 개발 기간 : 2022.12.31 ~ 2022.01.13
* 기술 스택 : React, JavaScript, Styled-Components
* 팀 구성 : FE 1명 / BE 2명

<br />

## 👩🏻‍💻 개발 진행 상황
<details>
  <summary>2023-01-13 진행상황</summary>
  
  + API 연결
  + 북마크 추가/취소 API 연결 -> 서버 반영 후에도 에러메시지가 뜸 -> body에 전달할 data가 없어도 post 인자로 넣어야 함
+ 퍼블리싱 수정 사항
  + myinfo 모달 value값 비교, input focus border 추가
  + myinfo 수정된 data 렌더링
  + 회원가입 input focus border
+ styled 컴포넌트 분리

</details>
<details>
  <summary>2023-01-12 진행상황</summary>
  
+ API 연결 
  + 마이페이지 API -> 로그인 API result에 이메일, 전화번호 추가대신 이 API 사용
  + 회원가입 API 오류 수정 -> body에 전달되는 데이터가 추가돼서 반영하여 수정
  + 이름 변경 API
  + 비밀번호 변경 API
  + 회원탈퇴 API
  + ~~북마크 추가/취소 API~~
+ myinfo 페이지 화면 구현
  + 이름 변경 모달
  + 회원 탈퇴 모달
  + 이름, 전화번호, 비밀번호 유효성 검사
  + focus border 적용
+ 알림 구현
  + header alarm icon 클릭 시 알림 popover 
  + 내 알림 목록 렌더링
+ 퍼블리싱 수정 사항
  + 버튼 클릭 시 popup 추가
  + 채용 리스트 페이지 select -> ul
  + 로그인 페이지 비밀번호 잘못 입력 시 문구 띄우고 border, 버튼 비활성화
  + 회원가입 페이지 비밀번호 입력 전에 문구 띄우지 않기
  + 회원가입 페이지 모든 정보 입력 시 가입 버튼 활성화  
  + 회원가입 유효성검사에 따라 input border
+ 라우팅 시 스크롤 맨 위로 이동

</details>
<details>
  <summary>2023-01-11 진행상황</summary>
  
+ 로그인 시 userData를 userIdx, nickName, profileImg, jwt로 변경한 부분 적용 → atom 수정-> ~~profile 페이지에 렌더링되는 이메일, 전화번호도 추가 요청드림~~
+ 헤더 업데이트
  + 헤더 알림 아이콘 수정
  + 헤더 프로필 popover 스타일링
+ 홈 페이지 modal button z-index 값 줘서 close 기능 추가
+ 채용 리스트 페이지 태그 불러오기 API 연결
+ 북마크 기능 구현
  + 나의 북마크 리스트 API 연결
  + ~~북마크 추가, 삭제 API 연결~~ → 데이터베이스 연결 실패로 진행 중
+ 헤더 popover 클릭 시 profile 화면 이동, 구현 -> userData 렌더링, myinfo 페이지로 이동
+ myinfo 페이지 화면 구현
  + 기본 화면 구현, userData 렌더링
  + 전화번호 변경 모달
  + 비밀번호 변경 모달
+ 회원정보 수정 API -> patch body json으로 넘겨주기
  + 전화번호 변경 API
  + ~~비밀번호 변경 API~~ -> 데이터베이스 연결 실패로 진행 중
</details>
<details>
  <summary>2023-01-10 진행상황</summary>
  
+ 홈 페이지 구현
  + ~~모달 창 밖 클릭하면 모달 close~~ → 구현 실패. 버튼으로 close부터 해보기
  + ~~커리어 인사이트 카데코리 slick으로~~ → 구현 실패. 스타일링 다시
+ 로그인된 상태 구현
  + header 변경 → alarm, profile icon
  + profile 아이콘 클릭 시 popover open, close
  + popoover에서 로그아웃 클릭 시 로그아웃 구현
  + popoover에서 북마크 클릭 시 북마크 페이지로 이동
+ 채용 페이지 구현
  + 로그인 시 보이는 제안하는 합격률 높은 포지션 slider 구현
+ 채용 리스트 페이지 구현
  + 채용 정렬에 따른 select value recoil로 저장
  + 채용 정렬 value에 따라 채용 리스트 렌더링
  + 채용 직군 카테고리 별 select value 저장
  + 채용 직군 카테고리 value에 따라 채용 리스트 렌더링
+ 북마크 화면 구현
  + 화면 구현
  + API 호출은 진행중
+ API 연결
  + 커리어 인사이트 카테고리 불러오기 API
  + 로그인 시 보이는 채용 페이지 제안하는 합격률 높은 포지션 API
  + 채용 리스트 페이지 정렬에 따른 API (응답률순, 인기순, 최신순, 보상금순)
  + 채용 카테고리 별 분류 리스트 API (직군별)
  + ~~북마크 페이지 API 불러오기~~ → 진행중
</details>
<details>
  <summary>2023-01-09 진행상황</summary>
  
+ API 연결
  + 시작 이메일 중복 체크 API
  + 유저 로그인 API -> 서버분께 비밀번호가 틀렸을 때 '데이터베이스 연결에 실패하였습니다.' 라고 뜨는 메시지 수정 요청 드림
  + 유저 생성 API (회원가입) 수정 -> url 수정, body에 이름, 이메일, 전화번호, 비밀번호만 전달 
  + 서버분이 반영해주신 채용게시물리스트 API 헤더에 token 없이 GET 수정
+ 회원가입/로그인 페이지에서 이메일 중복 여부에 따라 회원가입 페이지 또는 로그인 페이지로 라우팅
+ 로그인 페이지 화면 구현
  + 일치하는 비밀번호 입력 후 버튼 클릭 시 로그인된 사용자 정보 (userIdx, jwt) recoil로 저장
</details>
<details>
  <summary>2023-01-08 진행상황</summary>
  
+ mocking api get 수정
  + try catch문 추가
+ 채용 리스트 페이지 구현 (slick button 위치 수정, sort select, api 연결 남음)
  + 헤더
    + 태그 카테고리 mocking api 연결
    + 태그 카테고리 slider
    + 헤더 스크롤 시 fixed -> fixed 됐을 때 slick button 위치 수정 필요
    + 하단 배너 스크롤 시 fixed
  + 채용 게시물 리스트 
    + 게시물 card 컴포넌트로 분리, state 넘김
+ API 연결
  + 채용 게시물 전체 리스트 API -> 채용 리스트 페이지 기본으로 뜨는 리스트들
  -> 게시물 리스트 API 호출 시 헤더로 X-ACCESS-TOKEN(jwt)을 전달해야 불러올 수 있었음 (로그인해야 볼 수 있게) 
  => 로그인하지 않아도 리스트를 볼 수 있게 수정해주심 -> 프론트에서 수정은 아직
</details>
<details>
  <summary>2023-01-07 진행상황</summary>
  + 헤더 디테일 수정 (margin, font)
+ 회원가입 페이지 구현 (90%) - 가입 버튼 활성화, input focus border 남음
  + 정규식으로 유효성 검사 (이름, 전화번호, 비밀번호)
  + 비밀번호 일치 확인
+ 채용 화면 페이지 구현 (100%)
  + 메인 배너, 라인 배너
  + short nav
  + 매칭 아티클, 요즘 뜨는 포지션 아티클
+ API 연결
  + 유저 생성 API (회원가입)
  + ~~이메일 중복 API~~ -> 연결 못함. GET으로 body의 중복값을 어떻게 확인해야 되는지 잘 모르겠음 (쿼리스트링?) 중복 여부에 따른 result는 어떻게 가져오는지?
  + 채용 인기 순 분류 리스트 API -> 채용 페이지에서 요즘 뜨는 포지션에 사용
+ BASE_URL env 환경변수로 작성
+ NoMatch 홈으로 이동 버튼 추가
</details>
<details>
  <summary>2023-01-06 진행상황</summary>

  + 홈 화면 페이지 구현 (80%) -> 메인 커리어 모달 창 띄우는 것, 카테고리 slick, 리스트 분류 남음
  + 메인 배너 info box 추가 
  + 메인 커리어 인사이트 섹션 
    + 카테고리 data mocking api로 불러옴
    + 타이틀 팝업 open, close
    + 카테고리 모달 창 open 
    + ~~카테고리 모달 창 밖 클릭 시 close~~ -> 시도해봤으나 구현 못함
+ API 연결
  + 전체 커리어 인사이트 리스트 조회 API
  + ~~로그인 API 연결해서 POST~~ -> 시도해봤으나 아직 구현 못함 공부가 더 필요
+ font-family 적용
+ 회원가입 페이지 화면 구현 (80%)
</details>
<details>
  <summary>2023-01-05 진행상황</summary>

  + 회원가입/로그인 화면 구현
  + 이메일 유효성 검사
+ 메인배너 API 연결
</details>
<details>
  <summary>2023-01-01 진행상황</summary>

  + 홈 화면 구현 (70%)
  + 메인배너 (react-slick)
  + 라인배너
  + 크리에이터, 이벤트 섹션 (react-slick)
  + Mocking API 사용
  + 홈 화면 컴포넌트화

</details>
<details>
  <summary>2022-12-31 진행상황</summary>
  
  + 홈 화면 구현 40%
  + 헤더
  + 채용 정보 섹션
  + 푸터
 
+ 라우팅
  + NoMatch
  + IndexPage
</details>  





