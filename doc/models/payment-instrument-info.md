
# Payment Instrument Info

*This model accepts additional fields of type unknown.*

## Structure

`PaymentInstrumentInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Required | The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument. |
| `bankAccount` | [`BankAccountModel \| undefined`](../../doc/models/bank-account-model.md) | Optional | - |
| `card` | [`CardInfo \| undefined`](../../doc/models/card-info.md) | Optional | - |
| `description` | `string \| undefined` | Optional | Your description for the payment instrument, maximum 300 characters.<br><br>**Constraints**: *Maximum Length*: `300` |
| `issuingCountryCode` | `string` | Required | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**. |
| `paymentInstrumentGroupId` | `string \| undefined` | Optional | The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs. |
| `reference` | `string \| undefined` | Optional | Your reference for the payment instrument, maximum 150 characters.<br><br>**Constraints**: *Maximum Length*: `150` |
| `status` | [`Status10 \| undefined`](../../doc/models/status-10.md) | Optional | - |
| `statusComment` | `string \| undefined` | Optional | The status comment provides additional information for the statusReason of the payment instrument. |
| `statusReason` | [`StatusReason \| undefined`](../../doc/models/status-reason.md) | Optional | - |
| `type` | [`Type11`](../../doc/models/type-11.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  FormFactor1,
  PaymentInstrumentInfo,
  PhoneType,
  Type11,
  Type4,
} from 'adyen';

const paymentInstrumentInfo: PaymentInstrumentInfo = {
  balanceAccountId: 'balanceAccountId2',
  issuingCountryCode: 'issuingCountryCode2',
  type: Type11.BankAccount,
  bankAccount: {
    formFactor: { 'key1': 'val1', 'key2': 'val2' },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  card: {
    brand: 'brand0',
    brandVariant: 'brandVariant8',
    cardholderName: 'cardholderName8',
    formFactor: FormFactor1.Physical,
    authentication: {
      email: 'email8',
      password: 'password2',
      phone: {
        number: 'number8',
        type: Type4.Landline,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    configuration: {
      configurationProfileId: 'configurationProfileId6',
      activation: 'activation2',
      activationUrl: 'activationUrl8',
      bulkAddress: {
        country: 'country0',
        city: 'city6',
        company: 'company6',
        email: 'email0',
        houseNumberOrName: 'houseNumberOrName4',
        line1: 'line18',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      cardImageId: 'cardImageId0',
      carrier: 'carrier8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    deliveryContact: {
      address: {
        country: 'country0',
        city: 'city6',
        line1: 'line18',
        line2: 'line20',
        line3: 'line38',
        postalCode: 'postalCode8',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      name: {
        firstName: 'firstName4',
        lastName: 'lastName4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      company: 'company4',
      email: 'email0',
      fullPhoneNumber: 'fullPhoneNumber0',
      phoneNumber: {
        phoneCountryCode: 'phoneCountryCode8',
        phoneNumber: 'phoneNumber0',
        phoneType: PhoneType.Fax,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      webAddress: 'webAddress4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    threeDSecure: 'threeDSecure8',
    usage: 'usage4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  description: 'description0',
  paymentInstrumentGroupId: 'paymentInstrumentGroupId0',
  reference: 'reference4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

