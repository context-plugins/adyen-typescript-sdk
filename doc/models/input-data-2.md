
# Input Data 2

Information related to an Input request. It conveys the target input logical device, the type of input command, and possible minimum and maximum length of the input. In addition, if the requestor might require to receive an Event Notification if a card is inserted in a card reader, with the `NotifyCardInputFlag`.

*This model accepts additional fields of type unknown.*

## Structure

`InputData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `device` | [`Device2`](../../doc/models/device-2.md) | Required | - |
| `infoQualify` | [`InfoQualify2`](../../doc/models/info-qualify-2.md) | Required | - |
| `inputCommand` | [`InputCommand1`](../../doc/models/input-command-1.md) | Required | - |
| `notifyCardInputFlag` | `boolean \| undefined` | Optional | Request Notification of the card entered in the POI card reader.<br><br>**Default**: `false` |
| `maxInputTime` | `number \| undefined` | Optional | Maximum input time in seconds. Limits the time to answer to an Input request message. |
| `immediateResponseFlag` | `boolean \| undefined` | Optional | Indicates whether to request an Immediate response to the message without waiting for the completion of the command.<br><br>**Default**: `false` |
| `minLength` | `number \| undefined` | Optional | Minimum length of an entered string, or minimum number of entries that can be selected in a menu. |
| `maxLength` | `number \| undefined` | Optional | Maximum length of an entered string, or maximum number of entries that can be selected in a menu. |
| `maxDecimalLength` | `number \| undefined` | Optional | Maximum input length of the decimal part (without decimal point). |
| `waitUserValidationFlag` | `boolean \| undefined` | Optional | Indicates that the user must confirm the entered characters, when the maximum allowed length is reached. During the processing of an Input command `TextString`, `DigitString` or `DecimalString` with `MaxLength` or `MaxDecimalLength` present in the request.<br><br>**Default**: `true` |
| `defaultInputString` | `string \| undefined` | Optional | Default string value for an input command. On the `TextString`, `DigitString` and `DecimalString` input commands: default string displayed on the input field before entering the string. In `GetConfirmation` input command: **Y** for yes, **N** for no.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `defaultLayoutString` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.+$` |
| `stringMask` | `string \| undefined` | Optional | String mask to get information requiring a specific format. For the processing of an Input command `TextString`, `DigitString` or `DecimalString`. Some information as date or plate number required to be entered with a certain format.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `fromRightToLeftFlag` | `boolean \| undefined` | Optional | Indicates if the entered character has to be displayed from the right to the left of the display field.<br><br>**Default**: `false` |
| `maskCharactersFlag` | `boolean \| undefined` | Optional | Indicates to mask the characters entered by the user (i.e. replacing in the display of the input, the entered character by a standard character as *).<br><br>**Default**: `false` |
| `beepKeyFlag` | `boolean \| undefined` | Optional | Indicates, when the user press a key, if a beep has to be generated (value True).<br><br>**Default**: `false` |
| `globalCorrectionFlag` | `boolean \| undefined` | Optional | Indicates, when the user presses the Correct function key in an input entry, if all the entered characters are removed (value True) or only the last entered character if any (value False).<br><br>**Default**: `false` |
| `disableCancelFlag` | `boolean \| undefined` | Optional | Indicates if the Cancel function key has to be deactivated (value True).<br><br>**Default**: `false` |
| `disableCorrectFlag` | `boolean \| undefined` | Optional | Indicates if the Correct function key has to be deactivated (value True). During the processing of an Input command `GetConfirmation`, `SiteManager`, or `GetMenuEntry`.<br><br>**Default**: `false` |
| `disableValidFlag` | `boolean \| undefined` | Optional | Indicates if the Valid function key has to be deactivated (value True). During the processing of an Input command `GetConfirmation`, `SiteManager`, or `GetMenuEntry`.<br><br>**Default**: `false` |
| `menuBackFlag` | `boolean \| undefined` | Optional | If it has the value True, it indicates that the Back function key (respectively Home function key) may be used to go back to the immediate upper level of the menu. If it has the value False, it indicates that the current menu level has no parent menu.<br><br>**Default**: `false` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Device2, InfoQualify2, InputCommand1, InputData2 } from 'adyenlib';

const inputData2: InputData2 = {
  device: Device2.CashierDisplay,
  infoQualify: InfoQualify2.Display,
  inputCommand: InputCommand1.SiteManager,
  notifyCardInputFlag: false,
  maxInputTime: 6,
  immediateResponseFlag: false,
  minLength: 94,
  maxLength: 138,
  waitUserValidationFlag: true,
  fromRightToLeftFlag: false,
  maskCharactersFlag: false,
  beepKeyFlag: false,
  globalCorrectionFlag: false,
  disableCancelFlag: false,
  disableCorrectFlag: false,
  disableValidFlag: false,
  menuBackFlag: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

