import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <img src={selectedGun?.imageURL} alt={selectedGun?.name} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>{selectedGun?.name}</Item>
          <Item>{selectedGun?.Description}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{selectedGun?.Weight}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{selectedGun?.Height}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{selectedGun?.Calibre}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{selectedGun?.Dimensions}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{selectedGun?.MagazineCapacity}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{selectedGun?.Length}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{selectedGun?.BarrelLength}</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

ViewGun.propTypes = {
  selectedGun: PropTypes.object,
}
