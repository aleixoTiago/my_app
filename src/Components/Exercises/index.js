import React from 'react'
import { Paper, Grid, Typography } from '@material-ui/core';

const style = {
    Paper: {
        padding: 20, marginTop: 10, marginBotton: 10
    }
}

export default ({ exercises }) =>
    <Grid container>
        <Grid item sm>
            <Paper style={style.Paper}>
                {exercises.map(([group, exercises]) =>
                <Typography variant="headline">
                    {group}
                </Typography>
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={style.Paper}>
                Right Pane
            </Paper>
        </Grid>
    </Grid>