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
    this.setState({ value: event.target.value });
  };

//   componentDidMount() {
//       console.log(this.context);
//   }

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
                        value="female"
                        control={<Radio color="primary" />}
                        label="Female"
                        labelPlacement="start"
                        />
                        <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="Male"
                        labelPlacement="start"
                        />
                        <FormControlLabel
                        value="other"
                        control={<Radio color="primary" />}
                        label="Other"
                        labelPlacement="start"
                        />
                        <FormControlLabel
                        value="answerD"
                        control={<Radio />}
                        label="answerD"
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