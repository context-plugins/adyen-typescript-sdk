
# Name Location

## Structure

`NameLocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The city where the merchant is located. |
| `country` | `string \| undefined` | Optional | The country where the merchant is located in [three-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format. |
| `countryOfOrigin` | `string \| undefined` | Optional | The home country in [three-digit country code](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) format, used for government-controlled merchants such as embassies. |
| `name` | `string \| undefined` | Optional | The name of the merchant's shop or service. |
| `rawData` | `string \| undefined` | Optional | The raw data. |
| `state` | `string \| undefined` | Optional | The state where the merchant is located. |

## Example

```ts
import { NameLocation } from 'adyen';

const nameLocation: NameLocation = {
  city: 'city6',
  country: 'country8',
  countryOfOrigin: 'countryOfOrigin0',
  name: 'name4',
  rawData: 'rawData0',
};
```

