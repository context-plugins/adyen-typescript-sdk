
# Pl Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`PlLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `26`, *Maximum Length*: `26` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlLocalAccountIdentification1 } from 'adyen';

const plLocalAccountIdentification1: PlLocalAccountIdentification1 = {
  accountNumber: 'accountNumber0',
  type: 'plLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

