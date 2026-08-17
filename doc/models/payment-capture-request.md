
# Payment Capture Request

## Structure

`PaymentCaptureRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount31`](../../doc/models/amount-31.md) | Required | The amount that you want to capture. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount. |
| `applicationInfo` | [`ApplicationInfo \| undefined`](../../doc/models/application-info.md) | Optional | Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions). |
| `enhancedSchemeData` | [`EnhancedSchemeData1 \| undefined`](../../doc/models/enhanced-scheme-data-1.md) | Optional | Enhanced scheme data that may be required for processing the payment. For example, airline information. |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br><br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `platformChargebackLogic` | [`PlatformChargebackLogic \| undefined`](../../doc/models/platform-chargeback-logic.md) | Optional | Defines how to book chargebacks when using [Adyen for Platforms](https://docs.adyen.com/adyen-for-platforms-model). |
| `reference` | `string \| undefined` | Optional | Your reference for the capture request. Maximum length: 80 characters. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/). |
| `subMerchants` | [`SubMerchantInfo[] \| undefined`](../../doc/models/sub-merchant-info.md) | Optional | A List of sub-merchants. |

## Example

```ts
import { BehaviorEnum, PaymentCaptureRequest, RateTypeEnum } from 'adyen';

const paymentCaptureRequest: PaymentCaptureRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  merchantAccount: 'merchantAccount6',
  applicationInfo: {
    adyenLibrary: {
      name: 'name8',
      version: 'version4',
    },
    adyenPaymentSource: {
      name: 'name2',
      version: 'version8',
    },
    externalPlatform: {
      integrator: 'integrator0',
      name: 'name4',
      version: 'version0',
    },
    merchantApplication: {
      name: 'name2',
      version: 'version8',
    },
    merchantDevice: {
      os: 'os4',
      osVersion: 'osVersion6',
      reference: 'reference8',
    },
  },
  enhancedSchemeData: {
    airline: {
      passengerName: 'passengerName0',
      agency: {
        invoiceNumber: 'invoiceNumber6',
        planName: 'planName6',
      },
      boardingFee: BigInt(160),
      code: 'code0',
      computerizedReservationSystem: 'computerizedReservationSystem4',
      customerReferenceNumber: 'customerReferenceNumber6',
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
      },
      rateType: RateTypeEnum.Daily,
      rentalAgreementNumber: 'rentalAgreementNumber4',
    },
    healthcare: {
      totalHealthcareValue: BigInt(16),
      dentalValue: BigInt(132),
      otherMedicalValue: BigInt(150),
      prescriptionValue: BigInt(116),
      visionPrescriptionValue: BigInt(166),
    },
    levelTwoThree: {
      customerReferenceNumber: 'customerReferenceNumber0',
      destination: {
        countryCode: 'countryCode0',
        postalCode: 'postalCode6',
        stateOrProvince: 'stateOrProvince2',
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
        }
      ],
    },
    lodging: {
      checkInDate: '2016-03-13T12:52:32.123Z',
      checkOutDate: '2016-03-13T12:52:32.123Z',
      customerServicePhoneNumber: 'customerServicePhoneNumber6',
      fireSafetyCompliance: false,
      folio: {
        cashAdvances: BigInt(122),
        number: 'number8',
      },
    },
  },
  lineItems: [
    {
      amountExcludingTax: BigInt(38),
      amountIncludingTax: BigInt(148),
      brand: 'brand6',
      color: 'color6',
      description: 'description2',
    },
    {
      amountExcludingTax: BigInt(38),
      amountIncludingTax: BigInt(148),
      brand: 'brand6',
      color: 'color6',
      description: 'description2',
    },
    {
      amountExcludingTax: BigInt(38),
      amountIncludingTax: BigInt(148),
      brand: 'brand6',
      color: 'color6',
      description: 'description2',
    }
  ],
  platformChargebackLogic: {
    behavior: BehaviorEnum.DeductFromOneBalanceAccount,
    costAllocationAccount: 'costAllocationAccount8',
    targetAccount: 'targetAccount6',
  },
  reference: 'reference0',
};
```

