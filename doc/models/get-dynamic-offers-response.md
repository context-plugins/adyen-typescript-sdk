
# Get Dynamic Offers Response

*This model accepts additional fields of type unknown.*

## Structure

`GetDynamicOffersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dynamicOffers` | [`DynamicOffer[]`](../../doc/models/dynamic-offer.md) | Required | Contains a list of available dynamic offers for the specified account holder. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ContractType,
  FinancingType2,
  GetDynamicOffersResponse,
} from 'adyen';

const getDynamicOffersResponse: GetDynamicOffersResponse = {
  dynamicOffers: [
    {
      accountHolderId: 'accountHolderId4',
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

