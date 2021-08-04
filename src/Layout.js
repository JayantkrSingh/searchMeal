import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import Dashboard from './Dashboard';
import {Route, Redirect, Switch} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  header: {
    margin: "50px 0 0 0 "
  }
}));

export default function Layout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header/>
      <main className={classes.header}>
      <Switch>
        <Route path="/foods/:id" exact children={<Dashboard />} />
        <Route path="/foods" exact component={Dashboard} />
        <Route path="/" render={() => <Redirect to="/foods" />} />
      </Switch>
      </main>
    </div>
  );
}
