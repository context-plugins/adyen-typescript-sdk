
# Three D Secure

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDSecure`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acsTransactionId` | `string \| undefined` | Optional | The transaction identifier for the Access Control Server |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ThreeDSecure } from 'adyen';

const threeDSecure: ThreeDSecure = {
  acsTransactionId: 'acsTransactionId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

