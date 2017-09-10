import analyze from './analyze';
import isEmpty from './utils/isEmpty';

export { analyze, isEmpty };
export default (message, defaultMessage) => {

  const { errors } = message;

  if (errors && ! isEmpty(errors)) {
    return analyze(errors, defaultMessage);
  }

  return analyze(message, defaultMessage);
};
