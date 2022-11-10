import './Button.scss'
import classnames from 'classnames'

const Button = ({ 
  children,
  size = 'medium',
  color = 'blue',
  outline,
  fullWidth,
  ...rest
}) => {

  const className = classnames('Button', size, color, { outline, fullWidth })

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}

export default Button