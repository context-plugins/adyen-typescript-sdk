
# Payment Request 2

Request sent to terminal to initiate payment.
It conveys Information related to the Payment transaction to process.
Content of the `PaymentRequest` message.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleData` | [`SaleData2`](../../doc/models/sale-data-2.md) | Required | - |
| `paymentTransaction` | [`PaymentTransaction`](../../doc/models/payment-transaction.md) | Required | - |
| `paymentData` | [`PaymentData \| undefined`](../../doc/models/payment-data.md) | Optional | - |
| `loyaltyData` | [`LoyaltyData[] \| undefined`](../../doc/models/loyalty-data.md) | Optional | Data related to a Loyalty program or account.<br>Loyalty cards used with the payment transaction and read by the Sale System. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationSupport1,
  IdentificationType11,
  InstalmentType,
  LoyaltyHandling1,
  PaymentRequest2,
  PaymentType1,
  PeriodUnit1,
} from 'adyenlib';

const paymentRequest2: PaymentRequest2 = {
  saleData: {
    saleTransactionId: {
      transactionId: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    operatorId: 'OperatorID8',
    operatorLanguage: 'OperatorLanguage2',
    shiftNumber: 'ShiftNumber0',
    saleReferenceId: 'SaleReferenceID8',
    saleTerminalData: {
      totalsGroupId: 'TotalsGroupID4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
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
  },
  paymentData: {
    paymentType: PaymentType1.Normal,
    splitPaymentFlag: false,
    requestedValidityDate: '2016-03-13T12:52:32.123Z',
    cardAcquisitionReference: {
      transactionId: 'TransactionID8',
      timeStamp: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    instalment: {
      instalmentType: InstalmentType.DeferredInstalments,
      sequenceNumber: 106,
      planId: 'PlanID4',
      period: 70,
      periodUnit: PeriodUnit1.Monthly,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  loyaltyData: [
    {
      cardAcquisitionReference: {
        transactionId: 'TransactionID8',
        timeStamp: '2016-03-13T12:52:32.123Z',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      loyaltyAccountId: {
        entryMode: [
          EntryMode.File
        ],
        identificationType: IdentificationType11.IsoTrack2,
        loyaltyId: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1.HybridCard,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      cardAcquisitionReference: {
        transactionId: 'TransactionID8',
        timeStamp: '2016-03-13T12:52:32.123Z',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      loyaltyAccountId: {
        entryMode: [
          EntryMode.File
        ],
        identificationType: IdentificationType11.IsoTrack2,
        loyaltyId: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1.HybridCard,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      cardAcquisitionReference: {
        transactionId: 'TransactionID8',
        timeStamp: '2016-03-13T12:52:32.123Z',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      loyaltyAccountId: {
        entryMode: [
          EntryMode.File
        ],
        identificationType: IdentificationType11.IsoTrack2,
        loyaltyId: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1.HybridCard,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
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

