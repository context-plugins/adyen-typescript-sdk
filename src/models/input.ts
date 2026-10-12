import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inputCommand1Schema, type InputCommand1 } from "./input-command1.js";

export type Input = {
  /**
   * Type of requested input. Can be: **GetConfirmation**, **TextString**, **DigitString**,
   * **DecimalString** or **GetMenuEntry**. Possible values:
   * * **DecimalString**
   * * **DigitString**
   * * **GetAnyKey**
   * * **GetConfirmation**
   * * **GetFunctionKey**
   * * **GetMenuEntry**
   * * **Password**
   * * **SiteManager**
   * * **TextString**
   */
  inputCommand: InputCommand1;
  /** Indicates te response of the user from the `GetConfirmation` input command. */
  confirmedFlag?: boolean;
  /**
   * The number of the function key which is typed by the Customer on the POI or the Cashier on the
   * Sale Terminal.
   */
  functionKey?: number;
  /** The text typed by the Customer on the POI or by the Cashier on the Sale Terminal. */
  textInput?: string;
  /** The digits typed by the Customer on the POI or by the Cashier on the Sale Terminal. */
  digitInput?: number;
  /** The text password typed by the Customer on the POI or by the Cashier on the Sale Terminal. */
  password?: string;
  /**
   * The index of the menu item (from 1 to n) which is selected by the Cashier on the Sale Terminal.
   * The value -1 indicates that the immediate upper level of the menu is requested. The value 0
   * indicates that the root of the menu is requested.
   */
  menuEntryNumber?: number[];
};

export const inputSchema: Schema<Input> = s.object<Input>({
  inputCommand: inputCommand1Schema,
  confirmedFlag: s.optional(s.boolean()),
  functionKey: s.optional(s.int()),
  textInput: s.optional(s.string()),
  digitInput: s.optional(s.int()),
  password: s.optional(s.string()),
  menuEntryNumber: s.optional(s.array(s.int())),
  _keysMap: {
    inputCommand: "InputCommand",
    confirmedFlag: "ConfirmedFlag",
    functionKey: "FunctionKey",
    textInput: "TextInput",
    digitInput: "DigitInput",
    password: "Password",
    menuEntryNumber: "MenuEntryNumber",
  },
});
