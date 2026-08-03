
# Store Detail

*This model accepts additional fields of type unknown.*

## Structure

`StoreDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`ViasAddress`](../../doc/models/vias-address.md) | Required | - |
| `fullPhoneNumber` | `string \| undefined` | Optional | The phone number of the store provided as a single string.  It will be handled as a landline phone.<br><br>Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344" |
| `logo` | `string \| undefined` | Optional | Store logo for payment method setup. |
| `merchantAccount` | `string` | Required | The merchant account to which the store belongs. |
| `merchantCategoryCode` | `string` | Required | The merchant category code (MCC) that classifies the business of the account holder. |
| `merchantHouseNumber` | `string \| undefined` | Optional | Merchant house number for payment method setup. |
| `phoneNumber` | [`PhoneNumber3 \| undefined`](../../doc/models/phone-number-3.md) | Optional | - |
| `shopperInteraction` | [`ShopperInteraction \| undefined`](../../doc/models/shopper-interaction.md) | Optional | - |
| `splitConfigurationUuid` | `string \| undefined` | Optional | The unique reference for the split configuration, returned when you configure splits in your Customer Area. When this is provided, the `virtualAccount` is also required. Adyen uses the configuration and the `virtualAccount` to split funds between accounts in your platform. |
| `status` | [`Status \| undefined`](../../doc/models/status.md) | Optional | - |
| `store` | `string \| undefined` | Optional | Adyen-generated unique alphanumeric identifier (UUID) for the store, returned in the response when you create a store. Required when updating an existing store in an `/updateAccountHolder` request. |
| `storeName` | `string \| undefined` | Optional | The name of the account holder's store. This value is shown in shopper statements.<br><br>* Length: Between 3 to 22 characters<br><br>* The following characters are *not* supported: **:;}{$#@!\|<>%^*+=\\**<br><br>**Note:** storeName does not appear in American Express shopper statements by default. Contact Adyen Support to enable this for American Express. |
| `storeReference` | `string \| undefined` | Optional | Your unique identifier for the store. The Customer Area also uses this value for the store description.<br><br>* Length: Between 3 to 128 characters<br><br>* The following characters are *not* supported: **:;}{$#@!\|<>%^*+=\\** |
| `virtualAccount` | `string \| undefined` | Optional | The account holder's `accountCode` where the split amount will be sent. Required when you provide the `splitConfigurationUUID`. |
| `webAddress` | `string \| undefined` | Optional | URL of the ecommerce store. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PhoneType, ShopperInteraction, StoreDetail } from 'adyenlib';

const storeDetail: StoreDetail = {
  address: {
    country: 'country0',
    city: 'city6',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince4',
    street: 'street6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantAccount: 'merchantAccount8',
  merchantCategoryCode: 'merchantCategoryCode4',
  fullPhoneNumber: 'fullPhoneNumber0',
  logo: 'logo2',
  merchantHouseNumber: 'merchantHouseNumber4',
  phoneNumber: {
    phoneCountryCode: 'phoneCountryCode8',
    phoneNumber: 'phoneNumber0',
    phoneType: PhoneType.Fax,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  shopperInteraction: ShopperInteraction.Ecommerce,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

