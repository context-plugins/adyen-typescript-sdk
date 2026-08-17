
# External Platform

Third-party developed platform used to initiate payment requests. For example, Magento, Zuora, etc.

## Structure

`ExternalPlatform`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `integrator` | `string \| undefined` | Optional | External platform integrator. |
| `name` | `string \| undefined` | Optional | Name of the field. For example, Name of External Platform. |
| `version` | `string \| undefined` | Optional | Version of the field. For example, Version of External Platform. |

## Example

```ts
import { ExternalPlatform } from 'adyen';

const externalPlatform: ExternalPlatform = {
  integrator: 'integrator0',
  name: 'name4',
  version: 'version0',
};
```

