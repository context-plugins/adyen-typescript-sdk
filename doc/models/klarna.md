
# Klarna

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
| `type` | [`Type34Enum`](../../doc/models/type-34-enum.md) | Required | **klarna**<br><br>**Default**: `Type34Enum.Klarna` |

## Example

```ts
import { Klarna, Type34Enum } from 'adyen';

const klarna: Klarna = {
  type: Type34Enum.Klarna,
  billingAddress: 'billingAddress8',
  checkoutAttemptId: 'checkoutAttemptId6',
  deliveryAddress: 'deliveryAddress6',
  merchantData: 'merchantData4',
  personalDetails: 'personalDetails8',
};
```

