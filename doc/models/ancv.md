
# ANCV

## Structure

`ANCV`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `beneficiaryId` | `string \| undefined` | Optional | ANCV account identification (email or account number) |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type5Enum \| undefined`](../../doc/models/type-5-enum.md) | Optional | **ancv** |

## Example

```ts
import { ANCV } from 'adyen';

const aNCV: ANCV = {
  beneficiaryId: 'beneficiaryId4',
  checkoutAttemptId: 'checkoutAttemptId2',
  recurringDetailReference: 'recurringDetailReference6',
  sdkData: 'sdkData4',
  storedPaymentMethodId: 'storedPaymentMethodId0',
};
```

