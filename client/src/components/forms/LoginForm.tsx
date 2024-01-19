import { NavLink } from 'react-router-dom';
import { InputText } from '../inputs/InputText';
import './form.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputText register={register} error={errors} required={true} id="email" label="Email" />
      <section className="form__section" />
      <InputText register={register} error={errors} required={true} id="password" label="Password" type="password" />
      <button className="form__button">Login</button>
      <div className="footer__form">
        <span>Don't have an account?</span>

        <NavLink to={'/register'}>
          <span>Sign Up</span>
        </NavLink>
      </div>
    </form>
  );
};
