import { useState } from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
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
          <TextField
            id="outlined-basic"
            label="Brand of Gun"
            variant="outlined"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Name of Gun"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Gun Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Caliber"
            value={caliber}
            onChange={(e) => setCaliber(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Magazine Capacity"
            value={magazineCapacity}
            onChange={(e) => setMagazineCapacity(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Barrel Length"
            value={barrelLength}
            onChange={(e) => setBarrelLength(e.target.value)}
          />
          <div style={{ gridColumn: 'span 2' }}>
            <Button width="25%">Add Item</Button>
          </div>
        </form>
      </div>
    </>
  )
}

AddGun.propTypes = {
  onAddGun: PropTypes.func,
}
export default AddGun
