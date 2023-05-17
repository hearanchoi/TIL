NVM이란?
Node Version Manager의 약자로 여러 버전의 Node.js 설치 및 버전 변경을 관리해주는 도구이다.
 </br></br>
Windows 운영체제용 NVM은 아래 github 에서 다운가능하다.
https://github.com/coreybutler/nvm-windows
</br>
README.md에서 Download Now! 버튼을 클릭해서 
nvm-setup.exe 파일을 다운받는다. 
설치후 명령 프롬프트 창에서 nvm --version을 입력하여
설치되었는지 확인한다.

명령어 정리
```
nvm list
```
현재 설치된 Node.js의 버전들을 확인할 수 있다.</br></br>

```
nvm install 18.14.0
```
18.14.0 버전의 Node.js를 설치한다. </br></br>
```
nvm use 18.14.0
```
18.14.0 버전의 Node.js를 사용한다.</br></br>

```
node -v
```
node -v을 통해 현재 사용중인  node버전을 확인한다.
 </br></br>

 1) brew설치
 2) brew를 활용하여 nvm설치
 ```
 brew install nvm
 ```
 만약 설치도중 man 페이지 관련 에러가 발생한다면, 권한 설정
 ```
sudo chown -R $(whoami) /usr/local/share/man/man3 /usr/local/share/man/man5 /usr/local/share/man/man7
Password:
sudo chmod u+w /usr/local/share/man/man3 /usr/local/share/man/man5 /usr/local/share/man/man7
 ```
 3)환경 변수 설정
  - ~/.nvm 디렉토리 생성
  ```
  mkdir ~/.nvm
  ```
 - ~/.bash_profile 설정
 ```
 export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion" ] && . "/usr/local/opt/nvm/etc/bash_completion"  # This loads nvm bash_completion
  ```
   - 적용
   ```
   source ~/.bash_profile
   ```
    -> 만약 bash쉘이 아니라 zsh 을 사용한다면, ~/.bash_profile 대신 ~/.zshrc 에 위에 과정을 해주면 된다.