
# Legal Arrangement Entity Detail

## Structure

`LegalArrangementEntityDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`ViasAddress5 \| undefined`](../../doc/models/vias-address-5.md) | Optional | The address of the entity. |
| `businessDetails` | [`BusinessDetails1 \| undefined`](../../doc/models/business-details-1.md) | Optional | Required when creating an entity with `legalEntityType` **Business**, **NonProfit**, **PublicCompany**, or **Partnership**. |
| `email` | `string \| undefined` | Optional | The e-mail address of the entity. |
| `fullPhoneNumber` | `string \| undefined` | Optional | The phone number of the contact provided as a single string.  It will be handled as a landline phone.<br>**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344" |
| `individualDetails` | [`IndividualDetails1 \| undefined`](../../doc/models/individual-details-1.md) | Optional | Required when creating an entity with `legalEntityType` **Individual**. |
| `legalArrangementEntityCode` | `string \| undefined` | Optional | Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement entity.<br>Use only when updating an account holder. If you include this field when creating an account holder, the request will fail. |
| `legalArrangementEntityReference` | `string \| undefined` | Optional | Your reference for the legal arrangement entity. |
| `legalArrangementMembers` | [`LegalArrangementMemberEnum[] \| undefined`](../../doc/models/legal-arrangement-member-enum.md) | Optional | An array containing the roles of the entity in the legal arrangement.<br><br>The possible values depend on the legal arrangement `type`.<br><br>- For `type` **Association**: **ControllingPerson** and **Shareholder**.<br><br>- For `type` **Partnership**: **Partner** and **Shareholder**.<br><br>- For `type` **Trust**: **Trustee**, **Settlor**, **Protector**, **Beneficiary**,  and **Shareholder**. |
| `legalEntityType` | [`LegalEntityTypeEnum \| undefined`](../../doc/models/legal-entity-type-enum.md) | Optional | The legal entity type.<br><br>Possible values: **Business**, **Individual**, **NonProfit**, **PublicCompany**, or **Partnership**. |
| `phoneNumber` | [`ViasPhoneNumber2 \| undefined`](../../doc/models/vias-phone-number-2.md) | Optional | The phone number of the entity. |
| `webAddress` | `string \| undefined` | Optional | The URL of the website of the contact. |

## Example

```ts
import { GenderEnum, LegalArrangementEntityDetail, Type15Enum } from 'adyen';

const legalArrangementEntityDetail: LegalArrangementEntityDetail = {
  address: {
    country: 'country0',
    city: 'city6',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince4',
    street: 'street6',
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
        },
        businessDetails: {
          legalBusinessName: 'legalBusinessName8',
          registrationNumber: 'registrationNumber6',
          stockExchange: 'stockExchange4',
          stockNumber: 'stockNumber6',
          stockTicker: 'stockTicker6',
        },
        ultimateParentCompanyCode: 'ultimateParentCompanyCode2',
      },
      {
        address: {
          country: 'country0',
          city: 'city6',
          houseNumberOrName: 'houseNumberOrName4',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
          street: 'street6',
        },
        businessDetails: {
          legalBusinessName: 'legalBusinessName8',
          registrationNumber: 'registrationNumber6',
          stockExchange: 'stockExchange4',
          stockNumber: 'stockNumber6',
          stockTicker: 'stockTicker6',
        },
        ultimateParentCompanyCode: 'ultimateParentCompanyCode2',
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
        },
        email: 'email8',
        fullPhoneNumber: 'fullPhoneNumber2',
        jobTitle: 'jobTitle2',
        name: {
          firstName: 'firstName4',
          gender: GenderEnum.MALE,
          infix: 'infix4',
          lastName: 'lastName4',
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
        },
        email: 'email8',
        fullPhoneNumber: 'fullPhoneNumber2',
        jobTitle: 'jobTitle2',
        name: {
          firstName: 'firstName4',
          gender: GenderEnum.MALE,
          infix: 'infix4',
          lastName: 'lastName4',
        },
      }
    ],
  },
  email: 'email6',
  fullPhoneNumber: 'fullPhoneNumber4',
  individualDetails: {
    name: {
      firstName: 'firstName4',
      gender: GenderEnum.MALE,
      infix: 'infix4',
      lastName: 'lastName4',
    },
    personalData: {
      dateOfBirth: 'dateOfBirth2',
      documentData: [
        {
          type: Type15Enum.ID,
          expirationDate: 'expirationDate8',
          issuerCountry: 'issuerCountry0',
          issuerState: 'issuerState0',
          number: 'number8',
        },
        {
          type: Type15Enum.ID,
          expirationDate: 'expirationDate8',
          issuerCountry: 'issuerCountry0',
          issuerState: 'issuerState0',
          number: 'number8',
        },
        {
          type: Type15Enum.ID,
          expirationDate: 'expirationDate8',
          issuerCountry: 'issuerCountry0',
          issuerState: 'issuerState0',
          number: 'number8',
        }
      ],
      nationality: 'nationality4',
    },
  },
};
```

