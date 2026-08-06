
# Address 22

The address details of the shipping location.

*This model accepts additional fields of type unknown.*

## Structure

`Address22`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The name of the city. |
| `companyName` | `string \| undefined` | Optional | The name of the company. |
| `country` | `string \| undefined` | Optional | The two-letter country code, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. |
| `postalCode` | `string \| undefined` | Optional | The postal code. |
| `stateOrProvince` | `string \| undefined` | Optional | The state or province as defined in [ISO 3166-2](https://www.iso.org/standard/72483.html). For example, **ON** for Ontario, Canada.<br><br>Applicable for the following countries:<br><br>- Australia<br>- Brazil<br>- Canada<br>- India<br>- Mexico<br>- New Zealand<br>- United States |
| `streetAddress` | `string \| undefined` | Optional | The name of the street, and the house or building number. |
| `streetAddress2` | `string \| undefined` | Optional | Additional address details, if any. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Address22 } from 'adyen';

const address22: Address22 = {
  city: 'city8',
  companyName: 'companyName4',
  country: 'country6',
  postalCode: 'postalCode6',
  stateOrProvince: 'stateOrProvince0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

