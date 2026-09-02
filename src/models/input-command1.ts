import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InputCommand1 = {
  GetAnyKey: "GetAnyKey",
  GetConfirmation: "GetConfirmation",
  SiteManager: "SiteManager",
  TextString: "TextString",
  DigitString: "DigitString",
  DecimalString: "DecimalString",
  GetFunctionKey: "GetFunctionKey",
  GetMenuEntry: "GetMenuEntry",
  Password: "Password",
} as const;
export type InputCommand1 = (typeof InputCommand1)[keyof typeof InputCommand1] | (string & {});

export const inputCommand1Schema: EnumSchema<InputCommand1> = s.enumOf<InputCommand1>(InputCommand1);
