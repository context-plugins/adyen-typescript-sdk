
# Register Sca Final Response

*This model accepts additional fields of type unknown.*

## Structure

`RegisterScaFinalResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean \| undefined` | Optional | Specifies if the registration was initiated successfully. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RegisterScaFinalResponse } from 'adyenlib';

const registerScaFinalResponse: RegisterScaFinalResponse = {
  success: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

