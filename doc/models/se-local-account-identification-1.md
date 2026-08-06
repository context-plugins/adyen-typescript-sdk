
# Se Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`SeLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.<br><br>**Constraints**: *Minimum Length*: `7`, *Maximum Length*: `10` |
| `clearingNumber` | `string` | Required | The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `5` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SeLocalAccountIdentification1 } from 'adyen';

const seLocalAccountIdentification1: SeLocalAccountIdentification1 = {
  accountNumber: 'accountNumber4',
  clearingNumber: 'clearingNumber6',
  type: 'seLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

