
# Store Detail Response

## Structure

`StoreDetailResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be returned in a particular response. |
| `pspReference` | `string` | Required | A new reference to uniquely identify this request. |
| `recurringDetailReference` | `string` | Required | The token which you can use later on for submitting the payout. |
| `resultCode` | `string` | Required | The result code of the transaction. `Success` indicates that the details were stored successfully. |

## Example

```ts
import { StoreDetailResponse } from 'adyen';

const storeDetailResponse: StoreDetailResponse = {
  pspReference: 'pspReference8',
  recurringDetailReference: 'recurringDetailReference0',
  resultCode: 'resultCode4',
  additionalData: {
    'key0': 'additionalData0',
    'key1': 'additionalData1'
  },
};
```

