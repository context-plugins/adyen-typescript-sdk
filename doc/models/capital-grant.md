
# Capital Grant

## Structure

`CapitalGrant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount17 \| undefined`](../../doc/models/amount-17.md) | Optional | An object containing the amount of the grant, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `balances` | [`CapitalBalance`](../../doc/models/capital-balance.md) | Required | An object containing the details of the existing grant. |
| `counterparty` | [`GrantCounterparty2 \| undefined`](../../doc/models/grant-counterparty-2.md) | Optional | An object containing the details of the receiving party of the grant. |
| `fee` | [`Fee4 \| undefined`](../../doc/models/fee-4.md) | Optional | An object containing the fee currency and value, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `grantAccountId` | `string` | Required | The identifier of the grant account used for the grant. |
| `grantOfferId` | `string` | Required | The identifier of the grant offer that has been selected and from which the grant details will be used. |
| `id` | `string` | Required | The identifier of the grant reference. |
| `repayment` | [`Repayment \| undefined`](../../doc/models/repayment.md) | Optional | An object containing the details of the 30-day repayment threshold. |
| `status` | [`Status14Enum`](../../doc/models/status-14-enum.md) | Required | The current status of the grant. Possible values: **Pending**, **Active**, **Repaid**, **WrittenOff**, **Failed**, **Revoked**. |

## Example

```ts
import { CapitalGrant, Status14Enum } from 'adyen';

const capitalGrant: CapitalGrant = {
  balances: {
    currency: 'currency0',
    fee: BigInt(72),
    principal: BigInt(110),
    total: BigInt(150),
  },
  grantAccountId: 'grantAccountId8',
  grantOfferId: 'grantOfferId4',
  id: 'id2',
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
};
```

