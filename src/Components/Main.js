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

    handleCategorySelected = category => {
      this.setState({
        category
      })
    } 

    render () {
        const exercises = this.getExercisesByMuscles(),
        { category } = this.state
        return (
            <Fragment>
              <Header />
              <Exercises exercises={exercises}/>
              <Footer 
                category={category}
                muscles={muscles}
                onSelect={this.handleCategorySelected}
              />
            </Fragment>);
    }
}