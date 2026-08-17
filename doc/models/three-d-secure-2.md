
# Three D Secure 2

The data of the result from the 3DS authentication.

## Structure

`ThreeDSecure2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acsTransactionId` | `string \| undefined` | Optional | The transaction identifier for the Access Control Server |

## Example

```ts
import { ThreeDSecure2 } from 'adyen';

const threeDSecure2: ThreeDSecure2 = {
  acsTransactionId: 'acsTransactionId6',
};
```

