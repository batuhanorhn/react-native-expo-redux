import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchDataAll } from '../../actions/app';

class Home extends Component {
  componentDidMount() {
    const { fetchDataAll } = this.props;
    fetchDataAll()
  }
  render() {
    const { data } = this.props;
    if (data) {
      console.log(data);
    }
    return(
      <View style={styles.container}>
        <Text>
          Hi Guys!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return{
    data: state.app.data,
  }
}

const mapDispatchToProps = {
  fetchDataAll
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);