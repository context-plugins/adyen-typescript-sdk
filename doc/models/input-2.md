
# Input 2

Data entered by the user, related to the input command.

*This model accepts additional fields of type unknown.*

## Structure

`Input2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `inputCommand` | [`InputCommand1`](../../doc/models/input-command-1.md) | Required | - |
| `confirmedFlag` | `boolean \| undefined` | Optional | Indicates te response of the user from the `GetConfirmation` input command. |
| `functionKey` | `number \| undefined` | Optional | The number of the function key which is typed by the Customer on the POI or the Cashier on the Sale Terminal. |
| `textInput` | `string \| undefined` | Optional | The text typed by the Customer on the POI or by the Cashier on the Sale Terminal. |
| `digitInput` | `number \| undefined` | Optional | The digits typed by the Customer on the POI or by the Cashier on the Sale Terminal. |
| `password` | `string \| undefined` | Optional | The text password typed by the Customer on the POI or by the Cashier on the Sale Terminal. |
| `menuEntryNumber` | `number[] \| undefined` | Optional | The index of the menu item (from 1 to n) which is selected by the Cashier on the Sale Terminal. The value -1 indicates that the immediate upper level of the menu is requested. The value 0 indicates that the root of the menu is requested. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Input2, InputCommand1 } from 'adyen';

const input2: Input2 = {
  inputCommand: InputCommand1.DecimalString,
  confirmedFlag: false,
  functionKey: 166,
  textInput: 'TextInput2',
  digitInput: 120,
  password: 'Password8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

