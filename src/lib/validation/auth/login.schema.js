import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
  password: Yup.string()
    .required('رمز عبور الزامی است')
    .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد'),
});
