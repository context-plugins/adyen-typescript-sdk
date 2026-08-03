
# Stored Payment Method 2

*This model accepts additional fields of type unknown.*

## Structure

`StoredPaymentMethod2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The issuer id of the shopper's selected bank. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type311`](../../doc/models/type-311.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StoredPaymentMethod2, Type311 } from 'adyenlib';

const storedPaymentMethod2: StoredPaymentMethod2 = {
  issuer: 'issuer0',
  type: Type311.OnlineBankingPl,
  checkoutAttemptId: 'checkoutAttemptId6',
  recurringDetailReference: 'recurringDetailReference0',
  sdkData: 'sdkData0',
  storedPaymentMethodId: 'storedPaymentMethodId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

