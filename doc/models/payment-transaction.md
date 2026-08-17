
# Payment Transaction

## Structure

`PaymentTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountsReq` | [`AmountsReq`](../../doc/models/amounts-req.md) | Required | Various amounts related to the payment request from the Sale System. |
| `originalPOITransaction` | [`OriginalPOITransaction \| undefined`](../../doc/models/original-poi-transaction.md) | Optional | Identification of a previous POI transaction.<br>In the Payment Request message, it allows using the card of a previous CardAcquisition or Payment request. |
| `transactionConditions` | [`TransactionConditions \| undefined`](../../doc/models/transaction-conditions.md) | Optional | Conditions on which the transaction must be processed. |

## Example

```ts
import { LoyaltyHandling1Enum, PaymentTransaction } from 'adyen';

const paymentTransaction: PaymentTransaction = {
  amountsReq: {
    currency: 'Currency4',
    requestedAmount: 38.52,
    cashBackAmount: 77.72,
    tipAmount: 40.18,
    paidAmount: 239.98,
    minimumAmountToDeliver: 73.38,
    maximumCashBackAmount: 36.82,
  },
  originalPOITransaction: {
    saleID: 'SaleID6',
    pOIID: 'POIID0',
    pOITransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    reuseCardDataFlag: false,
    approvalCode: 'ApprovalCode0',
  },
  transactionConditions: {
    allowedPaymentBrand: [
      'AllowedPaymentBrand0',
      'AllowedPaymentBrand1',
      'AllowedPaymentBrand2'
    ],
    acquirerID: [
      56,
      57,
      58
    ],
    debitPreferredFlag: false,
    allowedLoyaltyBrand: [
      'AllowedLoyaltyBrand8',
      'AllowedLoyaltyBrand9'
    ],
    loyaltyHandling: LoyaltyHandling1Enum.Forbidden,
  },
};
```

