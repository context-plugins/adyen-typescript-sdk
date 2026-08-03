
# Transfer Notification Merchant Data

*This model accepts additional fields of type unknown.*

## Structure

`TransferNotificationMerchantData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acquirerId` | `string \| undefined` | Optional | The unique identifier of the merchant's acquirer. |
| `city` | `string \| undefined` | Optional | The city where the merchant is located. |
| `country` | `string \| undefined` | Optional | The country where the merchant is located. |
| `countryCode` | `string \| undefined` | Optional | The two-character country code of the merchant's location, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. |
| `mcc` | `string \| undefined` | Optional | The merchant category code. |
| `merchantId` | `string \| undefined` | Optional | The unique identifier of the merchant. |
| `name` | `string \| undefined` | Optional | The name of the merchant's shop or service. |
| `postalCode` | `string \| undefined` | Optional | The postal code of the merchant. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransferNotificationMerchantData } from 'adyenlib';

const transferNotificationMerchantData: TransferNotificationMerchantData = {
  acquirerId: 'acquirerId2',
  city: 'city0',
  country: 'country4',
  countryCode: 'countryCode4',
  mcc: 'mcc0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

