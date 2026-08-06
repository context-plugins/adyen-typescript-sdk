
# Address 3

The address of the organization registered at their registrar (such as the Chamber of Commerce).

*This model accepts additional fields of type unknown.*

## Structure

`Address3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The name of the city. Required if `stateOrProvince` is provided.<br><br>If you specify the city, you must also send `postalCode` and `street`. |
| `country` | `string` | Required | The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. |
| `postalCode` | `string \| undefined` | Optional | The postal code. Required if `stateOrProvince` and/or `city` is provided.<br><br>When using alphanumeric postal codes, all letters must be uppercase. For example, 1234 AB or SW1A 1AA. |
| `stateOrProvince` | `string \| undefined` | Optional | The two-letter ISO 3166-2 state or province code. For example, **CA** in the US. Required for Australia and New Zealand.<br><br>If you specify the state or province, you must also send `city`, `postalCode`, and `street`. |
| `street` | `string \| undefined` | Optional | The name of the street, and the house or building number. Required if `stateOrProvince` and/or `city` is provided. |
| `street2` | `string \| undefined` | Optional | The apartment, unit, or suite number. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Address3 } from 'adyen';

const address3: Address3 = {
  country: 'country4',
  city: 'city0',
  postalCode: 'postalCode8',
  stateOrProvince: 'stateOrProvince8',
  street: 'street0',
  street2: 'street24',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

