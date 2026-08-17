
# BACS Direct Debit

## Structure

`BACSDirectDebit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountNumber` | `string \| undefined` | Optional | The bank account number (without separators). |
| `bankLocationId` | `string \| undefined` | Optional | The bank routing number of the account. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `holderName` | `string \| undefined` | Optional | The name of the bank account holder. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of your user's verified transfer instrument, which you can use to top up their balance accounts. |
| `type` | [`Type10Enum \| undefined`](../../doc/models/type-10-enum.md) | Optional | **directdebit_GB**<br><br>**Default**: `Type10Enum.DirectdebitGB` |

## Example

```ts
import { BACSDirectDebit, Type10Enum } from 'adyen';

const bACSDirectDebit: BACSDirectDebit = {
  bankAccountNumber: 'bankAccountNumber8',
  bankLocationId: 'bankLocationId2',
  checkoutAttemptId: 'checkoutAttemptId4',
  holderName: 'holderName4',
  recurringDetailReference: 'recurringDetailReference8',
  type: Type10Enum.DirectdebitGB,
};
```

