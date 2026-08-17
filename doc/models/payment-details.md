
# Payment Details

## Structure

`PaymentDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type43Enum \| undefined`](../../doc/models/type-43-enum.md) | Optional | The payment method type. |

## Example

```ts
import { PaymentDetails, Type43Enum } from 'adyen';

const paymentDetails: PaymentDetails = {
  checkoutAttemptId: 'checkoutAttemptId2',
  sdkData: 'sdkData4',
  type: Type43Enum.PrimeiropayBoleto,
};
```

