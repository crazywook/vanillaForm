# vanillaForm
순수js로 Form 데이타 바인딩을 편하게 할 수 있는 라이브러리를 만들어 본다.

# 작성계기
레거시 프로젝트 유지보수시 딱딱하게 하나씩 바인딩하고 계산하지 말고
요즘 프론트엔드 프레임워크 느낌처럼 만들어 보고 싶었다.
handlebar로 되어있어서 front부분에서 js data를 가지고 시작하는 것도 어색하고
SSR인데 따로 또 script부분에 template을 가지고 있는 것도 어색해서
렌더링은 돔을 셀렉트해서 바인딩하는 방식을 적용해서 만들어 보기로 했다.

# 회고
돔을 셀렉해서 바인딩하는 방식은 상당히 피곤한 작업이다.
차후 typescript 버전을 만들면서 template단위로 업뎃하는 방식으로 바꿔 볼 것이다.

# TODO
- [] renderData 함수를 formComponent에 추상화해서 구현한다.
- [] validation type으로 Float 구현
- [] validation string max 구현
# release
- 0.1.2 (2020-2-22)
  기업의 대출 한도 설정 계산 폼 예제
  valueTransformer number max체크 구현