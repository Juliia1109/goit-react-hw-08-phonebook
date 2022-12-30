import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoginForm from 'components/LoginForm';

export default function Login() {
  return (
    <div>
         <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      </HelmetProvider>
      <LoginForm />
    </div>
  );
}
