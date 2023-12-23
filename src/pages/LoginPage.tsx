import { Login, FormData } from '../components';

const LoginPage = () => {
  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <>
      <h1>LoginPage</h1>
      <Login onSubmit={onSubmit} />
    </>
  );
};

export default LoginPage;
