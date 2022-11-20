import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon, TabBar, Tab } from '@ui-kitten/components';
import Football from './Football';
import Basketball from './Basketball';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => {
  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={ index => navigation.navigate(state.routeNames[index]) }>
      <Tab icon={ FootballIcon } title='Football'/>
      <Tab icon={ BasketballIcon } title='Basketball'/>
    </TabBar>
  );
};

const Navbar = () => (
  <Navigator tabBar={props => <TopTabBar {...props} />}>
    <Screen name='Football' component={ Football }/>
    <Screen name='Basketball' component={ Basketball }/>
  </Navigator>
);

const FootballIcon = (props) => (
  <Icon {...props} name="futbol" />
);

const BasketballIcon = (props) => (
  <Icon {...props} name="basketball-ball" />
);

export default Navbar;