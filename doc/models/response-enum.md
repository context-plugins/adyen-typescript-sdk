
# Response Enum

Indicates if the modification request has been received for processing.

## Enumeration

`ResponseEnum`

## Fields

| Name |
|  --- |
| `EnumCapturereceived` |
| `EnumCancelreceived` |
| `EnumRefundreceived` |
| `EnumCancelOrRefundreceived` |
| `EnumAdjustAuthorisationreceived` |
| `EnumDonationreceived` |
| `EnumTechnicalcancelreceived` |
| `EnumVoidPendingRefundreceived` |
| `Authorised` |
| `Refused` |
| `Error` |

## Example

```ts
import { ResponseEnum } from 'adyen';

const response = ResponseEnum.EnumRefundreceived;
```

