import memoize from 'lru-memoize';
import { createValidator, required, email, username, match } from 'utils/validation';

const registerValidation = createValidator({
  username: [required, username],
  email: [required, email],
  password: required,
  password_confirmation: [required, match('password')]
});
export default memoize(10)(registerValidation);
