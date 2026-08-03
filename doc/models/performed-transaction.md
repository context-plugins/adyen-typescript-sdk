
# Performed Transaction

*This model accepts additional fields of type unknown.*

## Structure

`PerformedTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `saleData` | [`SaleData2 \| undefined`](../../doc/models/sale-data-2.md) | Optional | - |
| `poiData` | [`PoiData2 \| undefined`](../../doc/models/poi-data-2.md) | Optional | - |
| `paymentResult` | [`PaymentResult1 \| undefined`](../../doc/models/payment-result-1.md) | Optional | - |
| `loyaltyResult` | [`LoyaltyResult[] \| undefined`](../../doc/models/loyalty-result.md) | Optional | - |
| `reversedAmount` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 99999999.999999` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  ErrorCondition1,
  IdentificationSupport1,
  IdentificationType11,
  InstalmentType,
  PaymentInstrumentType11,
  PaymentType1,
  PerformedTransaction,
  PeriodUnit1,
  Result11,
  StoredValueAccountType1,
  TrackFormat1,
} from 'adyenlib';

const performedTransaction: PerformedTransaction = {
  response: {
    result: Result11.Partial,
    errorCondition: ErrorCondition1.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
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
  poiData: {
    poiTransactionId: {
      transactionId: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    poiReconciliationId: 52,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  paymentResult: {
    paymentType: PaymentType1.IssuerInstalment,
    paymentInstrumentData: {
      paymentInstrumentType: PaymentInstrumentType11.Cash,
      protectedCardData: 'ProtectedCardData8',
      cardData: {
        paymentBrand: 'PaymentBrand0',
        maskedPan: 'MaskedPan0',
        paymentAccountRef: 'PaymentAccountRef8',
        entryMode: [
          EntryMode.Manual,
          EntryMode.Keyed
        ],
        cardCountryCode: 3,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      checkData: {
        bankId: 'BankID0',
        accountNumber: 'AccountNumber6',
        checkNumber: 'CheckNumber2',
        trackData: {
          trackValue: 'TrackValue6',
          trackNumb: 3,
          trackFormat: TrackFormat1.Jisii,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        checkCardNumber: 'CheckCardNumber6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      mobileData: {
        mobileCountryCode: 3,
        mobileNetworkCode: 3,
        maskedMsisdn: 22,
        geolocation: {
          geographicCoordinates: {
            latitude: 'Latitude4',
            longitude: 'Longitude2',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          utmCoordinates: {
            utmZone: 'UTMZone6',
            utmEastward: 'UTMEastward0',
            utmNorthward: 'UTMNorthward0',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        protectedMobileData: 'ProtectedMobileData0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      storedValueAccountId: {
        storedValueAccountType: StoredValueAccountType1.PhoneCard,
        entryMode: [
          EntryMode.MagStripe,
          EntryMode.Scanned
        ],
        identificationType: IdentificationType11.PhoneNumber,
        storedValueId: 'StoredValueID8',
        storedValueProvider: 'StoredValueProvider4',
        ownerName: 'OwnerName0',
        expiryDate: 4,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    amountsResp: {
      authorizedAmount: 133.28,
      currency: 'Currency0',
      totalRebatesAmount: 120.04,
      totalFeesAmount: 181.08,
      cashBackAmount: 206.58,
      tipAmount: 86.96,
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
    currencyConversion: [
      {
        convertedAmount: {
          amountValue: 81.82,
          currency: 'Currency0',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        customerApprovedFlag: false,
        rate: 175.8,
        markup: 100.86,
        commission: 197.78,
        declaration: 'Declaration4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        convertedAmount: {
          amountValue: 81.82,
          currency: 'Currency0',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        customerApprovedFlag: false,
        rate: 175.8,
        markup: 100.86,
        commission: 197.78,
        declaration: 'Declaration4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  loyaltyResult: [
    {
      loyaltyAccount: {
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
        loyaltyBrand: 'LoyaltyBrand0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      currentBalance: 171.12,
      loyaltyAcquirerData: {
        loyaltyAcquirerId: 'LoyaltyAcquirerID4',
        approvalCode: 'ApprovalCode4',
        loyaltyTransactionId: {
          transactionId: 'TransactionID6',
          timeStamp: '2016-03-13T12:52:32.123Z',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        hostReconciliationId: 'HostReconciliationID4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      loyaltyAccount: {
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
        loyaltyBrand: 'LoyaltyBrand0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      currentBalance: 171.12,
      loyaltyAcquirerData: {
        loyaltyAcquirerId: 'LoyaltyAcquirerID4',
        approvalCode: 'ApprovalCode4',
        loyaltyTransactionId: {
          transactionId: 'TransactionID6',
          timeStamp: '2016-03-13T12:52:32.123Z',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        hostReconciliationId: 'HostReconciliationID4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  reversedAmount: 171.44,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

