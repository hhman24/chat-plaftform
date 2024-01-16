import { InputText } from '../inputs/InputText';
import './RegisterForm.scss';

export const RegisterForm = () => {
  return (
    <form className="form">
      <InputText />
      <section className="form__section">
        <InputText id="firstName" label="First Name" />
        <InputText id="lastName" label="Last name" />
      </section>
      <InputText id="password" label="Password" type="password" />
      <button className="form__button">Create my account</button>
    </form>
  );
};
