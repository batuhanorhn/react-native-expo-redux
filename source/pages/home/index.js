import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchDataAll } from '../../actions/app';

class Home extends Component {
  componentDidMount() {
    const { fetchDataAll, dispatch } = this.props;
    fetchDataAll()
  }
  render() {
    const { data } = this.props;
    if (data) {
      console.log(data);
    }
    return(
      <View style={{ flex: 1 }}>
        <Text>
          Hi Guys!
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return{
    data: state.app.data,
  }
}

const mapDispatchToProps = {
  fetchDataAll
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);