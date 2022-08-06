# Paradise City
: 기업체(파라다이스시티) 전체 페이지 제작(11page)
 
> [ 기간: 2022.04.22 ~ 2022.05.09 ]
>
> 주소: https://dygreen.github.io/paradisecity/index.html
***
![스크린샷 2022-05-07 오후 8 10 28](https://user-images.githubusercontent.com/95523625/173270895-a6cfe1a0-f75d-413b-87a2-2f990d274040.png)

### Page
: Home + Sub page(9p) + Login page(1p) <br>
과정) 스토리보드 ~ 웹페이지 구현까지 직접 실행
***

### ***Main page***
: 풀다운/아코디언 메뉴로 서브 페이지로 이동 가능, 호텔 예약 창이 있는 메인 페이지
* 풀다운(100%) 메뉴
* 아코디언 메인 비주얼 메뉴(가로방향)
* 호텔 예약 배너(select box | jQuery datePicker | +/- button...)

### ***Sub page***
1. Hotel = 종합안내 + hotel1 + hotel2
* '종합안내' 페이지 > 각 호텔 페이지 소개 및 이동 가능
* onload: 페이지 로드 애니메이션 효과(텍스트+배경)
* 'hotel 1,2' 페이지 > 호텔룸 이미지 갤러리 형태로 확인 가능
* 탭 메뉴 + 갤러리(썸네일/좌우 버튼)

2. Dining = 종합안내 + dining1 + dining2
* '종합안내' 페이지 > 각 다이닝 페이지 소개 및 이동 가능
* onload: 페이지 로드 애니메이션 효과(텍스트+배경)
* 'dining 1,2' 페이지 > 다이닝 시설 확인 가능
* onload: 페이지 로드 애니메이션 효과(요소가 등장+올라옴)
* scroll 효과: scroll 위치에 따른 요소 애니메이션 효과

3. Art-tainment
* 시설안내 페이지 > 스크롤을 내리며 호텔 내 시설 확인 가능
* position: sticky 활용
* scroll 효과: scroll 위치에 따라 요소 투명도/크기 조절 

4. Wedding
* 웨딩 시스템 소개 페이지 > 텍스트 및 탭 메뉴를 통한 시설안내
* position: sticky로 이미지 고정 & 텍스트 스크롤 효과
* 버튼 요소가 움직이는 탭 메뉴

5. Activities
* 호텔 내 추천코스 안내 페이지 > 총 코스 슬라이드 비주얼 및 텍스트로 안내
* 위로 올라가는 자동 슬라이드(up,down/bottom 버튼)
* float를 통해 코스 요소 배치

Login
* 로그인 페이지 > 로그인 및 예약번호를 확인할 수 있는 페이지
* 탭 메뉴를 통한 로그인/예약조회 구분

***
#### _* 자세한 프로젝트 실행과정 정리 (노션: https://prickle-turn-785.notion.site/Paradise-City-322a0d4429e44106aaac32f979face00)_
