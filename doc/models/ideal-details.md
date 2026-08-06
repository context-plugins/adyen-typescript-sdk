
# Ideal Details

*This model accepts additional fields of type unknown.*

## Structure

`IdealDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string \| undefined` | Optional | The iDEAL issuer value of the shopper's selected bank. Set this to an **id** of an iDEAL issuer to preselect it. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`A2APaymentMethod \| undefined`](../../doc/models/a2-a-payment-method.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IdealDetails } from 'adyen';

const idealDetails: IdealDetails = {
  checkoutAttemptId: 'checkoutAttemptId4',
  issuer: 'issuer8',
  recurringDetailReference: 'recurringDetailReference8',
  sdkData: 'sdkData2',
  storedPaymentMethodId: 'storedPaymentMethodId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

