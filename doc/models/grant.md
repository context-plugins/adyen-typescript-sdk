
# Grant

*This model accepts additional fields of type unknown.*

## Structure

`Grant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balances` | [`Balances`](../../doc/models/balances.md) | Required | - |
| `counterparty` | [`Counterparty10 \| undefined`](../../doc/models/counterparty-10.md) | Optional | - |
| `grantAccountId` | `string` | Required | The unique identifier of the grant account that tracks this grant. |
| `grantOfferId` | `string` | Required | The unique identifier of the selected offer. Adyen uses the details of the selected offer to create a grant. |
| `id` | `string` | Required | The unique identifier of the grant reference. |
| `status` | [`Status8`](../../doc/models/status-8.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Code, Grant } from 'adyen';

const grant: Grant = {
  balances: {
    currency: 'currency0',
    fee: BigInt(72),
    principal: BigInt(110),
    total: BigInt(150),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  grantAccountId: 'grantAccountId8',
  grantOfferId: 'grantOfferId4',
  id: 'id2',
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
};
```

