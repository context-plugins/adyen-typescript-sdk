
# Association Finalise Request

## Structure

`AssociationFinaliseRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[]` | Required | The list of unique identifiers of the resources that you are associating with the SCA device.<br><br>Maximum: 5 strings. |
| `strongCustomerAuthentication` | [`AssociationDelegatedAuthenticationData1`](../../doc/models/association-delegated-authentication-data-1.md) | Required | Contains authentication information required to associate the resource with the SCA device. |
| `type` | `string` | Required, Constant | The type of resource that you are associating with the SCA device.<br><br>Possible value: **PaymentInstrument**<br><br>**Value**: `'PaymentInstrument'` |

## Example

```ts
import { AssociationFinaliseRequest } from 'adyen';

const associationFinaliseRequest: AssociationFinaliseRequest = {
  ids: [
    'ids5',
    'ids6',
    'ids7'
  ],
  strongCustomerAuthentication: {
    sdkOutput: 'sdkOutput4',
  },
  type: 'PaymentInstrument',
};
```

