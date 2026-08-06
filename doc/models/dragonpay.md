
# Dragonpay

*This model accepts additional fields of type unknown.*

## Structure

`Dragonpay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The Dragonpay issuer value of the shopper's selected bank. Set this to an **id** of a Dragonpay issuer to preselect it. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `shopperEmail` | `string \| undefined` | Optional | The shopper’s email address. |
| `type` | [`Type28`](../../doc/models/type-28.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Dragonpay, Type28 } from 'adyen';

const dragonpay: Dragonpay = {
  issuer: 'issuer0',
  type: Type28.DragonpayOtcNonBanking,
  checkoutAttemptId: 'checkoutAttemptId6',
  sdkData: 'sdkData0',
  shopperEmail: 'shopperEmail4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

