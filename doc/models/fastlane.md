
# Fastlane

## Structure

`Fastlane`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fastlaneData` | `string` | Required | The encoded fastlane data blob |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | `string` | Required, Constant | **fastlane**<br><br>**Value**: `'fastlane'` |

## Example

```ts
import { Fastlane } from 'adyen';

const fastlane: Fastlane = {
  fastlaneData: 'fastlaneData6',
  type: 'fastlane',
  checkoutAttemptId: 'checkoutAttemptId8',
  recurringDetailReference: 'recurringDetailReference2',
  sdkData: 'sdkData8',
  storedPaymentMethodId: 'storedPaymentMethodId6',
};
```

