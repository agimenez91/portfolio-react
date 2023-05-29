import "./Icon.scss"

function Icon(props) {

  return (
    <>
      <svg className="icon" width="22" height="24" viewBox="0 0 22 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0733 19.4133L16.5 17.9067L17.2333 9.77333H7.58L7.34 7.06667H17.4733L17.74 4.41333H4.40667L5.15333 12.4267H14.34L14.0333 15.8667L11.0733 16.6667L8.11333 15.8667L7.92667 13.6533H5.26L5.64667 17.9067L11.0733 19.4133ZM0.5 0H21.6467L19.74 21.6L11.0733 24L2.40667 21.6L0.5 0Z"/>
      </svg>
      {props}
    </>
  )
  }

export default Icon
  