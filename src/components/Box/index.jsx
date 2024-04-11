import PropTypes from 'prop-types'

function Box({ children, backgroundColor }) {
  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: backgroundColor,
        color: '#fff',
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}

Box.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
}
export default Box
