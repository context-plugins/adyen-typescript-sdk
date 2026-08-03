
# Standalone

*This model accepts additional fields of type unknown.*

## Structure

`Standalone`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string \| undefined` | Optional | The default currency of the standalone payment terminal as an [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `enableGratuities` | `boolean \| undefined` | Optional | Indicates whether the tipping options specified in `gratuities` are enabled on the standalone terminal. |
| `enableStandalone` | `boolean \| undefined` | Optional | Enable standalone mode. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Standalone } from 'adyenlib';

const standalone: Standalone = {
  currencyCode: 'currencyCode2',
  enableGratuities: false,
  enableStandalone: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

