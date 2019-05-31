import React from 'react';
import MovieCard from './movieCard'
import { connect } from 'react-redux';
class MyList extends React.Component{
  render() {
    return <div>best Recommendation
      {this.props.store.mylist.map((data,index)=>{
        return <MovieCard type="mylist" key={index} MoiveData={data} />;
      })}
    </div>;
  }
}

const mapStateToProps = state => ({
  store: state
})
export default connect(mapStateToProps)(MyList);