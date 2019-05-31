import React from 'react';
import MovieCard from './movieCard'
import { connect } from 'react-redux';
import '../css/listcontainer.css'
class Recommendation extends React.Component{
  render() {
    return <div className="list-wrapper">
      <h3>Recommendation</h3>
      <div className="flex-container">
      {this.props.store.recommendations.map((data,index)=>{
        return <MovieCard type="recommendation" key={index} index={index} MoiveData={data} />;
      })}
      </div>
    </div>;
  }
}
const mapStateToProps = state => ({
  store: state
})
export default connect(mapStateToProps)(Recommendation);