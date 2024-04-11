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

function FeaturedGuns({ onSelection, selectedGun }) {
  return (
    <div>
      <h1>Featured Guns</h1>
      <div style={GunContainerStyles}>
        {Guns.map((gun) => (
          <Gun
            key={gun.id}
            gun={gun}
            onSelection={onSelection}
            selectedGun={selectedGun}
          />
        ))}
      </div>
    </div>
  )
}

FeaturedGuns.propTypes = {
  onSelection: PropTypes.func,
  selectedGun: PropTypes.object,
}

export default FeaturedGuns

const gunStyle = {
  textAlign: 'center',
}

function Gun({ gun, onSelection, selectedGun }) {
  const isSelected = selectedGun?.id === gun.id

  return (
    <>
      <div style={gunStyle}>
        <img
          src={gun.imageURL}
          alt={gun.name}
          style={{ width: '100%', height: 'auto' }}
        />
        <h3>{gun.name}</h3>
        <Button type="button" onClick={() => onSelection(gun)}>
          View Item
        </Button>
      </div>
    </>
  )
}

Gun.propTypes = {
  gun: PropTypes.object,
  onSelection: PropTypes.func,
  selectedGun: PropTypes.object,
}
