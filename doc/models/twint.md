
# Twint

## Structure

`Twint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `subtype` | `string \| undefined` | Optional | The type of flow to initiate. |
| `type` | [`Type53Enum \| undefined`](../../doc/models/type-53-enum.md) | Optional | The payment method type. |

## Example

```ts
import { Twint } from 'adyen';

const twint: Twint = {
  checkoutAttemptId: 'checkoutAttemptId4',
  recurringDetailReference: 'recurringDetailReference8',
  sdkData: 'sdkData2',
  storedPaymentMethodId: 'storedPaymentMethodId2',
  subtype: 'subtype0',
};
```

