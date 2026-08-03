
# Three D Secure 2

The data of the result from the 3DS authentication.

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDSecure2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acsTransactionId` | `string \| undefined` | Optional | The transaction identifier for the Access Control Server |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ThreeDSecure2 } from 'adyenlib';

const threeDSecure2: ThreeDSecure2 = {
  acsTransactionId: 'acsTransactionId6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

