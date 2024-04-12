import PropTypes from 'prop-types'

function Button({ children, onClick, width }) {
  const buttonStyle = {
    backgroundColor: '#222831',
    color: '#FFF',
    padding: '10px',
    borderRadius: '50px',
    fontSize: '15px',
    textTransform: 'uppercase',
    width: width ? width : '70%',
    cursor: 'pointer',
  }

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
  width: PropTypes.string,
}

export default Button
