import React from 'react';
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
  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <Card className={classes.root}>
        <CardContent />
        <CardActions />
      </Card>
    </div>
  );
};

export default Dashboard;
