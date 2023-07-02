import { Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogTitle, Divider, Grid, Typography } from '@mui/material'
import Hanampy from '../Hanampy'
import React from 'react';
import { useNavigate } from 'react-router';

const Fitambara = () => {

  const fitambara = [
    {
      title: 'LAHY  5502',
      src: './assets/lahy.jpg',
      description: 'Izy ireo no mponina ao anatin\'ny tanàna rehetra ao anatin\'ny faritra, ka lahy;'
    },
    {
      title: 'AMPELA  6900',
      src: './assets/vavy.jpg',
      description: 'Izy ireo no mponina ao anatin\'ny tanàna rehetra ao anatin\'ny faritra, ka apmpela;'
    },
    {
      title: 'TANANA  12',
      src: './assets/menabe.jpg',
      description: 'Izy ireo no faritra misy ao anatin\'ny tanàna rehetra ao anatin\'ny faritra, ka tanàna;'
    },
    {
      title: 'TRANO  505',
      src: './assets/trano.jpg',
      description: 'Izy ireo no trano misy ao anatin\'ny tanàna rehetra ao anatin\'ny faritra, ka trano;'
    }
  ]

  const [open, setOpen] = React.useState(false);
  const navigate = () => window.location.href = '/'

  return (
    <>

      <Typography textAlign='center' variant='h4'>
        ANTOTAN'ISA ANKAPOBEANY : &nbsp;

        {
          new Date().toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }).toUpperCase()
        }
      </Typography>

      <Divider sx={{
        my: 2,
      }} />

      <Box width='100%' height='100%'
        display='flex' justifyContent='center' alignItems='center'
      >
        <Grid container justifyContent='space-between' alignContent={'center'}
          overflow='wrap' spacing={2} justifyItems='center' my={5}
        >
          {
            fitambara.map((item) => (
              <Grid item xs={12} sm={12} md={4} lg={3} display={'flex'}
                justifyContent='center' alignContent={'center'}
              >
                <Card sx={{ maxWidth: 300, minHeight: 320, position: 'relative', border: '1px dashed grey' }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={item.src}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions style={{
                    position: 'absolute',
                    bottom: 0,
                  }}>
                    <Button size="small" onClick={() => setOpen(true)}>HANAMPY OLO </Button>
                    <Button size="small">Izy rehetra</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>

      <Divider sx={{
        my: 2,
      }} />

      <Grid sx={{
        bottom: 0,
        width: '98%',
        py: 2,
      }}>
        <Typography variant='h4' textAlign='center'
          sx={{
            color: 'grey.500',
            cursor: 'pointer',
          }}
          onClick={() => navigate()}
        >
          HIVOAKA
        </Typography>
      </Grid>


      <Dialog open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>
          <Typography variant='h3' textAlign='center'>
            Hanampy Olo
          </Typography>
        </DialogTitle>
        <Hanampy />
        <DialogActions sx={{
          m: 2
        }}>
          <Button variant='contained' onClick={() => setOpen(false)}>Hanampy Olo</Button>
        </DialogActions>
      </Dialog>

    </>
  )
}

export default Fitambara