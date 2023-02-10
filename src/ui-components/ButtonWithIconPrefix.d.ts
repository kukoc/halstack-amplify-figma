/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UIIconsProps } from "./UIIcons";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ButtonWithIconPrefixOverridesProps = {
    ButtonWithIconPrefix?: PrimitiveOverrideProps<FlexProps>;
    UI_Icons?: UIIconsProps;
    Primary?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ButtonWithIconPrefixProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "active" | "disabled" | "enabled" | "focused" | "hovered";
    theme?: "onLightBg";
    varient?: "primary";
} & {
    overrides?: ButtonWithIconPrefixOverridesProps | undefined | null;
}>;
export default function ButtonWithIconPrefix(props: ButtonWithIconPrefixProps): React.ReactElement;
