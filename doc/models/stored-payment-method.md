
# Stored Payment Method

*This model accepts additional fields of type unknown.*

## Structure

`StoredPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cashtag` | `string \| undefined` | Optional | Cash App issued cashtag for recurring payment |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `customerId` | `string \| undefined` | Optional | Cash App issued customerId for recurring payment |
| `grantId` | `string \| undefined` | Optional | Cash App issued grantId for one time payment |
| `onFileGrantId` | `string \| undefined` | Optional | Cash App issued onFileGrantId for recurring payment |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `requestId` | `string \| undefined` | Optional | Cash App request id |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `subtype` | `string \| undefined` | Optional | The payment method subtype. |
| `type` | [`Type16 \| undefined`](../../doc/models/type-16.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StoredPaymentMethod } from 'adyenlib';

const storedPaymentMethod: StoredPaymentMethod = {
  cashtag: 'cashtag6',
  checkoutAttemptId: 'checkoutAttemptId2',
  customerId: 'customerId0',
  grantId: 'grantId4',
  onFileGrantId: 'onFileGrantId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

