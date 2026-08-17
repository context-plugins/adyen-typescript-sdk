
# Card Details Response

## Structure

`CardDetailsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brands` | [`CardBrandDetails[] \| undefined`](../../doc/models/card-brand-details.md) | Optional | The list of brands identified for the card. |
| `fundingSource` | `string \| undefined` | Optional | The funding source of the card, for example **DEBIT**, **CREDIT**, or **PREPAID**. |
| `isCardCommercial` | `boolean \| undefined` | Optional | Indicates if this is a commercial card or a consumer card. If **true**, it is a commercial card. If **false**, it is a consumer card. |
| `issuingCountryCode` | `string \| undefined` | Optional | The two-letter country code  of the country where the card was issued. |

## Example

```ts
import { CardDetailsResponse } from 'adyen';

const cardDetailsResponse: CardDetailsResponse = {
  brands: [
    {
      healthcare: false,
      supported: false,
      type: 'type6',
    },
    {
      healthcare: false,
      supported: false,
      type: 'type6',
    }
  ],
  fundingSource: 'fundingSource0',
  isCardCommercial: false,
  issuingCountryCode: 'issuingCountryCode8',
};
```

