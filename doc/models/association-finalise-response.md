
# Association Finalise Response

## Structure

`AssociationFinaliseResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string \| undefined` | Optional | The unique identifier of the SCA device you associated with a resource. |
| `ids` | `string[] \| undefined` | Optional | The list of unique identifiers of the resources that you associated with the SCA device. |
| `type` | `string` | Required, Constant | The type of resource that you associated with the SCA device.<br><br>**Value**: `'PAYMENT_INSTRUMENT'` |

## Example

```ts
import { AssociationFinaliseResponse } from 'adyen';

const associationFinaliseResponse: AssociationFinaliseResponse = {
  type: 'PAYMENT_INSTRUMENT',
  deviceId: 'deviceId4',
  ids: [
    'ids5',
    'ids6'
  ],
};
```

