
# Address 4

## Structure

`Address4`

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

## Example

```ts
import { Address4 } from 'adyen';

const address4: Address4 = {
  city: 'city4',
  companyName: 'companyName6',
  country: 'country8',
  postalCode: 'postalCode6',
  stateOrProvince: 'stateOrProvince2',
};
```

