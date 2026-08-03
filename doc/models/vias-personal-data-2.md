
# Vias Personal Data 2

Personal information of the individual.

*This model accepts additional fields of type unknown.*

## Structure

`ViasPersonalData2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateOfBirth` | `string \| undefined` | Optional | The person's date of birth, in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**. |
| `documentData` | [`PersonalDocumentData[] \| undefined`](../../doc/models/personal-document-data.md) | Optional | Array that contains information about the person's identification document. You can submit only one entry per document type. |
| `nationality` | `string \| undefined` | Optional | The nationality of the person represented by a two-character country code,  in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type, ViasPersonalData2 } from 'adyenlib';

const viasPersonalData2: ViasPersonalData2 = {
  dateOfBirth: 'dateOfBirth4',
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
    }
  ],
  nationality: 'nationality0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

