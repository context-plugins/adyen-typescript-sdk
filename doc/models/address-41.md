
# Address 41

The business address. Required if the principal place of business is different from the `registeredAddress`.

## Structure

`Address41`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The name of the city. Required if `stateOrProvince` is provided.<br><br>If you specify the city, you must also send `postalCode` and `street`. |
| `country` | `string` | Required | The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. |
| `postalCode` | `string \| undefined` | Optional | The postal code. Required if `stateOrProvince` and/or `city` is provided.<br><br>When using alphanumeric postal codes, all letters must be uppercase. For example, 1234 AB or SW1A 1AA. |
| `stateOrProvince` | `string \| undefined` | Optional | The two-letter ISO 3166-2 state or province code. For example, **CA** in the US. Required for Australia and New Zealand.<br><br>If you specify the state or province, you must also send `city`, `postalCode`, and `street`. |
| `street` | `string \| undefined` | Optional | The name of the street, and the house or building number. Required if `stateOrProvince` and/or `city` is provided. |
| `street2` | `string \| undefined` | Optional | The apartment, unit, or suite number. |

## Example

```ts
import { Address41 } from 'adyen';

const address41: Address41 = {
  country: 'country2',
  city: 'city8',
  postalCode: 'postalCode0',
  stateOrProvince: 'stateOrProvince6',
  street: 'street8',
  street2: 'street24',
};
```

