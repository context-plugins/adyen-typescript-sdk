
# Payment Request 2

Request sent to terminal to initiate payment.
It conveys Information related to the Payment transaction to process.
Content of the `PaymentRequest` message.

## Structure

`PaymentRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleData` | [`SaleData1`](../../doc/models/sale-data-1.md) | Required | Data related to the Sale System. |
| `paymentTransaction` | [`PaymentTransaction1`](../../doc/models/payment-transaction-1.md) | Required | Data related to the payment and loyalty transaction. |
| `paymentData` | [`PaymentData1 \| undefined`](../../doc/models/payment-data-1.md) | Optional | Data related to the payment transaction.<br>If one data element is present. |
| `loyaltyData` | [`LoyaltyData[] \| undefined`](../../doc/models/loyalty-data.md) | Optional | Data related to a Loyalty program or account.<br>Loyalty cards used with the payment transaction and read by the Sale System. |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  InstalmentTypeEnum,
  LoyaltyHandling1Enum,
  PaymentRequest2,
  PaymentType1Enum,
  PeriodUnit1Enum,
} from 'adyen';

const paymentRequest2: PaymentRequest2 = {
  saleData: {
    saleTransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    operatorID: 'OperatorID8',
    operatorLanguage: 'OperatorLanguage2',
    shiftNumber: 'ShiftNumber0',
    saleReferenceID: 'SaleReferenceID8',
    saleTerminalData: {
      totalsGroupID: 'TotalsGroupID4',
    },
  },
  paymentTransaction: {
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
  },
  paymentData: {
    paymentType: PaymentType1Enum.Normal,
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
  },
  loyaltyData: [
    {
      cardAcquisitionReference: {
        transactionID: 'TransactionID8',
        timeStamp: '2016-03-13T12:52:32.123Z',
      },
      loyaltyAccountID: {
        entryMode: [
          EntryModeEnum.File
        ],
        identificationType: IdentificationType11Enum.ISOTrack2,
        loyaltyID: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1Enum.HybridCard,
      },
    },
    {
      cardAcquisitionReference: {
        transactionID: 'TransactionID8',
        timeStamp: '2016-03-13T12:52:32.123Z',
      },
      loyaltyAccountID: {
        entryMode: [
          EntryModeEnum.File
        ],
        identificationType: IdentificationType11Enum.ISOTrack2,
        loyaltyID: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1Enum.HybridCard,
      },
    },
    {
      cardAcquisitionReference: {
        transactionID: 'TransactionID8',
        timeStamp: '2016-03-13T12:52:32.123Z',
      },
      loyaltyAccountID: {
        entryMode: [
          EntryModeEnum.File
        ],
        identificationType: IdentificationType11Enum.ISOTrack2,
        loyaltyID: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1Enum.HybridCard,
      },
    }
  ],
};
```

