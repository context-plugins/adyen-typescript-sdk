
# Transaction Description Response Info

*This model accepts additional fields of type unknown.*

## Structure

`TransactionDescriptionResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `doingBusinessAsName` | `string \| undefined` | Optional | The text to be shown on the shopper's bank statement.<br>We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.<br>Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , ' _ - ? + * /**.<br><br>**Constraints**: *Maximum Length*: `22` |
| `type` | [`Type33 \| undefined`](../../doc/models/type-33.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransactionDescriptionResponseInfo, Type33 } from 'adyen';

const transactionDescriptionResponseInfo: TransactionDescriptionResponseInfo = {
  doingBusinessAsName: 'doingBusinessAsName0',
  type: Type33.Fixed,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

