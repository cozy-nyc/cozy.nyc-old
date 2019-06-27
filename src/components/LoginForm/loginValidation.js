import memoize from 'lru-memoize';
import { createValidator, required, username } from 'utils/validation';

const loginValidation = createValidator({
  username: [username, required],
  password: required
});
export default memoize(10)(loginValidation);
