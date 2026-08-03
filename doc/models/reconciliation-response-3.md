
# Reconciliation Response 3

*This model accepts additional fields of type unknown.*

## Structure

`ReconciliationResponse3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `reconciliationType` | [`ReconciliationType1`](../../doc/models/reconciliation-type-1.md) | Required | - |
| `poiReconciliationId` | `number \| undefined` | Optional | Identification of the reconciliation period between Sale and POI.<br>Absent if ReconciliationType is `AcquirerReconciliation`. |
| `transactionTotals` | [`TransactionTotals[] \| undefined`](../../doc/models/transaction-totals.md) | Optional | Result of the Sale to POI Reconciliation processing.<br>If `Response.Result` is Success. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ErrorCondition1,
  PaymentInstrumentType11,
  ReconciliationResponse3,
  ReconciliationType1,
  Result11,
} from 'adyenlib';

const reconciliationResponse3: ReconciliationResponse3 = {
  response: {
    result: Result11.Partial,
    errorCondition: ErrorCondition1.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  reconciliationType: ReconciliationType1.SaleReconciliation,
  poiReconciliationId: 126,
  transactionTotals: [
    {
      paymentInstrumentType: PaymentInstrumentType11.Mobile,
      acquirerId: 138,
      hostReconciliationId: 'HostReconciliationID4',
      cardBrand: 'CardBrand8',
      poiid: 'POIID6',
      saleId: 'SaleID2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      paymentInstrumentType: PaymentInstrumentType11.Mobile,
      acquirerId: 138,
      hostReconciliationId: 'HostReconciliationID4',
      cardBrand: 'CardBrand8',
      poiid: 'POIID6',
      saleId: 'SaleID2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      paymentInstrumentType: PaymentInstrumentType11.Mobile,
      acquirerId: 138,
      hostReconciliationId: 'HostReconciliationID4',
      cardBrand: 'CardBrand8',
      poiid: 'POIID6',
      saleId: 'SaleID2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

