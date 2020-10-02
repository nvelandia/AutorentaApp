import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Row, Col, Card, CardBody, CardTitle, CardHeader, Button } from 'reactstrap';

class ModalChangePlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.rateSelected,
    };
    this.dispatch = props.dispatch;
  }

  changePage = (page) => {
    if (page < this.props.carSelected.rates.length && page >= 0) {
      this.setState({ page });
    } else if (page < 0) {
      this.setState({ page: this.props.carSelected.rates.length - 1 });
    } else {
      this.setState({ page: 0 });
    }
  };

  changePlan = (page) => {
    if (this.props.discount.rate_code) {
      const body = this.props.searchParams;
      body.rate = this.props.carSelected.rates[page].rate_code;
      this.props.dispatch(this.props.validatePromotion(body));
    }
    this.props.dispatch(this.props.changePlan(this.props.plans[page], page));
    this.props.hideModal();
  };

  render() {
    return (
      <Modal
        className="modal-dialog-centered ar-modal-change-plan"
        isOpen={this.props.showModal}
        toggle={() => this.props.hideModal()}
      >
        <div className="modal-header pb-0">
          <h6 className="modal-title mt-3" id="exampleModalLabel">
            Cambiar plan de tarifa
          </h6>
          <button
            aria-label="Close"
            className="close ar-blue-0-text"
            data-dismiss="modal"
            type="button"
            onClick={() => this.props.hideModal()}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body ar-card-change-plan">
          <Card className="mb-0 shadow ">
            <CardHeader className="pb-1">
              <Row>
                <div className="col">
                  <span className="ar-card-change-plan-title">
                    {this.props.carSelected.rates[this.state.page].name}
                  </span>
                </div>
              </Row>
            </CardHeader>
            <CardBody className="py-2 zi-1200">
              {this.props.carSelected.rates[this.state.page].includes.map((item, index) => {
                if (item.selected) {
                  return (
                    <p key={index} className="mb-1">
                      <i className="ar-icon-check-solid ar-green-text" />
                      {'  ' + item}
                    </p>
                  );
                }
                return (
                  <p key={index} className=" mb-1">
                    <i className="ar-icon-close-solid ar-red-text" />
                    {'  ' + item}
                  </p>
                );
              })}
              <div className="ar-button-confirm-container">
                <Button
                  className="btn-icon ar-round-button ar-button-confirm"
                  color="red-0"
                  type="button"
                  disabled={this.state.page === this.props.rateSelected}
                  onClick={() => this.changePlan(this.state.page)}
                >
                  {this.state.page !== this.props.rateSelected ? 'Cotizar esta tarifa' : 'Tarifa seleccionada'}
                  <i className="ar-icon-chevron-right" />
                </Button>
              </div>
            </CardBody>
            <div className="ar-car-chevron">
              <span onClick={() => this.changePage(this.state.page - 1)} className={'ar-icon-chevron-left'} />
              <span onClick={() => this.changePage(this.state.page + 1)} className={'ar-icon-chevron-right'} />
            </div>
          </Card>
        </div>
      </Modal>
    );
  }
}

ModalChangePlan.propTypes = {
  dispatch: PropTypes.func,
  showModal: PropTypes.bool,
  hideModal: PropTypes.func,
  changePlan: PropTypes.func,
  validatePromotion: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.step2Reducer;
};

export default connect(mapStateToProps)(ModalChangePlan);
