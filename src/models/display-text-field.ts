import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisplayTextField = {
  CauseName: "causeName",
  NonprofitName: "nonprofitName",
} as const;
export type DisplayTextField = (typeof DisplayTextField)[keyof typeof DisplayTextField] | (string & {});

export const displayTextFieldSchema: EnumSchema<DisplayTextField> =
  s.enumOf<DisplayTextField>(DisplayTextField);
