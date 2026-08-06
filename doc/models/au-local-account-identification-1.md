
# Au Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`AuLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `9` |
| `bsbCode` | `string` | Required | The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AuLocalAccountIdentification1 } from 'adyen';

const auLocalAccountIdentification1: AuLocalAccountIdentification1 = {
  accountNumber: 'accountNumber8',
  bsbCode: 'bsbCode4',
  type: 'auLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

