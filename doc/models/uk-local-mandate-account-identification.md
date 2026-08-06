
# Uk Local Mandate Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`UkLocalMandateAccountIdentification`

## Inherits From

[`MandateAccountIdentification`](../../doc/models/mandate-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 8-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `8` |
| `sortCode` | `string` | Required | The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UkLocalMandateAccountIdentification } from 'adyen';

const ukLocalMandateAccountIdentification: UkLocalMandateAccountIdentification = {
  accountNumber: 'accountNumber2',
  sortCode: 'sortCode2',
  type: 'ukLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

