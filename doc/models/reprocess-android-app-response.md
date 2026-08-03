
# Reprocess Android App Response

*This model accepts additional fields of type unknown.*

## Structure

`ReprocessAndroidAppResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string \| undefined` | Optional | The result of the reprocess. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReprocessAndroidAppResponse } from 'adyenlib';

const reprocessAndroidAppResponse: ReprocessAndroidAppResponse = {
  message: 'Message6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

