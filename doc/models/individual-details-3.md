
# Individual Details 3

Details about the individual account holder.
Required when creating an account holder with `legalEntity` **Individual**.

*This model accepts additional fields of type unknown.*

## Structure

`IndividualDetails3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`ViasName \| undefined`](../../doc/models/vias-name.md) | Optional | - |
| `personalData` | [`ViasPersonalData \| undefined`](../../doc/models/vias-personal-data.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Gender, IndividualDetails3, Type } from 'adyenlib';

const individualDetails3: IndividualDetails3 = {
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
};
```

