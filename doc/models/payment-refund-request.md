
# Payment Refund Request

## Structure

`PaymentRefundRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount38`](../../doc/models/amount-38.md) | Required | The amount that you want to refund. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount. |
| `applicationInfo` | [`ApplicationInfo \| undefined`](../../doc/models/application-info.md) | Optional | Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions). |
| `capturePspReference` | `string \| undefined` | Optional | This is only available for PayPal refunds. The [`pspReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-pspReference) of the specific capture to refund. |
| `enhancedSchemeData` | [`EnhancedSchemeData1 \| undefined`](../../doc/models/enhanced-scheme-data-1.md) | Optional | Enhanced scheme data that may be required for processing the payment. For example, airline information. |
| `lineItems` | [`LineItem[] \| undefined`](../../doc/models/line-item.md) | Optional | Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment).<br><br>> This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip. |
| `merchantAccount` | `string` | Required | The merchant account that is used to process the payment. |
| `merchantRefundReason` | [`MerchantRefundReasonEnum \| null \| undefined`](../../doc/models/merchant-refund-reason-enum.md) | Optional | The reason for the refund request.<br><br>Possible values:<br><br>* **FRAUD**<br><br>* **CUSTOMER REQUEST**<br><br>* **RETURN**<br><br>* **DUPLICATE**<br><br>* **OTHER** |
| `reference` | `string \| undefined` | Optional | Your reference for the refund request. Maximum length: 80 characters. |
| `splits` | [`Split[] \| undefined`](../../doc/models/split.md) | Optional | An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/). |
| `store` | `string \| undefined` | Optional | The online store or [physical store](https://docs.adyen.com/point-of-sale/design-your-integration/determine-account-structure/#create-stores) that is processing the refund. This must be the same as the store name configured in your Customer Area.  Otherwise, you get an error and the refund fails. |

## Example

```ts
import {
  MerchantRefundReasonEnum,
  PaymentRefundRequest,
  RateTypeEnum,
} from 'adyen';

const paymentRefundRequest: PaymentRefundRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  merchantAccount: 'merchantAccount0',
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
  capturePspReference: 'capturePspReference6',
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
    }
  ],
  merchantRefundReason: MerchantRefundReasonEnum.DUPLICATE,
};
```

