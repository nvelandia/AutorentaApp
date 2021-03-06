import React from 'react';
import { Button, Card, FormGroup, Input, InputGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as classnames from 'classnames';
import { Elements } from '@stripe/react-stripe-js';
import CreditCardPayment from './CreditCardPayment';
import { loadStripe } from '@stripe/stripe-js';
import StepsHeader from '../../Molecules/Headers/StepsHeader';

const stripePromise = loadStripe(
  'pk_test_51Gr3HzJLMLJITI9DZyz3oQkB9pLy0N42fdYnRwA7agn8OEIHb0kfLnsjQvGfHiKSaE3YWu7nNf2UfZ8fg2nkjsBv009JbIH8IV',
);

class AgencyOrOrganizationPayment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentWay: 'creditCard',
      paymentWaySelected: false,
      payed: false,
      error: {},
    };
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    this.dispatch(this.props.loadCountries());
  };

  handleOnChangePaymentWay = (value) => {
    this.setState({ paymentWay: value });
  };

  handleOnSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleNextClick = () => {
    this.setState({ paymentWaySelected: true });
  };

  handleBackClick = () => {
    this.setState({ paymentWaySelected: false });
  };

  render() {
    const error = this.state.error;
    const { translate, isMobile, isSmallTablet, isTablet } = this.props;
    if (!isMobile && !isSmallTablet) {
      return (
        <>
          <Card className="card-frame ar-payment-2">
            <div className="ar-payment-info">
              <div className="ar-payment-info-left">
                <i className="ar-icon-total-price" />
                <h6>{translate('step3.agencyOrOrganizationPayment.reservationValue')}</h6>
                <strong>USD {this.props.reservation.subtotal}</strong>
              </div>
              <div className="ar-payment-info-center">
                <i className="ar-icon-comission" />
                {this.props.reservation.organization.type === 1 ? (
                  <h6>{translate('step3.agencyOrOrganizationPayment.commission')}</h6>
                ) : (
                  <h6>{translate('step3.agencyOrOrganizationPayment.discount')}</h6>
                )}
                <strong>{`${this.props.reservation.discount}% (USD ${(
                  parseFloat(this.props.reservation.base_rate) *
                  (parseFloat(this.props.reservation.discount) / 100)
                ).toFixed(2)})`}</strong>
              </div>
              <div className="ar-payment-info-right">
                <i className="ar-icon-net-payment" />
                <h6>{translate('step3.agencyOrOrganizationPayment.neto')}</h6>
                <strong>
                  {`USD ${(
                    parseFloat(this.props.reservation.base_rate) *
                    (1 - parseFloat(this.props.reservation.discount) / 100)
                  ).toFixed(2)}`}
                </strong>
              </div>
            </div>
          </Card>
          <Card className="card-frame ar-payment-2 p-4">
            <div className="ar-payment-options-container">
              {this.props.reservation.prepaid_allowed ? (
                <>
                  {!this.props.showPayOk ? (
                    !this.state.paymentWaySelected ? (
                      <Card className="ar-payment-options-card ar-red-border shadow-none">
                        <div className="ar-payment-option-card-header">
                          <i className="ar-icon-online-payment ar-red-text" />
                          <h5 className="ar-red-text">
                            {translate('step3.agencyOrOrganizationPayment.titleReservation1')}
                          </h5>
                          <h6>{translate('step3.agencyOrOrganizationPayment.titleReservation2')}</h6>
                        </div>
                        <div className="ar-payment-option-card-body ar-radios">
                          <h6 className="ar-payment-radios-button-title">
                            {translate('step3.agencyOrOrganizationPayment.choose')}
                          </h6>
                          <div className="ar-payment-radios-button-container">
                            <div className="custom-control custom-radio ">
                              <input
                                className="custom-control-input"
                                name={'paymentWay'}
                                id={'1'}
                                type="radio"
                                checked={this.state.paymentWay === 'creditCard'}
                                onClick={() => this.handleOnChangePaymentWay('creditCard')}
                              />
                              <label className="custom-control-label ar-payment-radio-button" htmlFor="1">
                                {translate('step3.payment.creditCard')}
                              </label>
                            </div>
                            <div className="custom-control custom-radio">
                              <input
                                className="custom-control-input"
                                name={'paymentWay'}
                                id={'2'}
                                type="radio"
                                disabled={true}
                                checked={this.state.paymentWay === 'PayPal'}
                                onClick={() => this.handleOnChangePaymentWay('PayPal')}
                              />
                              <label className="custom-control-label ar-payment-radio-button" htmlFor="2">
                                PayPal
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ar-payment-option-card-footer">
                          <Button
                            className="btn-icon ar-round-button ar-payment-next-button box-shadow"
                            color="red-0"
                            type="button"
                            onClick={() => this.handleNextClick()}
                          >
                            {translate('step3.agencyOrOrganizationPayment.next')}
                            {!isTablet ? <i className="ar-icon-chevron-right" /> : null}
                          </Button>
                        </div>
                      </Card>
                    ) : this.state.paymentWaySelected && this.state.paymentWay === 'creditCard' ? (
                      <Elements stripe={stripePromise}>
                        <CreditCardPayment
                          handleBackClick={this.handleBackClick}
                          payReservation={this.props.payReservation}
                          translate={translate}
                          isMobile={isMobile}
                          isTablet={isTablet}
                          isSmallTablet={isSmallTablet}
                        />
                      </Elements>
                    ) : (
                      <Card className="ar-payment-options-card ar-red-border shadow-none">
                        <div className="ar-payment-option-card-header">
                          <i className="ar-icon-online-payment ar-red-text" />
                          <h5 className="ar-red-text">
                            {translate('step3.agencyOrOrganizationPayment.titleReservation1')}
                          </h5>
                          <h6>{translate('step3.agencyOrOrganizationPayment.titleReservation2')}</h6>
                        </div>
                        <div className="ar-payment-option-card-body bg-ar-white-0 p-0 mt-0 mb-0">
                          <div className="ar-payment-form-paypal-2">
                            <div className="ar-payment-paypal-img-container">
                              <img src="/svg/step3/paypal-logo-white.svg" alt="PayPal" />
                              <h6>{translate('step3.payment.account')}</h6>
                            </div>
                            <FormGroup
                              className={classnames(
                                {
                                  focused: this.state.emailFocus,
                                },
                                'ar-payment-paypal-inputs',
                              )}
                            >
                              <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                                <Input
                                  name="email"
                                  onChange={this.handleOnChange}
                                  className=" ar-round-input ar-card-form-input"
                                  placeholder={translate('step3.payment.email')}
                                  value={this.state.email}
                                  type="text"
                                  autoComplete="off"
                                  onFocus={() => this.setState({ emailFocus: true })}
                                  onBlur={() => this.setState({ emailFocus: false })}
                                />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup
                              className={classnames(
                                {
                                  focused: this.state.passwordFocus,
                                },
                                'ar-payment-paypal-inputs',
                              )}
                            >
                              <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                                <Input
                                  name="password"
                                  onChange={this.handleOnChange}
                                  className=" ar-round-input ar-card-form-input"
                                  placeholder={translate('step3.payment.password')}
                                  value={this.state.password}
                                  type="password"
                                  autoComplete="off"
                                  onFocus={() => this.setState({ passwordFocus: true })}
                                  onBlur={() => this.setState({ passwordFocus: false })}
                                />
                              </InputGroup>
                            </FormGroup>
                          </div>
                        </div>
                        <div className="ar-payment-option-card-footer">
                          <div className="ar-payment-next-back-2">
                            <Button
                              className="btn-icon ar-round-button ar-payment-button-now box-shadow"
                              color="red-0"
                              type="button"
                            >
                              {translate('step3.payment.login')}
                              <i className="ar-icon-chevron-right" />
                            </Button>
                            <Button
                              className="btn-icon ar-round-button ar-payment-button-back-2 shadow-none"
                              color="white-0"
                              type="button"
                              onClick={() => this.handleBackClick()}
                            >
                              <i className="ar-icon-return" />
                              {translate('step3.payment.back')}
                            </Button>
                          </div>
                        </div>
                      </Card>
                    )
                  ) : (
                    <Card className="card-frame ar-payment-card-payed-2 shadow-none fade-in">
                      <i className="ar-icon-plan-selected" />
                      <h1>{translate('step3.payment.payOk')}</h1>
                    </Card>
                  )}
                  <Card className={`ar-payment-options-card shadow-none ${isTablet ? 'my-4' : ''}`}>
                    <div className="ar-payment-option-card-header">
                      <i className="ar-icon-bank-transfer ar-light-blue-3-text" />
                      <h5 className="ar-gray-2-text">{translate('step3.agencyOrOrganizationPayment.bankTitle')}</h5>
                      <h6>{translate('step3.agencyOrOrganizationPayment.bankSubtitle')}</h6>
                    </div>
                    <div className="ar-payment-option-card-body">
                      <h6>{translate('step3.agencyOrOrganizationPayment.bank')}Wells Fargo</h6>
                      <h6>{translate('step3.agencyOrOrganizationPayment.accountNumber')}756896476</h6>
                      <h6>{translate('step3.agencyOrOrganizationPayment.routeNumber')}1548281</h6>
                      <h6>{translate('step3.agencyOrOrganizationPayment.deposit')}065607879</h6>
                      <h6>{translate('step3.agencyOrOrganizationPayment.swift')}81821814-ABA: 847519919</h6>
                    </div>
                    <div className="ar-payment-option-card-footer">
                      <div className="ar-payment-footer-text">
                        <h6>{translate('step3.agencyOrOrganizationPayment.message')}</h6>
                        <h5 className="ar-red-text">pagos@autorenta.com</h5>
                      </div>
                    </div>
                  </Card>
                  <Card className="ar-payment-options-card shadow-none">
                    <div className="ar-payment-option-card-header">
                      <i className="ar-icon-pay-on-destination ar-light-blue-3-text" />
                      <h5 className="ar-gray-2-text">{translate('step3.payment.text1')}</h5>
                      <h6>{translate('step3.payment.text2')}</h6>
                    </div>
                    <div className="ar-payment-option-card-body">
                      <h6 className="ar-payment-text-data">{translate('step3.payment.text3')}</h6>
                    </div>
                    <div className="ar-payment-option-card-footer">
                      <div className="ar-payment-footer-text">
                        <h6>{translate('step3.payment.reservationNumber')}</h6>
                        <h5>{this.props.reservation.company_code}</h5>
                      </div>
                    </div>
                  </Card>
                </>
              ) : (
                <Card className="card-frame ar-payment-card-bottom shadow-none">
                  <div className="ar-payment-left">
                    <h6 className="ar-payment-left-title">
                      <i className=" ar-icon-pay-on-destination " />
                      {translate('step3.payment.text1')}
                    </h6>
                    <h6 className="ar-payment-left-text">{translate('step3.payment.text2')}</h6>
                  </div>
                  <div className="ar-payment-right">
                    <Card className="card-frame ar-payment-options-card">
                      <div className="ar-payment-option-text">
                        <h6>{translate('step3.payment.text3')}</h6>
                      </div>
                    </Card>
                    <div className="ar-payment-number-reserve">
                      <h5>{translate('step3.payment.reservationNumber')}</h5>
                      <h4>
                        {this.props.reservation.company_code[this.props.reservation.company_code.length - 1] === '-'
                          ? this.props.reservation.company_code.slice(0, this.props.reservation.company_code.length - 1)
                          : this.props.reservation.company_code}
                      </h4>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </Card>
        </>
      );
    } else {
      return (
        <>
          <Card className="card-frame ar-payment-2 mb-3">
            <div className="ar-payment-info">
              <div className="ar-payment-info-left">
                <i className="ar-icon-total-price" />
                <div className="d-flex flex-column">
                  <h6>{translate('step3.agencyOrOrganizationPayment.reservationValue')}</h6>
                  <strong>USD {this.props.reservation.subtotal}</strong>
                </div>
              </div>
              <div className="ar-payment-info-center">
                <i className="ar-icon-comission" />
                <div className="d-flex flex-column">
                  {this.props.reservation.organization.type === 1 ? (
                    <h6>{translate('step3.agencyOrOrganizationPayment.commission')}</h6>
                  ) : (
                    <h6>{translate('step3.agencyOrOrganizationPayment.discount')}</h6>
                  )}
                  <strong>{`${this.props.reservation.discount}% (USD ${(
                    parseFloat(this.props.reservation.base_rate) *
                    (parseFloat(this.props.reservation.discount) / 100)
                  ).toFixed(2)})`}</strong>
                </div>
              </div>
              <div className="ar-payment-info-right">
                <i className="ar-icon-net-payment" />
                <div className="d-flex flex-column">
                  <h6>{translate('step3.agencyOrOrganizationPayment.neto')}</h6>
                  <strong>
                    {`USD ${(
                      parseFloat(this.props.reservation.base_rate) *
                      (1 - parseFloat(this.props.reservation.discount) / 100)
                    ).toFixed(2)}`}
                  </strong>
                </div>
              </div>
            </div>
          </Card>
          <div className=" ar-payment-2">
            <div className="ar-payment-options-container">
              {this.props.reservation.prepaid_allowed ? (
                <>
                  {!this.props.showPayOk ? (
                    !this.state.paymentWaySelected ? (
                      <Card className="ar-payment-options-card ar-red-border shadow-none">
                        <div className="ar-payment-option-card-header">
                          <div className="d-flex align-items-start">
                            <i className="ar-icon-online-payment ar-red-text" />
                            <h5 className="ar-red-text">
                              {translate('step3.agencyOrOrganizationPayment.titleReservation1')}
                            </h5>
                          </div>
                          <h6>{translate('step3.agencyOrOrganizationPayment.titleReservation2')}</h6>
                        </div>
                        <div className="ar-payment-option-card-body">
                          <h6 className="ar-payment-radios-button-title">
                            {translate('step3.agencyOrOrganizationPayment.choose')}
                          </h6>
                          <div className="ar-payment-radios-button-container">
                            <div className="custom-control custom-radio ">
                              <input
                                className="custom-control-input"
                                name={'paymentWay'}
                                id={'1'}
                                type="radio"
                                checked={this.state.paymentWay === 'creditCard'}
                                onClick={() => this.handleOnChangePaymentWay('creditCard')}
                              />
                              <label className="custom-control-label ar-payment-radio-button" htmlFor="1">
                                {translate('step3.payment.creditCard')}
                              </label>
                            </div>
                            <div className="custom-control custom-radio">
                              <input
                                className="custom-control-input"
                                name={'paymentWay'}
                                id={'2'}
                                type="radio"
                                disabled={true}
                                checked={this.state.paymentWay === 'PayPal'}
                                onClick={() => this.handleOnChangePaymentWay('PayPal')}
                              />
                              <label className="custom-control-label ar-payment-radio-button" htmlFor="2">
                                PayPal
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="ar-payment-option-card-footer">
                          <Button
                            className="btn-icon ar-round-button ar-payment-next-button box-shadow"
                            color="red-0"
                            type="button"
                            onClick={() => this.handleNextClick()}
                          >
                            {translate('step3.agencyOrOrganizationPayment.next').toUpperCase()}
                          </Button>
                        </div>
                      </Card>
                    ) : this.state.paymentWaySelected && this.state.paymentWay === 'creditCard' ? (
                      <Elements stripe={stripePromise}>
                        <CreditCardPayment
                          handleBackClick={this.handleBackClick}
                          payReservation={this.props.payReservation}
                          translate={translate}
                          isMobile={isMobile}
                          isTablet={isTablet}
                          isSmallTablet={isSmallTablet}
                        />
                      </Elements>
                    ) : (
                      <Card className="ar-payment-options-card ar-red-border shadow-none">
                        <div className="ar-payment-option-card-header">
                          <div className="d-flex align-items-start">
                            <i className="ar-icon-online-payment ar-red-text" />
                            <h5 className="ar-red-text">
                              {translate('step3.agencyOrOrganizationPayment.titleReservation1')}
                            </h5>
                          </div>
                          <h6>{translate('step3.agencyOrOrganizationPayment.titleReservation2')}</h6>
                        </div>
                        <div className="ar-payment-option-card-body bg-ar-white-0 p-0 mt-0 mb-0">
                          <div className="ar-payment-form-paypal-2">
                            <div className="ar-payment-paypal-img-container">
                              <img src="/svg/step3/paypal-logo-white.svg" alt="PayPal" />
                              <h6>{translate('step3.payment.account')}</h6>
                            </div>
                            <FormGroup
                              className={classnames(
                                {
                                  focused: this.state.emailFocus,
                                },
                                'ar-payment-paypal-inputs',
                              )}
                            >
                              <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                                <Input
                                  name="email"
                                  onChange={this.handleOnChange}
                                  className=" ar-round-input ar-card-form-input"
                                  placeholder={translate('step3.payment.email')}
                                  value={this.state.email}
                                  type="text"
                                  autoComplete="off"
                                  onFocus={() => this.setState({ emailFocus: true })}
                                  onBlur={() => this.setState({ emailFocus: false })}
                                />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup
                              className={classnames(
                                {
                                  focused: this.state.passwordFocus,
                                },
                                'ar-payment-paypal-inputs',
                              )}
                            >
                              <InputGroup className="input-group-merge input-group-alternative shadow-none ar-round-input bg-ar-white-1">
                                <Input
                                  name="password"
                                  onChange={this.handleOnChange}
                                  className=" ar-round-input ar-card-form-input"
                                  placeholder={translate('step3.payment.password')}
                                  value={this.state.password}
                                  type="password"
                                  autoComplete="off"
                                  onFocus={() => this.setState({ passwordFocus: true })}
                                  onBlur={() => this.setState({ passwordFocus: false })}
                                />
                              </InputGroup>
                            </FormGroup>
                          </div>
                        </div>
                        <div className="ar-payment-option-card-footer">
                          <div className="ar-payment-next-back-2">
                            <Button
                              className="btn-icon ar-round-button ar-payment-button-now box-shadow"
                              color="red-0"
                              type="button"
                            >
                              {translate('step3.payment.login')}
                              <i className="ar-icon-chevron-right" />
                            </Button>
                            <Button
                              className="btn-icon ar-round-button ar-payment-button-back-2 shadow-none"
                              color="white-0"
                              type="button"
                              onClick={() => this.handleBackClick()}
                            >
                              <i className="ar-icon-return" />
                              {translate('step3.payment.back')}
                            </Button>
                          </div>
                        </div>
                      </Card>
                    )
                  ) : (
                    <Card className="card-frame ar-payment-card-payed-2 shadow-none fade-in">
                      <i className="ar-icon-plan-selected" />
                      <h1>{translate('step3.payment.payOk')}</h1>
                    </Card>
                  )}
                  <Card className="ar-payment-options-card shadow-none">
                    <div className="ar-payment-option-card-header">
                      <div className="d-flex align-items-start">
                        <i className="ar-icon-bank-transfer ar-light-blue-3-text" />
                        <h5 className="ar-gray-2-text">{translate('step3.agencyOrOrganizationPayment.bankTitle')}</h5>
                      </div>
                      <h6>{translate('step3.agencyOrOrganizationPayment.bankSubtitle')}</h6>
                    </div>
                    <div className="ar-payment-option-card-body">
                      <h6>{translate('step3.agencyOrOrganizationPayment.bank')}Wells Fargo</h6>
                      <h6>{translate('step3.agencyOrOrganizationPayment.accountNumber')}756896476</h6>
                      <h6>{translate('step3.agencyOrOrganizationPayment.routeNumber')}1548281</h6>
                      <h6>{translate('step3.agencyOrOrganizationPayment.deposit')}065607879</h6>
                      <h6>{translate('step3.agencyOrOrganizationPayment.swift')}81821814-ABA: 847519919</h6>
                    </div>
                    <div className="ar-payment-option-card-footer">
                      <div className="ar-payment-footer-text">
                        <h6>{translate('step3.agencyOrOrganizationPayment.message')}</h6>
                        <h5 className="ar-red-text">pagos@autorenta.com</h5>
                      </div>
                    </div>
                  </Card>
                  <Card className="ar-payment-options-card shadow-none">
                    <div className="ar-payment-option-card-header">
                      <div className="d-flex align-items-start">
                        <i className="ar-icon-pay-on-destination ar-light-blue-3-text" />
                        <h5 className="ar-gray-2-text">{translate('step3.payment.text1')}</h5>
                      </div>
                      <h6>{translate('step3.payment.text2')}</h6>
                    </div>
                    <div className="ar-payment-option-card-body">
                      <h6 className="ar-payment-text-data">{translate('step3.payment.text3')}</h6>
                    </div>
                    <div className="ar-payment-option-card-footer">
                      <div className="ar-payment-footer-text">
                        <h6>{translate('step3.payment.reservationNumber')}</h6>
                        <h5>{this.props.reservation.company_code}</h5>
                      </div>
                    </div>
                  </Card>
                </>
              ) : (
                <Card className="card-frame ar-payment-card-bottom shadow-none">
                  <div className="ar-payment-left">
                    <div className="ar-payment-left-title">
                      <i className=" ar-icon-pay-on-destination " />
                      <h6>{translate('step3.payment.text1')}</h6>
                    </div>
                    <h6 className="ar-payment-left-text">{translate('step3.payment.text2')}</h6>
                  </div>
                  <div className="ar-payment-right">
                    <Card className="card-frame ar-payment-options-card">
                      <div className="ar-payment-option-text">
                        <h6>{translate('step3.payment.text3')}</h6>
                      </div>
                    </Card>
                    <div className="ar-payment-number-reserve">
                      <h5>{translate('step3.payment.reservationNumber')}</h5>
                      <h4>
                        {this.props.reservation.company_code[this.props.reservation.company_code.length - 1] === '-'
                          ? this.props.reservation.company_code.slice(0, this.props.reservation.company_code.length - 1)
                          : this.props.reservation.company_code}
                      </h4>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </>
      );
    }
  }
}

AgencyOrOrganizationPayment.propTypes = {
  dispatch: PropTypes.func,
  image: PropTypes.string,
  loadCountries: PropTypes.func,
  payReservation: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step3Reducer;
};

export default connect(mapStateToProps)(AgencyOrOrganizationPayment);
