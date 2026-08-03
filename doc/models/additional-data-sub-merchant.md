
# Additional Data Sub Merchant

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalDataSubMerchant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subMerchantNumberOfSubSellers` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. Indicates the number of sub-merchants contained in the request. For example, **3**. |
| `subMerchantSubSellerSubSellerNrCity` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The city of the sub-merchant's address.<br><br>* Format: Alphanumeric<br>* Maximum length: 13 characters |
| `subMerchantSubSellerSubSellerNrCountry` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The three-letter country code of the sub-merchant's address. For example, **BRA** for Brazil.<br><br>* Format: [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)<br>* Fixed length: 3 characters |
| `subMerchantSubSellerSubSellerNrEmail` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The email address of the sub-merchant.<br><br>* Format: Alphanumeric<br>* Maximum length: 40 characters |
| `subMerchantSubSellerSubSellerNrId` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. A unique identifier that you create for the sub-merchant, used by schemes to identify the sub-merchant.<br><br>* Format: Alphanumeric<br>* Maximum length: 15 characters |
| `subMerchantSubSellerSubSellerNrMcc` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The sub-merchant's 4-digit Merchant Category Code (MCC).<br><br>* Format: Numeric<br>* Fixed length: 4 digits |
| `subMerchantSubSellerSubSellerNrName` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement  that will appear in the card statement.<br>Exception: for acquirers in Brazil, this value does not overwrite the shopper statement.<br><br>* Format: Alphanumeric<br>* Maximum length: 22 characters |
| `subMerchantSubSellerSubSellerNrPhoneNumber` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The phone number of the sub-merchant.<br><br>* Format: Alphanumeric and special characters<br>* Maximum length: 20 characters |
| `subMerchantSubSellerSubSellerNrPostalCode` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The postal code of the sub-merchant's address, without dashes.<br><br>* Format: Numeric<br>* Fixed length: 8 digits |
| `subMerchantSubSellerSubSellerNrState` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The state code of the sub-merchant's address, if applicable to the country.<br><br>* Format: Alphanumeric<br>* Maximum length: 2 characters |
| `subMerchantSubSellerSubSellerNrStreet` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The street name and house number of the sub-merchant's address.<br><br>* Format: Alphanumeric<br>* Maximum length: 60 characters |
| `subMerchantSubSellerSubSellerNrTaxId` | `string \| undefined` | Optional | Required for transactions performed by registered payment facilitators. The tax ID of the sub-merchant.<br><br>* Format: Numeric<br>* Fixed length: 11 digits for the CPF or 14 digits for the CNPJ |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdditionalDataSubMerchant } from 'adyenlib';

const additionalDataSubMerchant: AdditionalDataSubMerchant = {
  subMerchantNumberOfSubSellers: 'subMerchant.numberOfSubSellers2',
  subMerchantSubSellerSubSellerNrCity: Liquid error: Value cannot be null. (Parameter 'key'),
  subMerchantSubSellerSubSellerNrCountry: Liquid error: Value cannot be null. (Parameter 'key'),
  subMerchantSubSellerSubSellerNrEmail: Liquid error: Value cannot be null. (Parameter 'key'),
  subMerchantSubSellerSubSellerNrId: Liquid error: Value cannot be null. (Parameter 'key'),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

