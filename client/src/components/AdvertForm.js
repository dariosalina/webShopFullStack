import React, { Component } from "react";

export default class AdvertForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Title:
            <input type="text" name="title" onChange={this.props.onChange} />
          </label>
          <label>
            Price:
            <input type="text" name="price" onChange={this.props.onChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description" onChange={this.props.onChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.props.onChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phone_number" onChange={this.props.onChange} />
          </label>
          <label>
            Picture(Url):
            <input type="text" name="picture" onChange={this.props.onChange} />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
