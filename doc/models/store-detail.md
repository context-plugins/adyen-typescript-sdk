
# Store Detail

## Structure

`StoreDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`ViasAddress7`](../../doc/models/vias-address-7.md) | Required | The address of the physical store where the account holder will process payments from. |
| `fullPhoneNumber` | `string \| undefined` | Optional | The phone number of the store provided as a single string.  It will be handled as a landline phone.<br><br>Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344" |
| `logo` | `string \| undefined` | Optional | Store logo for payment method setup. |
| `merchantAccount` | `string` | Required | The merchant account to which the store belongs. |
| `merchantCategoryCode` | `string` | Required | The merchant category code (MCC) that classifies the business of the account holder. |
| `merchantHouseNumber` | `string \| undefined` | Optional | Merchant house number for payment method setup. |
| `phoneNumber` | [`ViasPhoneNumber4 \| undefined`](../../doc/models/vias-phone-number-4.md) | Optional | The phone number of the store. |
| `shopperInteraction` | [`PaymentFlowEnum \| undefined`](../../doc/models/payment-flow-enum.md) | Optional | The sales channel. Possible values: **Ecommerce**, **POS**. |
| `splitConfigurationUUID` | `string \| undefined` | Optional | The unique reference for the split configuration, returned when you configure splits in your Customer Area. When this is provided, the `virtualAccount` is also required. Adyen uses the configuration and the `virtualAccount` to split funds between accounts in your platform. |
| `status` | [`Status8Enum \| undefined`](../../doc/models/status-8-enum.md) | Optional | The status of the store. Possible values: **Pending**, **Active**, **Inactive**, **InactiveWithModifications**, **Closed**. |
| `store` | `string \| undefined` | Optional | Adyen-generated unique alphanumeric identifier (UUID) for the store, returned in the response when you create a store. Required when updating an existing store in an `/updateAccountHolder` request. |
| `storeName` | `string \| undefined` | Optional | The name of the account holder's store. This value is shown in shopper statements.<br><br>* Length: Between 3 to 22 characters<br><br>* The following characters are *not* supported: **:;}{$#@!\|<>%^*+=\\**<br><br>**Note:** storeName does not appear in American Express shopper statements by default. Contact Adyen Support to enable this for American Express. |
| `storeReference` | `string \| undefined` | Optional | Your unique identifier for the store. The Customer Area also uses this value for the store description.<br><br>* Length: Between 3 to 128 characters<br><br>* The following characters are *not* supported: **:;}{$#@!\|<>%^*+=\\** |
| `virtualAccount` | `string \| undefined` | Optional | The account holder's `accountCode` where the split amount will be sent. Required when you provide the `splitConfigurationUUID`. |
| `webAddress` | `string \| undefined` | Optional | URL of the ecommerce store. |

## Example

```ts
import { PaymentFlowEnum, PhoneTypeEnum, StoreDetail } from 'adyen';

const storeDetail: StoreDetail = {
  address: {
    country: 'country0',
    city: 'city6',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince4',
    street: 'street6',
  },
  merchantAccount: 'merchantAccount8',
  merchantCategoryCode: 'merchantCategoryCode4',
  fullPhoneNumber: 'fullPhoneNumber0',
  logo: 'logo2',
  merchantHouseNumber: 'merchantHouseNumber4',
  phoneNumber: {
    phoneCountryCode: 'phoneCountryCode8',
    phoneNumber: 'phoneNumber0',
    phoneType: PhoneTypeEnum.Fax,
  },
  shopperInteraction: PaymentFlowEnum.Ecommerce,
};
```

