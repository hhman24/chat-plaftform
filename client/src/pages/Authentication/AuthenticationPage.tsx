import { RegisterForm } from '../../components/forms/RegisterForm';
import './authPage.scss';

function AuthenticationPage() {
  return (
    <div className="auth__container">
      <RegisterForm />
    </div>
  );
}

export default AuthenticationPage;
