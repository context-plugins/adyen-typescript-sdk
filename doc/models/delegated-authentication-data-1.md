
# Delegated Authentication Data 1

Contains information required to register the SCA device.

## Structure

`DelegatedAuthenticationData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkOutput` | `string` | Required | A base64-encoded block with the data required to register the SCA device. You obtain this information by using our authentication SDK.<br><br>**Constraints**: *Maximum Length*: `20000` |

## Example

```ts
import { DelegatedAuthenticationData1 } from 'adyen';

const delegatedAuthenticationData1: DelegatedAuthenticationData1 = {
  sdkOutput: 'sdkOutput2',
};
```

