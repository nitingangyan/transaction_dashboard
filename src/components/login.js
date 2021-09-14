import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    margin: '10% 33%;'
  }
}));

const Login = props => {
  localStorage.setItem('username', '');
  props.setUsername('');
  const classes = useStyles();
  let history = useHistory();
  const [user, setUser] = useState('');
  const [errorMsg, setErrorMsg] = useState({
    error: false,
    helperText: ''
  });
  const onSubmit = () => {
    localStorage.setItem('username', user);
    if (user) {
      props.setUsername(user);
      history.push('/');
    }
  };
  const handleBlur = e => {
    let val = e.target.value;
    setUser(e.target.value);
    if (!val) {
      setErrorMsg({
        error: true,
        helperText: 'Username is required'
      });
    } else {
      setErrorMsg({
        error: false,
        helperText: ''
      });
    }
  };
  const btnParentStyle = {
    display: 'block',
    textAlign: 'right'
  };
  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Login
          </Typography>
          <Typography className={classes.pos} color="textSecondary" />
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">
              Username
            </InputLabel>
            <Input id="standard-adornment-password" type="text" />
          </FormControl>

          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input id="standard-adornment-password" type="password" />
          </FormControl>
        </CardContent>
        <CardActions style={btnParentStyle}>
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
