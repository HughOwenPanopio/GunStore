import { useState } from 'react'
import FeaturedGuns from '../FeaturedGuns'
import ViewGun from '../ViewGun'

function HomePage() {
  const [selectedGun, setSelectedGun] = useState(null)

  function handleSelectedGun(gun) {
    setSelectedGun((cur) => {
      console.log(cur) // Check the current state before updating
      return cur?.id === gun.id ? null : gun
    })
  }

  return (
    <>
      <FeaturedGuns selectedGun={selectedGun} onSelection={handleSelectedGun} />
      {selectedGun && <ViewGun selectedGun={selectedGun} />}
    </>
  )
}

export default HomePage
