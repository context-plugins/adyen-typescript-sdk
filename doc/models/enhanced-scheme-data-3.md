
# Enhanced Scheme Data 3

[Enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/) that may be required for processing the payment and/or interchange savings can apply.

## Structure

`EnhancedSchemeData3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `airline` | [`Airline1 \| undefined`](../../doc/models/airline-1.md) | Optional | [Airline enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/airline/) that may be required for processing the transaction and/or for interchange savings. |
| `carRental` | [`CarRental1 \| undefined`](../../doc/models/car-rental-1.md) | Optional | [Car rental enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/car-rental/) that may be required for processing the transaction and/or for interchange savings. |
| `healthcare` | [`Healthcare2 \| undefined`](../../doc/models/healthcare-2.md) | Optional | Healthcare auto-substantiation amounts for FSA/HSA card transactions. The amounts are used to qualify for reduced interchange rates on healthcare-eligible cards. |
| `levelTwoThree` | [`LevelTwoThree2 \| undefined`](../../doc/models/level-two-three-2.md) | Optional | [Level 2 and Level 3 enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/l2-l3/) that may be required for processing the transaction and/or for interchange savings. |
| `lodging` | [`Lodging2 \| undefined`](../../doc/models/lodging-2.md) | Optional | [Lodging enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/lodging/) that may be required for processing the transaction and/or for interchange savings. |
| `temporaryServices` | [`TemporaryServices2 \| undefined`](../../doc/models/temporary-services-2.md) | Optional | [Temporary services enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/temporary-services/) that may be required for processing the transaction and/or for interchange savings. |

## Example

```ts
import { EnhancedSchemeData3, RateTypeEnum } from 'adyen';

const enhancedSchemeData3: EnhancedSchemeData3 = {
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
};
```

