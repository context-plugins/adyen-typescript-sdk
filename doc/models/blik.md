
# BLIK

## Structure

`BLIK`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `blikCode` | `string \| undefined` | Optional | BLIK code consisting of 6 digits. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type13Enum \| undefined`](../../doc/models/type-13-enum.md) | Optional | **blik** |

## Example

```ts
import { BLIK } from 'adyen';

const bLIK: BLIK = {
  blikCode: 'blikCode2',
  checkoutAttemptId: 'checkoutAttemptId0',
  recurringDetailReference: 'recurringDetailReference4',
  sdkData: 'sdkData4',
  storedPaymentMethodId: 'storedPaymentMethodId8',
};
```

