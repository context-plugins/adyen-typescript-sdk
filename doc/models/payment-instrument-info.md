
# Payment Instrument Info

## Structure

`PaymentInstrumentInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string` | Required | The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument. |
| `bankAccount` | [`BankAccountModel1 \| undefined`](../../doc/models/bank-account-model-1.md) | Optional | Contains the business account details. |
| `card` | [`CardInfo1 \| undefined`](../../doc/models/card-info-1.md) | Optional | Contains information about the card. Required when you create a payment instrument of `type` **card**. |
| `description` | `string \| undefined` | Optional | Your description for the payment instrument, maximum 300 characters.<br><br>**Constraints**: *Maximum Length*: `300` |
| `issuingCountryCode` | `string` | Required | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**. |
| `paymentInstrumentGroupId` | `string \| undefined` | Optional | The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs. |
| `reference` | `string \| undefined` | Optional | Your reference for the payment instrument, maximum 150 characters.<br><br>**Constraints**: *Maximum Length*: `150` |
| `status` | [`Status10Enum \| undefined`](../../doc/models/status-10-enum.md) | Optional | The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.<br><br>Possible values:<br><br>* **active**:  The payment instrument is active and can be used to make payments.<br><br>* **inactive**: The payment instrument is inactive and cannot be used to make payments.<br><br>* **suspended**: The payment instrument is suspended, either because it was stolen or lost.<br><br>* **closed**: The payment instrument is permanently closed. This action cannot be undone. |
| `statusComment` | `string \| undefined` | Optional | The status comment provides additional information for the statusReason of the payment instrument. |
| `statusReason` | [`StatusReasonEnum \| undefined`](../../doc/models/status-reason-enum.md) | Optional | The reason for the status of the payment instrument.<br><br>Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**.<br>If the reason is **other**, you must also send the `statusComment` parameter describing the status change. |
| `type` | [`Type111Enum`](../../doc/models/type-111-enum.md) | Required | The type of payment instrument.<br><br>Possible values: **card**, **bankAccount**. |

## Example

```ts
import {
  FormFactor1Enum,
  FormFactorEnum,
  PaymentInstrumentInfo,
  PhoneTypeEnum,
  Type111Enum,
  Type410Enum,
} from 'adyen';

const paymentInstrumentInfo: PaymentInstrumentInfo = {
  balanceAccountId: 'balanceAccountId2',
  issuingCountryCode: 'issuingCountryCode2',
  type: Type111Enum.BankAccount,
  bankAccount: {
    formFactor: FormFactorEnum.Unknown,
  },
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
  description: 'description0',
  paymentInstrumentGroupId: 'paymentInstrumentGroupId0',
  reference: 'reference4',
};
```

