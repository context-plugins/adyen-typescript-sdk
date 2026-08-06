
# Riverty

*This model accepts additional fields of type unknown.*

## Structure

`Riverty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingAddress` | `string \| undefined` | Optional | The address where to send the invoice. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `deliveryAddress` | `string \| undefined` | Optional | The address where the goods should be delivered. |
| `deviceFingerprint` | `string \| undefined` | Optional | A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).<br><br>**Constraints**: *Maximum Length*: `5000` |
| `iban` | `string \| undefined` | Optional | The iban number of the customer<br><br>**Constraints**: *Maximum Length*: `34` |
| `merchantData` | `string \| undefined` | Optional | Base64-encoded merchant metadata (Extra Merchant Data) forwarded to Riverty at authorization.<br><br>**Constraints**: *Maximum Length*: `10240` |
| `personalDetails` | `string \| undefined` | Optional | Shopper name, date of birth, phone number, and email address. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `subtype` | `string \| undefined` | Optional | The payment method subtype. |
| `type` | [`Type49`](../../doc/models/type-49.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Riverty, Type49 } from 'adyen';

const riverty: Riverty = {
  type: Type49.Riverty,
  billingAddress: 'billingAddress8',
  checkoutAttemptId: 'checkoutAttemptId0',
  deliveryAddress: 'deliveryAddress0',
  deviceFingerprint: 'deviceFingerprint0',
  iban: 'iban8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

