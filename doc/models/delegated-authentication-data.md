
# Delegated Authentication Data

## Structure

`DelegatedAuthenticationData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkOutput` | `string` | Required | A base64-encoded block with the data required to register the SCA device. You obtain this information by using our authentication SDK.<br><br>**Constraints**: *Maximum Length*: `20000` |

## Example

```ts
import { DelegatedAuthenticationData } from 'adyen';

const delegatedAuthenticationData: DelegatedAuthenticationData = {
  sdkOutput: 'sdkOutput2',
};
```

