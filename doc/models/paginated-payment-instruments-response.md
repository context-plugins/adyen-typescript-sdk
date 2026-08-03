
# Paginated Payment Instruments Response

*This model accepts additional fields of type unknown.*

## Structure

`PaginatedPaymentInstrumentsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasNext` | `boolean` | Required | Indicates whether there are more items on the next page. |
| `hasPrevious` | `boolean` | Required | Indicates whether there are more items on the previous page. |
| `paymentInstruments` | [`PaymentInstrument[]`](../../doc/models/payment-instrument.md) | Required | List of payment instruments associated with the balance account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  FormFactor1,
  PaginatedPaymentInstrumentsResponse,
  PhoneType,
  Type11,
  Type203,
  Type4,
} from 'adyenlib';

const paginatedPaymentInstrumentsResponse: PaginatedPaymentInstrumentsResponse = {
  hasNext: false,
  hasPrevious: false,
  paymentInstruments: [
    {
      balanceAccountId: 'balanceAccountId0',
      id: 'id8',
      issuingCountryCode: 'issuingCountryCode0',
      type: Type11.BankAccount,
      additionalBankAccountIdentifications: [
        {
          iban: 'iban8',
          type: Type203.Iban,
          bic: 'bic6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          iban: 'iban8',
          type: Type203.Iban,
          bic: 'bic6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      bankAccount: {
        type: 'type2',
        accountNumber: 'accountNumber4',
        accountType: 'accountType8',
        branchNumber: 'branchNumber8',
        formFactor: 'formFactor2',
        iban: 'iban2',
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
        cvc: 'cvc0',
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
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      description: 'description2',
      paymentInstrumentGroupId: 'paymentInstrumentGroupId2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

