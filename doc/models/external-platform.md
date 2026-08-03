
# External Platform

Third-party developed platform used to initiate payment requests. For example, Magento, Zuora, etc.

*This model accepts additional fields of type unknown.*

## Structure

`ExternalPlatform`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `integrator` | `string \| undefined` | Optional | External platform integrator. |
| `name` | `string \| undefined` | Optional | Name of the field. For example, Name of External Platform. |
| `version` | `string \| undefined` | Optional | Version of the field. For example, Version of External Platform. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ExternalPlatform } from 'adyenlib';

const externalPlatform: ExternalPlatform = {
  integrator: 'integrator0',
  name: 'name4',
  version: 'version0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

