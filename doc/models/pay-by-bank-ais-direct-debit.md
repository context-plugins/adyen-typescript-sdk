
# Pay by Bank Ais Direct Debit

*This model accepts additional fields of type unknown.*

## Structure

`PayByBankAisDirectDebit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type70`](../../doc/models/type-70.md) | Required | **paybybank_AIS_DD** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayByBankAisDirectDebit, Type70 } from 'adyen';

const payByBankAisDirectDebit: PayByBankAisDirectDebit = {
  type: Type70.PaybybankAisDd,
  checkoutAttemptId: 'checkoutAttemptId4',
  recurringDetailReference: 'recurringDetailReference8',
  sdkData: 'sdkData8',
  storedPaymentMethodId: 'storedPaymentMethodId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

