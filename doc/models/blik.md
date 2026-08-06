
# Blik

*This model accepts additional fields of type unknown.*

## Structure

`Blik`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `blikCode` | `string \| undefined` | Optional | BLIK code consisting of 6 digits. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type131 \| undefined`](../../doc/models/type-131.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Blik } from 'adyen';

const blik: Blik = {
  blikCode: 'blikCode0',
  checkoutAttemptId: 'checkoutAttemptId8',
  recurringDetailReference: 'recurringDetailReference2',
  sdkData: 'sdkData8',
  storedPaymentMethodId: 'storedPaymentMethodId6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

