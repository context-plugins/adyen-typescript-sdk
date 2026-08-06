
# Sub Merchant Data 2

*This model accepts additional fields of type unknown.*

## Structure

`SubMerchantData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The city of the sub-merchant's address. |
| `country` | `string \| undefined` | Optional | The country/region of the sub-merchant's address, specified as the three-letter country code in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format. |
| `displayName` | `string` | Required | The name of the sub-merchant as it should appear on the display of the mobile device during transactions. |
| `email` | `string \| undefined` | Optional | The email address of the sub-merchant. Required for American Express. |
| `id` | `string` | Required | Your unique identifier of the sub-merchant. |
| `mcc` | `string` | Required | The sub-merchant's four-digit Merchant Category Code (MCC). This parameter is used to correctly route the transaction. |
| `name` | `string` | Required | The name of the sub-merchant. |
| `phoneNumber` | `string \| undefined` | Optional | The phone number of the sub-merchant. Required for American Express. |
| `postalCode` | `string \| undefined` | Optional | The postal code of the sub-merchant's address, without dashes. |
| `state` | `string \| undefined` | Optional | The state code of the sub-merchant's address, if applicable for the country or region. |
| `street` | `string \| undefined` | Optional | The street name and house number of the sub-merchant's address. |
| `taxId` | `string \| undefined` | Optional | The tax ID of the sub-merchant. Required only in Brazil and for Cartes Bancaires in France.<br>For Brazil, this is the 11-digit CPF or 14-digit CNPJ.<br>For France, this is the SIRET, with a maximum of 14 digits. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SubMerchantData2 } from 'adyen';

const subMerchantData2: SubMerchantData2 = {
  displayName: 'displayName2',
  id: 'id0',
  mcc: 'mcc0',
  name: 'name0',
  city: 'city0',
  country: 'country4',
  email: 'email6',
  phoneNumber: 'phoneNumber0',
  postalCode: 'postalCode8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

