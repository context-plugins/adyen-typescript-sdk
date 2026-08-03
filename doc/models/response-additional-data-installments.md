
# Response Additional Data Installments

*This model accepts additional fields of type unknown.*

## Structure

`ResponseAdditionalDataInstallments`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `installmentPaymentDataInstallmentType` | `string \| undefined` | Optional | Type of installment. The value of `installmentType` should be **IssuerFinanced**. |
| `installmentPaymentDataOptionItemNrAnnualPercentageRate` | `string \| undefined` | Optional | Annual interest rate. |
| `installmentPaymentDataOptionItemNrFirstInstallmentAmount` | `string \| undefined` | Optional | First Installment Amount in minor units. |
| `installmentPaymentDataOptionItemNrInstallmentFee` | `string \| undefined` | Optional | Installment fee amount in minor units. |
| `installmentPaymentDataOptionItemNrInterestRate` | `string \| undefined` | Optional | Interest rate for the installment period. |
| `installmentPaymentDataOptionItemNrMaximumNumberOfInstallments` | `string \| undefined` | Optional | Maximum number of installments possible for this payment. |
| `installmentPaymentDataOptionItemNrMinimumNumberOfInstallments` | `string \| undefined` | Optional | Minimum number of installments possible for this payment. |
| `installmentPaymentDataOptionItemNrNumberOfInstallments` | `string \| undefined` | Optional | Total number of installments possible for this payment. |
| `installmentPaymentDataOptionItemNrSubsequentInstallmentAmount` | `string \| undefined` | Optional | Subsequent Installment Amount in minor units. |
| `installmentPaymentDataOptionItemNrTotalAmountDue` | `string \| undefined` | Optional | Total amount in minor units. |
| `installmentPaymentDataPaymentOptions` | `string \| undefined` | Optional | Possible values:<br><br>* PayInInstallmentsOnly<br>* PayInFullOnly<br>* PayInFullOrInstallments |
| `installmentsValue` | `string \| undefined` | Optional | The number of installments that the payment amount should be charged with.<br><br>Example: 5<br><br>> Only relevant for card payments in countries that support installments. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResponseAdditionalDataInstallments } from 'adyenlib';

const responseAdditionalDataInstallments: ResponseAdditionalDataInstallments = {
  installmentPaymentDataInstallmentType: 'installmentPaymentData.installmentType8',
  installmentPaymentDataOptionItemNrAnnualPercentageRate: Liquid error: Value cannot be null. (Parameter 'key'),
  installmentPaymentDataOptionItemNrFirstInstallmentAmount: Liquid error: Value cannot be null. (Parameter 'key'),
  installmentPaymentDataOptionItemNrInstallmentFee: Liquid error: Value cannot be null. (Parameter 'key'),
  installmentPaymentDataOptionItemNrInterestRate: Liquid error: Value cannot be null. (Parameter 'key'),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

