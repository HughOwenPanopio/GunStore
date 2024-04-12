import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import './style.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
}))

export default function ViewGun({ selectedGun }) {
  console.log(selectedGun)
  return (
    <Box
      sx={{
        flexGrow: 1,
        border: '3px solid',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '5px 4px 6px rgba(0, 0, 0, 0.3)',
        margin: '2rem auto',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <img src={selectedGun?.imageURL} alt={selectedGun?.name} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex' }}>
            <Item>
              <Typography variant="h6">
                <span>Name: </span>
                {selectedGun?.name}
              </Typography>
            </Item>
          </Box>
          <Box>
            <Item>
              <Typography variant="h6" textAlign="start">
                <span>Description: </span>
                {selectedGun?.description}
              </Typography>
            </Item>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography variant="h6">
              <span>Weight: </span>
              {selectedGun?.weight}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography variant="h6">
              <span>Height: </span>
              {selectedGun?.height}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography variant="h6">
              <span>Caliber: </span>
              {selectedGun?.caliber}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography variant="h6">
              <span>Magazine Capacity: </span>
              {selectedGun?.magazineCapacity}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography variant="h6">
              <span>Length: </span>
              {selectedGun?.length}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography variant="h6">
              <span>Barrel Length: </span>
              {selectedGun?.barrelLength}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

ViewGun.propTypes = {
  selectedGun: PropTypes.object,
}
