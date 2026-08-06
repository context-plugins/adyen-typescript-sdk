
# Association Initiate Response

*This model accepts additional fields of type unknown.*

## Structure

`AssociationInitiateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkInput` | `string \| undefined` | Optional | A string that you must pass to the authentication SDK to continue with the association process.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AssociationInitiateResponse } from 'adyen';

const associationInitiateResponse: AssociationInitiateResponse = {
  sdkInput: 'sdkInput0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

