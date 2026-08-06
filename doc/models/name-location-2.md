
# Name Location 2

Contains the name and location of the merchant.

*This model accepts additional fields of type unknown.*

## Structure

`NameLocation2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The city where the merchant is located. |
| `country` | `string \| undefined` | Optional | The country where the merchant is located in [three-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format. |
| `countryOfOrigin` | `string \| undefined` | Optional | The home country in [three-digit country code](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) format, used for government-controlled merchants such as embassies. |
| `name` | `string \| undefined` | Optional | The name of the merchant's shop or service. |
| `rawData` | `string \| undefined` | Optional | The raw data. |
| `state` | `string \| undefined` | Optional | The state where the merchant is located. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NameLocation2 } from 'adyen';

const nameLocation2: NameLocation2 = {
  city: 'city6',
  country: 'country0',
  countryOfOrigin: 'countryOfOrigin2',
  name: 'name6',
  rawData: 'rawData2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

