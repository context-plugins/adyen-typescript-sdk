
# SEPA Direct Debit

## Structure

`SEPADirectDebit`

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
| `type` | [`Type51Enum \| undefined`](../../doc/models/type-51-enum.md) | Optional | **sepadirectdebit**<br><br>**Default**: `Type51Enum.Sepadirectdebit` |

## Example

```ts
import { SEPADirectDebit, Type51Enum } from 'adyen';

const sEPADirectDebit: SEPADirectDebit = {
  iban: 'iban6',
  ownerName: 'ownerName6',
  checkoutAttemptId: 'checkoutAttemptId8',
  dueDate: 'dueDate8',
  recurringDetailReference: 'recurringDetailReference2',
  sdkData: 'sdkData8',
  storedPaymentMethodId: 'storedPaymentMethodId6',
  type: Type51Enum.Sepadirectdebit,
};
```

