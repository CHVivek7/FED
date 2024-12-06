import React, {Component} from 'react';
import {UserProvider} from "./UserContext";
import ConsumerContext from './ConsumerContext';
class ProviderContext extends Component {
  render() {
    return (
      <UserProvider value="VVIT">
        <ConsumerContext/>
      </UserProvider>
    );
  }
}

export default ProviderContext;