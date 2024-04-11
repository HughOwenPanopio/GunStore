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

function Button({ children, onClick }) {
  return (
    <>
      <button style={buttonStyle} type="submit" onClick={onClick}>
        {children}
      </button>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default Button
