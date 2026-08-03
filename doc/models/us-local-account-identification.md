
# Us Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`UsLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `18` |
| `accountType` | [`AccountType \| undefined`](../../doc/models/account-type.md) | Optional | - |
| `routingNumber` | `string` | Required | The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `9`, *Maximum Length*: `9` |
| `type` | [`Type283`](../../doc/models/type-283.md) | Required | **usLocal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountType, Type283, UsLocalAccountIdentification } from 'adyenlib';

const usLocalAccountIdentification: UsLocalAccountIdentification = {
  accountNumber: 'accountNumber2',
  routingNumber: 'routingNumber2',
  type: Type283.UsLocal,
  accountType: AccountType.Checking,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

