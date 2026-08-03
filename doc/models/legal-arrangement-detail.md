
# Legal Arrangement Detail

*This model accepts additional fields of type unknown.*

## Structure

`LegalArrangementDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`ViasAddress`](../../doc/models/vias-address.md) | Required | - |
| `legalArrangementCode` | `string \| undefined` | Optional | Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement.<br>Use only when updating an account holder. If you include this field when creating an account holder, the request will fail. |
| `legalArrangementEntities` | [`LegalArrangementEntityDetail[] \| undefined`](../../doc/models/legal-arrangement-entity-detail.md) | Optional | An array containing information about other entities that are part of the legal arrangement. |
| `legalArrangementReference` | `string \| undefined` | Optional | Your reference for the legal arrangement. Must be between 3 to 128 characters. |
| `legalForm` | [`LegalForm \| undefined`](../../doc/models/legal-form.md) | Optional | - |
| `name` | `string` | Required | The legal name of the legal arrangement. Minimum length: 3 characters. |
| `registrationNumber` | `string \| undefined` | Optional | The registration number of the legal arrangement. |
| `taxNumber` | `string \| undefined` | Optional | The tax identification number of the legal arrangement. |
| `type` | [`Type1`](../../doc/models/type-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Gender,
  LegalArrangementDetail,
  LegalForm,
  Type,
  Type1,
} from 'adyenlib';

const legalArrangementDetail: LegalArrangementDetail = {
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
  name: 'name2',
  type: Type1.SoleProprietorship,
  legalArrangementCode: 'legalArrangementCode4',
  legalArrangementEntities: [
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
      email: 'email4',
      fullPhoneNumber: 'fullPhoneNumber6',
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
    }
  ],
  legalArrangementReference: 'legalArrangementReference6',
  legalForm: LegalForm.DiscretionaryServicesManagementTrust,
  registrationNumber: 'registrationNumber0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

