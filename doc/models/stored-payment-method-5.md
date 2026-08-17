
# Stored Payment Method 5

## Structure

`StoredPaymentMethod5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `deviceId` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `36` |
| `issuer` | `string \| undefined` | Optional | - |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `riskSignals` | [`PixPayByBankRiskSignals \| undefined`](../../doc/models/pix-pay-by-bank-risk-signals.md) | Optional | - |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type45Enum \| undefined`](../../doc/models/type-45-enum.md) | Optional | **paybybank_pix**<br><br>**Default**: `Type45Enum.PaybybankPix` |

## Example

```ts
import { StoredPaymentMethod5, Type45Enum } from 'adyen';

const storedPaymentMethod5: StoredPaymentMethod5 = {
  checkoutAttemptId: 'checkoutAttemptId6',
  deviceId: 'deviceId0',
  issuer: 'issuer0',
  recurringDetailReference: 'recurringDetailReference0',
  riskSignals: {
    confidenceScore: {
      errors: [
        'errors9',
        'errors0',
        'errors1'
      ],
      score: 155.44,
    },
    elapsedTimeSinceBoot: BigInt(84),
    isRootedDevice: false,
    language: 'language0',
    osVersion: 'osVersion8',
  },
  type: Type45Enum.PaybybankPix,
};
```

