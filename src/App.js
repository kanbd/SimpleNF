import React from 'react';
import MyList from './Components/myList';
import Recommendation from './Components/recommendation';
import {storeData} from './redux/actions';
import { connect } from 'react-redux';
import './css/app.css';
// mock data
const rawData = {
  'mylist' : [
    {
    'title': 'Futurama',
    'id': 1,
    'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
    },
    {
    'title': 'The Interview',
    'id': 2,
    'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
    },
    {
    'title': 'Gilmore Girls',
    'id': 3,
    'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
    }
    ],
    'recommendations' : [
    {
    'title': 'Family Guy',
    'id': 4,
    'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
    },
    {
    'title': 'The Croods',
    'id': 5,
    'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
    },
    {
    'title': 'Friends',
    'id': 6,
    'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
    }
    ]
  }
class App extends React.Component{
  componentWillMount(){
    // init the store with mock data
    this.props.dispatch(storeData(rawData));
  }
  render() {
    return (<div className="body-container">
      <h1>Fake Netflex</h1>
      <MyList />
      <Recommendation />
    </div>);
  }
}
const mapStateToProps = state => ({
  store: state
})
export default connect(mapStateToProps)(App);
