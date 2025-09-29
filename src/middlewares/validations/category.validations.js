export const createCategoryValidation = [
body('description')
.notEmpty().withMessage('Este campo es requerido')
.isLength({min:10, max: 500}).withMessage('Debe tener mínimo 10 carácteres'), 

  // TODO: completar las validaciones para crear una categoria
];
