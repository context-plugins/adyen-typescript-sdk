
# Capital Grant

*This model accepts additional fields of type unknown.*

## Structure

`CapitalGrant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount5 \| undefined`](../../doc/models/amount-5.md) | Optional | - |
| `balances` | [`Balances`](../../doc/models/balances.md) | Required | - |
| `counterparty` | [`Counterparty10 \| undefined`](../../doc/models/counterparty-10.md) | Optional | - |
| `fee` | [`Fee2 \| undefined`](../../doc/models/fee-2.md) | Optional | - |
| `grantAccountId` | `string` | Required | The identifier of the grant account used for the grant. |
| `grantOfferId` | `string` | Required | The identifier of the grant offer that has been selected and from which the grant details will be used. |
| `id` | `string` | Required | The identifier of the grant reference. |
| `repayment` | [`Repayment8 \| undefined`](../../doc/models/repayment-8.md) | Optional | - |
| `status` | [`Status18`](../../doc/models/status-18.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CapitalGrant, Status18 } from 'adyen';

const capitalGrant: CapitalGrant = {
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
  status: Status18.Pending,
  amount: {
    currency: 'currency2',
    value: BigInt(110),
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
  repayment: {
    basisPoints: 18,
    term: {
      estimatedDays: 248,
      maximumDays: 24,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    threshold: {
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
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

