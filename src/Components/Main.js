import { Header, Footer } from '.'
import Exercises from './Exercises'
import React, { Fragment } from 'react';
import { muscles, exercises } from '../store.js'

export default class app extends React.Component {
    state = {
      exercises
    }

    getExercisesByMuscles() {
      return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise
        exercises[muscles] = exercises[muscles]
        ? [...exercise[muscles], exercise] : [exercise]
      return exercises 
      }, {}))
    }

    render () {
        const exercises = this.getExercisesByMuscles()
        return (
            <Fragment>
              <Header />
              <Exercises exercises={exercises}/>
              <Footer 
                muscles={muscles}
              />
            </Fragment>);
    }
}