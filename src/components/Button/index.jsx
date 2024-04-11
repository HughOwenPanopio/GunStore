import PropTypes from 'prop-types'

const buttonStyle = {
  backgroundColor: '#222831',
  color: '#FFF',
  padding: '10px',
  borderRadius: '50px',
  fontSize: '15px',
  textTransform: 'uppercase',
  width: '70%',
}

function Button({ children }) {
  return (
    <>
      <button style={buttonStyle}>{children}</button>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node,
}

export default Button
