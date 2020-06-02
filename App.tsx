
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import App from './src/index';

AppRegistry.registerComponent('GreenInitiative', () => App);
registerRootComponent(App);
export default App;
