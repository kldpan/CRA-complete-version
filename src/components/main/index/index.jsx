import React from "react";
import { connect } from "react-redux";
import { loadGetTestDate } from "./actionCreator";

import { Button } from 'antd-mobile';
console.log(Button);
class One extends React.Component {
  render() {
    return (
      <div>
        <h1>Index{this.props.num}</h1>
        <Button onClick={this.props.queryTest.bind(this)}>queryTest</Button>
        <ul>
          {this.props.testList.map((item, index) => (
            <li key={index}>
              <p>{item.get("title")}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    num: state.getIn(["indexReducer", "num"]),
    testList: state.getIn(["indexReducer", "testList"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    queryTest() {
      dispatch(loadGetTestDate(dispatch));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(One);
