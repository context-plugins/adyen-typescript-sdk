
# Hu Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`HuLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 24-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `24`, *Maximum Length*: `24` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { HuLocalAccountIdentification1 } from 'adyenlib';

const huLocalAccountIdentification1: HuLocalAccountIdentification1 = {
  accountNumber: 'accountNumber4',
  type: 'huLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

