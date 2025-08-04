import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
            <View style={styles.container}>
                <Text style={styles.text}>
                    This screen doesn't exist :/
                </Text>
                <Link href="/" style={styles.button}>
                    Go back to home screen!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    }
});