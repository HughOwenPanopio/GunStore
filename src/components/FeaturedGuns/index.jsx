import PropTypes from 'prop-types'
import GunCard from '../GunCard'

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

function FeaturedGuns({ onSelection, selectedGun, addGun }) {
  if (!addGun) return null

  return (
    <div>
      <h1>Featured Guns</h1>
      <div style={GunContainerStyles}>
        {addGun.map((gun) => (
          <GunCard
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
  addGun: PropTypes.array,
}

export default FeaturedGuns
