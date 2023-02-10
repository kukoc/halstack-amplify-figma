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
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Button(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Primary: {
          color: "rgba(153,153,153,1)",
          width: "59px",
          height: "24px",
        },
        Button: { height: "40px", backgroundColor: "rgba(242,242,242,1)" },
      },
      variantValues: {
        varient: "primary",
        theme: "onLightBg",
        state: "disabled",
      },
    },
    {
      overrides: {
        Primary: {},
        Button: {
          height: "44px",
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
        Primary: {},
        Button: {
          height: "44px",
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
        Primary: {},
        Button: { backgroundColor: "rgba(75,28,125,1)" },
      },
      variantValues: {
        varient: "primary",
        theme: "onLightBg",
        state: "hovered",
      },
    },
    {
      overrides: { Primary: {}, Button: {} },
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
      padding="8px 16px 8px 16px"
      backgroundColor="rgba(95,36,159,1)"
      display="flex"
      {...getOverrideProps(overrides, "Button")}
      {...rest}
    >
      <Text
        fontFamily="Open Sans"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Primary"
        {...getOverrideProps(overrides, "Primary")}
      ></Text>
    </Flex>
  );
}
