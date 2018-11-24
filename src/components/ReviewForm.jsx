import React, { Component } from 'react';
import { Form, Button, FormGroup, Label, Input, Col } from 'reactstrap';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import '../styles/ReviewForm.scss';

class ReviewForm extends Component {
  static propTypes = {
    value: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      recommend: PropTypes.bool.isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
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
    const { t, submitting, onSubmit } = this.props;

    return (
      <Form onSubmit={onSubmit} className="review-form">
        <h1>{t('reviewForm')}</h1>
        
        <FormGroup row>
          <Col xs={6}>
            <Input type="text" id="firstName" name="firstName" value={firstName} onChange={this.handleChange} placeholder={t('firstName')} required />
          </Col>
        
          <Col xs={6}>
            <Input type="text" id="lastName" name="lastName" value={lastName} onChange={this.handleChange} placeholder={t('lastName')} required />
          </Col>
        </FormGroup>

        <FormGroup>
          <Input type="textarea" id="text" name="text" value={text} onChange={this.handleChange} placeholder={t('comment')} />
        </FormGroup>

        <FormGroup row>
          <Col xs={1}>
            <Label htmlFor="score">{t('score')}</Label>
          </Col>
          <Col xs={5}>
            <ScoreInput min={1} max={10} name="score" id="score" value={score} onChange={this.handleChange} />
          </Col>

          <Col xs={6}>
            <Label htmlFor="recommend">
              {t('recommend')}
              <Input type="checkbox" name="recommend" id="recommend" checked={recommend} onChange={this.handleChange} />
            </Label>
          </Col>
        </FormGroup>

        <Button type="submit" color="primary" outline>{submitting ? t('submitting') : t('submit')}</Button>
      </Form>
    );
  }
}

const ScoreInput = ({ min, max, ...props }) => {
  const options = [];

  for (let i = max; i >= min; i--)
    options.push(<option key={i} value={i}>{i}</option>);

  return (
    <Input type="select" {...props}>
      {options}
    </Input>
  );
};

ScoreInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default translate('reviewForm')(ReviewForm);
