/**
 * @format
 */

import {AppRegistry} from 'react-native';
import NfcAppIndexV2 from 'react-native-nfc-manager/example/AppIndexV2';
import NfcAppV2 from 'react-native-nfc-manager/example/App';
import {name as appName} from './app.json';
import app from './App';

//AppRegistry.registerComponent(appName, () => NfcAppIndexV2);
AppRegistry.registerComponent(appName, () => NfcAppV2);
