<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🚀 Bran Solution 웹사이트

> AI Studio에서 생성된 배관 서비스 웹사이트입니다.

## 📌 라이브 데모

- **커스텀 도메인 (GoDaddy)**: https://bransolution.com (DNS 설정 후)
- **GitHub Pages 기본 URL**: https://ghdwnself.github.io/bran-test (커스텀 도메인 미설정 시)

---

## 🖥️ 로컬에서 실행하기

**필수 조건:** Node.js

```bash
# 1. 의존성 설치
npm install

# 2. API 키 설정 (선택사항)
# .env.local 파일을 만들고 GEMINI_API_KEY를 설정하세요

# 3. 개발 서버 실행
npm run dev
```

브라우저에서 http://localhost:3000 으로 접속하세요.

---

## 🌐 배포 방법 선택

### 옵션 A: 커스텀 도메인 사용 (GoDaddy 등) ⭐ 추천

현재 설정이 이 방식으로 되어 있습니다. GoDaddy 도메인이 있으면 아래 섹션을 참고하세요.

### 옵션 B: GitHub Pages 기본 URL 사용

커스텀 도메인이 없다면 다음 단계를 따르세요:

1. `public/CNAME` 파일 삭제
2. `vite.config.ts`에서 `base: '/'`를 `base: '/bran-test/'`로 변경
3. main 브랜치에 푸시

그러면 https://ghdwnself.github.io/bran-test 에서 접속 가능합니다.

---

## 🌍 GoDaddy 커스텀 도메인 설정 (상세 가이드)

### 1단계: GitHub Pages 활성화
1. 저장소 → **Settings** → **Pages** 이동
2. **Source**에서 "GitHub Actions" 선택
3. main 브랜치에 푸시하면 자동 배포됨

### 2단계: GoDaddy DNS 설정

#### A. 기본 도메인 (예: `bransolution.com`)

1. [GoDaddy](https://godaddy.com) 로그인
2. **My Products** → 도메인 선택 → **DNS** 관리
3. **A 레코드** 추가/수정:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 1시간 |
| A | @ | 185.199.109.153 | 1시간 |
| A | @ | 185.199.110.153 | 1시간 |
| A | @ | 185.199.111.153 | 1시간 |

#### B. WWW 서브도메인 추가 (선택사항)

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | ghdwnself.github.io | 1시간 |

### 3단계: CNAME 파일 확인
`public/CNAME` 파일에 도메인이 설정되어 있는지 확인:
```
bransolution.com
```

### 4단계: GitHub에서 커스텀 도메인 설정
1. 저장소 → **Settings** → **Pages** 이동
2. **Custom domain**에 `bransolution.com` 입력
3. **Save** 클릭
4. **Enforce HTTPS** 체크 (DNS 전파 후 활성화됨)

### ⏱️ 주의사항
- DNS 변경은 **최대 48시간**까지 걸릴 수 있습니다
- HTTPS는 DNS 전파 완료 후 자동으로 설정됩니다
- 문제가 있으면 브라우저 캐시를 지우고 다시 시도하세요

---

## 📁 프로젝트 구조

```
bran-test/
├── App.tsx              # 메인 앱 컴포넌트
├── index.html           # HTML 템플릿
├── index.tsx            # React 진입점
├── components/          # React 컴포넌트
├── public/
│   └── CNAME           # 커스텀 도메인 설정
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages 자동 배포
└── package.json        # 프로젝트 설정
```

---

## 🛠️ 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `npm install` | 의존성 설치 |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과물 미리보기 |

---

## ❓ 문제 해결

### "404 Page Not Found" 오류
- GitHub Pages 설정에서 Source가 "GitHub Actions"인지 확인
- Actions 탭에서 배포가 성공했는지 확인

### 커스텀 도메인이 작동하지 않음
1. DNS 레코드가 올바르게 설정되었는지 확인
2. `public/CNAME` 파일에 도메인이 정확히 입력되었는지 확인
3. DNS 전파를 기다리세요 (최대 48시간)

### HTTPS가 활성화되지 않음
- DNS 전파가 완료될 때까지 기다리세요
- GitHub Pages 설정에서 "Enforce HTTPS" 옵션을 확인하세요

---

## 📞 지원

문제가 있으면 [Issues](https://github.com/ghdwnself/bran-test/issues)에 문의해주세요.
