import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inputCommand1Schema, type InputCommand1 } from "./input-command1.js";

export type Input = {
  inputCommand: InputCommand1;
  confirmedFlag?: boolean;
  functionKey?: number;
  textInput?: string;
  digitInput?: number;
  password?: string;
  menuEntryNumber?: number[];
};

export const inputSchema: Schema<Input> = s.object<Input>({
  inputCommand: inputCommand1Schema,
  confirmedFlag: s.optional(s.boolean()),
  functionKey: s.optional(s.number()),
  textInput: s.optional(s.string()),
  digitInput: s.optional(s.number()),
  password: s.optional(s.string()),
  menuEntryNumber: s.optional(s.array(s.number())),
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
