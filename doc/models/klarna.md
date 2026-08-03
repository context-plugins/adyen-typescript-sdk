
# Klarna

*This model accepts additional fields of type unknown.*

## Structure

`Klarna`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingAddress` | `string \| undefined` | Optional | The address where to send the invoice. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `deliveryAddress` | `string \| undefined` | Optional | The address where the goods should be delivered. |
| `merchantData` | `string \| undefined` | Optional | Base64-encoded merchant metadata (Extra Merchant Data) forwarded to Klarna at authorization.<br><br>**Constraints**: *Maximum Length*: `10240` |
| `personalDetails` | `string \| undefined` | Optional | Shopper name, date of birth, phone number, and email address. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `subtype` | `string \| undefined` | Optional | The type of flow to initiate. |
| `type` | [`Type34`](../../doc/models/type-34.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Klarna, Type34 } from 'adyenlib';

const klarna: Klarna = {
  type: Type34.KlarnaB2B,
  billingAddress: 'billingAddress8',
  checkoutAttemptId: 'checkoutAttemptId6',
  deliveryAddress: 'deliveryAddress6',
  merchantData: 'merchantData4',
  personalDetails: 'personalDetails8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

