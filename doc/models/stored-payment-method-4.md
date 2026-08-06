
# Stored Payment Method 4

*This model accepts additional fields of type unknown.*

## Structure

`StoredPaymentMethod4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `pixRecurring` | [`PixRecurring \| undefined`](../../doc/models/pix-recurring.md) | Optional | - |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type44 \| undefined`](../../doc/models/type-44.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Frequency2, StoredPaymentMethod4 } from 'adyen';

const storedPaymentMethod4: StoredPaymentMethod4 = {
  checkoutAttemptId: 'checkoutAttemptId2',
  pixRecurring: {
    billingDate: 'billingDate0',
    businessDayOnly: false,
    endsAt: 'endsAt8',
    frequency: Frequency2.Yearly,
    minAmount: {
      currency: 'currency6',
      value: BigInt(156),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  recurringDetailReference: 'recurringDetailReference6',
  sdkData: 'sdkData4',
  storedPaymentMethodId: 'storedPaymentMethodId0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

