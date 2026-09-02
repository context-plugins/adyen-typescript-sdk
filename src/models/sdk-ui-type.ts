import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SdkUiType = {
  MultiSelect: "multiSelect",
  OtherHtml: "otherHtml",
  OutOfBand: "outOfBand",
  SingleSelect: "singleSelect",
  Text: "text",
} as const;
export type SdkUiType = (typeof SdkUiType)[keyof typeof SdkUiType] | (string & {});

export const sdkUiTypeSchema: EnumSchema<SdkUiType> = s.enumOf<SdkUiType>(SdkUiType);
