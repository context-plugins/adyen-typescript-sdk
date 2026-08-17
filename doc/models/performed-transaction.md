
# Performed Transaction

## Structure

`PerformedTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response1`](../../doc/models/response-1.md) | Required | Result of a message request processing.<br>If Result is Success, `ErrorCondition` is absent or not used in the processing of the message. In the other cases, the `ErrorCondition` has to be present and can refine the processing of the message response. `AdditionalResponse` gives more information about the success or the failure of the message request processing, for logging without real time involvements. |
| `saleData` | [`SaleData \| undefined`](../../doc/models/sale-data.md) | Optional | Data associated with the Sale System, with a particular value during the processing of the payment by the POI, including the cards acquisition. |
| `pOIData` | [`POIData \| undefined`](../../doc/models/poi-data.md) | Optional | Data related to the POI System.<br>In the Message Response, identification of the POI transaction. |
| `paymentResult` | [`PaymentResult1 \| undefined`](../../doc/models/payment-result-1.md) | Optional | - |
| `loyaltyResult` | [`LoyaltyResult[] \| undefined`](../../doc/models/loyalty-result.md) | Optional | - |
| `reversedAmount` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 99999999.999999` |

## Example

```ts
import {
  EntryModeEnum,
  ErrorCondition1Enum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  InstalmentTypeEnum,
  PaymentInstrumentType11Enum,
  PaymentType1Enum,
  PerformedTransaction,
  PeriodUnit1Enum,
  Result11Enum,
  StoredValueAccountType1Enum,
  TrackFormat1Enum,
} from 'adyen';

const performedTransaction: PerformedTransaction = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
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
  pOIData: {
    pOITransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    pOIReconciliationID: 52,
  },
  paymentResult: {
    paymentType: PaymentType1Enum.IssuerInstalment,
    paymentInstrumentData: {
      paymentInstrumentType: PaymentInstrumentType11Enum.Cash,
      protectedCardData: 'ProtectedCardData8',
      cardData: {
        paymentBrand: 'PaymentBrand0',
        maskedPan: 'MaskedPan0',
        paymentAccountRef: 'PaymentAccountRef8',
        entryMode: [
          EntryModeEnum.Manual,
          EntryModeEnum.Keyed
        ],
        cardCountryCode: 3,
      },
      checkData: {
        bankID: 'BankID0',
        accountNumber: 'AccountNumber6',
        checkNumber: 'CheckNumber2',
        trackData: {
          trackValue: 'TrackValue6',
          trackNumb: 3,
          trackFormat: TrackFormat1Enum.JISII,
        },
        checkCardNumber: 'CheckCardNumber6',
      },
      mobileData: {
        mobileCountryCode: 3,
        mobileNetworkCode: 3,
        maskedMSISDN: 22,
        geolocation: {
          geographicCoordinates: {
            latitude: 'Latitude4',
            longitude: 'Longitude2',
          },
          uTMCoordinates: {
            uTMZone: 'UTMZone6',
            uTMEastward: 'UTMEastward0',
            uTMNorthward: 'UTMNorthward0',
          },
        },
        protectedMobileData: 'ProtectedMobileData0',
      },
      storedValueAccountID: {
        storedValueAccountType: StoredValueAccountType1Enum.PhoneCard,
        entryMode: [
          EntryModeEnum.MagStripe,
          EntryModeEnum.Scanned
        ],
        identificationType: IdentificationType11Enum.PhoneNumber,
        storedValueID: 'StoredValueID8',
        storedValueProvider: 'StoredValueProvider4',
        ownerName: 'OwnerName0',
        expiryDate: 4,
      },
    },
    amountsResp: {
      authorizedAmount: 133.28,
      currency: 'Currency0',
      totalRebatesAmount: 120.04,
      totalFeesAmount: 181.08,
      cashBackAmount: 206.58,
      tipAmount: 86.96,
    },
    instalment: {
      instalmentType: InstalmentTypeEnum.DeferredInstalments,
      sequenceNumber: 106,
      planID: 'PlanID4',
      period: 70,
      periodUnit: PeriodUnit1Enum.Monthly,
    },
    currencyConversion: [
      {
        convertedAmount: {
          amountValue: 81.82,
          currency: 'Currency0',
        },
        customerApprovedFlag: false,
        rate: 175.8,
        markup: 100.86,
        commission: 197.78,
        declaration: 'Declaration4',
      },
      {
        convertedAmount: {
          amountValue: 81.82,
          currency: 'Currency0',
        },
        customerApprovedFlag: false,
        rate: 175.8,
        markup: 100.86,
        commission: 197.78,
        declaration: 'Declaration4',
      }
    ],
  },
  loyaltyResult: [
    {
      loyaltyAccount: {
        loyaltyAccountID: {
          entryMode: [
            EntryModeEnum.File
          ],
          identificationType: IdentificationType11Enum.ISOTrack2,
          loyaltyID: 'LoyaltyID4',
          identificationSupport: IdentificationSupport1Enum.HybridCard,
        },
        loyaltyBrand: 'LoyaltyBrand0',
      },
      currentBalance: 171.12,
      loyaltyAcquirerData: {
        loyaltyAcquirerID: 'LoyaltyAcquirerID4',
        approvalCode: 'ApprovalCode4',
        loyaltyTransactionID: {
          transactionID: 'TransactionID6',
          timeStamp: '2016-03-13T12:52:32.123Z',
        },
        hostReconciliationID: 'HostReconciliationID4',
      },
    },
    {
      loyaltyAccount: {
        loyaltyAccountID: {
          entryMode: [
            EntryModeEnum.File
          ],
          identificationType: IdentificationType11Enum.ISOTrack2,
          loyaltyID: 'LoyaltyID4',
          identificationSupport: IdentificationSupport1Enum.HybridCard,
        },
        loyaltyBrand: 'LoyaltyBrand0',
      },
      currentBalance: 171.12,
      loyaltyAcquirerData: {
        loyaltyAcquirerID: 'LoyaltyAcquirerID4',
        approvalCode: 'ApprovalCode4',
        loyaltyTransactionID: {
          transactionID: 'TransactionID6',
          timeStamp: '2016-03-13T12:52:32.123Z',
        },
        hostReconciliationID: 'HostReconciliationID4',
      },
    }
  ],
  reversedAmount: 171.44,
};
```

