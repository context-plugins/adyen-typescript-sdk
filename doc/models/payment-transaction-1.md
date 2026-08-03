
# Payment Transaction 1

Data related to the payment and loyalty transaction.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentTransaction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountsReq` | [`AmountsReq1`](../../doc/models/amounts-req-1.md) | Required | - |
| `originalPoiTransaction` | [`OriginalPoiTransaction3 \| undefined`](../../doc/models/original-poi-transaction-3.md) | Optional | - |
| `transactionConditions` | [`TransactionConditions1 \| undefined`](../../doc/models/transaction-conditions-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LoyaltyHandling1, PaymentTransaction1 } from 'adyenlib';

const paymentTransaction1: PaymentTransaction1 = {
  amountsReq: {
    currency: 'Currency4',
    requestedAmount: 38.52,
    cashBackAmount: 77.72,
    tipAmount: 40.18,
    paidAmount: 239.98,
    minimumAmountToDeliver: 73.38,
    maximumCashBackAmount: 36.82,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  originalPoiTransaction: {
    saleId: 'SaleID6',
    poiid: 'POIID0',
    poiTransactionId: {
      transactionId: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    reuseCardDataFlag: false,
    approvalCode: 'ApprovalCode0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  transactionConditions: {
    allowedPaymentBrand: [
      'AllowedPaymentBrand0',
      'AllowedPaymentBrand1',
      'AllowedPaymentBrand2'
    ],
    acquirerId: [
      56,
      57,
      58
    ],
    debitPreferredFlag: false,
    allowedLoyaltyBrand: [
      'AllowedLoyaltyBrand8',
      'AllowedLoyaltyBrand9'
    ],
    loyaltyHandling: LoyaltyHandling1.Forbidden,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

