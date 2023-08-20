import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import united from '../assets/images/project-united.jpg';
import notes from '../assets/images/note-taker.jpg';
import cabinet from '../assets/images/cabinet-keeper.jpg';
import password from '../assets/images/password-generator.png';
import readme from '../assets/images/document-info.png';
import cat from '../assets/images/bowtie-cat.png';
import lead from '../assets/images/lead-generation.png';
import ghost from '../assets/images/ghostbusters.jpg';

function MediaCard() {
  return(
    <Stack spacing={{ xs: 4, sm: 4 }} display={'flex'} direction={'row'} useFlexGap flexWrap={'wrap'} justifyContent={'center'}>

      {/* Ghostbusters Card */}
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={ghost}
          title='A black background with white ghost that has a red stop symbol he is trying to get through'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Ghostbusters Website
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            A collaborative nostalgia-fueled experience for locating and pinning ghosts sightings
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="http://triskaidekaphobia-48aedc7fe5ca.herokuapp.com" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/ashtreid/ghostbusters" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>

      {/* Project United Card */}
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={united}
          title='A dark purple background with cream font of text that says Project United'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Project United
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            A community application to help find and support local LGBTQ+ friendly organizations in Utah
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://project-united.herokuapp.com" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/Childofrainydays/project-united" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>

      {/* Cabinet Keepers Card */}
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={cabinet}
          title='A white box with a black outline that has a red button bellow it saying Generate Password'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Cabinet Keepers
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            A group effort in aiding college students find recipes based on the ingredients they have in their pantry
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://aegeangrey.github.io/team-waffles/" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/AegeanGrey/team-waffles" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>

      {/* Password Generator Card */}  
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={password}
          title='A white box with a black outline that has a red button bellow it saying Generate Password'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Password Generator
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            The most effective and effecient way of creating a new password with the logic of JavaScript
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://aegeangrey.github.io/password-generator/" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/AegeanGrey/password-generator" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>
      
    {/* </Stack> */}

    {/* <Stack spacing={3} direction={'row'}> */}

      {/* Note Taker Card */} 
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={notes}
          title='A blue background with white font of text that says Note Taker'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Note Taker
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            An all in one app to write, save and retrieve your notes via JavaScript
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://noteynotes-a2993dbf9bbe.herokuapp.com" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/AegeanGrey/note-taker" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>

      {/* README Card */}  
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={readme}
          title='Sketch of a file with document'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            README Generator
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            A faster and reliable way to create brand new README.md files
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://github.com/AegeanGrey/readme-generator" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>

      {/* Study Guide Card */}
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={cat}
          title='cat with a bowtie'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Pre-Work Study Guide
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            An application designed to help students study HTML, CSS and JavaScript
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://aegeangrey.github.io/prework-study-guide/" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/AegeanGrey/prework-study-guide" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>

      {/* Horiseon Card */}
      <Card sx={{ maxWidth: 345, bgcolor: 'lightcyan' }}>
        <CardMedia 
          sx={{ height: 194 }}
          image={lead}
          title='Gear being processed into currency'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Horiseon (Sample Webpage)
          </Typography>
          <Typography gutterBottom variant='h5' color='text.secondary'>
            Webpage with descriptive comments describing each semantic HTML element
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" href="https://aegeangrey.github.io/horiseon-mock-up/" rel='noopener noreferrer' target="_blank">Application</Button>
          <Button size="large" href="https://github.com/AegeanGrey/horiseon-mock-up" rel='noopener noreferrer' target="_blank">Github Repository</Button>
        </CardActions>
      </Card>
    </Stack>
  )
}

export default MediaCard
