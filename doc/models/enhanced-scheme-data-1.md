
# Enhanced Scheme Data 1

Enhanced scheme data that may be required for processing the payment. For example, airline information.

*This model accepts additional fields of type unknown.*

## Structure

`EnhancedSchemeData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `airline` | [`Airline \| undefined`](../../doc/models/airline.md) | Optional | - |
| `carRental` | [`CarRental \| undefined`](../../doc/models/car-rental.md) | Optional | - |
| `healthcare` | [`Healthcare \| undefined`](../../doc/models/healthcare.md) | Optional | - |
| `levelTwoThree` | [`LevelTwoThree \| undefined`](../../doc/models/level-two-three.md) | Optional | - |
| `lodging` | [`Lodging \| undefined`](../../doc/models/lodging.md) | Optional | - |
| `temporaryServices` | [`TemporaryServices \| undefined`](../../doc/models/temporary-services.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EnhancedSchemeData1, RateType } from 'adyen';

const enhancedSchemeData1: EnhancedSchemeData1 = {
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
};
```

