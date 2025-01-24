import { object, string, number } from 'yup';

let userSchema = object().shape({
    name: string().required(),
    email: string().email().required(),
    phone: number().min(10, 'El teléfono debe tener un mínimo de 10 dígitos').max(12, 'El teléfono no puede contener más de 12 dígitos').required(),
});


const validateForm = async (formData) => {
    try {
        await userSchema.validate(formData);
        return {
            isValid: true,
            message: 'Formulario validado correctamente'
            
        }
    } catch (error) {
        console.error(error);
        return {
            isValid: false,
            message: error.message
        }
    }
}


export default validateForm;