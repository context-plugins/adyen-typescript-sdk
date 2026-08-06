
# Hk Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`HkLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 9- to 17-digit bank account number, without separators or whitespace. Starts with the 3-digit branch code.<br><br>**Constraints**: *Minimum Length*: `9`, *Maximum Length*: `17` |
| `clearingCode` | `string` | Required | The 3-digit clearing code, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `type` | [`Type1810`](../../doc/models/type-1810.md) | Required | **hkLocal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { HkLocalAccountIdentification, Type1810 } from 'adyen';

const hkLocalAccountIdentification: HkLocalAccountIdentification = {
  accountNumber: 'accountNumber6',
  clearingCode: 'clearingCode0',
  type: Type1810.HkLocal,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

