
export const checkdata = (email,password,username,isSignin)=>{
    if(!isSignin){
        const isUsername = /^[A-Za-z][A-Za-z0-9_]{6,29}$/.test(username)
        if(!isUsername) return "Invalid Username";
    }
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "password is not valid"

    return null;
}