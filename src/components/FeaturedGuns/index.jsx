import Guns from '../../Guns.json'
import PropTypes from 'prop-types'
import Button from '../Button'

const GunContainerStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: 'auto',
  alignItems: 'center',
  gap: '2rem',
  width: '50%',
  height: '50%',
  cursor: 'pointer',
}

function FeaturedGuns() {
  return (
    <div>
      <h1>Featured Guns</h1>
      <div style={GunContainerStyles}>
        {Guns.map((gun) => (
          <Gun key={gun.id} name={gun.name} image={gun.imageURL} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedGuns

const gunStyle = {
  textAlign: 'center',
}

function Gun({ name, image }) {
  return (
    <>
      <div style={gunStyle}>
        <img src={image} alt={name} style={{ width: '100%', height: 'auto' }} />
        <h3>{name}</h3>
        <Button>View Item</Button>
      </div>
    </>
  )
}

Gun.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
}
