
# Paginated Payment Instruments Response

## Structure

`PaginatedPaymentInstrumentsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasNext` | `boolean` | Required | Indicates whether there are more items on the next page. |
| `hasPrevious` | `boolean` | Required | Indicates whether there are more items on the previous page. |
| `paymentInstruments` | [`PaymentInstrument1[]`](../../doc/models/payment-instrument-1.md) | Required | List of payment instruments associated with the balance account. |

## Example

```ts
import {
  FormFactor1Enum,
  PaginatedPaymentInstrumentsResponse,
  PhoneTypeEnum,
  Type111Enum,
  Type410Enum,
} from 'adyen';

const paginatedPaymentInstrumentsResponse: PaginatedPaymentInstrumentsResponse = {
  hasNext: false,
  hasPrevious: false,
  paymentInstruments: [
    {
      balanceAccountId: 'balanceAccountId0',
      id: 'id8',
      issuingCountryCode: 'issuingCountryCode0',
      type: Type111Enum.BankAccount,
      additionalBankAccountIdentifications: [
        {
          iban: 'iban6',
          type: 'type8',
          bic: 'bic4',
        },
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
      description: 'description2',
      paymentInstrumentGroupId: 'paymentInstrumentGroupId2',
    }
  ],
};
```

