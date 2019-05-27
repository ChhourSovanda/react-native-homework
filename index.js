/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './src/route/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);