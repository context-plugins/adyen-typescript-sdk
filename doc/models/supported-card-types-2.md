
# Supported Card Types 2

The type of card for which the terminal accepts store-and-forward payments. You can specify multiple card types.

*This model accepts additional fields of type unknown.*

## Structure

`SupportedCardTypes2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `credit` | `boolean \| undefined` | Optional | Set to **true** to accept credit cards. |
| `debit` | `boolean \| undefined` | Optional | Set to **true** to accept debit cards. |
| `deferredDebit` | `boolean \| undefined` | Optional | Set to **true** to accept cards that allow deferred debit. |
| `prepaid` | `boolean \| undefined` | Optional | Set to **true** to accept prepaid cards. |
| `unknown` | `boolean \| undefined` | Optional | Set to **true** to accept card types for which the terminal can't determine the funding source while offline. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SupportedCardTypes2 } from 'adyenlib';

const supportedCardTypes2: SupportedCardTypes2 = {
  credit: false,
  debit: false,
  deferredDebit: false,
  prepaid: false,
  unknown: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

