import React, { Component } from "react";
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button
} from "antd";
import Layout from "layouts/BasicLayout";
import { getUsers } from "services/users";

const { Option } = Select;

class Users extends Component {
  state = {
    isFetching: false,
    users: []
  };
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    this.setState({
      users: [],
      isFetching: true
    });
    getUsers().then(res => {
      console.log(res);
    });
  };

  render() {
    return <Layout>dd</Layout>;
  }
}

export default Users;
