
# Delivery Address 5

The delivery address for this order.

*This model accepts additional fields of type unknown.*

## Structure

`DeliveryAddress5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string` | Required | The name of the city. Maximum length: 3000 characters.<br><br>**Constraints**: *Maximum Length*: `3000` |
| `country` | `string` | Required | The two-character ISO-3166-1 alpha-2 country code. For example, **US**.<br><br>> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`. |
| `firstName` | `string \| undefined` | Optional | - |
| `houseNumberOrName` | `string` | Required | The number or name of the house. Maximum length: 3000 characters.<br><br>**Constraints**: *Maximum Length*: `3000` |
| `lastName` | `string \| undefined` | Optional | - |
| `postalCode` | `string` | Required | A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.<br><br>**Constraints**: *Maximum Length*: `10` |
| `stateOrProvince` | `string \| undefined` | Optional | The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br><br>> Required for the US and Canada.<br><br>**Constraints**: *Maximum Length*: `3` |
| `street` | `string` | Required | The name of the street. Maximum length: 3000 characters.<br><br>> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.<br><br>**Constraints**: *Maximum Length*: `3000` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeliveryAddress5 } from 'adyenlib';

const deliveryAddress5: DeliveryAddress5 = {
  city: 'city2',
  country: 'country6',
  houseNumberOrName: 'houseNumberOrName0',
  postalCode: 'postalCode4',
  street: 'street2',
  firstName: 'firstName2',
  lastName: 'lastName6',
  stateOrProvince: 'stateOrProvince0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

