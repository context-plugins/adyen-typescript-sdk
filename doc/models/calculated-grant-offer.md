
# Calculated Grant Offer

*This model accepts additional fields of type unknown.*

## Structure

`CalculatedGrantOffer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the account holder that the dynamic offer is for. |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `contractType` | [`ContractType`](../../doc/models/contract-type.md) | Required | - |
| `expiresAt` | `string` | Required | The expiration date and time of the offer validity period. |
| `fee` | [`GrantOfferFee`](../../doc/models/grant-offer-fee.md) | Required | - |
| `repayment` | [`Repayment1`](../../doc/models/repayment-1.md) | Required | - |
| `startsAt` | `string` | Required | The starting date and time of the offer validity period. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CalculatedGrantOffer, ContractType } from 'adyenlib';

const calculatedGrantOffer: CalculatedGrantOffer = {
  accountHolderId: 'accountHolderId2',
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
  startsAt: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

