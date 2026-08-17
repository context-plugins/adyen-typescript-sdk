
# Grant

## Structure

`Grant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balances` | [`CapitalBalance`](../../doc/models/capital-balance.md) | Required | Contains information about the balances of the grant. |
| `counterparty` | [`GrantCounterparty \| undefined`](../../doc/models/grant-counterparty.md) | Optional | Contains the details of the party that receives the grant. |
| `grantAccountId` | `string` | Required | The unique identifier of the grant account that tracks this grant. |
| `grantOfferId` | `string` | Required | The unique identifier of the selected offer. Adyen uses the details of the selected offer to create a grant. |
| `id` | `string` | Required | The unique identifier of the grant reference. |
| `status` | [`Status25`](../../doc/models/status-25.md) | Required | Contains the status of the grant. |

## Example

```ts
import { CodeEnum, Grant } from 'adyen';

const grant: Grant = {
  balances: {
    currency: 'currency0',
    fee: BigInt(72),
    principal: BigInt(110),
    total: BigInt(150),
  },
  grantAccountId: 'grantAccountId8',
  grantOfferId: 'grantOfferId4',
  id: 'id2',
  status: {
    code: CodeEnum.Rejected,
    actions: [
      {
        actionCode: 'actionCode6',
        resolved: false,
      }
    ],
  },
  counterparty: {
    accountHolderId: 'accountHolderId0',
    balanceAccountId: 'balanceAccountId0',
    transferInstrumentId: 'transferInstrumentId4',
  },
};
```

