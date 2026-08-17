
# Modification Result

## Structure

`ModificationResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be returned in a particular modification response. |
| `pspReference` | `string` | Required | Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request. |
| `response` | [`ResponseEnum`](../../doc/models/response-enum.md) | Required | Indicates if the modification request has been received for processing. |

## Example

```ts
import { ModificationResult, ResponseEnum } from 'adyen';

const modificationResult: ModificationResult = {
  pspReference: 'pspReference4',
  response: ResponseEnum.EnumCancelreceived,
  additionalData: {
    'key0': 'additionalData2',
    'key1': 'additionalData3'
  },
};
```

