
# Hk Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`HkLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 9- to 17-digit bank account number, without separators or whitespace. Starts with the 3-digit branch code.<br><br>**Constraints**: *Minimum Length*: `9`, *Maximum Length*: `17` |
| `clearingCode` | `string` | Required | The 3-digit clearing code, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { HkLocalAccountIdentification1 } from 'adyen';

const hkLocalAccountIdentification1: HkLocalAccountIdentification1 = {
  accountNumber: 'accountNumber2',
  clearingCode: 'clearingCode8',
  type: 'hkLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

