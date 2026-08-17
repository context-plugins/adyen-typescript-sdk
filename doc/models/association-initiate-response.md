
# Association Initiate Response

## Structure

`AssociationInitiateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkInput` | `string \| undefined` | Optional | A string that you must pass to the authentication SDK to continue with the association process.<br><br>**Constraints**: *Maximum Length*: `20000` |

## Example

```ts
import { AssociationInitiateResponse } from 'adyen';

const associationInitiateResponse: AssociationInitiateResponse = {
  sdkInput: 'sdkInput0',
};
```

