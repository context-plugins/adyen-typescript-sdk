
# Legal Arrangement Entity Detail

*This model accepts additional fields of type unknown.*

## Structure

`LegalArrangementEntityDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`ViasAddress \| undefined`](../../doc/models/vias-address.md) | Optional | - |
| `businessDetails` | [`BusinessDetails \| undefined`](../../doc/models/business-details.md) | Optional | - |
| `email` | `string \| undefined` | Optional | The e-mail address of the entity. |
| `fullPhoneNumber` | `string \| undefined` | Optional | The phone number of the contact provided as a single string.  It will be handled as a landline phone.<br>**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344" |
| `individualDetails` | [`IndividualDetails \| undefined`](../../doc/models/individual-details.md) | Optional | - |
| `legalArrangementEntityCode` | `string \| undefined` | Optional | Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement entity.<br>Use only when updating an account holder. If you include this field when creating an account holder, the request will fail. |
| `legalArrangementEntityReference` | `string \| undefined` | Optional | Your reference for the legal arrangement entity. |
| `legalArrangementMembers` | [`LegalArrangementMember[] \| undefined`](../../doc/models/legal-arrangement-member.md) | Optional | An array containing the roles of the entity in the legal arrangement.<br><br>The possible values depend on the legal arrangement `type`.<br><br>- For `type` **Association**: **ControllingPerson** and **Shareholder**.<br><br>- For `type` **Partnership**: **Partner** and **Shareholder**.<br><br>- For `type` **Trust**: **Trustee**, **Settlor**, **Protector**, **Beneficiary**,  and **Shareholder**. |
| `legalEntityType` | [`LegalEntityType \| undefined`](../../doc/models/legal-entity-type.md) | Optional | - |
| `phoneNumber` | [`PhoneNumber3 \| undefined`](../../doc/models/phone-number-3.md) | Optional | - |
| `webAddress` | `string \| undefined` | Optional | The URL of the website of the contact. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Gender, LegalArrangementEntityDetail, Type } from 'adyen';

const legalArrangementEntityDetail: LegalArrangementEntityDetail = {
  address: {
    country: 'country0',
    city: 'city6',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince4',
    street: 'street6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  businessDetails: {
    doingBusinessAs: 'doingBusinessAs6',
    legalBusinessName: 'legalBusinessName8',
    listedUltimateParentCompany: [
      {
        address: {
          country: 'country0',
          city: 'city6',
          houseNumberOrName: 'houseNumberOrName4',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
          street: 'street6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        businessDetails: {
          legalBusinessName: 'legalBusinessName8',
          registrationNumber: 'registrationNumber6',
          stockExchange: 'stockExchange4',
          stockNumber: 'stockNumber6',
          stockTicker: 'stockTicker6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        ultimateParentCompanyCode: 'ultimateParentCompanyCode2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        address: {
          country: 'country0',
          city: 'city6',
          houseNumberOrName: 'houseNumberOrName4',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
          street: 'street6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        businessDetails: {
          legalBusinessName: 'legalBusinessName8',
          registrationNumber: 'registrationNumber6',
          stockExchange: 'stockExchange4',
          stockNumber: 'stockNumber6',
          stockTicker: 'stockTicker6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        ultimateParentCompanyCode: 'ultimateParentCompanyCode2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    registrationNumber: 'registrationNumber6',
    shareholders: [
      {
        address: {
          country: 'country0',
          city: 'city6',
          houseNumberOrName: 'houseNumberOrName4',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
          street: 'street6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        email: 'email8',
        fullPhoneNumber: 'fullPhoneNumber2',
        jobTitle: 'jobTitle2',
        name: {
          firstName: 'firstName4',
          gender: Gender.Male,
          infix: 'infix4',
          lastName: 'lastName4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        address: {
          country: 'country0',
          city: 'city6',
          houseNumberOrName: 'houseNumberOrName4',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
          street: 'street6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        email: 'email8',
        fullPhoneNumber: 'fullPhoneNumber2',
        jobTitle: 'jobTitle2',
        name: {
          firstName: 'firstName4',
          gender: Gender.Male,
          infix: 'infix4',
          lastName: 'lastName4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  email: 'email6',
  fullPhoneNumber: 'fullPhoneNumber4',
  individualDetails: {
    name: {
      firstName: 'firstName4',
      gender: Gender.Male,
      infix: 'infix4',
      lastName: 'lastName4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    personalData: {
      dateOfBirth: 'dateOfBirth2',
      documentData: [
        {
          type: Type.Id,
          expirationDate: 'expirationDate8',
          issuerCountry: 'issuerCountry0',
          issuerState: 'issuerState0',
          number: 'number8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          type: Type.Id,
          expirationDate: 'expirationDate8',
          issuerCountry: 'issuerCountry0',
          issuerState: 'issuerState0',
          number: 'number8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          type: Type.Id,
          expirationDate: 'expirationDate8',
          issuerCountry: 'issuerCountry0',
          issuerState: 'issuerState0',
          number: 'number8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      nationality: 'nationality4',
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

