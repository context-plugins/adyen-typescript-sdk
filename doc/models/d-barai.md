
# D Barai

*This model accepts additional fields of type unknown.*

## Structure

`DBarai`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type201 \| undefined`](../../doc/models/type-201.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DBarai, Type201 } from 'adyen';

const dBarai: DBarai = {
  checkoutAttemptId: 'checkoutAttemptId8',
  recurringDetailReference: 'recurringDetailReference2',
  sdkData: 'sdkData2',
  storedPaymentMethodId: 'storedPaymentMethodId6',
  type: Type201.Dbarai,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

