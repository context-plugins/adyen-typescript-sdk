
# Disbursement

## Structure

`Disbursement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the account holder that received the disbursement. |
| `amount` | [`Amount17`](../../doc/models/amount-17.md) | Required | Contains information about the amount of the disbursement. |
| `balanceAccountId` | `string` | Required | The unique identifier of the balance account that received the disbursement. |
| `balances` | [`CapitalBalance`](../../doc/models/capital-balance.md) | Required | Contains information about the balances of the disbursement. |
| `fee` | [`Fee22`](../../doc/models/fee-22.md) | Required | Contains information about the fee that your user must pay for the disbursement. |
| `fundsCollections` | [`FundsCollection[] \| undefined`](../../doc/models/funds-collection.md) | Optional | Contains information about the accounts that Adyen uses to collect funds related to repayments. |
| `grantId` | `string` | Required | The unique identifier of the grant related to the disbursement. |
| `id` | `string` | Required | The unique identifier of the disbursement. |
| `repayment` | [`DisbursementRepayment2`](../../doc/models/disbursement-repayment-2.md) | Required | Contains information about the basis points configured for repaying the disbursement. |

## Example

```ts
import { Disbursement, FundsCollectionType2Enum } from 'adyen';

const disbursement: Disbursement = {
  accountHolderId: 'accountHolderId2',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  balanceAccountId: 'balanceAccountId2',
  balances: {
    currency: 'currency0',
    fee: BigInt(72),
    principal: BigInt(110),
    total: BigInt(150),
  },
  fee: {
    amount: {
      currency: 'currency2',
      value: BigInt(110),
    },
  },
  grantId: 'grantId8',
  id: 'id0',
  repayment: {
    basisPoints: 18,
    updateDescription: 'updateDescription0',
  },
  fundsCollections: [
    {
      accountIdentification: {
        type: 'BankAccountIdentification1',
      },
      fundsCollectionType: FundsCollectionType2Enum.UnscheduledRepayment,
    }
  ],
};
```

