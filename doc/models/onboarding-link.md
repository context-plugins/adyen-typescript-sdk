
# Onboarding Link

*This model accepts additional fields of type unknown.*

## Structure

`OnboardingLink`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | The URL of the hosted onboarding page where you need to redirect your user. This URL:<br><br>- Expires after 4 minutes.<br><br>- Can only be used once.<br><br>- Can only be clicked once by the user.<br><br>If the link expires, you need to create a new link. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OnboardingLink } from 'adyen';

const onboardingLink: OnboardingLink = {
  url: 'url2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

