
# Store Location 1

The address of the store.

## Structure

`StoreLocation1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The name of the city. |
| `country` | `string` | Required | The two-letter country code in [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. |
| `line1` | `string \| undefined` | Optional | The street address. |
| `line2` | `string \| undefined` | Optional | Second address line. |
| `line3` | `string \| undefined` | Optional | Third address line. |
| `postalCode` | `string \| undefined` | Optional | The postal code. |
| `stateOrProvince` | `string \| undefined` | Optional | The state or province code as defined in [ISO 3166-2](https://www.iso.org/standard/72483.html). For example, **ON** for Ontario, Canada.<br><br>Required for the following countries:<br><br>- Australia<br>- Brazil<br>- Canada<br>- India<br>- Mexico<br>- New Zealand<br>- United States |

## Example

```ts
import { StoreLocation1 } from 'adyen';

const storeLocation1: StoreLocation1 = {
  country: 'country0',
  city: 'city4',
  line1: 'line18',
  line2: 'line20',
  line3: 'line38',
  postalCode: 'postalCode2',
};
```

