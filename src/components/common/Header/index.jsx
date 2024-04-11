import { Link } from 'react-router-dom'
import Box from '../../Box'

const bgColor = '#222831'

const textStyle = {
  textDecoration: 'none',
  color: '#fff',
}

const headerMenu = {
  display: 'flex',
  gap: '2rem',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'uppercase',
}

function Header() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: '105%',
          marginLeft: '-11rem',
        }}
      >
        <Box backgroundColor={bgColor}>
          <div style={headerMenu}>
            <Link to="/" style={textStyle}>
              <h3>Home</h3>
            </Link>
            <Link to="/brands" style={textStyle}>
              <h3>Brands</h3>
            </Link>

            <h3>Guns</h3>
          </div>
        </Box>
      </div>
    </>
  )
}

export default Header
