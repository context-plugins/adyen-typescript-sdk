
# Merchant Data 2

Contains information about the merchant.

## Structure

`MerchantData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acquirerId` | `string \| undefined` | Optional | The unique identifier of the merchant's acquirer. |
| `mcc` | `string \| undefined` | Optional | The merchant category code. |
| `merchantId` | `string \| undefined` | Optional | The unique identifier of the merchant. |
| `nameLocation` | [`NameLocation2 \| undefined`](../../doc/models/name-location-2.md) | Optional | Contains the name and location of the merchant. |
| `postalCode` | `string \| undefined` | Optional | The postal code of the merchant. |

## Example

```ts
import { MerchantData2 } from 'adyen';

const merchantData2: MerchantData2 = {
  acquirerId: 'acquirerId6',
  mcc: 'mcc4',
  merchantId: 'merchantId0',
  nameLocation: {
    city: 'city6',
    country: 'country8',
    countryOfOrigin: 'countryOfOrigin0',
    name: 'name4',
    rawData: 'rawData0',
  },
  postalCode: 'postalCode6',
};
```

