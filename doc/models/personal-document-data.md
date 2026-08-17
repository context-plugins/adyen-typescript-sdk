
# Personal Document Data

## Structure

`PersonalDocumentData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expirationDate` | `string \| undefined` | Optional | The expiry date of the document,<br>in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**. |
| `issuerCountry` | `string \| undefined` | Optional | The country where the document was issued, in the two-character<br>[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `issuerState` | `string \| undefined` | Optional | The state where the document was issued (if applicable). |
| `number` | `string \| undefined` | Optional | The number in the document. |
| `type` | [`Type15Enum`](../../doc/models/type-15-enum.md) | Required | The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.<br><br>To delete an existing entry for a document `type`, send only the `type` field in your request. |

## Example

```ts
import { PersonalDocumentData, Type15Enum } from 'adyen';

const personalDocumentData: PersonalDocumentData = {
  type: Type15Enum.SOCIALSECURITY,
  expirationDate: 'expirationDate2',
  issuerCountry: 'issuerCountry4',
  issuerState: 'issuerState4',
  number: 'number6',
};
```

