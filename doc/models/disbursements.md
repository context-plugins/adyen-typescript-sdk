
# Disbursements

## Structure

`Disbursements`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disbursements` | [`Disbursement[]`](../../doc/models/disbursement.md) | Required | Contains a list of all disbursements related to the specified grant. |

## Example

```ts
import { Disbursements, FundsCollectionType2Enum } from 'adyen';

const disbursements: Disbursements = {
  disbursements: [
    {
      accountHolderId: 'accountHolderId0',
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      balanceAccountId: 'balanceAccountId0',
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
      grantId: 'grantId6',
      id: 'id8',
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
        },
        {
          accountIdentification: {
            type: 'BankAccountIdentification1',
          },
          fundsCollectionType: FundsCollectionType2Enum.UnscheduledRepayment,
        }
      ],
    }
  ],
};
```

