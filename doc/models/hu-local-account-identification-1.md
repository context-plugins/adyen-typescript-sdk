
# HU Local Account Identification 1

## Structure

`HULocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 24-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `24`, *Maximum Length*: `24` |

## Example

```ts
import { HULocalAccountIdentification1 } from 'adyen';

const hULocalAccountIdentification1: HULocalAccountIdentification1 = {
  accountNumber: 'accountNumber6',
  type: 'huLocal',
};
```

