<!-- Generated file — do not edit; regenerated with the SDK. -->

# HostedOnboarding — operations

Accessor: `client.hostedOnboarding` · Source: `src/resources/hosted-onboarding.ts` · 3 operations · Request and error types: namespace `HostedOnboarding`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getThemes

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getThemes(options?: RequestOptions): ApiPromise<OnboardingThemes, HostedOnboarding.GetThemesError>`
- **Wire**: `GET /themes`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnboardingThemes`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `HostedOnboarding.GetThemesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `OnboardingThemes` | `onboardingThemesSchema` | `src/models/onboarding-themes.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### getThemesId

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getThemesId(request: HostedOnboarding.GetThemesIdRequest, options?: RequestOptions): ApiPromise<OnboardingTheme, HostedOnboarding.GetThemesIdError>`
- **Wire**: `GET /themes/{id}`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OnboardingTheme`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `HostedOnboarding.GetThemesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HostedOnboarding.GetThemesIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnboardingTheme` | `onboardingThemeSchema` | `src/models/onboarding-theme.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

### postLegalEntitiesIdOnboardingLinks

- **Server**: `default18` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postLegalEntitiesIdOnboardingLinks(request: HostedOnboarding.PostLegalEntitiesIdOnboardingLinksRequest, options?: RequestOptions): ApiPromise<OnboardingLink, HostedOnboarding.PostLegalEntitiesIdOnboardingLinksError>`
- **Wire**: `POST /legalEntities/{id}/onboardingLinks`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OnboardingLink`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `HostedOnboarding.PostLegalEntitiesIdOnboardingLinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HostedOnboarding.PostLegalEntitiesIdOnboardingLinksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `OnboardingLinkInfo` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OnboardingLinkInfo` | `onboardingLinkInfoSchema` | `src/models/onboarding-link-info.ts` |
| `OnboardingLink` | `onboardingLinkSchema` | `src/models/onboarding-link.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

