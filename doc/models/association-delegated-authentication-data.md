
# Association Delegated Authentication Data

## Structure

`AssociationDelegatedAuthenticationData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkOutput` | `string` | Required | A base64-encoded block with the data required to authenticate the request. You obtain this information by using our authentication SDK.<br><br>**Constraints**: *Maximum Length*: `20000` |

## Example

```ts
import { AssociationDelegatedAuthenticationData } from 'adyen';

const associationDelegatedAuthenticationData: AssociationDelegatedAuthenticationData = {
  sdkOutput: 'sdkOutput0',
};
```

