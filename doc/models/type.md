
# Type

The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.

To delete an existing entry for a document `type`, send only the `type` field in your request.

## Enumeration

`Type`

## Fields

| Name |
|  --- |
| `Drivinglicense` |
| `Id` |
| `Passport` |
| `Socialsecurity` |
| `Visa` |

## Example

```ts
import { Type } from 'adyen';

const type = Type.Drivinglicense;
```

