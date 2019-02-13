import React from "react";
import { loadAdverts } from "../actions/adverts";
import { connect } from "react-redux";
import AdvertsList from "./AdvertsList";

class AdvertsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadAdverts();
  }

  render() {
    return (
      <div>
        <AdvertsList adverts={this.props.adverts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    adverts: state.adverts
});

export default connect(
  mapStateToProps,
  { loadAdverts }
)(AdvertsListContainer);
