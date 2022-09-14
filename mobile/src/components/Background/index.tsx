import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

/**
 * It's a function that takes a child component and renders it inside an
 * ImageBackground component.
 * @param {Props}  - Props - the props that are passed to the component
 * @returns A component that renders an image and the children passed to it.
 */
export function Background({ children }: Props) {
  return (
    <ImageBackground 
        source={backgroundImg} 
        style={styles.container}
        defaultSource={backgroundImg}    
    >
        {children}
    </ImageBackground>
  );
}