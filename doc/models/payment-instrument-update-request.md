
# Payment Instrument Update Request

*This model accepts additional fields of type unknown.*

## Structure

`PaymentInstrumentUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the balance account associated with this payment instrument.<br><br>> You can only change the balance account ID if the payment instrument has **inactive** status. |
| `card` | [`CardInfo \| undefined`](../../doc/models/card-info.md) | Optional | - |
| `status` | [`Status10 \| undefined`](../../doc/models/status-10.md) | Optional | - |
| `statusComment` | `string \| undefined` | Optional | Comment for the status of the payment instrument.<br><br>Required if `statusReason` is **other**. |
| `statusReason` | [`StatusReason2 \| undefined`](../../doc/models/status-reason-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  FormFactor1,
  PaymentInstrumentUpdateRequest,
  PhoneType,
  Status10,
  StatusReason2,
  Type4,
} from 'adyenlib';

const paymentInstrumentUpdateRequest: PaymentInstrumentUpdateRequest = {
  balanceAccountId: 'balanceAccountId0',
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
  status: Status10.Active,
  statusComment: 'statusComment8',
  statusReason: StatusReason2.Expired,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

