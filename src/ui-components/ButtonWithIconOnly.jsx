/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import UIIcons from "./UIIcons";
import { Flex } from "@aws-amplify/ui-react";
export default function ButtonWithIconOnly(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        UI_Icons: { color: "grey500" },
        ButtonWithIconOnly: { backgroundColor: "rgba(242,242,242,1)" },
      },
      variantValues: {
        varient: "primary",
        theme: "onLightBg",
        state: "disabled",
      },
    },
    {
      overrides: {
        UI_Icons: {},
        ButtonWithIconOnly: {
          borderRadius: "6px",
          backgroundColor: "rgba(50,19,83,1)",
          border: "2px SOLID rgba(0,149,255,1)",
        },
      },
      variantValues: {
        varient: "primary",
        theme: "onLightBg",
        state: "active",
      },
    },
    {
      overrides: {
        UI_Icons: {},
        ButtonWithIconOnly: {
          borderRadius: "6px",
          border: "2px SOLID rgba(0,149,255,1)",
        },
      },
      variantValues: {
        varient: "primary",
        theme: "onLightBg",
        state: "focused",
      },
    },
    {
      overrides: {
        UI_Icons: {},
        ButtonWithIconOnly: { backgroundColor: "rgba(75,28,125,1)" },
      },
      variantValues: {
        varient: "primary",
        theme: "onLightBg",
        state: "hovered",
      },
    },
    {
      overrides: { UI_Icons: {}, ButtonWithIconOnly: {} },
      variantValues: {
        varient: "primary",
        theme: "onLightBg",
        state: "enabled",
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="4px"
      padding="8px 8px 8px 8px"
      backgroundColor="rgba(95,36,159,1)"
      display="flex"
      {...getOverrideProps(overrides, "ButtonWithIconOnly")}
      {...rest}
    >
      <UIIcons
        display="flex"
        gap="15px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="2px 2px 2px 2px"
        color="HalWhite"
        {...getOverrideProps(overrides, "UI_Icons")}
      ></UIIcons>
    </Flex>
  );
}
