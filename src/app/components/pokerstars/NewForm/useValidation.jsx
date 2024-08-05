export const useValidate = () => {
  const handleValidate = (type, value) => {
    switch (type) {
      case "username":
        return validateUsername(value);
      case "password":
        return validatePassword(value);
      case "dob":
        return validateDob(value);
      case "name":
        return validateNames(value);
      default:
        return { response: false, error: "Type de validation invalide." };
    }
  };

  return handleValidate;
};

const validateNames = (name) => {
  const hasSpace =name.includes(" ")
  const isLengthValid = name.length >= 2;

  if (hasSpace) {
    return { response: false, error: "ne doit pas contenir d'espace." };
  }
  if (!isLengthValid) {
    return {
      response: false,
      error: "doit comporter au moins 2 caractères.",
    };
  }

  return { response: true, error: null };
};

const validateDob = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (age <= 17 || (age === 18 && monthDifference < 0)) {
    return { response: false, error: "Vous devez avoir au moins 18 ans." };
  }

  return { response: true, error: null };
};

const validatePassword = (password) => {
  const isTooShort = password.length < 8;
  const startsWithLetter = /^[A-Za-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpace = password.includes(" ")
  if (!startsWithLetter) {
    return {
      response: false,
      error: "Le mot de passe doit commencer par une lettre",
    };
  }
  if (hasSpace) {
    return {
      response: false,
      error: "Le mot de passe ne doit pas contenir d'espaces.",
    };
  }
  if (!hasDigit) {
    return {
      response: false,
      error: "Le mot de passe ne doit pas contenir d'espaces",
    };
  }
  if (isTooShort) {
    return {
      response: false,
      error: "Password length is less than 8 characters",
    };
  }

  return { response: true, error: null };
};

const validateUsername = (username) => {
  const onlyLowercase = /^[a-z]*$/.test(username);
  const atLeastFourLetters = username.length >= 4;
  const startsWithLowercase = /^[a-z]/.test(username);
  const containSpace = username.includes(" ");

  if (!startsWithLowercase) {
    return {
      response: false,
      error: "Le nom d'utilisateur doit commencer par une lettre minuscule.",
    };
  }
  if (containSpace) {
    return {
      response: false,
      error: "Le nom d'utilisateur ne doit pas contenir d'espace.",
    };
  }
  if (!atLeastFourLetters) {
    return { response: false, error: "4 caractères ou plus" };
  }
  if (!onlyLowercase) {
    return {
      response: false,
      error:
        "Le nom d'utilisateur ne doit contenir que des lettres minuscules.",
    };
  }

  return { response: true, error: null };
};
