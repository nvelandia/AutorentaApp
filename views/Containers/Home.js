import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/homeActions';
import * as generalAction from '../../actions/generalActions';
import CustomNavBar from '../Components/Molecules/Navbars/CustomNavBar';
import CarouselHeader from '../Components/Molecules/Headers/CarouselHeader';
import MakeYourReservation from '../Components/Organism/Home/MakeYourReservation';
import Main from '../Layouts/Main';
import Offer from '../Components/Organism/Home/Offer';
import CustomFooter from '../Components/Molecules/Footers/CustomFooter';
import Banner from '../Components/Molecules/banners/Banner';
import AutorentaLoader from '../Components/Molecules/Loaders/AutorentaLoader';
import UpToTop from '../Components/Atoms/UpToTop';
import { isServer } from '../../utils/helpers/isError';

import { IntlActions } from 'react-redux-multilingual';

const items = [
  {
    src: '/img/custom/slide-home-1.jpg',
    altText: '',
    caption: '',
    header: '',
    id: 1,
    style: 'ar-header-image',
  },
  {
    src: '/img/custom/slide-home-2.jpg',
    altText: '',
    caption: '',
    header: '',
    id: 2,
    style: 'ar-header-image',
  },
  {
    src: '/img/custom/slide-home-3.jpg',
    altText: '',
    caption: '',
    header: '',
    id: 3,
    style: 'ar-header-image',
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.dispatch = props.dispatch;
    this.handleOnLoad();
  }

  handleOnLoad = () => {
    if (!isServer()) {
      window.scrollTo(0, 0);
    }
  };

  handleChangeLanguage = () => {
    this.dispatch(IntlActions.setLocale('es'));
  };

  render() {
    return (
      <>
        <button onClick={this.handleChangeLanguage}>{this.props.translate('hello', { name: 'Ale' })}</button>
        <CustomNavBar />
        <CarouselHeader items={items} />
        <MakeYourReservation
          searchLocation={actions.searchLocation}
          loadCountries={actions.loadCountries}
          nextStep={actions.nextStep}
        />
        <Offer loadOffers={actions.loadOffers} selectPromotion={actions.selectPromotion} />
        <Banner />
        <CustomFooter subscribeToNewsletter={generalAction.subscribeNewsletter} />
        <UpToTop />
        <AutorentaLoader />
      </>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(Home);
