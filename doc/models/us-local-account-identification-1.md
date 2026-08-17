
# US Local Account Identification 1

## Structure

`USLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `18` |
| `accountType` | [`AccountType2Enum \| undefined`](../../doc/models/account-type-2-enum.md) | Optional | The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**. |
| `routingNumber` | `string` | Required | The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `9`, *Maximum Length*: `9` |

## Example

```ts
import { AccountType2Enum, USLocalAccountIdentification1 } from 'adyen';

const uSLocalAccountIdentification1: USLocalAccountIdentification1 = {
  accountNumber: 'accountNumber2',
  routingNumber: 'routingNumber2',
  accountType: AccountType2Enum.Checking,
  type: 'usLocal',
};
```

