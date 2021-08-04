import React, { useState, useEffect } from "react"
import {
  useParams
} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    "padding": "15px",
    "backgroundColor": "#fff",
    "-webkit-box-shadow": "none !important",
    "box-shadow": "0 2px 2px 0 rgb(0 0 0 / 16%), 0 0 2px 0 rgb(0 0 0 / 12%)",
    "position": "relative",
  },
  ul: {
    "list-style-position": "outside !important"
  }
}));

export default function Dashboard() {
  const styles = useStyles();
  const [meal, setMeal] = useState();
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + id, {
      method: "GET",
    }).then(response => response.json())
      .then((data) => {
        setLoading(false);
        if (data.meals && data.meals.length === 1) {
          setMeal(data.meals[0]);
        }
      }).catch(err => {
        setLoading(false);
      })
  }, [id])

  return (
    <React.Fragment>
      {loading ? <CircularProgress /> : null}
      <Paper className={styles.paper}>
        {meal ?
          <Grid>
            <Typography component="h5" variant="h2">
              Recipe of {id}
            </Typography>
            <Grid>
              <Grid>
                <img src={meal && meal.strMealThumb} alt="dish" />
              </Grid>
              <Grid>
                <strong>Instruction:</strong> {meal && meal.strInstructions}
              </Grid>
            </Grid>
          </Grid>
          : (!loading && id ?
            (<Typography component="h5" variant="h3">
              Recipe Not Found
            </Typography>)
            : (!loading && !id ?
              (<div>
                <Typography component="h6" variant="h6">Please Search for below keywords eg- "/foods/Corba" </Typography>
                <ul>
                  <li>{"Corba"}</li>
                  <li>{"Apple Frangipan Tart"}</li>
                  <li>{"Apam balik"}</li>
                  <li>{"Bakewell tart"}</li>
                  <li>{"Bread and Butter Pudding"}</li>
                </ul>
              </div>) : null
            )
          )}
      </Paper>
    </React.Fragment>
  )
}