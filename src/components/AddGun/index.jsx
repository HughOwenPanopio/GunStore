import { useState } from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'
import './style.css'

function AddGun({ onAddGun }) {
  const [brand, setBrand] = useState('')
  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [description, setDescription] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [caliber, setCaliber] = useState('')
  const [magazineCapacity, setMagazineCapacity] = useState('')
  const [length, setLength] = useState('')
  const [barrelLength, setBarrelLength] = useState('')

  function handleAddItem(e) {
    e.preventDefault()

    if (
      !brand ||
      !name ||
      !imageURL ||
      !description ||
      !weight ||
      !height ||
      !magazineCapacity ||
      !caliber ||
      !length ||
      !barrelLength
    )
      return

    const newItem = {
      id: crypto.randomUUID(),
      name,
      imageURL,
      description,
      weight,
      height,
      caliber,
      magazineCapacity,
      length,
      barrelLength,
    }
    console.log(newItem)

    onAddGun(newItem)

    setBrand('')
    setName('')
    setImageURL('')
    setDescription('')
    setWeight('')
    setHeight('')
    setCaliber('')
    setMagazineCapacity('')
    setLength('')
    setBarrelLength('')
  }

  return (
    <>
      <div className="container">
        <form
          onSubmit={handleAddItem}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            border: '3px solid #D6DAC8',
            borderRadius: '1rem',
            boxShadow: '5px 4px 6px rgba(0, 0, 0, 0.3)',
            padding: '1rem',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            backgroundColor: '#DDDDDD',
          }}
        >
          <input
            type="text"
            placeholder="Brand of Gun"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name of Gun"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <input
            type="text"
            placeholder="Gun Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="text"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="text"
            placeholder="Caliber"
            value={caliber}
            onChange={(e) => setCaliber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Magazine Capacity"
            value={magazineCapacity}
            onChange={(e) => setMagazineCapacity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <input
            type="text"
            placeholder="Barrel Length"
            value={barrelLength}
            onChange={(e) => setBarrelLength(e.target.value)}
          />
          <Button>Add Item</Button>
        </form>
      </div>
    </>
  )
}

AddGun.propTypes = {
  onAddGun: PropTypes.func,
}
export default AddGun
