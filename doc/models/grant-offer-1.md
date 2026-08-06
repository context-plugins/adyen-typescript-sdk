
# Grant Offer 1

*This model accepts additional fields of type unknown.*

## Structure

`GrantOffer1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the account holder to which the grant is offered. |
| `amount` | [`Amount5 \| undefined`](../../doc/models/amount-5.md) | Optional | - |
| `contractType` | [`ContractType \| undefined`](../../doc/models/contract-type.md) | Optional | - |
| `expiresAt` | `string \| undefined` | Optional | The expiration date and time of the offer validity period. |
| `fee` | [`GrantOfferFee \| undefined`](../../doc/models/grant-offer-fee.md) | Optional | - |
| `id` | `string \| undefined` | Optional | The unique identifier of the offer. |
| `repayment` | [`Repayment1 \| undefined`](../../doc/models/repayment-1.md) | Optional | - |
| `startsAt` | `string \| undefined` | Optional | The starting date and time of the offer validity period. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ContractType, GrantOffer1 } from 'adyen';

const grantOffer1: GrantOffer1 = {
  accountHolderId: 'accountHolderId0',
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  contractType: ContractType.CashAdvance,
  expiresAt: '2016-03-13T12:52:32.123Z',
  fee: {
    amount: {
      currency: 'currency2',
      value: BigInt(110),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    aprBasisPoints: 142,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  id: 'id8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

