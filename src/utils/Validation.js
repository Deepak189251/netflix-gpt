export const EmailValidation = (email) => {
 
    const Email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    

    if(!Email) return "Please enter a valid email"

    
    
    return null
}

export const PasswordValidation = (password) => {

    const Password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); 


    if(!Password) return "Password should above 8 character must contains a lowercase, a uppercase, a special-string, a number"
    return null
}