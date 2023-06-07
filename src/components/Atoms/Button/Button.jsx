import Icon from '../Icons/Icon';
import './Button.scss';

function Button(props) {
  const handleClick = (event) => {
    if (props.onClick) {
      event.preventDefault();
      props.onClick();
    }
  };

  return (
    <>
      <button className={props.type} onClick={handleClick}>
        {props.href ? (
          <a href={props.href} target={props.target} onClick={props.onClick}>
            {props.content} <Icon name={props.icon}/>
          </a>
        ) : (
          <>
            {props.content} <Icon name={props.icon}/> 
          </>
        )}
      </button>
    </>
  );
}

export default Button;
