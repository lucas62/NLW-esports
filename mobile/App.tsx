import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';

/**
 * If the fonts are loaded, render the Home component, otherwise render the Loading
 * component.
 * @returns The return is a function that returns a component.
 */
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Background>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading /> }
    </Background>
  );
}
