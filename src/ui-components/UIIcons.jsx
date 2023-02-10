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
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function UIIcons(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Vector: {}, UIIcons: {} },
      variantValues: { color: "HalWhite" },
    },
    {
      overrides: {
        Vector: {
          paths: [
            {
              d: "M11.0276 7.16583C11.8797 7.46734 12.5414 8.1407 12.8521 8.99497L20 8.99497C19.5288 4.25126 15.7594 0.472362 11.0276 0L11.0276 7.16583ZM9.02256 12.8342C7.85965 12.4121 7.01754 11.3065 7.01754 10C7.01754 8.69347 7.85965 7.58794 9.02256 7.16583L9.02256 0C3.9599 0.502513 0 4.78392 0 10C0 15.2161 3.9599 19.4975 9.02256 20L9.02256 12.8342ZM12.8521 11.005C12.5514 11.8593 11.8797 12.5226 11.0276 12.8342L11.0276 20C15.7594 19.5276 19.5288 15.7487 20 11.005L12.8521 11.005Z",
              fill: "rgba(153,153,153,1)",
              fillRule: "nonzero",
            },
          ],
        },
        UIIcons: {},
      },
      variantValues: { color: "grey500" },
    },
    {
      overrides: {
        Vector: {
          paths: [
            {
              d: "M11.0276 7.16583C11.8797 7.46734 12.5414 8.1407 12.8521 8.99497L20 8.99497C19.5288 4.25126 15.7594 0.472362 11.0276 0L11.0276 7.16583ZM9.02256 12.8342C7.85965 12.4121 7.01754 11.3065 7.01754 10C7.01754 8.69347 7.85965 7.58794 9.02256 7.16583L9.02256 0C3.9599 0.502513 0 4.78392 0 10C0 15.2161 3.9599 19.4975 9.02256 20L9.02256 12.8342ZM12.8521 11.005C12.5514 11.8593 11.8797 12.5226 11.0276 12.8342L11.0276 20C15.7594 19.5276 19.5288 15.7487 20 11.005L12.8521 11.005Z",
              fill: "rgba(95,36,159,1)",
              fillRule: "nonzero",
            },
          ],
        },
        UIIcons: {},
      },
      variantValues: { color: "purple700" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="15px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="2px 2px 2px 2px"
      display="flex"
      {...getOverrideProps(overrides, "UIIcons")}
      {...rest}
    >
      <Icon
        width="20px"
        height="20px"
        viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
        paths={[
          {
            d: "M11.0276 7.16583C11.8797 7.46734 12.5414 8.1407 12.8521 8.99497L20 8.99497C19.5288 4.25126 15.7594 0.472362 11.0276 0L11.0276 7.16583ZM9.02256 12.8342C7.85965 12.4121 7.01754 11.3065 7.01754 10C7.01754 8.69347 7.85965 7.58794 9.02256 7.16583L9.02256 0C3.9599 0.502513 0 4.78392 0 10C0 15.2161 3.9599 19.4975 9.02256 20L9.02256 12.8342ZM12.8521 11.005C12.5514 11.8593 11.8797 12.5226 11.0276 12.8342L11.0276 20C15.7594 19.5276 19.5288 15.7487 20 11.005L12.8521 11.005Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </Flex>
  );
}
