import PropTypes from 'prop-types';
import './Button.scss';

function Button({ content, type }) {
  return (
    <>
      <button className={type}>{content}</button>
    </>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;



  