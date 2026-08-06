
# Delegated Authentication Data 1

Contains information required to register the SCA device.

*This model accepts additional fields of type unknown.*

## Structure

`DelegatedAuthenticationData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkOutput` | `string` | Required | A base64-encoded block with the data required to register the SCA device. You obtain this information by using our authentication SDK.<br><br>**Constraints**: *Maximum Length*: `20000` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DelegatedAuthenticationData1 } from 'adyen';

const delegatedAuthenticationData1: DelegatedAuthenticationData1 = {
  sdkOutput: 'sdkOutput2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

