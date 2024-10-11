import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotFoundScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <Text className="text-white">Not Found</Text>
      </View>
    </SafeAreaView>
  );
}
