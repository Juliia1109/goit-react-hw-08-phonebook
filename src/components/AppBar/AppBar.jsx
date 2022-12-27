import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks';
import css from './AppBar.module.css';

export default function AppBar () {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
