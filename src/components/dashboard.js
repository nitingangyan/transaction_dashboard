import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    margin: '10% 33%;'
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/dashboard/').then(response => {
      console.log(response);
      setData(response);
    });
  }, []);
  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <Card className={classes.root}>
        <CardContent>Test</CardContent>
        <CardActions />
      </Card>
    </div>
  );
};

export default Dashboard;
