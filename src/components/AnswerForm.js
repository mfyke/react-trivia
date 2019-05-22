import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Consumer, Context } from './Context';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value }, ()=>{setTimeout(()=>{this.context.actions.questionAnswer(this.state.value)}, 300)});
  };

  render() {
    const { classes } = this.props;
    return (
      <Consumer>
          {context=>{
              return (
                <div className={classes.root}>
                    <FormControl component="fieldset" className={classes.formControl}>
                    <RadioGroup
                        aria-label="answer"
                        name="answer"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel
                        value="0"
                        control={<Radio color="primary" />}
                        label={context.questions[context.questionNumber].answers[0]}
                        labelPlacement="start"
                        />
                        <FormControlLabel
                        value="1"
                        control={<Radio color="primary" />}
                        label={context.questions[context.questionNumber].answers[1]}
                        labelPlacement="start"
                        />
                        <FormControlLabel
                        value="2"
                        control={<Radio color="primary" />}
                        label={context.questions[context.questionNumber].answers[2]}
                        labelPlacement="start"
                        />
                        <FormControlLabel
                        value="3"
                        control={<Radio color="primary" />}
                        label={context.questions[context.questionNumber].answers[3]}
                        labelPlacement="start"
                        />
                    </RadioGroup>
                    </FormControl>
                </div>
              );
          }}
      </Consumer>  
    );
  }
}

RadioButtonsGroup.contextType = Context;

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);