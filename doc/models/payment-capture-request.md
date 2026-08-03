
# Payment Capture Request

*This model accepts additional fields of type unknown.*

## Structure

`PaymentCaptureRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16`](../../doc/models/amount-16.md) | Required | - |
| `applicationInfo` | [`ApplicationInfo1 \| undefined`](../../doc/models/application-info-1.md) | Optional | - |
| `enhancedSchemeData` | [`EnhancedSchemeData \| undefined`](../../doc/models/enhanced-scheme-data.md) | Optional | - |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br><br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `platformChargebackLogic` | [`PlatformChargebackLogic1 \| undefined`](../../doc/models/platform-chargeback-logic-1.md) | Optional | - |
| `reference` | `string \| undefined` | Optional | Your reference for the capture request. Maximum length: 80 characters. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/). |
| `subMerchants` | [`SubMerchantInfo[] \| undefined`](../../doc/models/sub-merchant-info.md) | Optional | A List of sub-merchants. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Behavior, PaymentCaptureRequest, RateType } from 'adyenlib';

const paymentCaptureRequest: PaymentCaptureRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantAccount: 'merchantAccount6',
  applicationInfo: {
    adyenLibrary: {
      name: 'name8',
      version: 'version4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    adyenPaymentSource: {
      name: 'name2',
      version: 'version8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    externalPlatform: {
      integrator: 'integrator0',
      name: 'name4',
      version: 'version0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    merchantApplication: {
      name: 'name2',
      version: 'version8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    merchantDevice: {
      os: 'os4',
      osVersion: 'osVersion6',
      reference: 'reference8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  enhancedSchemeData: {
    airline: {
      passengerName: 'passengerName0',
      agency: {
        invoiceNumber: 'invoiceNumber6',
        planName: 'planName6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      boardingFee: BigInt(160),
      code: 'code0',
      computerizedReservationSystem: 'computerizedReservationSystem4',
      customerReferenceNumber: 'customerReferenceNumber6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    carRental: {
      renterName: 'renterName2',
      customerServicePhoneNumber: 'customerServicePhoneNumber8',
      noShow: false,
      pickupInfo: {
        city: 'city4',
        countryCode: 'countryCode8',
        date: '2016-03-13T12:52:32.123Z',
        stateOrProvince: 'stateOrProvince4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      rateType: RateType.Daily,
      rentalAgreementNumber: 'rentalAgreementNumber4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    healthcare: {
      totalHealthcareValue: BigInt(16),
      dentalValue: BigInt(132),
      otherMedicalValue: BigInt(150),
      prescriptionValue: BigInt(116),
      visionPrescriptionValue: BigInt(166),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    levelTwoThree: {
      customerReferenceNumber: 'customerReferenceNumber0',
      destination: {
        countryCode: 'countryCode0',
        postalCode: 'postalCode6',
        stateOrProvince: 'stateOrProvince2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      dutyAmount: BigInt(234),
      freightAmount: BigInt(136),
      itemDetailLines: [
        {
          commodityCode: 'commodityCode4',
          description: 'description8',
          discountAmount: BigInt(220),
          productCode: 'productCode0',
          quantity: BigInt(184),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    lodging: {
      checkInDate: '2016-03-13T12:52:32.123Z',
      checkOutDate: '2016-03-13T12:52:32.123Z',
      customerServicePhoneNumber: 'customerServicePhoneNumber6',
      fireSafetyCompliance: false,
      folio: {
        cashAdvances: BigInt(122),
        number: 'number8',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  lineItems: [
    {
      amountExcludingTax: BigInt(38),
      amountIncludingTax: BigInt(148),
      brand: 'brand6',
      color: 'color6',
      description: 'description2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      amountExcludingTax: BigInt(38),
      amountIncludingTax: BigInt(148),
      brand: 'brand6',
      color: 'color6',
      description: 'description2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      amountExcludingTax: BigInt(38),
      amountIncludingTax: BigInt(148),
      brand: 'brand6',
      color: 'color6',
      description: 'description2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  platformChargebackLogic: {
    behavior: Behavior.DeductFromOneBalanceAccount,
    costAllocationAccount: 'costAllocationAccount8',
    targetAccount: 'targetAccount6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  reference: 'reference0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

