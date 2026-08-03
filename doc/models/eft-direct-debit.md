
# Eft Direct Debit

*This model accepts additional fields of type unknown.*

## Structure

`EftDirectDebit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountNumber` | `string \| undefined` | Optional | The bank account number (without separators). |
| `bankCode` | `string \| undefined` | Optional | The financial institution code. |
| `bankLocationId` | `string \| undefined` | Optional | The bank routing number of the account. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `ownerName` | `string \| undefined` | Optional | The name of the bank account holder.<br>If you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example:<br><br>* χ12 is converted to ch12.<br>* üA is converted to euA.<br>* Peter Møller is converted to Peter Mller, because banks don't accept 'ø'.<br>  After replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example:<br>* John17 - allowed.<br>* J17 - allowed.<br>* 171 - not allowed.<br>* John-7 - allowed.<br><br>> If provided details don't match the required format, the response returns the error message: 203 'Invalid bank account holder name'. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type30 \| undefined`](../../doc/models/type-30.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EftDirectDebit } from 'adyenlib';

const eftDirectDebit: EftDirectDebit = {
  bankAccountNumber: 'bankAccountNumber2',
  bankCode: 'bankCode2',
  bankLocationId: 'bankLocationId6',
  checkoutAttemptId: 'checkoutAttemptId8',
  ownerName: 'ownerName6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

