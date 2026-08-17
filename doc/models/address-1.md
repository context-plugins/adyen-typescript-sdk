
# Address 1

The address where to send the invoice.

> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.
> 
> * For 3D Secure 2 transactions in all browser-based and mobile implementations.
> * For cross-border payouts to and from Canada.

## Structure

`Address1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string` | Required | The name of the city. Maximum length: 3000 characters.<br><br>**Constraints**: *Maximum Length*: `3000` |
| `country` | `string` | Required | The two-character ISO-3166-1 alpha-2 country code. For example, **US**.<br><br>> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`. |
| `houseNumberOrName` | `string` | Required | The number or name of the house. Maximum length: 3000 characters.<br><br>**Constraints**: *Maximum Length*: `3000` |
| `postalCode` | `string` | Required | A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries. |
| `stateOrProvince` | `string \| undefined` | Optional | The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br><br>> Required for the US and Canada. |
| `street` | `string` | Required | The name of the street. Maximum length: 3000 characters.<br><br>> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.<br><br>**Constraints**: *Maximum Length*: `3000` |

## Example

```ts
import { Address1 } from 'adyen';

const address1: Address1 = {
  city: 'city8',
  country: 'country6',
  houseNumberOrName: 'houseNumberOrName0',
  postalCode: 'postalCode6',
  street: 'street2',
  stateOrProvince: 'stateOrProvince0',
};
```

