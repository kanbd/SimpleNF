import React from 'react';
import { connect } from 'react-redux'
import {ADD,REMOVE} from '../redux/actions';
class MoiveCard extends React.Component{
  handleClickAdd=()=>{
    this.props.dispatch(ADD({data:this.props.MoiveData,index:this.props.index}))
  }
  handleClickRemove=()=>{
    this.props.dispatch(REMOVE({data:this.props.MoiveData,index:this.props.index}))
  }
  render() {
    return <div>
      <div>
        <img src={this.props.MoiveData.img} alt="moviepost"/>
        <p>{this.props.MoiveData.title}</p>
      </div>
      {
        this.props.type === 'mylist' ?
        <button onClick={this.handleClickRemove}>remove</button>:
        <button onClick={this.handleClickAdd}>add</button>
      }
    </div>;
  }
}
export default connect()(MoiveCard);