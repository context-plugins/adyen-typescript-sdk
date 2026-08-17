
# Standalone 1

Settings for [standalone](https://docs.adyen.com/point-of-sale/standalone/standalone-build/set-up-standalone#set-up-standalone-using-an-api-call) features.

## Structure

`Standalone1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string \| undefined` | Optional | The default currency of the standalone payment terminal as an [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `enableGratuities` | `boolean \| undefined` | Optional | Indicates whether the tipping options specified in `gratuities` are enabled on the standalone terminal. |
| `enableStandalone` | `boolean \| undefined` | Optional | Enable standalone mode. |

## Example

```ts
import { Standalone1 } from 'adyen';

const standalone1: Standalone1 = {
  currencyCode: 'currencyCode2',
  enableGratuities: false,
  enableStandalone: false,
};
```

