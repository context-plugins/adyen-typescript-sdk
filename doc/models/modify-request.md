
# Modify Request

*This model accepts additional fields of type unknown.*

## Structure

`ModifyRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular payout request. |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `originalReference` | `string` | Required | The PSP reference received in the `/submitThirdParty` response. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ModifyRequest } from 'adyenlib';

const modifyRequest: ModifyRequest = {
  merchantAccount: 'merchantAccount0',
  originalReference: 'originalReference8',
  additionalData: {
    'key0': 'additionalData8'
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

