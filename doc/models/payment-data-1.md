
# Payment Data 1

Data related to the payment transaction.
If one data element is present.

## Structure

`PaymentData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentType` | [`PaymentType1Enum \| undefined`](../../doc/models/payment-type-1-enum.md) | Optional | Type of payment transaction. Elements requested by the Sale System that are related to the payment only.<br>Possible values:<br><br>* **CashAdvance**<br>* **CashDeposit**<br>* **Completion**<br>* **FirstReservation**<br>* **Instalment**<br>* **IssuerInstalment**<br>* **Normal**<br>* **OneTimeReservation**<br>* **PaidOut**<br>* **Recurring**<br>* **Refund**<br>* **UpdateReservation** |
| `splitPaymentFlag` | `boolean \| undefined` | Optional | Indicates if the payment of the Sale transaction is split. Allows the POI to decline payment means that cannot accept split payment.<br><br>**Default**: `false` |
| `requestedValidityDate` | `string \| undefined` | Optional | Requested validity date for the reservation. Allows a specific period for the reservation according to the need of the Merchant for the first reservation and the reservation updates as well. |
| `cardAcquisitionReference` | [`TransactionIDType \| undefined`](../../doc/models/transaction-id-type.md) | Optional | Identification of a transaction for the Sale System or the POI System. |
| `instalment` | [`Instalment1 \| undefined`](../../doc/models/instalment-1.md) | Optional | Information related an instalment transaction. To request an instalment to the issuer, or to make individual instalments of a payment transaction. |
| `paymentInstrumentData` | [`PaymentInstrumentData \| undefined`](../../doc/models/payment-instrument-data.md) | Optional | Data related to the instrument of payment for the transaction.<br>Sent in the result of the payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be processed by the Sale System. |

## Example

```ts
import {
  InstalmentTypeEnum,
  PaymentData1,
  PaymentType1Enum,
  PeriodUnit1Enum,
} from 'adyen';

const paymentData1: PaymentData1 = {
  paymentType: PaymentType1Enum.OneTimeReservation,
  splitPaymentFlag: false,
  requestedValidityDate: '2016-03-13T12:52:32.123Z',
  cardAcquisitionReference: {
    transactionID: 'TransactionID8',
    timeStamp: '2016-03-13T12:52:32.123Z',
  },
  instalment: {
    instalmentType: InstalmentTypeEnum.DeferredInstalments,
    sequenceNumber: 106,
    planID: 'PlanID4',
    period: 70,
    periodUnit: PeriodUnit1Enum.Monthly,
  },
};
```

