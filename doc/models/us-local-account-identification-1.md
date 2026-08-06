
# Us Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`UsLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `18` |
| `accountType` | [`AccountType \| undefined`](../../doc/models/account-type.md) | Optional | - |
| `routingNumber` | `string` | Required | The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `9`, *Maximum Length*: `9` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountType, UsLocalAccountIdentification1 } from 'adyen';

const usLocalAccountIdentification1: UsLocalAccountIdentification1 = {
  accountNumber: 'accountNumber4',
  routingNumber: 'routingNumber0',
  accountType: AccountType.Checking,
  type: 'usLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

