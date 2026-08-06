
# Bacs Direct Debit

*This model accepts additional fields of type unknown.*

## Structure

`BacsDirectDebit`

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
| `type` | [`Type101 \| undefined`](../../doc/models/type-101.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BacsDirectDebit } from 'adyen';

const bacsDirectDebit: BacsDirectDebit = {
  bankAccountNumber: 'bankAccountNumber2',
  bankLocationId: 'bankLocationId6',
  checkoutAttemptId: 'checkoutAttemptId8',
  holderName: 'holderName8',
  recurringDetailReference: 'recurringDetailReference2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

