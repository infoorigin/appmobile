
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem, Icon, View } from 'native-base';

import navigateTo from '../../actions/sideBarNav';
import sidebarTheme from './sidebar-theme';
import styles from './style';

const drawerCover = require('../../../img/drawer-cover.png');
const drawerImage = require('../../../img/logo-kitchen-sink.png');

class SideBar extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content
        theme={sidebarTheme}
        style={styles.sidebar}
      >
        <Image source={drawerCover} style={styles.drawerCover}>
         
        </Image>
        <List>
          <ListItem button iconLeft onPress={() => this.navigateTo('home')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#5cb85c', paddingLeft: 14 }]}>
                <Icon name="ios-home" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Home</Text>
            </View>
          </ListItem>

           <ListItem button iconLeft onPress={() => this.navigateTo('aeform')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#5cb85c', paddingLeft: 14 }]}>
                <Icon name="ios-home" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Form Test</Text>
            </View>
          </ListItem>
          
          <ListItem button iconLeft onPress={() => this.navigateTo('mymessages')}>
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#5cb85c' }]}>
                <Icon name="ios-document-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>My Summary</Text>
            </View>
          </ListItem>
          
          <ListItem button iconLeft onPress={() => this.navigateTo('coverage')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#5cb85c', paddingLeft: 10 }]}>
                <Icon name="ios-checkmark-circle-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>My Coverage</Text>
            </View>
          </ListItem>
          
          <ListItem button iconLeft onPress={() => this.navigateTo('finddoctor')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#5cb85c' }]}>
                <Icon name="ios-search" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Find Care</Text>
            </View>
          </ListItem>
          
          <ListItem button iconLeft onPress={() => this.navigateTo('support')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#5cb85c', paddingLeft: 10 }]}>
                <Icon name="ios-call" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Support</Text>
            </View>
          </ListItem>

        </List>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SideBar);
