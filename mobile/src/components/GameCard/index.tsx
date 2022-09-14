import { LinearGradient } from 'expo-linear-gradient';
import { 
    TouchableOpacity, 
    TouchableOpacityProps, 
    ImageBackground, 
    ImageSourcePropType, 
    Text 
} from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

/* It's defining the shape of the data that will be passed to the component. */
export interface GameCardProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType;
}

/* It's extending the TouchableOpacityProps interface with a new property called
data. */
interface Props extends TouchableOpacityProps {
    data: GameCardProps
}

/**
 * It's a function that takes in a data object and some other props, and returns a
 * TouchableOpacity component with some other components inside of it.
 * @param {Props}  - data - the data that will be used to render the card
 * @returns A TouchableOpacity component with a ImageBackground component inside of
 * it.
 */
export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground 
            style={styles.cover}
            source={data.cover}
        >
            <LinearGradient
                colors={THEME.COLORS.FOOTER}
                style={styles.footer}
            >
                <Text style={styles.name}>
                    {data.name}
                </Text>

                <Text style={styles.ads}>
                    {data.ads} anúncios
                </Text>
            </LinearGradient>
        </ImageBackground>


    </TouchableOpacity>
  );
}