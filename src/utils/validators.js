export function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(String(email || "").trim());
}

export function validateLogin(values) {
  const errors = {};

  if (!values.email || !values.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!values.password || !values.password.trim()) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
}
