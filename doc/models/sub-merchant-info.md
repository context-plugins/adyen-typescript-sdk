
# Sub Merchant Info

*This model accepts additional fields of type unknown.*

## Structure

`SubMerchantInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | - |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `email` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The email associated with the sub-merchant's account.<br><br>**Constraints**: *Maximum Length*: `320` |
| `id` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. A unique identifier that you create for the sub-merchant, used by schemes to identify the sub-merchant.<br><br>* Format: Alphanumeric<br>* Maximum length: 15 characters |
| `mcc` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The sub-merchant's 4-digit Merchant Category Code (MCC).<br><br>* Format: Numeric<br>* Fixed length: 4 digits |
| `name` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement that will appear in the card statement.<br>Exception: for acquirers in Brazil, this value does not overwrite the shopper statement.<br><br>* Format: Alphanumeric<br>* Maximum length: 22 characters |
| `phoneNumber` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The phone number associated with the sub-merchant's account.<br><br>**Constraints**: *Maximum Length*: `20` |
| `registeredSince` | `string \| undefined` | Optional | - |
| `taxId` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The tax ID of the sub-merchant.<br><br>* Format: Numeric<br>* Fixed length: 11 digits for the CPF or 14 digits for the CNPJ |
| `url` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The sub-merchant's URL on the platform, i.e. the sub-merchant's shop.<br><br>**Constraints**: *Maximum Length*: `320` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SubMerchantInfo } from 'adyenlib';

const subMerchantInfo: SubMerchantInfo = {
  address: {
    city: 'city6',
    country: 'country0',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    street: 'street6',
    stateOrProvince: 'stateOrProvince4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  email: 'email2',
  id: 'id4',
  mcc: 'mcc4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

