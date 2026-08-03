
# Refunds

*This model accepts additional fields of type unknown.*

## Structure

`Refunds`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenced` | [`Referenced \| undefined`](../../doc/models/referenced.md) | Optional | - |
| `unreferenced` | [`Unreferenced \| undefined`](../../doc/models/unreferenced.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Refunds } from 'adyenlib';

const refunds: Refunds = {
  referenced: {
    enableStandaloneRefunds: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  unreferenced: {
    enableUnreferencedRefunds: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

