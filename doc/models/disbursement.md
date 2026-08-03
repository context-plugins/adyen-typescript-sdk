
# Disbursement

*This model accepts additional fields of type unknown.*

## Structure

`Disbursement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the account holder that received the disbursement. |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `balanceAccountId` | `string` | Required | The unique identifier of the balance account that received the disbursement. |
| `balances` | [`Balances`](../../doc/models/balances.md) | Required | - |
| `fee` | [`Fee2`](../../doc/models/fee-2.md) | Required | - |
| `fundsCollections` | [`FundsCollection[] \| undefined`](../../doc/models/funds-collection.md) | Optional | Contains information about the accounts that Adyen uses to collect funds related to repayments. |
| `grantId` | `string` | Required | The unique identifier of the grant related to the disbursement. |
| `id` | `string` | Required | The unique identifier of the disbursement. |
| `repayment` | [`DisbursementRepayment`](../../doc/models/disbursement-repayment.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Disbursement, FundsCollectionType2 } from 'adyenlib';

const disbursement: Disbursement = {
  accountHolderId: 'accountHolderId2',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  balanceAccountId: 'balanceAccountId2',
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
  grantId: 'grantId8',
  id: 'id0',
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

