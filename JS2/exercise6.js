// Write a function that could check if the password provided is strong or not. A strong password should have a minimum length of 8 characters
function isPasswordStrong(password) {
  if (password.length >= 8) {
    return "Password is strong";
  } else {
    return "password not strong";
  }
}
console.log(isPasswordStrong("1324567"));
console.log(isPasswordStrong("ogmypass101"));
