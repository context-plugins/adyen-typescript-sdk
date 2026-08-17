
# Referenced 1

Settings for referenced refunds.

## Structure

`Referenced1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableStandaloneRefunds` | `boolean \| undefined` | Optional | Indicates whether referenced refunds are enabled on the standalone terminal. |

## Example

```ts
import { Referenced1 } from 'adyen';

const referenced1: Referenced1 = {
  enableStandaloneRefunds: false,
};
```

