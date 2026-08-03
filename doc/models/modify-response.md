
# Modify Response

*This model accepts additional fields of type unknown.*

## Structure

`ModifyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be returned in a particular response. |
| `pspReference` | `string` | Required | Adyen's 16-character string reference associated with the transaction. This value is globally unique; quote it when communicating with us about this response. |
| `response` | `string` | Required | The response:<br><br>* In case of success, it is either `payout-confirm-received` or `payout-decline-received`.<br>* In case of an error, an informational message is returned. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ModifyResponse } from 'adyenlib';

const modifyResponse: ModifyResponse = {
  pspReference: 'pspReference6',
  response: 'response4',
  additionalData: {
    'key0': 'additionalData4',
    'key1': 'additionalData5',
    'key2': 'additionalData6'
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

