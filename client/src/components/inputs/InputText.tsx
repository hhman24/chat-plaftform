import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import './inputText.scss';

interface Props {
  label?: string;
  id?: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors;
}

export const InputText = ({
  label = 'Email',
  id = 'email',
  type = 'text',
  register,
  error,
  required = false,
}: Props) => {
  return (
    <div className="input__container">
      <label className={`label  ${error[id] ? 'label__error' : ''}`} htmlFor={id}>
        {error[id] ? label + ' ' + error[id]?.message : label}
      </label>
      <input className={`input`} id={id} type={type} {...register(id, { required })} />
    </div>
  );
};
