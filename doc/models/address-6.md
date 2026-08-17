
# Address 6

## Structure

`Address6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The name of the city.<br><br>Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ \|** and Space.<br><br>> Required when the `category` is **card**.<br><br>**Constraints**: *Minimum Length*: `3` |
| `country` | `string` | Required | The two-character ISO 3166-1 alpha-2 country code. For example, **US**, **NL**, or **GB**. |
| `line1` | `string \| undefined` | Optional | The first line of the street address.<br><br>Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ \|** and Space.<br><br>> Required when the `category` is **card**. |
| `line2` | `string \| undefined` | Optional | The second line of the street address.<br><br>Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ \|** and Space.<br><br>> Required when the `category` is **card**. |
| `postalCode` | `string \| undefined` | Optional | The postal code.<br>Maximum length:<br><br>* 5 digits for an address in the US.<br>* 10 characters for an address in all other countries.<br><br>Supported characters: **[a-z] [A-Z] [0-9]** and Space.<br><br>> Required for addresses in the US.<br><br>**Constraints**: *Minimum Length*: `3` |
| `stateOrProvince` | `string \| undefined` | Optional | The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br><br>> Required for the US and Canada. |

## Example

```ts
import { Address6 } from 'adyen';

const address6: Address6 = {
  country: 'country2',
  city: 'city8',
  line1: 'line10',
  line2: 'line22',
  postalCode: 'postalCode0',
  stateOrProvince: 'stateOrProvince6',
};
```

