/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { UIIconsProps } from "./UIIcons";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ButtonWithIconSuffixOverridesProps = {
    ButtonWithIconSuffix?: PrimitiveOverrideProps<FlexProps>;
    Primary?: PrimitiveOverrideProps<TextProps>;
    UI_Icons?: UIIconsProps;
} & EscapeHatchProps;
export declare type ButtonWithIconSuffixProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "active" | "disabled" | "enabled" | "focused" | "hovered";
    theme?: "onLightBg";
    varient?: "primary";
} & {
    overrides?: ButtonWithIconSuffixOverridesProps | undefined | null;
}>;
export default function ButtonWithIconSuffix(props: ButtonWithIconSuffixProps): React.ReactElement;
