import { Text, View, ViewProps } from 'react-native';

import { styles } from './styles';

/* Defining the props that the component will take in. */
interface Props extends ViewProps {
    title: string;
    subtitle: string;
}

/**
 * This function takes in a title and subtitle and returns a View with a title and
 * subtitle.
 * @param {Props}  - Props
 * @returns A View component with a title and subtitle.
 */
export function Header({ title, subtitle, ...rest }: Props ) {
  return (
    <View style={styles.container} {...rest}>
        <Text style={styles.title}>
            {title}
        </Text>
        <Text style={styles.subtitle}>
            {subtitle}
        </Text>
    </View>
  );
}