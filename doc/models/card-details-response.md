
# Card Details Response

*This model accepts additional fields of type unknown.*

## Structure

`CardDetailsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brands` | [`CardBrandDetails[] \| undefined`](../../doc/models/card-brand-details.md) | Optional | The list of brands identified for the card. |
| `fundingSource` | `string \| undefined` | Optional | The funding source of the card, for example **DEBIT**, **CREDIT**, or **PREPAID**. |
| `isCardCommercial` | `boolean \| undefined` | Optional | Indicates if this is a commercial card or a consumer card. If **true**, it is a commercial card. If **false**, it is a consumer card. |
| `issuingCountryCode` | `string \| undefined` | Optional | The two-letter country code  of the country where the card was issued. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardDetailsResponse } from 'adyenlib';

const cardDetailsResponse: CardDetailsResponse = {
  brands: [
    {
      healthcare: false,
      supported: false,
      type: 'type6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      healthcare: false,
      supported: false,
      type: 'type6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  fundingSource: 'fundingSource0',
  isCardCommercial: false,
  issuingCountryCode: 'issuingCountryCode8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

