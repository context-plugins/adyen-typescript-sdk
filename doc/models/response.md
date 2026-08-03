
# Response

Indicates if the modification request has been received for processing.

## Enumeration

`Response`

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
import { Response } from 'adyenlib';

const response = Response.EnumRefundreceived;
```

