
# Association Initiate Request

*This model accepts additional fields of type unknown.*

## Structure

`AssociationInitiateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[]` | Required | The list of unique identifiers of the resources that you are associating with the SCA device.<br><br>Maximum: 5 strings. |
| `type` | [`Type103`](../../doc/models/type-103.md) | Required | The type of resource that you are associating with the SCA device.<br><br>Possible value: **PaymentInstrument** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AssociationInitiateRequest, Type103 } from 'adyen';

const associationInitiateRequest: AssociationInitiateRequest = {
  ids: [
    'ids3'
  ],
  type: Type103.PaymentInstrument,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

