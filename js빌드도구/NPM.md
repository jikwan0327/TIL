# NPM

# 프론트엔드 개발에 Node.js가 필요한 이유

### 최신 스펙으로 개발할 수 있다

웹팩, NPM 같은 노드 기술로 만들어진 환경에서 사용할 때 비로소 자동화된 프론트엔드 개발환경을 갖출 수 있다. 또 Typescript, SASS 같은 고수준 프로그래밍 언어를 사용하려면 전용 트랜스파일러가 필요한데 Node.js 환경이 뒷받침 되어야 우리가 말하는 프론트엔드 개발 환경을 만들 수있다.

### 빌드 자동화

빌드 과정에 사용된다.

라이브러리 의존성을 해결하고, 각종 테스트를 자동화하는데도 사용된다.

### 개발 환경 커스터마이징

자동화 툴을 사용할 수 없는 상황에 커스터마이징하기 위해서는 node.js가 필요하다.

# npm 커맨드

```jsx
access,
  adduser,
  audit,
  bin,
  bugs,
  cache,
  ci,
  completion,
  config,
  dedupe,
  deprecate,
  diff,
  dist - tag,
  docs,
  doctor,
  edit,
  exec,
  explain,
  explore,
  find - dupes,
  fund,
  get,
  help,
  hook,
  init,
  install,
  install - ci - test,
  install - test,
  link,
  ll,
  login,
  logout,
  ls,
  org,
  outdated,
  owner,
  pack,
  ping,
  pkg,
  prefix,
  profile,
  prune,
  publish,
  query,
  rebuild,
  repo,
  restart,
  root,
  run - script,
  search,
  set,
  set - script,
  shrinkwrap,
  star,
  stars,
  start,
  stop,
  team,
  test,
  token,
  uninstall,
  unpublish,
  unstar,
  update,
  version,
  view,
  whoami;
```

위와 같이 많은 커맨드들이 존재

install, test, start를 자주 씀

## npm 커맨드 커스텀하기

위 커맨드들 이외에 새로운 커맨드를 생성할 수 있다.

```json
//package.json
{
  "name": "sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "echo \"여기에 빌드 스크립트를 추가합니다\" "
  },
  "author": "",
  "license": "ISC"
}
```

위와 같이 echo 명령어를 이용하여 build 스크립트를 만들어 보았다.

scripts 안에 만들고 싶은 npm 커맨드를 커스텀 할 수 있다.

### 실행하기

커스텀 커맨드를 실행할 때에는 터미널에 `npm run <커맨드이름>`을 작성하여 실행한다.

```jsx
npm run build
```

위에서 만든 build커맨드를 실행할 때에는 위와 같이 입력

# 외부 패키지 관리하는 법

# 패키지 설치

### 1. CDN을 이용하는 방법

CDN: 컨텐츠 전송 네트워크

CDN으로 제공하는 라이브러리를 직접 가져 오는 방식

```jsx
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
```

CDN 서버 장애로 인해 외부 라이브러리를 사용할 수 없다면 필수 라이브러리를 가져오지 못해 웹 어플리케이션은 정상적으로 동작하지 않을 것이다.

### 2. 직접 다운로드하는 방법

CDN을 사용하지 않기 때문에 장애와 독립적으로 웹 어플리케이션을 제공할 수 있음

라이브러리가 업데이트 된다면 매번 업데이트를 해줘야 한다.

### 3. NPM을 활용하는 방법

```jsx
$ npm install react
```

최신 버전의 react를 NPM 저장소에서 찾아 우리 프로젝트로 다운로드 하는 명령어다. package.json에는 설치한 패키지 정보를 기록한다.

package.json:

```jsx
{
  "dependencies": {
    "react": "^16.12.0"
  }
}
```

버전 16.12.0을 설치했다는 의미

### 4. 유의적 버전

프로젝트에서 패키지의 버전을 엄격하게 제한하거나 느슨하게 풀어 놓는다면 문제가 생긴다.

따라서 버전 관리를 위한 규칙이 필요한데 이것을 **“유의적 버전”**이라고 한다.

유의적 버전에는

- 주 버전(Major Version): 기존 버전과 `호환되지 않게 변경`한 경우
- 부 버전(Minor version): 기존 버전과 호환되면서 `기능이 추가`된 경우
- 수 버전(Patch version): 기존 버전과 호환되면서 `버그를 수정`한 경우

"^16.12.0"의 의미는

주 버전이 16, 부 버전이 12, 수 버전이 0이다.

### 5. 버전의 범위

특정 버전을 사용하는 경우

```jsx
1.2.3
```

특정 버전보다 높거나 낮을 경우는 다음과 같이 명시

```jsx
>1.2.3
>=1.2.3
<1.2.3
<=1.2.3
```

틸트(~)와 캐럿(^)을 이용해 범위를 명시

```jsx
~1.2.3
^1.2.3
```

**틸트(~)**는

마이너 버전이 명시되어 있으면 패치버전만 변경한다. 예를 들어 ~1.2.3 표기는 1.2.3 부터 1.3.0 미만 까지를 포함한다. 마이너 버전이 없으면 마이너 버전을 갱신한다. ~0 표기는 0.0.0부터 1.0.0 미만 까지를 포함한다.

**캐럿(^)**은

정식버전에서 마이너와 패치 버전을 변경한다. 예를 들어 ^1.2.3 표기는 1.2.3부터 2.0.0 미만 까지를 포함한다. 정식버전 미만인 0.x 버전은 패치만 갱신한다. ^0 표기는 0.0.0부터 0.1.0 미만 까지를 포함한다.

보통 라이브러리 정식 릴리즈 전에는 패키지 버전이 수시로 변한다. 0.1에서 0.2로 부버전이 변하더라도 하위 호환성을 지키지 않고 배포하는 경우가 빈번하다. ~0로 버전 범위를 표기한다면 0.0.0부터 1.0.0미만까지 사용하기 때문에 하위 호완성을 지키지 못하는 0.2로도 업데이트 되어버리는 문제가 생길수 있다.

반면 캐럿을 사용해 ^0.0으로 표기한다면 0.0.0부터 0.1.0 미만 내에서만 버전을 사용하도록 제한한다. 따라서 하위 호완성을 유지할 수 있다.

<aside>
💡 틸트와 달리 캐럿 사용시 하위 호환성을 유지할 수 있다.

</aside>
