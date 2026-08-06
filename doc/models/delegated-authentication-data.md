
# Delegated Authentication Data

*This model accepts additional fields of type unknown.*

## Structure

`DelegatedAuthenticationData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkOutput` | `string` | Required | A base64-encoded block with the data required to register the SCA device. You obtain this information by using our authentication SDK.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DelegatedAuthenticationData } from 'adyen';

const delegatedAuthenticationData: DelegatedAuthenticationData = {
  sdkOutput: 'sdkOutput2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

