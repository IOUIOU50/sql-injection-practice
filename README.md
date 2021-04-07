# node.js를 활용한 SQL-Injection

## 개요

* 웹 보안 취약점 중 하나인 **SQL Injection**을 수행해보는 과제
* 백엔드는 `Node.js`를 이용
* 프론트엔드는 `ejs`를 이용
* DBMS는 `MySQL`을 이용

## Usage

1. npm 프로젝트를 원하는 폴더에 생성
    > (clone할 폴더에서)  
    > $ git clone https://github.com/IOUIOU50/sql-injection-practice.git

2. 모듈설치
    > $ npm install

3. DB 설정

    루트폴더에 `db.js`파일 생성  

    <img src='https://user-images.githubusercontent.com/57579709/113850993-fb9b0180-97d5-11eb-9364-442178a84842.png'>


    * DB는 본인 DB에 맞는 설정이 있어야 함
    그리고 아래와같이 작성

    ```javascript
    module.exports = {
        host: 'IP주소',
        user: 'DB유저이름',
        password: 'DB패스워드',
        database: '데이터베이스이름'
    }
    ```

    예를들어 `로컬DB`의 ID/PW가 각각 `myDB/mypassword`인 `security` DB를 사용하려면

    ```javascript
    module.exports = {
        host: 'localhost',
        user: 'myDB',
        password: 'mypassword',
        database: 'security'
    }
    ```

    와 같이 작성

    DB관련 정보는  
    * 테이블 이름 : `user`
    * 테이블 속성
        * `user_id` : VARCHAR(50)
        * `user-pw` : VARCHAR(50)

4. 서버를 키고, **SQL-Injection** 수행

* 회원가입은 구현되어있지 않으므로 `insert`를 통해 id와 pw를 강제삽입
* 예시는 `user/1234`로 진행
* id는 `user`에 잘못된 비밀번호를 입력하면 로그인 실패
* 그러나, 비밀번호에 `' or ''='`을 복사하여 입력하면 로그인 성공을 확인
