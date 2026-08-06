
# Au Pay

*This model accepts additional fields of type unknown.*

## Structure

`AuPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type91 \| undefined`](../../doc/models/type-91.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AuPay, Type91 } from 'adyen';

const auPay: AuPay = {
  checkoutAttemptId: 'checkoutAttemptId4',
  recurringDetailReference: 'recurringDetailReference8',
  sdkData: 'sdkData2',
  storedPaymentMethodId: 'storedPaymentMethodId2',
  type: Type91.Aupay,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

