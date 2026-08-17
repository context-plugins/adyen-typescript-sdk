
# Store Detail and Submit Response

## Structure

`StoreDetailAndSubmitResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be returned in a particular response. |
| `pspReference` | `string` | Required | A new reference to uniquely identify this request. |
| `refusalReason` | `string \| undefined` | Optional | In case of refusal, an informational message for the reason. |
| `resultCode` | `string` | Required | The response:<br><br>* In case of success is payout-submit-received.<br>* In case of an error, an informational message is returned. |

## Example

```ts
import { StoreDetailAndSubmitResponse } from 'adyen';

const storeDetailAndSubmitResponse: StoreDetailAndSubmitResponse = {
  pspReference: 'pspReference0',
  resultCode: 'resultCode6',
  additionalData: {
    'key0': 'additionalData2',
    'key1': 'additionalData1',
    'key2': 'additionalData0'
  },
  refusalReason: 'refusalReason2',
};
```

