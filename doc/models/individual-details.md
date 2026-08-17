
# Individual Details

## Structure

`IndividualDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`ViasName2 \| undefined`](../../doc/models/vias-name-2.md) | Optional | The name of the individual.<br><br>> Make sure your account holder registers using the name shown on their Photo ID.<br>> Maximum length: 80 characters<br>> Cannot contain numbers. /n Cannot be empty. |
| `personalData` | [`ViasPersonalData2 \| undefined`](../../doc/models/vias-personal-data-2.md) | Optional | Personal information of the individual. |

## Example

```ts
import { GenderEnum, IndividualDetails, Type15Enum } from 'adyen';

const individualDetails: IndividualDetails = {
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
};
```

