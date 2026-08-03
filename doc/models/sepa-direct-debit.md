
# Sepa Direct Debit

*This model accepts additional fields of type unknown.*

## Structure

`SepaDirectDebit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `dueDate` | `string \| undefined` | Optional | The date that the the shopper's bank account is charged. |
| `iban` | `string` | Required | The International Bank Account Number (IBAN). |
| `ownerName` | `string` | Required | The name of the bank account holder. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of your user's verified transfer instrument, which you can use to top up their balance accounts. |
| `type` | [`Type511 \| undefined`](../../doc/models/type-511.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SepaDirectDebit } from 'adyenlib';

const sepaDirectDebit: SepaDirectDebit = {
  iban: 'iban0',
  ownerName: 'ownerName0',
  checkoutAttemptId: 'checkoutAttemptId2',
  dueDate: 'dueDate2',
  recurringDetailReference: 'recurringDetailReference6',
  sdkData: 'sdkData6',
  storedPaymentMethodId: 'storedPaymentMethodId0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

