
# Additional Data Ratepay

## Structure

`AdditionalDataRatepay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ratepayInstallmentAmount` | `string \| undefined` | Optional | Amount the customer has to pay each month. |
| `ratepayInterestRate` | `string \| undefined` | Optional | Interest rate of this installment. |
| `ratepayLastInstallmentAmount` | `string \| undefined` | Optional | Amount of the last installment. |
| `ratepayPaymentFirstday` | `string \| undefined` | Optional | Calendar day of the first payment. |
| `ratepaydataDeliveryDate` | `string \| undefined` | Optional | Date the merchant delivered the goods to the customer. |
| `ratepaydataDueDate` | `string \| undefined` | Optional | Date by which the customer must settle the payment. |
| `ratepaydataInvoiceDate` | `string \| undefined` | Optional | Invoice date, defined by the merchant. If not included, the invoice date is set to the delivery date. |
| `ratepaydataInvoiceId` | `string \| undefined` | Optional | Identification name or number for the invoice, defined by the merchant. |

## Example

```ts
import { AdditionalDataRatepay } from 'adyen';

const additionalDataRatepay: AdditionalDataRatepay = {
  ratepayInstallmentAmount: 'ratepay.installmentAmount2',
  ratepayInterestRate: 'ratepay.interestRate6',
  ratepayLastInstallmentAmount: 'ratepay.lastInstallmentAmount8',
  ratepayPaymentFirstday: 'ratepay.paymentFirstday0',
  ratepaydataDeliveryDate: 'ratepaydata.deliveryDate0',
};
```

