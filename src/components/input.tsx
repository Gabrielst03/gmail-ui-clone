import { colors } from "@/styles/colors";
import { TextInput, TextInputProps, View } from "react-native";

type InputProps = {
  children: React.ReactNode;
}

function Input({children} : InputProps) {
  return (
    <View className="w-full h-14 bg-gray-800 rounded-lg p-4 flex-row items-center gap-4">
      {children}
    </View>
  )
}

function InputField({...rest}: TextInputProps) {
  return <TextInput cursorColor={colors.blue[600]} {...rest} className="flex-1 font-normal text-base text-white" placeholderTextColor={colors.gray[400]}/>
}

Input.Field = InputField;

export {Input}