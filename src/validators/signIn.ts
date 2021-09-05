import * as Yup from 'yup';

export const signInValidator = Yup.object().shape({
  login: Yup.string().required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});
