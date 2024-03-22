import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('El nombre completo es requerido'),
    email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
    message: Yup.string().required('El mensaje es requerido').max(150, 'El mensaje debe tener como máximo 250 caracteres'),
  });

export default validationSchema;  