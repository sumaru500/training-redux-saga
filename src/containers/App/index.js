import { ThemeProvider, withStyles } from '@mui/styles';
import * as React from 'react';
import { Component } from 'react';
import theme from '../../commons/Theme';
import Taskboard from '../Taskboard';
import styles from './styles';


class App extends Component {
  render() {
    console.log('props : ', this.props);

    return (
      <ThemeProvider theme={theme}>
        <Taskboard></Taskboard>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
