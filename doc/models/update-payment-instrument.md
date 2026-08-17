
# Update Payment Instrument

## Structure

`UpdatePaymentInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalBankAccountIdentifications` | [`UpdatePaymentInstrumentAdditionalBankAccountIdentifications[] \| undefined`](../../doc/models/containers/update-payment-instrument-additional-bank-account-identifications.md) | Optional | This is Array of a container for one-of cases. |
| `balanceAccountId` | `string` | Required | The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument. |
| `bankAccount` | [`BankAccountDetails1 \| undefined`](../../doc/models/bank-account-details-1.md) | Optional | Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**. |
| `card` | [`Card11 \| undefined`](../../doc/models/card-11.md) | Optional | Contains information about the card payment instrument. Returned when you create a payment instrument with `type` **card**. |
| `description` | `string \| undefined` | Optional | Your description for the payment instrument, maximum 300 characters.<br><br>**Constraints**: *Maximum Length*: `300` |
| `id` | `string` | Required | The unique identifier of the payment instrument. |
| `issuingCountryCode` | `string` | Required | The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**. |
| `paymentInstrumentGroupId` | `string \| undefined` | Optional | The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs. |
| `reference` | `string \| undefined` | Optional | Your reference for the payment instrument, maximum 150 characters.<br><br>**Constraints**: *Maximum Length*: `150` |
| `replacedById` | `string \| undefined` | Optional | The unique identifier of the payment instrument that replaced this payment instrument. |
| `replacementOfId` | `string \| undefined` | Optional | The unique identifier of the payment instrument that is replaced by this payment instrument. |
| `status` | [`Status10Enum \| undefined`](../../doc/models/status-10-enum.md) | Optional | The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.<br><br>Possible values:<br><br>* **active**:  The payment instrument is active and can be used to make payments.<br><br>* **inactive**: The payment instrument is inactive and cannot be used to make payments.<br><br>* **suspended**: The payment instrument is suspended, either because it was stolen or lost.<br><br>* **closed**: The payment instrument is permanently closed. This action cannot be undone. |
| `statusComment` | `string \| undefined` | Optional | Comment for the status of the payment instrument.<br><br>Required if `statusReason` is **other**. |
| `statusReason` | [`StatusReasonEnum \| undefined`](../../doc/models/status-reason-enum.md) | Optional | The reason for the status of the payment instrument.<br><br>Possible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**.<br>If the reason is **other**, you must also send the `statusComment` parameter describing the status change. |
| `type` | [`Type111Enum`](../../doc/models/type-111-enum.md) | Required | The type of payment instrument.<br><br>Possible values: **card**, **bankAccount**. |

## Example

```ts
import {
  FormFactor1Enum,
  PhoneTypeEnum,
  Type111Enum,
  Type410Enum,
  UpdatePaymentInstrument,
} from 'adyen';

const updatePaymentInstrument: UpdatePaymentInstrument = {
  balanceAccountId: 'balanceAccountId0',
  id: 'id8',
  issuingCountryCode: 'issuingCountryCode0',
  type: Type111Enum.BankAccount,
  additionalBankAccountIdentifications: [
    {
      iban: 'iban6',
      type: 'type8',
      bic: 'bic4',
    }
  ],
  bankAccount: {
    type: 'type2',
    accountNumber: 'accountNumber4',
    accountType: 'accountType8',
    branchNumber: 'branchNumber8',
    formFactor: 'formFactor2',
    iban: 'iban2',
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
    bin: 'bin6',
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
    cvc: 'cvc0',
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
  },
  description: 'description8',
  paymentInstrumentGroupId: 'paymentInstrumentGroupId2',
};
```

