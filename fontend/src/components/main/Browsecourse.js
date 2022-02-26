import React from 'react'
import { Card, Container, Grid, Paper } from '@mui/material';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BrowseCourse() {

  const displayCourses = () => {
    return (
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Web Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Full mern stack developer
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

      </Grid>
    )
  };
  const displayCourses1 = () => {
    return (
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://www.dataquest.io/wp-content/uploads/2019/05/what-is-data-science-1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Data Science
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Data Science
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

      </Grid>
    )
  };
   const displayCourses2 = () => {
    return (
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2020/06/Ethical-Hacking.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Ethical Hacking
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Become a ethical hacker
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

      </Grid>
    )
  }
  const displayCourses3 = () => {
    return (
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://www.appschopper.com/blog/wp-content/uploads/2021/01/Android-App-Development-Frameworks-AppsChopper.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Android develeopment
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Become a android developer
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

      </Grid>
    )
  }
  const displayCourses4 = () => {
    return (
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            
            image="https://stackify.com/wp-content/uploads/2018/08/Feature-Image-Python-Frameworks-1.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Python
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Learn python
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

      </Grid>
    )
  };
  const displayCourses5 = () => {
    return (
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://imageio.forbes.com/specials-images/imageserve/60269ef7ada7085ce688069b/Cyber-Security-and-Digital-Data-Protection-Concept/960x0.jpg?fit=bounds&format=jpg&width=960"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cyber security
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Become a android developer
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

      </Grid>
    )
  }

  const displayCourses6 = () => {
    return (
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwamMtJ87fKPMFsN7wkFSRBqN-SzN6fNaIKWLmnCBF-laeShN_oN4mqV68QI-CHU6d5LU&usqp=CAU"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Java
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Become a java developer
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

      </Grid>
    )
  }
  const displayCourses7 = () => {
    return (
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://newsignature.com/wp-content/uploads/2016/05/dotnet.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Java
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Become a java developer
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

      </Grid>
    )
  }
  


  return (
    <Paper>
      <header>
        <Container>

          <h1 className='text-center display-4'>
            Browse Courses
          </h1>
          <input className='form-control' />
        </Container>
      </header>

      <section>
        <Container>
          <Grid container spacing={5}>
            {displayCourses()}
            {displayCourses1()}
            {displayCourses2()}
            {displayCourses3()}
            {displayCourses5()}
            {displayCourses4()}
            {displayCourses6()}
            {displayCourses7()}
           
          </Grid>
        </Container>


      </section>
    </Paper>
  )
}
