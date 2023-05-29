import './Button.scss';

function Button({ content, type }) {
  return (
    <>
      <button className={type}>{content}</button>
    </>
  );
}

export default Button;



  