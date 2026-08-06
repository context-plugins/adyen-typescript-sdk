
# Fastlane

*This model accepts additional fields of type unknown.*

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
| `type` | [`Type68`](../../doc/models/type-68.md) | Required | **fastlane** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Fastlane, Type68 } from 'adyen';

const fastlane: Fastlane = {
  fastlaneData: 'fastlaneData6',
  type: Type68.Fastlane,
  checkoutAttemptId: 'checkoutAttemptId8',
  recurringDetailReference: 'recurringDetailReference2',
  sdkData: 'sdkData8',
  storedPaymentMethodId: 'storedPaymentMethodId6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

