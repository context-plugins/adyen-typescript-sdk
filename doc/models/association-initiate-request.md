
# Association Initiate Request

## Structure

`AssociationInitiateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[]` | Required | The list of unique identifiers of the resources that you are associating with the SCA device.<br><br>Maximum: 5 strings. |
| `type` | `string` | Required, Constant | The type of resource that you are associating with the SCA device.<br><br>Possible value: **PaymentInstrument**<br><br>**Value**: `'PaymentInstrument'` |

## Example

```ts
import { AssociationInitiateRequest } from 'adyen';

const associationInitiateRequest: AssociationInitiateRequest = {
  ids: [
    'ids3'
  ],
  type: 'PaymentInstrument',
};
```

