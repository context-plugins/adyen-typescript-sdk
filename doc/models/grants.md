
# Grants

*This model accepts additional fields of type unknown.*

## Structure

`Grants`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grants` | [`Grant[]`](../../doc/models/grant.md) | Required | Contains a list of the grants that the account holder has received. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Code, Grants } from 'adyen';

const grants: Grants = {
  grants: [
    {
      balances: {
        currency: 'currency0',
        fee: BigInt(72),
        principal: BigInt(110),
        total: BigInt(150),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      grantAccountId: 'grantAccountId6',
      grantOfferId: 'grantOfferId6',
      id: 'id0',
      status: {
        code: Code.Rejected,
        actions: [
          {
            actionCode: 'actionCode6',
            resolved: false,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      counterparty: {
        accountHolderId: 'accountHolderId0',
        balanceAccountId: 'balanceAccountId0',
        transferInstrumentId: 'transferInstrumentId4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

