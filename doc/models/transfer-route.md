
# Transfer Route

*This model accepts additional fields of type unknown.*

## Structure

`TransferRoute`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `category` | [`Category2 \| undefined`](../../doc/models/category-2.md) | Optional | - |
| `country` | `string \| undefined` | Optional | The two-character ISO-3166-1 alpha-2 country code of the counterparty. For example, **US** or **NL**. |
| `currency` | `string \| undefined` | Optional | The three-character ISO currency code of transfer. For example, **USD** or **EUR**. |
| `priority` | [`Priority2 \| undefined`](../../doc/models/priority-2.md) | Optional | - |
| `requirements` | [`TransferRouteRequirements[] \| undefined`](../../doc/models/containers/transfer-route-requirements.md) | Optional | This is Array of a container for one-of cases. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AdditionalBankIdentificationType,
  Category2,
  Priority2,
  TransferRoute,
  Type610,
} from 'adyen';

const transferRoute: TransferRoute = {
  category: Category2.Grants,
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
};
```

