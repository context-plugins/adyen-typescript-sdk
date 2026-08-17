
# Payment Instrument Update Request

## Structure

`PaymentInstrumentUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the balance account associated with this payment instrument.<br><br>> You can only change the balance account ID if the payment instrument has **inactive** status. |
| `card` | [`CardInfo2 \| undefined`](../../doc/models/card-info-2.md) | Optional | Object that contains information about the card payment instrument. |
| `status` | [`Status10Enum \| undefined`](../../doc/models/status-10-enum.md) | Optional | The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.<br><br>Possible values:<br><br>* **active**:  The payment instrument is active and can be used to make payments.<br><br>* **inactive**: The payment instrument is inactive and cannot be used to make payments.<br><br>* **suspended**: The payment instrument is suspended, either because it was stolen or lost.<br><br>* **closed**: The payment instrument is permanently closed. This action cannot be undone. |
| `statusComment` | `string \| undefined` | Optional | Comment for the status of the payment instrument.<br><br>Required if `statusReason` is **other**. |
| `statusReason` | [`StatusReason2Enum \| undefined`](../../doc/models/status-reason-2-enum.md) | Optional | The reason for updating the status of the payment instrument.<br><br>Possible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.<br>If the reason is **other**, you must also send the `statusComment` parameter describing the status change. |

## Example

```ts
import {
  FormFactor1Enum,
  PaymentInstrumentUpdateRequest,
  PhoneTypeEnum,
  Status10Enum,
  StatusReason2Enum,
  Type410Enum,
} from 'adyen';

const paymentInstrumentUpdateRequest: PaymentInstrumentUpdateRequest = {
  balanceAccountId: 'balanceAccountId0',
  card: {
    brand: 'brand0',
    brandVariant: 'brandVariant8',
    cardholderName: 'cardholderName8',
    formFactor: FormFactor1Enum.Physical,
    authentication: {
      email: 'email8',
      password: 'password2',
      phone: {
        number: 'number8',
        type: Type410Enum.Landline,
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
      },
      cardImageId: 'cardImageId0',
      carrier: 'carrier8',
    },
    deliveryContact: {
      address: {
        country: 'country0',
        city: 'city6',
        line1: 'line18',
        line2: 'line20',
        line3: 'line38',
        postalCode: 'postalCode8',
      },
      name: {
        firstName: 'firstName4',
        lastName: 'lastName4',
      },
      company: 'company4',
      email: 'email0',
      fullPhoneNumber: 'fullPhoneNumber0',
      phoneNumber: {
        phoneCountryCode: 'phoneCountryCode8',
        phoneNumber: 'phoneNumber0',
        phoneType: PhoneTypeEnum.Fax,
      },
      webAddress: 'webAddress4',
    },
    threeDSecure: 'threeDSecure8',
    usage: 'usage4',
  },
  status: Status10Enum.Active,
  statusComment: 'statusComment8',
  statusReason: StatusReason2Enum.Expired,
};
```

