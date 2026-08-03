
# Merchant

*This model accepts additional fields of type unknown.*

## Structure

`Merchant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`CompanyLinks \| undefined`](../../doc/models/company-links.md) | Optional | - |
| `captureDelay` | `string \| undefined` | Optional | The [capture delay](https://docs.adyen.com/online-payments/capture#capture-delay) set for the merchant account.<br><br>Possible values:<br><br>* **Immediate**<br>* **Manual**<br>* Number of days from **1** to **29** |
| `companyId` | `string \| undefined` | Optional | The unique identifier of the company account this merchant belongs to |
| `dataCenters` | [`DataCenter[] \| undefined`](../../doc/models/data-center.md) | Optional | List of available data centers.<br><br>Adyen has several data centers around the world.In the URL that you use for making API requests, we recommend you use the live URL prefix from the data center closest to your shoppers. |
| `defaultShopperInteraction` | `string \| undefined` | Optional | The default [`shopperInteraction`](https://docs.adyen.com/api-explorer/#/CheckoutService/v68/post/payments__reqParam_shopperInteraction) value used when processing payments through this merchant account. |
| `description` | `string \| undefined` | Optional | Your description for the merchant account, maximum 300 characters |
| `id` | `string \| undefined` | Optional | The unique identifier of the merchant account. |
| `merchantCity` | `string \| undefined` | Optional | The city where the legal entity of this merchant account is registered. |
| `name` | `string \| undefined` | Optional | The name of the legal entity associated with the merchant account. |
| `pricingPlan` | `string \| undefined` | Optional | Only applies to merchant accounts managed by Adyen's partners. The name of the pricing plan assigned to the merchant account. |
| `primarySettlementCurrency` | `string \| undefined` | Optional | The currency of the country where the legal entity of this merchant account is registered. Format: [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). For example, a legal entity based in the United States has USD as the primary settlement currency. |
| `reference` | `string \| undefined` | Optional | Reference of the merchant account. |
| `shopWebAddress` | `string \| undefined` | Optional | The URL for the ecommerce website used with this merchant account. |
| `status` | `string \| undefined` | Optional | The status of the merchant account.<br><br>Possible values:<br><br>* **PreActive**: The merchant account has been created. Users cannot access the merchant account in the Customer Area. The account cannot process payments.<br>* **Active**: Users can access the merchant account in the Customer Area. If the company account is also **Active**, then payment processing and payouts are enabled.<br>* **InactiveWithModifications**: Users can access the merchant account in the Customer Area. You cannot process new payments but you can still modify payments, for example issue refunds. You can still receive payouts.<br>* **Inactive**: Users can access the merchant account in the Customer Area. Payment processing and payouts are disabled.<br>* **Closed**: The account is closed and this cannot be reversed. Users cannot log in. Payment processing and payouts are disabled. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Merchant } from 'adyenlib';

const merchant: Merchant = {
  links: {
    self: {
      href: 'href0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    apiCredentials: {
      href: 'href8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    users: {
      href: 'href8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    webhooks: {
      href: 'href8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  captureDelay: 'captureDelay0',
  companyId: 'companyId4',
  dataCenters: [
    {
      livePrefix: 'livePrefix4',
      name: 'name6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      livePrefix: 'livePrefix4',
      name: 'name6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      livePrefix: 'livePrefix4',
      name: 'name6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  defaultShopperInteraction: 'defaultShopperInteraction2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

