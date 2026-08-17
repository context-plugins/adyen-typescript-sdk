
# Ideal Donations

## Structure

`IdealDonations`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string \| undefined` | Optional | The iDEAL issuer value of the shopper's selected bank. Set this to an **id** of an iDEAL issuer to preselect it. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type25Enum \| undefined`](../../doc/models/type-25-enum.md) | Optional | **ideal**<br><br>**Default**: `Type25Enum.Ideal` |

## Example

```ts
import { IdealDonations, Type25Enum } from 'adyen';

const idealDonations: IdealDonations = {
  checkoutAttemptId: 'checkoutAttemptId2',
  issuer: 'issuer6',
  recurringDetailReference: 'recurringDetailReference6',
  sdkData: 'sdkData4',
  storedPaymentMethodId: 'storedPaymentMethodId0',
  type: Type25Enum.Ideal,
};
```

