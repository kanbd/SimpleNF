import React from 'react';
import { connect } from 'react-redux'
import {ADD,REMOVE} from '../redux/actions';
import '../css/card.css';
class MoiveCard extends React.Component{
  handleClickAdd=()=>{
    this.props.dispatch(ADD({data:this.props.MoiveData,index:this.props.index}))
  }
  handleClickRemove=()=>{
    this.props.dispatch(REMOVE({data:this.props.MoiveData,index:this.props.index}))
  }
  render() {
    return <div>
      <div className="img-wrapper">
        <img src={this.props.MoiveData.img} alt="moviepost"/>
        <div className="button-wrapper">
          {
            this.props.type === 'mylist' ?
            <button onClick={this.handleClickRemove}>Remove</button>:
            <button onClick={this.handleClickAdd}>Add</button>
          }
        </div>
      </div>
      <div className="title-wrapper">
        <p>{this.props.MoiveData.title}</p>
      </div>
    </div>;
  }
}
export default connect()(MoiveCard);