
# Dragonpay

## Structure

`Dragonpay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The Dragonpay issuer value of the shopper's selected bank. Set this to an **id** of a Dragonpay issuer to preselect it. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `shopperEmail` | `string \| undefined` | Optional | The shopper’s email address. |
| `type` | [`Type28Enum`](../../doc/models/type-28-enum.md) | Required | **dragonpay** |

## Example

```ts
import { Dragonpay, Type28Enum } from 'adyen';

const dragonpay: Dragonpay = {
  issuer: 'issuer0',
  type: Type28Enum.DragonpayOtcNonBanking,
  checkoutAttemptId: 'checkoutAttemptId6',
  sdkData: 'sdkData0',
  shopperEmail: 'shopperEmail4',
};
```

