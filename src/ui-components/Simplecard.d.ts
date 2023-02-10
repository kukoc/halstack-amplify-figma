/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TitleTextProps } from "./TitleText";
import { DescriptiveTextProps } from "./DescriptiveText";
import { FlexProps } from "@aws-amplify/ui-react";
import { ButtonWithIconPrefixProps } from "./ButtonWithIconPrefix";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SimplecardOverridesProps = {
    Simplecard?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<FlexProps>;
    titleText?: TitleTextProps;
    descriptiveText?: DescriptiveTextProps;
    footer?: PrimitiveOverrideProps<FlexProps>;
    ButtonWithIconPrefix?: ButtonWithIconPrefixProps;
} & EscapeHatchProps;
export declare type SimplecardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SimplecardOverridesProps | undefined | null;
}>;
export default function Simplecard(props: SimplecardProps): React.ReactElement;
