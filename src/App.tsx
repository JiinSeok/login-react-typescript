import {ChangeEvent, MouseEvent, useEffect, useRef, useState} from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Label from './components/Label';
import Alert from './components/Alert';
import { useSetLocale, useTranslate } from './translate';

function App() {
  const [values, setValues] = useState<{
    username: string; // 타입 추론 아닌 타입 명시(제네릭)
    password: string;
  }>({
    username: '',
    password: '',
  });
  const formRef = useRef<HTMLFormElement>(null); // 제네릭으로 타입 명시(제네릭)
  const t = useTranslate();
  const setLocale = useSetLocale();

  useEffect(() => {
    const form = formRef.current;
    if (form) form['username'].focus();
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const nextValues = {
      ...values,
      [name]: value,
    };
    setValues(nextValues);
  }

  function handleClick(e: MouseEvent) {
    e.preventDefault();

    const message = `${values.username}님 환영합니다`;
    alert(message);
  }

  return (
    <>
        <form className="login" ref={formRef}>
          <h1 className="login-title">{t('signin')}</h1>
          <Label>{t('username')}</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder={t('email or phone number')}
            value={values.username}
            onChange={handleChange}
          />
          <Label>{t('password')}</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder={t('password')}
            value={values.password}
            onChange={handleChange}
          />
          <div className="login-forgot">
            <a className="login-forgot-link" href="#login">
              {t('forgot your password?')}
            </a>
          </div>
          <Button id="submit" onClick={handleClick}>
            {t('signin')}
          </Button>
          <div className="login-signup">
            {t('new user?')}{' '}
            <a className="login-signup-link" href="#signup">
              {t('signup')}
            </a>
          </div>
          <div className="locale">
            <span onClick={() => setLocale('ko')}>한국어</span> |{' '}
            <span onClick={() => setLocale('en')}>English</span>
          </div>
        </form>
        <Alert level="info">
            안내 메시지 예시입니다.
        </Alert>
        <Alert level="warn">
            경고 메시지 예시입니다.
        </Alert>
    </>
  );
}

export default App;
