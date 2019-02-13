import React from "react";
import { connect } from "react-redux";
import AdvertDetails from "./AdvertDetails";
import { loadAdvert } from "../actions/adverts";

class AdvertDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadAdvert(Number(this.props.match.params.id));
  }

  render() {
    return <AdvertDetails advert={this.props.advert} />;
  }
}

const mapStateToProps = state => ({
  advert: state.advert
});

export default connect(
  mapStateToProps,
  { loadAdvert }
)(AdvertDetailsContainer);
