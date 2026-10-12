import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { device2Schema, type Device2 } from "./device2.js";
import { infoQualify2Schema, type InfoQualify2 } from "./info-qualify2.js";
import { inputCommand1Schema, type InputCommand1 } from "./input-command1.js";

export type InputData = {
  /**
   * Logical device located on a Sale Terminal or a POI Terminal, regarding the class of information
   * to output (display, print or store), or input (keyboard) for the Cashier or the Customer.
   * Possible values:
   * * **CashierDisplay**
   * * **CashierInput**
   * * **CustomerDisplay**
   * * **CustomerInput**
   */
  device: Device2;
  /**
   * Qualification of the information to send to an output logical device, to display or print to
   * the Cashier or the Customer. Possible values:
   * * **CustomerAssistance**
   * * **Display**
   * * **Document**
   * * **Error**
   * * **Input**
   * * **POIReplication**
   * * **Receipt**
   * * **Sound**
   * * **Status**
   * * **Voucher**
   */
  infoQualify: InfoQualify2;
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
  /** Request Notification of the card entered in the POI card reader. @default false */
  notifyCardInputFlag?: boolean;
  /** Maximum input time in seconds. Limits the time to answer to an Input request message. */
  maxInputTime?: number;
  /**
   * Indicates whether to request an Immediate response to the message without waiting for the
   * completion of the command.
   *
   * @default false
   */
  immediateResponseFlag?: boolean;
  /**
   * Minimum length of an entered string, or minimum number of entries that can be selected in a
   * menu.
   */
  minLength?: number;
  /**
   * Maximum length of an entered string, or maximum number of entries that can be selected in a
   * menu.
   */
  maxLength?: number;
  /** Maximum input length of the decimal part (without decimal point). */
  maxDecimalLength?: number;
  /**
   * Indicates that the user must confirm the entered characters, when the maximum allowed length is
   * reached. During the processing of an Input command `TextString`, `DigitString` or
   * `DecimalString` with `MaxLength` or `MaxDecimalLength` present in the request.
   *
   * @default true
   */
  waitUserValidationFlag?: boolean;
  /**
   * Default string value for an input command. On the `TextString`, `DigitString` and
   * `DecimalString` input commands: default string displayed on the input field before entering the
   * string. In `GetConfirmation` input command: **Y** for yes, **N** for no.
   */
  defaultInputString?: string;
  defaultLayoutString?: string;
  /**
   * String mask to get information requiring a specific format. For the processing of an Input
   * command `TextString`, `DigitString` or `DecimalString`. Some information as date or plate
   * number required to be entered with a certain format.
   */
  stringMask?: string;
  /**
   * Indicates if the entered character has to be displayed from the right to the left of the
   * display field.
   *
   * @default false
   */
  fromRightToLeftFlag?: boolean;
  /**
   * Indicates to mask the characters entered by the user (i.e. replacing in the display of the
   * input, the entered character by a standard character as *).
   *
   * @default false
   */
  maskCharactersFlag?: boolean;
  /**
   * Indicates, when the user press a key, if a beep has to be generated (value True).
   *
   * @default false
   */
  beepKeyFlag?: boolean;
  /**
   * Indicates, when the user presses the Correct function key in an input entry, if all the entered
   * characters are removed (value True) or only the last entered character if any (value False).
   *
   * @default false
   */
  globalCorrectionFlag?: boolean;
  /** Indicates if the Cancel function key has to be deactivated (value True). @default false */
  disableCancelFlag?: boolean;
  /**
   * Indicates if the Correct function key has to be deactivated (value True). During the processing
   * of an Input command `GetConfirmation`, `SiteManager`, or `GetMenuEntry`.
   *
   * @default false
   */
  disableCorrectFlag?: boolean;
  /**
   * Indicates if the Valid function key has to be deactivated (value True). During the processing
   * of an Input command `GetConfirmation`, `SiteManager`, or `GetMenuEntry`.
   *
   * @default false
   */
  disableValidFlag?: boolean;
  /**
   * If it has the value True, it indicates that the Back function key (respectively Home function
   * key) may be used to go back to the immediate upper level of the menu. If it has the value
   * False, it indicates that the current menu level has no parent menu.
   *
   * @default false
   */
  menuBackFlag?: boolean;
};

export const inputDataSchema: Schema<InputData> = s.object<InputData>({
  device: device2Schema,
  infoQualify: infoQualify2Schema,
  inputCommand: inputCommand1Schema,
  notifyCardInputFlag: s.defaulted(s.boolean(), false),
  maxInputTime: s.optional(s.int()),
  immediateResponseFlag: s.defaulted(s.boolean(), false),
  minLength: s.optional(s.int()),
  maxLength: s.optional(s.int()),
  maxDecimalLength: s.optional(s.int()),
  waitUserValidationFlag: s.defaulted(s.boolean(), true),
  defaultInputString: s.optional(s.string()),
  defaultLayoutString: s.optional(s.string()),
  stringMask: s.optional(s.string()),
  fromRightToLeftFlag: s.defaulted(s.boolean(), false),
  maskCharactersFlag: s.defaulted(s.boolean(), false),
  beepKeyFlag: s.defaulted(s.boolean(), false),
  globalCorrectionFlag: s.defaulted(s.boolean(), false),
  disableCancelFlag: s.defaulted(s.boolean(), false),
  disableCorrectFlag: s.defaulted(s.boolean(), false),
  disableValidFlag: s.defaulted(s.boolean(), false),
  menuBackFlag: s.defaulted(s.boolean(), false),
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
