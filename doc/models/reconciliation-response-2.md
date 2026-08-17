
# Reconciliation Response 2

Content of the Reconciliation Response message.

## Structure

`ReconciliationResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |
| `reconciliationType` | [`ReconciliationType1Enum`](../../doc/models/reconciliation-type-1-enum.md) | Required | Type of Reconciliation requested by the Sale to the POI.<br>Possible values:<br><br>* **AcquirerReconciliation**<br>* **AcquirerSynchronisation**<br>* **PreviousReconciliation**<br>* **SaleReconciliation** |
| `pOIReconciliationID` | `number \| undefined` | Optional | Identification of the reconciliation period between Sale and POI.<br>Absent if ReconciliationType is `AcquirerReconciliation`. |
| `transactionTotals` | [`TransactionTotals[] \| undefined`](../../doc/models/transaction-totals.md) | Optional | Result of the Sale to POI Reconciliation processing.<br>If `Response.Result` is Success. |

## Example

```ts
import {
  ErrorCondition1Enum,
  PaymentInstrumentType11Enum,
  ReconciliationResponse2,
  ReconciliationType1Enum,
  Result11Enum,
} from 'adyen';

const reconciliationResponse2: ReconciliationResponse2 = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
  reconciliationType: ReconciliationType1Enum.AcquirerReconciliation,
  pOIReconciliationID: 180,
  transactionTotals: [
    {
      paymentInstrumentType: PaymentInstrumentType11Enum.Mobile,
      acquirerID: 138,
      hostReconciliationID: 'HostReconciliationID4',
      cardBrand: 'CardBrand8',
      pOIID: 'POIID6',
      saleID: 'SaleID2',
    },
    {
      paymentInstrumentType: PaymentInstrumentType11Enum.Mobile,
      acquirerID: 138,
      hostReconciliationID: 'HostReconciliationID4',
      cardBrand: 'CardBrand8',
      pOIID: 'POIID6',
      saleID: 'SaleID2',
    },
    {
      paymentInstrumentType: PaymentInstrumentType11Enum.Mobile,
      acquirerID: 138,
      hostReconciliationID: 'HostReconciliationID4',
      cardBrand: 'CardBrand8',
      pOIID: 'POIID6',
      saleID: 'SaleID2',
    }
  ],
};
```

