import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import styles from './styles';
class TaskList extends Component {
  render() {
    const {classes, tasks, status, children} = this.props
    return (
        <Grid item md={4} xs={12} key={status.value}>
        <Box mt={1} mb={1} >
            <div className={classes.status}>       
                {status.label}
            </div>
        </Box>
        {children}
        <div className={classes.wrapperListTask}>
           {
               tasks.map((task, index) => {
                   
                    return (
                        <TaskItem task={task} key={task.id} status={status}></TaskItem>
                    )
               })
           }
        </div>
    </Grid>
    )
  }
}

export default withStyles(styles)(TaskList)
