# 이미지 pull

`**docker hub**`: **Docker에서 관리하는 호스팅된 Docker 레지스트리**

`**docker image**`: **서비스 운영에 필요한 서버 프로그램, 소스코드 및 라이브러리, 컴파일된 실행 파일을 묶는 형태**

`**docker container**`: **이미지를 실행한 상태**

---

**pull**: `docker hub`에서 `image`를 다운로드 받는 행위

**run**: `image`를 실행 시키는 행위, 이미지가 `container`가 됨

---

### docker에서 이미지 pull하는 법

```powershell
docker pull httpd
```

<img src="./이미지 pull /%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-21_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.44.54.png" alt="docker pull" />

---

### image가 잘 설치 되었는지 확인하기

```powershell
docker images
```

<img src="./이미지 pull /%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-21_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11.45.55.png" alt="docker images" />

위 사진을 보면 우리가 설치한 httpd가 잘 설치된 것을 볼 수 있다.
