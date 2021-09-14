import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
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
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Login
          </Typography>
          <Typography className={classes.pos} color="textSecondary" />

          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    {errorMsg.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
