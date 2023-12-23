import {
  ChangeEvent, FC, useState,
} from 'react';

export type FormData = {
  email: string;
  password: string;
};

const FORM_INITIAL_STATE: FormData = {
  email: '',
  password: '',
};

type Props = {
  onSubmit: (formData: FormData) => void;
};

const Login: FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>(FORM_INITIAL_STATE);

  const onResetForm = () => {
    setFormData(FORM_INITIAL_STATE);
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <form
      id="login-form"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(formData);
      }}
    >
      <section>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={onInputChange}
          value={formData.email}
        />
      </section>

      <section>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={onInputChange}
          value={formData.password}
        />
      </section>

      <section>
        <button
          id="reset-btn"
          type="button"
          onClick={onResetForm}
        >
          Cancel
        </button>

        <button type="submit">Login</button>
      </section>
    </form>
  );
};

export default Login;
