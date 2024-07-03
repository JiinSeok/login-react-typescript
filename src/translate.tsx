import { createContext, useContext, useState } from 'react';

type Locale = 'ko' | 'en';

interface LocaleContextValue { //
    locale: Locale;
    setLocale: (value: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'ko',
  setLocale: () => {},
});

export function LocaleContextProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ko');

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale: setLocale as any,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

const dict = { // typeof dict[Locale]은 'ko' | 'en'이다.
  ko: {
    signin: '로그인',
    username: '아이디',
    'email or phone number': 'Email 또는 전화번호',
    password: '비밀번호',
    'forgot your password?': '비밀번호를 잊으셨나요?',
    'new user?': '회원이 아니신가요?',
    signup: '가입하기',
  },
  en: {
    signin: 'Signin',
    username: 'Username',
    'email or phone number': 'Email or phone number',
    password: 'Password',
    'forgot your password?': 'Forgot your password?',
    'new user?': 'New user?',
    signup: 'Signup',
  },
};

function useLocale() {
  const { locale } = useContext(LocaleContext);
  return locale;
}

export function useSetLocale() {
  const { setLocale } = useContext(LocaleContext);
  return setLocale;
}

export function useTranslate() {
  const locale = useLocale();
  const t = (key: keyof typeof dict[Locale]) => dict[locale][key]; // 키의 타입:  keyof typeof dict[Locale]를 사용하면 dict 객체의 특정 로케일에서 사용할 수 있는 키들만을 허용하는 타입
  return t;
}
