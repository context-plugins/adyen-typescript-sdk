
# Bulk Address

*This model accepts additional fields of type unknown.*

## Structure

`BulkAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The name of the city. |
| `company` | `string \| undefined` | Optional | The name of the company. |
| `country` | `string` | Required | The two-character ISO-3166-1 alpha-2 country code. For example, **US**. |
| `email` | `string \| undefined` | Optional | The email address. |
| `houseNumberOrName` | `string \| undefined` | Optional | The house number or name. |
| `line1` | `string \| undefined` | Optional | The name of the street and the number of the building.<br><br>For example: **Simon Carmiggeltstraat 6-50**. |
| `line2` | `string \| undefined` | Optional | Additional information about the delivery address. For example, an apartment number. |
| `line3` | `string \| undefined` | Optional | Additional information about the delivery address. |
| `mobile` | `string \| undefined` | Optional | The full telephone number. |
| `name` | `string \| undefined` | Optional | The recipient’s name (person or contact), for example ‘John Doe’. |
| `postalCode` | `string \| undefined` | Optional | The postal code.<br><br>Maximum length:<br><br>* 5 digits for addresses in the US.<br><br>* 10 characters for all other countries. |
| `stateOrProvince` | `string \| undefined` | Optional | The two-letter ISO 3166-2 state or province code.<br><br>Maximum length: 2 characters for addresses in the US. |
| `street` | `string \| undefined` | Optional | The streetname of the house. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BulkAddress } from 'adyen';

const bulkAddress: BulkAddress = {
  country: 'country0',
  city: 'city6',
  company: 'company6',
  email: 'email0',
  houseNumberOrName: 'houseNumberOrName4',
  line1: 'line18',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

