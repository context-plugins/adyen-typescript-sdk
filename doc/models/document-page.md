
# Document Page

*This model accepts additional fields of type unknown.*

## Structure

`DocumentPage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pageName` | `string \| undefined` | Optional | - |
| `pageNumber` | `number \| undefined` | Optional | - |
| `type` | [`Type92 \| undefined`](../../doc/models/type-92.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DocumentPage, Type92 } from 'adyenlib';

const documentPage: DocumentPage = {
  pageName: 'pageName0',
  pageNumber: 88,
  type: Type92.Front,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

