
# Sub Merchant Data

## Structure

`SubMerchantData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | The email associated with the sub-merchant's account.<br><br>**Constraints**: *Maximum Length*: `320` |
| `id` | `string` | Required | A unique identifier that you create for the sub-merchant, used by schemes to identify the sub-merchant.<br><br>* Format: Alphanumeric<br>* Maximum length: 15 characters |
| `mcc` | `string` | Required | The sub-merchant's 4-digit Merchant Category Code (MCC).<br><br>* Format: Numeric<br>* Fixed length: 4 digits |
| `name` | `string` | Required | The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement that will appear in the card statement.<br><br>* Format: Alphanumeric<br>* Maximum length: 22 characters |

## Example

```ts
import { SubMerchantData } from 'adyen';

const subMerchantData: SubMerchantData = {
  email: 'email8',
  id: 'id8',
  mcc: 'mcc8',
  name: 'name8',
};
```

