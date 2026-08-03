
# Transaction Description Response Info 1

Information regarding the transaction description.

*This model accepts additional fields of type unknown.*

## Structure

`TransactionDescriptionResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `doingBusinessAsName` | `string \| undefined` | Optional | The text to be shown on the shopper's bank statement.<br>We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br>Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.<br><br>**Constraints**: *Maximum Length*: `22` |
| `type` | [`Type33 \| undefined`](../../doc/models/type-33.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransactionDescriptionResponseInfo1, Type33 } from 'adyenlib';

const transactionDescriptionResponseInfo1: TransactionDescriptionResponseInfo1 = {
  doingBusinessAsName: 'doingBusinessAsName2',
  type: Type33.Append,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

