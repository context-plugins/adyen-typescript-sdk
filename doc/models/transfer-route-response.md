
# Transfer Route Response

*This model accepts additional fields of type unknown.*

## Structure

`TransferRouteResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferRoutes` | [`TransferRoute[] \| undefined`](../../doc/models/transfer-route.md) | Optional | List of available priorities for a transfer, along with requirements. Use this information to initiate a transfer. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AdditionalBankIdentificationType,
  Category2,
  Priority2,
  TransferRouteResponse,
  Type610,
} from 'adyenlib';

const transferRouteResponse: TransferRouteResponse = {
  transferRoutes: [
    {
      category: Category2.TopUp,
      country: 'country4',
      currency: 'currency0',
      priority: Priority2.Instant,
      requirements: [
        {
          type: Type610.AdditionalBankIdentificationRequirement,
          additionalBankIdentificationType: AdditionalBankIdentificationType.GbSortCode,
          description: 'description8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      category: Category2.TopUp,
      country: 'country4',
      currency: 'currency0',
      priority: Priority2.Instant,
      requirements: [
        {
          type: Type610.AdditionalBankIdentificationRequirement,
          additionalBankIdentificationType: AdditionalBankIdentificationType.GbSortCode,
          description: 'description8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      category: Category2.TopUp,
      country: 'country4',
      currency: 'currency0',
      priority: Priority2.Instant,
      requirements: [
        {
          type: Type610.AdditionalBankIdentificationRequirement,
          additionalBankIdentificationType: AdditionalBankIdentificationType.GbSortCode,
          description: 'description8',
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

