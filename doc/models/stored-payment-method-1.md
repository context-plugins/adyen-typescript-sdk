
# Stored Payment Method 1

*This model accepts additional fields of type unknown.*

## Structure

`StoredPaymentMethod1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type27 \| undefined`](../../doc/models/type-27.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StoredPaymentMethod1, Type27 } from 'adyenlib';

const storedPaymentMethod1: StoredPaymentMethod1 = {
  checkoutAttemptId: 'checkoutAttemptId0',
  recurringDetailReference: 'recurringDetailReference4',
  sdkData: 'sdkData6',
  storedPaymentMethodId: 'storedPaymentMethodId8',
  type: Type27.Sepadirectdebit,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

