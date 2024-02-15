import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

export function FloatingButton() {
  return(
    <TouchableOpacity activeOpacity={0.7} className="flex-row items-center px-5 py-3 gap-2 rounded-full bg-gray-600 right-4 bottom-4 absolute">
      <MaterialIcons name="edit" size={22} color={colors.orange[500]}/>
      <Text className="font-subtitle text-orange-500">Escrever</Text>
    </TouchableOpacity>
  )
}