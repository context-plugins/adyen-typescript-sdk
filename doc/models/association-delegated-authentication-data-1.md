
# Association Delegated Authentication Data 1

Contains authentication information required to associate the resource with the SCA device.

## Structure

`AssociationDelegatedAuthenticationData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkOutput` | `string` | Required | A base64-encoded block with the data required to authenticate the request. You obtain this information by using our authentication SDK.<br><br>**Constraints**: *Maximum Length*: `20000` |

## Example

```ts
import { AssociationDelegatedAuthenticationData1 } from 'adyen';

const associationDelegatedAuthenticationData1: AssociationDelegatedAuthenticationData1 = {
  sdkOutput: 'sdkOutput8',
};
```

