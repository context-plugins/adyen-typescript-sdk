
# Service Error 1

## Structure

`ServiceError1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string \| undefined` | Optional | The error code mapped to the error message. |
| `errorType` | `string \| undefined` | Optional | The category of the error. |
| `message` | `string \| undefined` | Optional | A short explanation of the issue. |
| `pspReference` | `string \| undefined` | Optional | The PSP reference of the payment. |
| `status` | `number \| undefined` | Optional | The HTTP response status. |

## Example

```ts
import { ServiceError1 } from 'adyen';

const serviceError1: ServiceError1 = {
  errorCode: 'errorCode2',
  errorType: 'errorType6',
  message: 'message6',
  pspReference: 'pspReference8',
  status: 142,
};
```

