
# E Banking Finland

*This model accepts additional fields of type unknown.*

## Structure

`EBankingFinland`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string \| undefined` | Optional | The Ebanking Finland issuer value of the shopper's selected bank. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type60`](../../doc/models/type-60.md) | Required | **ebanking_FI** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EBankingFinland, Type60 } from 'adyen';

const eBankingFinland: EBankingFinland = {
  type: Type60.EbankingFi,
  checkoutAttemptId: 'checkoutAttemptId8',
  issuer: 'issuer2',
  sdkData: 'sdkData8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

