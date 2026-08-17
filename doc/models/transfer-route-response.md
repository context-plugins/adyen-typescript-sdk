
# Transfer Route Response

## Structure

`TransferRouteResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferRoutes` | [`TransferRoute[] \| undefined`](../../doc/models/transfer-route.md) | Optional | List of available priorities for a transfer, along with requirements. Use this information to initiate a transfer. |

## Example

```ts
import {
  AdditionalBankIdentificationTypeEnum,
  Category2Enum,
  Priority2Enum,
  TransferRouteResponse,
} from 'adyen';

const transferRouteResponse: TransferRouteResponse = {
  transferRoutes: [
    {
      category: Category2Enum.TopUp,
      country: 'country4',
      currency: 'currency0',
      priority: Priority2Enum.Instant,
      requirements: [
        {
          type: 'type8',
          additionalBankIdentificationType: AdditionalBankIdentificationTypeEnum.GbSortCode,
          description: 'description8',
        }
      ],
    },
    {
      category: Category2Enum.TopUp,
      country: 'country4',
      currency: 'currency0',
      priority: Priority2Enum.Instant,
      requirements: [
        {
          type: 'type8',
          additionalBankIdentificationType: AdditionalBankIdentificationTypeEnum.GbSortCode,
          description: 'description8',
        }
      ],
    },
    {
      category: Category2Enum.TopUp,
      country: 'country4',
      currency: 'currency0',
      priority: Priority2Enum.Instant,
      requirements: [
        {
          type: 'type8',
          additionalBankIdentificationType: AdditionalBankIdentificationTypeEnum.GbSortCode,
          description: 'description8',
        }
      ],
    }
  ],
};
```

