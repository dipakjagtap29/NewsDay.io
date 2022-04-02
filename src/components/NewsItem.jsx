import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip } from '@material-ui/core';
import { Stack } from '@mui/material';

const NewsItem = (props)=> {
       let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <Card sx={{ maxWidth: 350 }}>
        <Stack direction="row" spacing={1}>
            <Chip label={source} size="small" color="secondary" style={{ marginLeft: '230px'}} />
        </Stack>
      <CardMedia
        component="img"
        height="200"
        image= {!imageUrl ? "https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/04/learn-english-news1-530x294.jpg" : imageUrl} />
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <h5 className="card-title">{title}  </h5>

        </Typography>
      </CardContent>
      <CardActions>
      <p className="card-text">{description}</p>
      <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
        <Button  rel="noreferrer" href={newsUrl} variant="contained" color="primary" target="_blank" >Read More</Button>
        
      </CardActions>
    </Card>
  );
}

export default NewsItem;
