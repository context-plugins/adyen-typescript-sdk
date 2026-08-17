
# Get Totals Response

Content of the Reconciliation Response message.
It conveys Information related to the Reconciliation transaction processed by the POI System.

## Structure

`GetTotalsResponse`

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
  GetTotalsResponse,
  PaymentInstrumentType11Enum,
  Result11Enum,
} from 'adyen';

const getTotalsResponse: GetTotalsResponse = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
  pOIReconciliationID: 232,
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

