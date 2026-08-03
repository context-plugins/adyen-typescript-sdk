
# Gettotals Response 1

*This model accepts additional fields of type unknown.*

## Structure

`GettotalsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `poiReconciliationId` | `number` | Required | Identification of the reconciliation period between Sale and POI. |
| `transactionTotals` | [`TransactionTotals[] \| undefined`](../../doc/models/transaction-totals.md) | Optional | Result of the Sale to POI Reconciliation processing.<br>If `Response.Result` is Success. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ErrorCondition1,
  GettotalsResponse1,
  PaymentInstrumentType11,
  Result11,
} from 'adyenlib';

const gettotalsResponse1: GettotalsResponse1 = {
  response: {
    result: Result11.Partial,
    errorCondition: ErrorCondition1.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  poiReconciliationId: 158,
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

