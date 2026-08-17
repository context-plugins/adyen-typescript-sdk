
# MOL Pay

## Structure

`MOLPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The shopper's bank. Specify this with the issuer value that corresponds to this bank. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type38Enum`](../../doc/models/type-38-enum.md) | Required | **molpay** |

## Example

```ts
import { MOLPay, Type38Enum } from 'adyen';

const mOLPay: MOLPay = {
  issuer: 'issuer8',
  type: Type38Enum.MolpayEbankingFpxMY,
  checkoutAttemptId: 'checkoutAttemptId4',
  sdkData: 'sdkData2',
};
```

