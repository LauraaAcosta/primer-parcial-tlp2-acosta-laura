export const createUserValidation = [
  body('email')
  .notEmpty().withMessage('El email es requerido')
  .isEmail().withMessage('El email debe ser válido'),
  body('password')
  .notEmpty().withMessage('La contraseña es requerida')
  .isLength({min:8}).withMessage('La contraseña debe tener minimo 8 carácteres'),
  body('firstName')
  .notEmpty().withMessage('Es requerido')
  .isLength({min:2}).withMessage('Debe tener minimo 2 carácteres'),
  body('lastName')
   .notEmpty().withMessage('Es requerido')
  .isLength({min:2}).withMessage('Debe tener minimo 2 carácteres'),
  
  // TODO: completar las validaciones para crear un usuario
];
