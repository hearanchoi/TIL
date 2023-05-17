팝업창 뒤에 백그라운드를 어둡고 투명한 색으로 지정하려고 코드를 짰더니 적용이 되지 않았다.
알고보니 이전 작업자가 reactjs-popup을 사용한 거였다.

공식 사이트
https://react-popup.elazizi.com/
```css
.popup-overlay {
  background: rgba(0, 0, 0, 0.5);
}
[data-popup='tooltip'].popup-overlay {
  background: transparent;
}
```

css 파일에 따로 커스터마이징 해주어야 한다.</br></br>

z-index란?</br>
position 속성을 이용하면 요소를 겹치게 놓을 수 있는데 요소들의 수직 위치를 z-index 속성으로 정한다. 값은 정수이며, 숫자가 클 수록 위로 올라가고 숫자가 작을 수록 아래로 내려간다.</br></br>




***z-index가 적용되지 않을 경우 ***</br>
element.style로 적용되어 있어서
style.css로 적용이 되지 않았다. 이런경우에는 아래처럼 
```css
.popup-overlay {
  z-index: 2000
  !important;
}
```
!important로 우선순위를 높여주면 된다.
