
# Uk Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`UkLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 8-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `8` |
| `sortCode` | `string` | Required | The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UkLocalAccountIdentification1 } from 'adyenlib';

const ukLocalAccountIdentification1: UkLocalAccountIdentification1 = {
  accountNumber: 'accountNumber4',
  sortCode: 'sortCode6',
  type: 'ukLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

