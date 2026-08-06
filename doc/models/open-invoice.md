
# Open Invoice

*This model accepts additional fields of type unknown.*

## Structure

`OpenInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingAddress` | `string \| undefined` | Optional | The address where to send the invoice. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `deliveryAddress` | `string \| undefined` | Optional | The address where the goods should be delivered. |
| `personalDetails` | `string \| undefined` | Optional | Shopper name, date of birth, phone number, and email address. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type39 \| undefined`](../../doc/models/type-39.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OpenInvoice } from 'adyen';

const openInvoice: OpenInvoice = {
  billingAddress: 'billingAddress4',
  checkoutAttemptId: 'checkoutAttemptId2',
  deliveryAddress: 'deliveryAddress2',
  personalDetails: 'personalDetails4',
  recurringDetailReference: 'recurringDetailReference6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

