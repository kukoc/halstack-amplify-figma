/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UIIconsProps } from "./UIIcons";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ButtonWithIconOnlyOverridesProps = {
    ButtonWithIconOnly?: PrimitiveOverrideProps<FlexProps>;
    UI_Icons?: UIIconsProps;
} & EscapeHatchProps;
export declare type ButtonWithIconOnlyProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "active" | "disabled" | "enabled" | "focused" | "hovered";
    theme?: "onLightBg";
    varient?: "primary";
} & {
    overrides?: ButtonWithIconOnlyOverridesProps | undefined | null;
}>;
export default function ButtonWithIconOnly(props: ButtonWithIconOnlyProps): React.ReactElement;
