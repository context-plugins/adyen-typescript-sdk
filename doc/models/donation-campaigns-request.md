
# Donation Campaigns Request

*This model accepts additional fields of type unknown.*

## Structure

`DonationCampaignsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes/). |
| `locale` | `string \| undefined` | Optional | Locale on the shopper interaction device. |
| `merchantAccount` | `string` | Required | Your merchant account identifier. |
| `store` | `string \| undefined` | Optional | Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DonationCampaignsRequest } from 'adyen';

const donationCampaignsRequest: DonationCampaignsRequest = {
  currency: 'currency8',
  merchantAccount: 'merchantAccount0',
  locale: 'locale6',
  store: 'store2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

