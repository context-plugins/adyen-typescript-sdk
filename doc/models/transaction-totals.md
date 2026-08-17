
# Transaction Totals

If Result is Success, contains all the totals, classified as required by the Sale in the message request. At least, transaction totals are provided per Acquirer, Acquirer Settlement, and Card Brand.
Result of the Sale to POI Reconciliation processing.

## Structure

`TransactionTotals`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentType` | [`PaymentInstrumentType11Enum`](../../doc/models/payment-instrument-type-11-enum.md) | Required | Type of payment instrument.<br>Possible values:<br><br>* **Card**<br>* **Cash**<br>* **Check**<br>* **Mobile**<br>* **StoredValue** |
| `acquirerID` | `number \| undefined` | Optional | Identification of the Acquirer. |
| `hostReconciliationID` | `string \| undefined` | Optional | Identifier of a reconciliation period with a payment or loyalty host.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `cardBrand` | `string \| undefined` | Optional | Type of payment or loyalty card.<br>If configured to present totals per card brand, and Response.Result is Success.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `pOIID` | `string \| undefined` | Optional | Identification of a POI System or a POI Terminal for the Sale to POI protocol.<br>Sent if requested in the message request.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `saleID` | `string \| undefined` | Optional | Identification of a Sale System or a Sale Terminal for the Sale to POI protocol.<br>Sent if requested in the message request.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `operatorID` | `string \| undefined` | Optional | Identification of the Cashier or Operator.<br>Sent if requested in the message request.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `shiftNumber` | `string \| undefined` | Optional | Shift number.<br>Sent if requested in the message request.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `totalsGroupID` | `string \| undefined` | Optional | Identification of a group of transaction on a POI Terminal, having the same Sale features.<br>Sent if requested in the message request.<br><br>**Constraints**: *Pattern*: `^.{1,16}$` |
| `paymentCurrency` | `string \| undefined` | Optional | Currency of a monetary amount.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `paymentTotals` | [`PaymentTotals[] \| undefined`](../../doc/models/payment-totals.md) | Optional | Totals of the payment transaction during the reconciliation period.<br>If both `TransactionCount` and `TransactionAmount` are not equal to zero. |

## Example

```ts
import { PaymentInstrumentType11Enum, TransactionTotals } from 'adyen';

const transactionTotals: TransactionTotals = {
  paymentInstrumentType: PaymentInstrumentType11Enum.Card,
  acquirerID: 160,
  hostReconciliationID: 'HostReconciliationID6',
  cardBrand: 'CardBrand4',
  pOIID: 'POIID4',
  saleID: 'SaleID0',
};
```

