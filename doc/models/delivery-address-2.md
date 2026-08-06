
# Delivery Address 2

The address of the contact.

*This model accepts additional fields of type unknown.*

## Structure

`DeliveryAddress2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The name of the city. |
| `country` | `string` | Required | The two-character ISO-3166-1 alpha-2 country code. For example, **US**.<br><br>> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`. |
| `line1` | `string \| undefined` | Optional | The name of the street. Do not include the number of the building.<br><br>For example, if the address is Simon Carmiggeltstraat 6-50, provide **Simon Carmiggeltstraat**. |
| `line2` | `string \| undefined` | Optional | The number of the building.<br><br>For example, if the address is Simon Carmiggeltstraat 6-50, provide **6-50**. |
| `line3` | `string \| undefined` | Optional | Additional information about the delivery address. |
| `postalCode` | `string \| undefined` | Optional | The postal code.<br>Maximum length:<br><br>* 5 digits for an address in the US.<br>* 10 characters for an address in all other countries. |
| `stateOrProvince` | `string \| undefined` | Optional | The state or province code, maximum 3 characters. For example, **CA** for California in the US or **ON** for Ontario in Canada.<br><br>> Required for the US and Canada. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeliveryAddress2 } from 'adyen';

const deliveryAddress2: DeliveryAddress2 = {
  country: 'country2',
  city: 'city8',
  line1: 'line10',
  line2: 'line22',
  line3: 'line30',
  postalCode: 'postalCode0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

