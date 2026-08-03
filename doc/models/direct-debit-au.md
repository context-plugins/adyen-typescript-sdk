
# Direct Debit Au

*This model accepts additional fields of type unknown.*

## Structure

`DirectDebitAu`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountNumber` | `string \| undefined` | Optional | The shopper's banking account number used to complete payment. |
| `bankBranchCode` | `string \| undefined` | Optional | The shopper's BSB (their bank's branch code) number used to complete payment. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `holderName` | `string` | Required | The name of the bank account holder. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type221 \| undefined`](../../doc/models/type-221.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DirectDebitAu } from 'adyenlib';

const directDebitAu: DirectDebitAu = {
  holderName: 'holderName6',
  bankAccountNumber: 'bankAccountNumber0',
  bankBranchCode: 'bankBranchCode0',
  checkoutAttemptId: 'checkoutAttemptId6',
  recurringDetailReference: 'recurringDetailReference0',
  sdkData: 'sdkData0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

