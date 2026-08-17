
# Legal Arrangement Detail

## Structure

`LegalArrangementDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`ViasAddress4`](../../doc/models/vias-address-4.md) | Required | The address of the legal arrangement. |
| `legalArrangementCode` | `string \| undefined` | Optional | Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement.<br>Use only when updating an account holder. If you include this field when creating an account holder, the request will fail. |
| `legalArrangementEntities` | [`LegalArrangementEntityDetail[] \| undefined`](../../doc/models/legal-arrangement-entity-detail.md) | Optional | An array containing information about other entities that are part of the legal arrangement. |
| `legalArrangementReference` | `string \| undefined` | Optional | Your reference for the legal arrangement. Must be between 3 to 128 characters. |
| `legalForm` | [`LegalFormEnum \| undefined`](../../doc/models/legal-form-enum.md) | Optional | The form of legal arrangement. Required if `type` is **Trust** or **Partnership**.<br><br>The possible values depend on the `type`.<br><br>- For `type` **Trust**:  **CashManagementTrust**, **CorporateUnitTrust**, **DeceasedEstate**, **DiscretionaryInvestmentTrust**, **DiscretionaryServicesManagementTrust**, **DiscretionaryTradingTrust**, **FirstHomeSaverAccountsTrust**, **FixedTrust**, **FixedUnitTrust**, **HybridTrust**, **ListedPublicUnitTrust**, **OtherTrust**, **PooledSuperannuationTrust**, **PublicTradingTrust**, or **UnlistedPublicUnitTrust**.<br><br>- For `type` **Partnership**: **LimitedPartnership**, **FamilyPartnership**, or **OtherPartnership** |
| `name` | `string` | Required | The legal name of the legal arrangement. Minimum length: 3 characters. |
| `registrationNumber` | `string \| undefined` | Optional | The registration number of the legal arrangement. |
| `taxNumber` | `string \| undefined` | Optional | The tax identification number of the legal arrangement. |
| `type` | [`Type110Enum`](../../doc/models/type-110-enum.md) | Required | The [type of legal arrangement](https://docs.adyen.com/classic-platforms/verification-process/legal-arrangements#types-of-legal-arrangements).<br><br>Possible values:<br><br>- **Association**<br><br>- **Partnership**<br><br>- **SoleProprietorship**<br><br>- **Trust** |

## Example

```ts
import {
  GenderEnum,
  LegalArrangementDetail,
  LegalFormEnum,
  Type110Enum,
  Type15Enum,
} from 'adyen';

const legalArrangementDetail: LegalArrangementDetail = {
  address: {
    country: 'country0',
    city: 'city6',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode8',
    stateOrProvince: 'stateOrProvince4',
    street: 'street6',
  },
  name: 'name2',
  type: Type110Enum.SoleProprietorship,
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
      email: 'email4',
      fullPhoneNumber: 'fullPhoneNumber6',
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
    }
  ],
  legalArrangementReference: 'legalArrangementReference6',
  legalForm: LegalFormEnum.DiscretionaryServicesManagementTrust,
  registrationNumber: 'registrationNumber0',
};
```

