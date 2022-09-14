import { View, ActivityIndicator } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

/**
 * It returns a View component with an ActivityIndicator component inside of it.
 * @returns A view with an activity indicator.
 */
export function Loading() {
  return (
    <View style={styles.container}>
        <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  );
}