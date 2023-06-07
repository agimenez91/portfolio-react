import Icon from '../Icons/Icon';
import './Button.scss';

function Button(props) {
  return (
    <>
      <button className={props.type}>
        {props.href ? (
          <a href={props.href} target={props.target}>
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





  