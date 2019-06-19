// https://stackoverflow.com/a/32686261
const mailRegExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const isValidMail = (mail: string) => mailRegExp.test(mail);

const passwordPattern =
  '^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!#$%&? "]).*$';
const passwordRegExp = new RegExp(passwordPattern);
const isValidPassword = (password: string) => passwordRegExp.test(password);

const apiKeyPattern = '[\\da-z]{45}';
const isValidAPIKey = (apiKey: string) =>
  new RegExp(apiKeyPattern).test(apiKey);

export interface ValidityIconProps {
  type: 'password' | 'mail' | 'apiKey';
  value: string;
}

export {
  mailRegExp,
  isValidMail,
  passwordPattern,
  passwordRegExp,
  isValidPassword,
  apiKeyPattern,
  isValidAPIKey,
};
