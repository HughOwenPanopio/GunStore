import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
}))

export default function ViewGun() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>Gun Image</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Gun Name</Item>
          <Item>Gun Description</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Weight</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Height</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Calibre</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Dimension</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Mag. Capacity</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Length</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Barrel Length</Item>
        </Grid>
      </Grid>
    </Box>
  )
}
