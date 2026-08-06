
# Personal Document Data

*This model accepts additional fields of type unknown.*

## Structure

`PersonalDocumentData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expirationDate` | `string \| undefined` | Optional | The expiry date of the document,<br>in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**. |
| `issuerCountry` | `string \| undefined` | Optional | The country where the document was issued, in the two-character<br>[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `issuerState` | `string \| undefined` | Optional | The state where the document was issued (if applicable). |
| `number` | `string \| undefined` | Optional | The number in the document. |
| `type` | [`Type`](../../doc/models/type.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PersonalDocumentData, Type } from 'adyen';

const personalDocumentData: PersonalDocumentData = {
  type: Type.Socialsecurity,
  expirationDate: 'expirationDate2',
  issuerCountry: 'issuerCountry4',
  issuerState: 'issuerState4',
  number: 'number6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

