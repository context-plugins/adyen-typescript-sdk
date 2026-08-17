
# Refunds 1

Settings for refunds.

## Structure

`Refunds1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenced` | [`Referenced1 \| undefined`](../../doc/models/referenced-1.md) | Optional | Settings for referenced refunds. |
| `unreferenced` | [`Unreferenced2 \| undefined`](../../doc/models/unreferenced-2.md) | Optional | Settings for unreferenced refunds. |

## Example

```ts
import { Refunds1 } from 'adyen';

const refunds1: Refunds1 = {
  referenced: {
    enableStandaloneRefunds: false,
  },
  unreferenced: {
    enableUnreferencedRefunds: false,
  },
};
```

