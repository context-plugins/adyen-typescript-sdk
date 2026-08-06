
# Mol Pay

*This model accepts additional fields of type unknown.*

## Structure

`MolPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The shopper's bank. Specify this with the issuer value that corresponds to this bank. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type38`](../../doc/models/type-38.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MolPay, Type38 } from 'adyen';

const molPay: MolPay = {
  issuer: 'issuer6',
  type: Type38.MolpayEbankingFpxMy,
  checkoutAttemptId: 'checkoutAttemptId2',
  sdkData: 'sdkData4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

