import './Button.scss';

function Button(props) {
  return (
    <>
      <button className={props.type}>{props.content}{props.icon}</button>
    </>
  );
}

export default Button;



  