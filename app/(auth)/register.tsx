import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = () => {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/register");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Register;
