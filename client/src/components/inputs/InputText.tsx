import './InputText.scss';

interface Props {
  label?: string;
  id?: string;
  type?: string;
}

export const InputText = ({ label = 'Email', id = 'email', type = 'text' }: Props) => {
  return (
    <div className="input__container">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input className="input" id={id} type={type} />
    </div>
  );
};
