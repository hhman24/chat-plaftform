import { NavLink } from 'react-router-dom';
import { InputText } from '../inputs/InputText';
import './form.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export const RegisterForm = () => {
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
      <InputText register={register} error={errors} required={true} />
      <section className="form__section">
        <InputText register={register} error={errors} id="firstName" label="First Name" />
        <InputText register={register} error={errors} id="lastName" label="Last name" />
      </section>
      <InputText register={register} error={errors} id="password" label="Password" type="password" required={true} />
      <button className="form__button">Create my account</button>
      <div className="footer__form">
        <span>Already have a account?</span>
        <NavLink to={'/login'}>
          <span>Login</span>
        </NavLink>
      </div>
    </form>
  );
};
