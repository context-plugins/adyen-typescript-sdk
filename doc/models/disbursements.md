
# Disbursements

*This model accepts additional fields of type unknown.*

## Structure

`Disbursements`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disbursements` | [`Disbursement[]`](../../doc/models/disbursement.md) | Required | Contains a list of all disbursements related to the specified grant. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Disbursements, FundsCollectionType2 } from 'adyen';

const disbursements: Disbursements = {
  disbursements: [
    {
      accountHolderId: 'accountHolderId0',
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      balanceAccountId: 'balanceAccountId0',
      balances: {
        currency: 'currency0',
        fee: BigInt(72),
        principal: BigInt(110),
        total: BigInt(150),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      fee: {
        amount: {
          currency: 'currency2',
          value: BigInt(110),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      grantId: 'grantId6',
      id: 'id8',
      repayment: {
        basisPoints: 18,
        updateDescription: 'updateDescription0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      fundsCollections: [
        {
          accountIdentification: {
            type: 'BankAccountIdentification1',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          fundsCollectionType: FundsCollectionType2.UnscheduledRepayment,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          accountIdentification: {
            type: 'BankAccountIdentification1',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          fundsCollectionType: FundsCollectionType2.UnscheduledRepayment,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
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

