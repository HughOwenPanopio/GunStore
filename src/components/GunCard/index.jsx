// import PropTypes from 'prop-types'
// import Button from '../Button'

// const gunStyle = {
//   textAlign: 'center',
// }

// function GunCard({ gun, onSelection, selectedGun }) {
//   const isSelected = selectedGun?.id === gun.id

//   return (
//     <>
//       <div style={gunStyle}>
//         <img
//           src={gun.imageURL}
//           alt={gun.name}
//           style={{ width: '100%', height: 'auto' }}
//         />
//         <h3>{gun.name}</h3>
//         <Button type="button" onClick={() => onSelection(gun)}>
//           {isSelected ? 'Close Item' : 'View Item'}
//         </Button>
//       </div>
//     </>
//   )
// }

// GunCard.propTypes = {
//   gun: PropTypes.object,
//   onSelection: PropTypes.func,
//   selectedGun: PropTypes.object,
// }

// export default GunCard

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions } from '@mui/material'
import PropTypes from 'prop-types'
import Button from '../Button'

export default function GunCard({ gun, onSelection, selectedGun }) {
  const isSelected = selectedGun?.id === gun.id

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={gun.imageURL}
          alt={gun.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {gun.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button type="button" onClick={() => onSelection(gun)}>
          {isSelected ? 'Close Item' : 'View Item'}
        </Button>
      </CardActions>
    </Card>
  )
}

GunCard.propTypes = {
  gun: PropTypes.object,
  onSelection: PropTypes.func,
  selectedGun: PropTypes.object,
}
