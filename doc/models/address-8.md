
# Address 8

*This model accepts additional fields of type unknown.*

## Structure

`Address8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The name of the city.<br><br>Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ \|** and Space.<br><br>> Required when the `category` is **card**.<br><br>**Constraints**: *Minimum Length*: `3` |
| `country` | `string` | Required | The two-character ISO 3166-1 alpha-2 country code. For example, **US**, **NL**, or **GB**. |
| `line1` | `string \| undefined` | Optional | The first line of the street address.<br><br>Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ \|** and Space.<br><br>> Required when the `category` is **card**. |
| `line2` | `string \| undefined` | Optional | The second line of the street address.<br><br>Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ \|** and Space.<br><br>> Required when the `category` is **card**. |
| `postalCode` | `string \| undefined` | Optional | The postal code.<br>Maximum length:<br><br>* 5 digits for an address in the US.<br>* 10 characters for an address in all other countries.<br><br>Supported characters: **[a-z] [A-Z] [0-9]** and Space.<br><br>> Required for addresses in the US.<br><br>**Constraints**: *Minimum Length*: `3` |
| `stateOrProvince` | `string \| undefined` | Optional | The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br><br>> Required for the US and Canada. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Address8 } from 'adyen';

const address8: Address8 = {
  country: 'country0',
  city: 'city6',
  line1: 'line18',
  line2: 'line20',
  postalCode: 'postalCode2',
  stateOrProvince: 'stateOrProvince4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

