
# Document Page

## Structure

`DocumentPage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pageName` | `string \| undefined` | Optional | - |
| `pageNumber` | `number \| undefined` | Optional | - |
| `type` | [`Type91Enum \| undefined`](../../doc/models/type-91-enum.md) | Optional | - |

## Example

```ts
import { DocumentPage, Type91Enum } from 'adyen';

const documentPage: DocumentPage = {
  pageName: 'pageName0',
  pageNumber: 88,
  type: Type91Enum.FRONT,
};
```

