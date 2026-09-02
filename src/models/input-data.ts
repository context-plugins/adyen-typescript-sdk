import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { device2Schema, type Device2 } from "./device2.js";
import { infoQualify2Schema, type InfoQualify2 } from "./info-qualify2.js";
import { inputCommand1Schema, type InputCommand1 } from "./input-command1.js";

export type InputData = {
  device: Device2;
  infoQualify: InfoQualify2;
  inputCommand: InputCommand1;
  notifyCardInputFlag?: boolean;
  maxInputTime?: number;
  immediateResponseFlag?: boolean;
  minLength?: number;
  maxLength?: number;
  maxDecimalLength?: number;
  waitUserValidationFlag?: boolean;
  defaultInputString?: string;
  defaultLayoutString?: string;
  stringMask?: string;
  fromRightToLeftFlag?: boolean;
  maskCharactersFlag?: boolean;
  beepKeyFlag?: boolean;
  globalCorrectionFlag?: boolean;
  disableCancelFlag?: boolean;
  disableCorrectFlag?: boolean;
  disableValidFlag?: boolean;
  menuBackFlag?: boolean;
};

export const inputDataSchema: Schema<InputData> = s.object<InputData>({
  device: device2Schema,
  infoQualify: infoQualify2Schema,
  inputCommand: inputCommand1Schema,
  notifyCardInputFlag: s.optional(s.boolean()),
  maxInputTime: s.optional(s.number()),
  immediateResponseFlag: s.optional(s.boolean()),
  minLength: s.optional(s.number()),
  maxLength: s.optional(s.number()),
  maxDecimalLength: s.optional(s.number()),
  waitUserValidationFlag: s.optional(s.boolean()),
  defaultInputString: s.optional(s.string()),
  defaultLayoutString: s.optional(s.string()),
  stringMask: s.optional(s.string()),
  fromRightToLeftFlag: s.optional(s.boolean()),
  maskCharactersFlag: s.optional(s.boolean()),
  beepKeyFlag: s.optional(s.boolean()),
  globalCorrectionFlag: s.optional(s.boolean()),
  disableCancelFlag: s.optional(s.boolean()),
  disableCorrectFlag: s.optional(s.boolean()),
  disableValidFlag: s.optional(s.boolean()),
  menuBackFlag: s.optional(s.boolean()),
  _keysMap: {
    device: "Device",
    infoQualify: "InfoQualify",
    inputCommand: "InputCommand",
    notifyCardInputFlag: "NotifyCardInputFlag",
    maxInputTime: "MaxInputTime",
    immediateResponseFlag: "ImmediateResponseFlag",
    minLength: "MinLength",
    maxLength: "MaxLength",
    maxDecimalLength: "MaxDecimalLength",
    waitUserValidationFlag: "WaitUserValidationFlag",
    defaultInputString: "DefaultInputString",
    defaultLayoutString: "DefaultLayoutString",
    stringMask: "StringMask",
    fromRightToLeftFlag: "FromRightToLeftFlag",
    maskCharactersFlag: "MaskCharactersFlag",
    beepKeyFlag: "BeepKeyFlag",
    globalCorrectionFlag: "GlobalCorrectionFlag",
    disableCancelFlag: "DisableCancelFlag",
    disableCorrectFlag: "DisableCorrectFlag",
    disableValidFlag: "DisableValidFlag",
    menuBackFlag: "MenuBackFlag",
  },
});
