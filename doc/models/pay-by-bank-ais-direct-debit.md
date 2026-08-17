
# Pay by Bank AIS Direct Debit

## Structure

`PayByBankAISDirectDebit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | `string` | Required, Constant | **paybybank_AIS_DD**<br><br>**Value**: `'paybybank_AIS_DD'` |

## Example

```ts
import { PayByBankAISDirectDebit } from 'adyen';

const payByBankAISDirectDebit: PayByBankAISDirectDebit = {
  type: 'paybybank_AIS_DD',
  checkoutAttemptId: 'checkoutAttemptId2',
  recurringDetailReference: 'recurringDetailReference6',
  sdkData: 'sdkData4',
  storedPaymentMethodId: 'storedPaymentMethodId0',
};
```

