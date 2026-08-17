
# US Local Account Identification

## Structure

`USLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `18` |
| `accountType` | [`AccountType2Enum \| undefined`](../../doc/models/account-type-2-enum.md) | Optional | The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**.<br><br>**Default**: `AccountType2Enum.Checking` |
| `routingNumber` | `string` | Required | The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `9`, *Maximum Length*: `9` |
| `type` | `string` | Required, Constant | **usLocal**<br><br>**Value**: `'usLocal'` |

## Example

```ts
import { AccountType2Enum, USLocalAccountIdentification } from 'adyen';

const uSLocalAccountIdentification: USLocalAccountIdentification = {
  accountNumber: 'accountNumber4',
  routingNumber: 'routingNumber8',
  type: 'usLocal',
  accountType: AccountType2Enum.Checking,
};
```

