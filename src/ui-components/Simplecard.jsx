/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import TitleText from "./TitleText";
import DescriptiveText from "./DescriptiveText";
import { Flex } from "@aws-amplify/ui-react";
import ButtonWithIconPrefix from "./ButtonWithIconPrefix";
export default function Simplecard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="2px 2px 6px rgba(0, 0, 0, 0.25)"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Simplecard")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="70px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "content")}
      >
        <TitleText
          display="flex"
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "titleText")}
        ></TitleText>
        <DescriptiveText
          display="flex"
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "descriptiveText")}
        ></DescriptiveText>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="flex-end"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 0px 0px 0px"
        {...getOverrideProps(overrides, "footer")}
      >
        <ButtonWithIconPrefix
          display="flex"
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(95,36,159,1)"
          varient="primary"
          theme="onLightBg"
          state="enabled"
          {...getOverrideProps(overrides, "ButtonWithIconPrefix")}
        ></ButtonWithIconPrefix>
      </Flex>
    </Flex>
  );
}
