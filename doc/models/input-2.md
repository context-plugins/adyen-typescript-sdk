
# Input 2

Data entered by the user, related to the input command.

## Structure

`Input2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `inputCommand` | [`InputCommand1Enum`](../../doc/models/input-command-1-enum.md) | Required | Type of requested input. Can be: **GetConfirmation**, **TextString**, **DigitString**, **DecimalString** or **GetMenuEntry**.<br>Possible values:<br><br>* **DecimalString**<br>* **DigitString**<br>* **GetAnyKey**<br>* **GetConfirmation**<br>* **GetFunctionKey**<br>* **GetMenuEntry**<br>* **Password**<br>* **SiteManager**<br>* **TextString** |
| `confirmedFlag` | `boolean \| undefined` | Optional | Indicates te response of the user from the `GetConfirmation` input command. |
| `functionKey` | `number \| undefined` | Optional | The number of the function key which is typed by the Customer on the POI or the Cashier on the Sale Terminal. |
| `textInput` | `string \| undefined` | Optional | The text typed by the Customer on the POI or by the Cashier on the Sale Terminal. |
| `digitInput` | `number \| undefined` | Optional | The digits typed by the Customer on the POI or by the Cashier on the Sale Terminal. |
| `password` | `string \| undefined` | Optional | The text password typed by the Customer on the POI or by the Cashier on the Sale Terminal. |
| `menuEntryNumber` | `number[] \| undefined` | Optional | The index of the menu item (from 1 to n) which is selected by the Cashier on the Sale Terminal. The value -1 indicates that the immediate upper level of the menu is requested. The value 0 indicates that the root of the menu is requested. |

## Example

```ts
import { Input2, InputCommand1Enum } from 'adyen';

const input2: Input2 = {
  inputCommand: InputCommand1Enum.DecimalString,
  confirmedFlag: false,
  functionKey: 166,
  textInput: 'TextInput2',
  digitInput: 120,
  password: 'Password8',
};
```

