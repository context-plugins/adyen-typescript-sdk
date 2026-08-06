
# Modification Result

*This model accepts additional fields of type unknown.*

## Structure

`ModificationResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be returned in a particular modification response. |
| `pspReference` | `string` | Required | Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `response` | [`Response`](../../doc/models/response.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ModificationResult, Response } from 'adyen';

const modificationResult: ModificationResult = {
  pspReference: 'pspReference4',
  response: Response.EnumCancelreceived,
  additionalData: {
    'key0': 'additionalData2',
    'key1': 'additionalData3'
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

