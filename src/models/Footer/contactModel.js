export const validateFormData = (formData) => {
    const { name, email, subject, message } = formData;
    return name && email && subject && message; 
}