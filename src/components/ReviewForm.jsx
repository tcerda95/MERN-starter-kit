import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReviewForm extends Component {
  static propTypes = {
    value: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      recommend: PropTypes.bool.isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    submitting: PropTypes.bool
  }

  static defaultProps = {
    value: {
      firstName: '',
      lastName: '',
      text: '',
      score: 1,
      recommend: false
    },
    submitting: false
  }

  handleChange = event => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const newValue = { ...this.props.value };

    newValue[name] = value;

    this.props.onChange(newValue);
  }

  render() {
    const { firstName, lastName, text, score, recommend } = this.props.value;
    const { submitting, onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <h1>Review Form</h1>

        <label htmlFor="firstName">First name</label>
        <input type="text" id="firstName" name="firstName" value={firstName} onChange={this.handleChange} required />

        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName" name="lastName" value={lastName} onChange={this.handleChange} required />

        <label htmlFor="text">Comment</label>
        <textarea id="text" name="text" value={text} onChange={this.handleChange} />

        <label htmlFor="score">Score</label>
        <ScoreInput min={1} max={10} name="score" id="score" value={score} onChange={this.handleChange} />

        <label htmlFor="recommend">Recommend</label>
        <input type="checkbox" name="recommend" id="recommend" checked={recommend} onChange={this.handleChange} />

        <button type="submit">{submitting ? 'Submitting' : 'Submit'}</button>
      </form>
    );
  }
}

const ScoreInput = ({ min, max, ...props }) => {
  const options = [];

  for (let i = max; i >= min; i--)
    options.push(<option key={i} value={i}>{i}</option>);

  return (
    <select {...props}>
      {options}
    </select>
  );
};

ScoreInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}
