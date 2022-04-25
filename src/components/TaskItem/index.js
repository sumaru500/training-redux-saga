import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import styles from './styles';




class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    const { id, title, description } = task;
    return (
      <Card key={id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography variant="h3" color="initial">
                {title}
              </Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="edit"
            className={classes.fab}
            size="small"
          >
            <EditIcon fontSize="small"></EditIcon>
          </Fab>
          <Fab
            color="secondary"
            aria-label="delete"
            className={classes.fab}
            size="small"
          >
            <DeleteIcon fontSize="small"></DeleteIcon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
