import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
        <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add new Task</DialogTitle>
        <DialogContent>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"

          className={classes.textField}
        />

        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>OK</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(TaskForm)
