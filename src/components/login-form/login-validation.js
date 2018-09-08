import memoize from 'lru-memoize';
import { createValidator, required, username } from 'utils/validation';

/*
  Login Validation

  Checks username and password given if it meets minium requirments.
*/
const loginValidation = createValidator({
  username: [username, required],
  password: required
});
export default memoize(10)(loginValidation);
