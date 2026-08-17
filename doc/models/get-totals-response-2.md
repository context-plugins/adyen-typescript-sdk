
# Get Totals Response 2

Content of the Get Totals Response message.

## Structure

`GetTotalsResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |
| `pOIReconciliationID` | `number` | Required | Identification of the reconciliation period between Sale and POI. |
| `transactionTotals` | [`TransactionTotals[] \| undefined`](../../doc/models/transaction-totals.md) | Optional | Result of the Sale to POI Reconciliation processing.<br>If `Response.Result` is Success. |

## Example

```ts
import {
  ErrorCondition1Enum,
  GetTotalsResponse2,
  PaymentInstrumentType11Enum,
  Result11Enum,
} from 'adyen';

const getTotalsResponse2: GetTotalsResponse2 = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
  pOIReconciliationID: 6,
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
    }
  ],
};
```

