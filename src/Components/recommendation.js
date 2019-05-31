import React from 'react';
import MovieCard from './movieCard'
import { connect } from 'react-redux';
class Recommendation extends React.Component{
  render() {
    return <div>best Recommendation
      {this.props.store.recommendations.map((data,index)=>{
        return <MovieCard type="recommendation" key={index} index={index} MoiveData={data} />;
      })}
    </div>;
  }
}
const mapStateToProps = state => ({
  store: state
})
export default connect(mapStateToProps)(Recommendation);