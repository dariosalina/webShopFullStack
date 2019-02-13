import React from "react";
import { connect } from "react-redux";
import { createAdvert } from "../actions/adverts";
import AdvertForm from "./AdvertForm";

class CreateAdvertContainer extends React.Component {
  state = {
    title: "",
    description: "",
    price:"",
    phone_number:"",
    email:"",
    picture:""

  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    console.log(this.state)
    event.preventDefault();

    this.props.createAdvert(this.state);

    this.setState({
        title: "",
        description: "",
        price:"",
        phone_number:"",
        email:"",
        picture:""
    });
  };

  render() {
    return (
      <AdvertForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createAdvert }
)(CreateAdvertContainer);
