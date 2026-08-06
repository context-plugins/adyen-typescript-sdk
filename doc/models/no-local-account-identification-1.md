
# No Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`NoLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 11-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `11`, *Maximum Length*: `11` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NoLocalAccountIdentification1 } from 'adyen';

const noLocalAccountIdentification1: NoLocalAccountIdentification1 = {
  accountNumber: 'accountNumber2',
  type: 'noLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

