
# Referenced 1

Settings for referenced refunds.

*This model accepts additional fields of type unknown.*

## Structure

`Referenced1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableStandaloneRefunds` | `boolean \| undefined` | Optional | Indicates whether referenced refunds are enabled on the standalone terminal. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Referenced1 } from 'adyen';

const referenced1: Referenced1 = {
  enableStandaloneRefunds: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

