
# Submit Response

*This model accepts additional fields of type unknown.*

## Structure

`SubmitResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be returned in a particular response. |
| `pspReference` | `string` | Required | A new reference to uniquely identify this request. |
| `refusalReason` | `string \| undefined` | Optional | In case of refusal, an informational message for the reason. |
| `resultCode` | `string` | Required | The response:<br><br>* In case of success, it is `payout-submit-received`.<br>* In case of an error, an informational message is returned. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SubmitResponse } from 'adyenlib';

const submitResponse: SubmitResponse = {
  pspReference: 'pspReference2',
  resultCode: 'resultCode8',
  additionalData: {
    'key0': 'additionalData4',
    'key1': 'additionalData3',
    'key2': 'additionalData2'
  },
  refusalReason: 'refusalReason4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

