import { useState } from 'react'
import FeaturedGuns from '../FeaturedGuns'
import ViewGun from '../ViewGun'
import PropTypes from 'prop-types'
import Guns from '../../Guns.json'
import AddGun from '../AddGun'
import Button from '../Button'

function HomePage() {
  const [selectedGun, setSelectedGun] = useState(null)
  const [addingGun, setAddingGun] = useState(Guns)
  const [showAddGun, setShowAddGun] = useState(false)

  function handleSelectedGun(gun) {
    setSelectedGun((cur) => {
      console.log(cur) // Check the current state before updating
      return cur?.id === gun.id ? null : gun
    })
  }

  function handleAddGun(gun) {
    setAddingGun((addingGun) => [...addingGun, gun])
    setShowAddGun(false)
  }

  function handleShowAddGun() {
    setShowAddGun((show) => !show)
  }

  return (
    <>
      <FeaturedGuns
        selectedGun={selectedGun}
        onSelection={handleSelectedGun}
        addGun={addingGun}
      />
      {showAddGun && <AddGun onAddGun={handleAddGun} />}
      {selectedGun && <ViewGun selectedGun={selectedGun} />}
      <div style={{ width: '20%', margin: '2rem auto' }}>
        <Button onClick={handleShowAddGun}>
          {showAddGun ? 'Close Add Gun' : 'Show Add Gun'}
        </Button>
      </div>
    </>
  )
}

HomePage.propTypes = {
  addingGun: PropTypes.func,
}
export default HomePage
