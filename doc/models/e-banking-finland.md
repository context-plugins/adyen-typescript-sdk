
# E Banking Finland

## Structure

`EBankingFinland`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string \| undefined` | Optional | The Ebanking Finland issuer value of the shopper's selected bank. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | `string` | Required, Constant | **ebanking_FI**<br><br>**Value**: `'ebanking_FI'` |

## Example

```ts
import { EBankingFinland } from 'adyen';

const eBankingFinland: EBankingFinland = {
  type: 'ebanking_FI',
  checkoutAttemptId: 'checkoutAttemptId8',
  issuer: 'issuer2',
  sdkData: 'sdkData8',
};
```

