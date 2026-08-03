
# Referenced

*This model accepts additional fields of type unknown.*

## Structure

`Referenced`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableStandaloneRefunds` | `boolean \| undefined` | Optional | Indicates whether referenced refunds are enabled on the standalone terminal. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Referenced } from 'adyenlib';

const referenced: Referenced = {
  enableStandaloneRefunds: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

