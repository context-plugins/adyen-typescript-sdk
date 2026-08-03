
# Association Finalise Response

*This model accepts additional fields of type unknown.*

## Structure

`AssociationFinaliseResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string \| undefined` | Optional | The unique identifier of the SCA device you associated with a resource. |
| `ids` | `string[] \| undefined` | Optional | The list of unique identifiers of the resources that you associated with the SCA device. |
| `type` | [`Type123`](../../doc/models/type-123.md) | Required | The type of resource that you associated with the SCA device. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AssociationFinaliseResponse, Type123 } from 'adyenlib';

const associationFinaliseResponse: AssociationFinaliseResponse = {
  type: Type123.PaymentInstrument,
  deviceId: 'deviceId4',
  ids: [
    'ids5',
    'ids6'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

