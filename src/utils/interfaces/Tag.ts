import type { TextStyle, ViewStyle } from "react-native";
import type { Hex } from "../types/Hex";


export type StatusTag = "success" | "default" | "warning" | "error"

export interface TagProps{
    title: string;
    status?: StatusTag;
    color?: Hex;
    solid?: boolean
    tagContainerStyle?: ViewStyle
    tagTextStyle?: TextStyle
    borderLess?: boolean
    icon?: React.ReactElement
    iconPosition?: 'left' | 'right'
}