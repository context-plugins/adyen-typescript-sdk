
# Open Invoice

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
| `type` | [`Type39Enum \| undefined`](../../doc/models/type-39-enum.md) | Optional | **openinvoice**<br><br>**Default**: `Type39Enum.Openinvoice` |

## Example

```ts
import { OpenInvoice, Type39Enum } from 'adyen';

const openInvoice: OpenInvoice = {
  billingAddress: 'billingAddress4',
  checkoutAttemptId: 'checkoutAttemptId2',
  deliveryAddress: 'deliveryAddress2',
  personalDetails: 'personalDetails4',
  recurringDetailReference: 'recurringDetailReference6',
  type: Type39Enum.Openinvoice,
};
```

