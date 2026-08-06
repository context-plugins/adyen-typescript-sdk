
# Dynamic Offer

*This model accepts additional fields of type unknown.*

## Structure

`DynamicOffer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the account holder that the dynamic offer is for. |
| `contractType` | [`ContractType`](../../doc/models/contract-type.md) | Required | - |
| `expiresAt` | `string` | Required | The expiration date and time of the offer validity period. |
| `financingType` | [`FinancingType2`](../../doc/models/financing-type-2.md) | Required | - |
| `id` | `string` | Required | The unique identifier of the dynamic offer. |
| `maximumAmount` | [`MaximumAmount`](../../doc/models/maximum-amount.md) | Required | - |
| `minimumAmount` | [`MinimumAmount`](../../doc/models/minimum-amount.md) | Required | - |
| `repayment` | [`DynamicOfferRepayment`](../../doc/models/dynamic-offer-repayment.md) | Required | - |
| `startsAt` | `string` | Required | The starting date and time of the offer validity period. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ContractType, DynamicOffer, FinancingType2 } from 'adyen';

const dynamicOffer: DynamicOffer = {
  accountHolderId: 'accountHolderId6',
  contractType: ContractType.CashAdvance,
  expiresAt: '2016-03-13T12:52:32.123Z',
  financingType: FinancingType2.HardwareFinancing,
  id: 'id2',
  maximumAmount: {
    currency: 'currency0',
    value: BigInt(190),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  minimumAmount: {
    currency: 'currency2',
    value: BigInt(96),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  repayment: {
    term: {
      estimatedDays: 248,
      maximumDays: 24,
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

