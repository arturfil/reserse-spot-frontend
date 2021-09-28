const CustomButton = ({title, func, btnStyles, className}) => {
  
  return (
    <button 
      style={btnStyles}
      className={`reserve btn ${className}`}
      onClick={func}
    >
      {title}
    </button>
  )
}

export default CustomButton;