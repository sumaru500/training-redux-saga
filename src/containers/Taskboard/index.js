import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { withStyles } from '@mui/styles';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUS } from '../../constants';
import styles from './styles';

const listTasks = [
  {
    id: 1,
    title: 'Read Book',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 1,
    title: 'Play foot ball',
    description: 'With friend',
    status: 2,
  },
  {
    id: 2,
    title: 'Play game',
    description: 'Play station',
    status: 1,
  },
];

class TaskBoard extends Component {
  state = {
    open: false,
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> Add new task
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }

  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUS.map((status) => {
          const taskFiltered = listTasks.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList
              tasks={taskFiltered}
              status={status}
              key={status.value}
            ></TaskList>
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose}></TaskForm>;

    return xhtml;
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
