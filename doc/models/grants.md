
# Grants

## Structure

`Grants`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grants` | [`Grant[]`](../../doc/models/grant.md) | Required | Contains a list of the grants that the account holder has received. |

## Example

```ts
import { CodeEnum, Grants } from 'adyen';

const grants: Grants = {
  grants: [
    {
      balances: {
        currency: 'currency0',
        fee: BigInt(72),
        principal: BigInt(110),
        total: BigInt(150),
      },
      grantAccountId: 'grantAccountId6',
      grantOfferId: 'grantOfferId6',
      id: 'id0',
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
    }
  ],
};
```

