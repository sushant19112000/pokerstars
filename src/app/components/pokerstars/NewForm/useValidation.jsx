import React from 'react'
export const useValidate = () => { 
    const handleValidate=(type,value)=>{
    switch (type) {
        case 'username':
           return validateUsername(value)
          break;
        case 'password':
            return validatePassword(value)
          break;
        case 'dob':
            return validateDob(value)
            break;
    }
  }
  return useValidate;
}



const validateNames = (name) => {
    // Check if the name contains at least one space
    const hasSpace = /\s/.test(name);

    // Check if the length of the name is at least 2 characters
    const isLengthValid = name.length >= 2;

    // Validate and return appropriate response and error message
    if (!hasSpace) {
        return { response: false, error: "Name must contain at least one space" };
    }
    if (!isLengthValid) {
        return { response: false, error: "Name must be at least 2 characters long" };
    }

    return { response: true, error: null };
};

const validateDob = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (age < 17) {
      return { response: false, error: "You must be at least 17 years old." };
    } 
    else{
        return { response: true, error: "" };
    }
  };

const validatePassword = (password) => {
    // Check if the password is too short
    const isTooShort = password.length < 8;
    
    // Check if the password starts with a letter
    const startsWithLetter = /^[A-Za-z]/.test(password);
    
    // Check if the password contains at least one digit
    const hasDigit = /\d/.test(password);
    
    // Check if the password contains a space
    const hasSpace = /\s/.test(password);

    // Validate and return appropriate response and error message
    if (isTooShort) {
        return { response: false, error: "Password length is less than 8 characters" };
    }
    if (!startsWithLetter) {
        return { response: false, error: "Password must start with a letter" };
    }
    if (!hasDigit) {
        return { response: false, error: "Password must contain at least one digit" };
    }
    if (hasSpace) {
        return { response: false, error: "Password must not contain spaces" };
    }
    
    return { response: true, error: null };
}


function validateUsername(username) {
    // Check if the username contains only lowercase alphabets
    const onlyLowercase = /^[a-z]*$/.test(username);
    
    // Check if the username contains at least 4 letters
    const atLeastFourLetters = username.length >= 4;
    
    // Check if the username starts with a lowercase alphabet
    const startsWithLowercase = /^[a-z]/.test(username);
    
    // Check if the username contains a space
    const containsSpace = username.includes(" ");

    // Validate and return appropriate response and error message
    if (!atLeastFourLetters) {
        return { response: false, error: "Username length is not greater than 4" };
    }
    if (!onlyLowercase) {
        return { response: false, error: "Username must contain only lowercase alphabets" };
    }
    if (!startsWithLowercase) {
        return { response: false, error: "Username must start with a lowercase alphabet" };
    }
    if (!containsSpace) {
        return { response: false, error: "Username must contain a space" };
    }
    
    return { response: true, error: null };
}