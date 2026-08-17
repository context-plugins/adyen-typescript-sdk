
# Capital Grants

## Structure

`CapitalGrants`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grants` | [`CapitalGrant[]`](../../doc/models/capital-grant.md) | Required | The unique identifier of the grant. |

## Example

```ts
import { CapitalGrants, Status14Enum } from 'adyen';

const capitalGrants: CapitalGrants = {
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
      status: Status14Enum.Pending,
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      counterparty: {
        accountHolderId: 'accountHolderId0',
        balanceAccountId: 'balanceAccountId0',
        transferInstrumentId: 'transferInstrumentId4',
      },
      fee: {
        amount: {
          currency: 'currency2',
          value: BigInt(110),
        },
      },
      repayment: {
        basisPoints: 18,
        term: {
          estimatedDays: 248,
          maximumDays: 24,
        },
        threshold: {
          amount: {
            currency: 'currency2',
            value: BigInt(110),
          },
        },
      },
    }
  ],
};
```

