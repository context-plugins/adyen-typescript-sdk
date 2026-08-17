
# D Barai

## Structure

`DBarai`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type20Enum \| undefined`](../../doc/models/type-20-enum.md) | Optional | **dbarai**<br><br>**Default**: `Type20Enum.Dbarai` |

## Example

```ts
import { DBarai, Type20Enum } from 'adyen';

const dBarai: DBarai = {
  checkoutAttemptId: 'checkoutAttemptId8',
  recurringDetailReference: 'recurringDetailReference2',
  sdkData: 'sdkData2',
  storedPaymentMethodId: 'storedPaymentMethodId6',
  type: Type20Enum.Dbarai,
};
```

