import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **GetAnyKey**
 * * **GetConfirmation**
 * * **SiteManager**
 * * **TextString**
 * * **DigitString**
 * * **DecimalString**
 * * **GetFunctionKey**
 * * **GetMenuEntry**
 * * **Password**
 */
export const InputCommand = {
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
export type InputCommand = (typeof InputCommand)[keyof typeof InputCommand] | (string & {});

export const inputCommandSchema: EnumSchema<InputCommand> = s.enumOf<InputCommand>(InputCommand);
