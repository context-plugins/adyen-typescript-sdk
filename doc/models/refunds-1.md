
# Refunds 1

Settings for refunds.

*This model accepts additional fields of type unknown.*

## Structure

`Refunds1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenced` | [`Referenced \| undefined`](../../doc/models/referenced.md) | Optional | - |
| `unreferenced` | [`Unreferenced \| undefined`](../../doc/models/unreferenced.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Refunds1 } from 'adyenlib';

const refunds1: Refunds1 = {
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

