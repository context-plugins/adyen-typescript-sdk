
# Supported Card Types

## Structure

`SupportedCardTypes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `credit` | `boolean \| undefined` | Optional | Set to **true** to accept credit cards. |
| `debit` | `boolean \| undefined` | Optional | Set to **true** to accept debit cards. |
| `deferredDebit` | `boolean \| undefined` | Optional | Set to **true** to accept cards that allow deferred debit. |
| `prepaid` | `boolean \| undefined` | Optional | Set to **true** to accept prepaid cards. |
| `unknown` | `boolean \| undefined` | Optional | Set to **true** to accept card types for which the terminal can't determine the funding source while offline. |

## Example

```ts
import { SupportedCardTypes } from 'adyen';

const supportedCardTypes: SupportedCardTypes = {
  credit: false,
  debit: false,
  deferredDebit: false,
  prepaid: false,
  unknown: false,
};
```

