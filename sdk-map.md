<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Adyen (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Adyen |
| Package | `adyen` |
| Package version | `72` |
| API spec version | `72` |
| Import specifier | `adyen` — the package root is the **only** entry. Deep imports (`adyen/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/adyen/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { AdyenClient, ServerEnvironment } from "adyen";

const client = new AdyenClient({
  serverEnvironment: ServerEnvironment.Test,
  apiKeyAuth: "YOUR_API_KEY",
  basicAuth: { username: "YOUR_USERNAME", password: "YOUR_PASSWORD" },
  clientKey: "YOUR_API_KEY",
});
```

The only constructor is `new AdyenClient(clientOptions: Partial<ClientOptions> = {})`, so `new AdyenClient()` is valid. Resources are memoized lazy getters on the client — `client.payments`, `client.donations`, `client.paymentLinks`, `client.modifications`, `client.recurringApi`, `client.orders`, `client.utility`, `client.general`, `client.initialization`, `client.reviewing`, `client.instantPayouts`, `client.rates`, `client.accountCompanyLevel`, `client.accountMerchantLevel`, `client.accountStoreLevel`, `client.payoutSettingsMerchantLevel`, `client.usersCompanyLevel`, `client.usersMerchantLevel`, `client.myApiCredential`, `client.apiCredentialsCompanyLevel`, `client.apiCredentialsMerchantLevel`, `client.apiKeyCompanyLevel`, `client.apiKeyMerchantLevel`, `client.clientKeyCompanyLevel`, `client.clientKeyMerchantLevel`, `client.allowedOriginsCompanyLevel`, `client.allowedOriginsMerchantLevel`, `client.webhooksCompanyLevel`, `client.webhooksMerchantLevel`, `client.paymentMethodsMerchantLevel`, `client.terminalsTerminalLevel`, `client.terminalActionsCompanyLevel`, `client.terminalActionsTerminalLevel`, `client.terminalOrdersCompanyLevel`, `client.terminalOrdersMerchantLevel`, `client.terminalSettingsCompanyLevel`, `client.terminalSettingsMerchantLevel`, `client.terminalSettingsStoreLevel`, `client.terminalSettingsTerminalLevel`, `client.androidFilesCompanyLevel`, `client.splitConfigurationMerchantLevel`, `client.donationCampaigns`, `client.accountHolders`, `client.accounts`, `client.verification`, `client.balancesOverview`, `client.balanceTransfers`, `client.platform`, `client.balanceAccounts`, `client.balances`, `client.managedPayoutSchedules`, `client.customPayoutSchedulesSweeps`, `client.authorizedCardUsers`, `client.recurringTopUps`, `client.paymentInstruments`, `client.paymentInstrumentGroups`, `client.transactionRules`, `client.bankAccountValidation`, `client.networkTokens`, `client.grantAccounts`, `client.grantOffersApi`, `client.cardOrders`, `client.directDebitMandates`, `client.manageCardPin`, `client.transferRoutes`, `client.scaDeviceManagement`, `client.transferLimitsBalanceAccountLevel`, `client.transferLimitsBalancePlatformLevel`, `client.manageScaDevices`, `client.scaAssociationManagement`, `client.transfers`, `client.transactions`, `client.capital`, `client.cashOutApi`, `client.dynamicOffers`, `client.grantsApi`, `client.sessionAuthentication`, `client.legalEntities`, `client.transferInstruments`, `client.businessLinesApi`, `client.documents`, `client.termsOfService`, `client.pciQuestionnaires`, `client.taxEDeliveryConsent`, `client.hostedOnboarding`, `client.hostedOnboardingPage`, `client.pciComplianceQuestionnairePage`, `client.iDealProfiles`, `client.accountVerification`, `client.disputeAttachments`, `client.raiseDisputes`, `client.paymentsApp` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter. 18 operations are methods on the client itself.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Test` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `apiKeyAuth` | `TokenProvider \| undefined` | unset |
| `basicAuth` | `BasicAuthCredentials \| undefined` | unset |
| `clientKey` | `TokenProvider \| undefined` | unset |

The 3 auth fields are all optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `AdyenError` set. `AdyenError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `AdyenError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.payments.postAuthorise();
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof AdyenError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **449 operations**, **420** declare typed error bodies and **29** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (93 groups, 449 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `client` (ungrouped) | 18 | [map/operations/client.md](map/operations/client.md) |
| `payments` | 14 | [map/operations/payments.md](map/operations/payments.md) |
| `donations` | 2 | [map/operations/donations.md](map/operations/donations.md) |
| `paymentLinks` | 3 | [map/operations/payment-links.md](map/operations/payment-links.md) |
| `modifications` | 14 | [map/operations/modifications.md](map/operations/modifications.md) |
| `recurringApi` | 4 | [map/operations/recurring-api.md](map/operations/recurring-api.md) |
| `orders` | 3 | [map/operations/orders.md](map/operations/orders.md) |
| `utility` | 4 | [map/operations/utility.md](map/operations/utility.md) |
| `general` | 41 | [map/operations/general.md](map/operations/general.md) |
| `initialization` | 3 | [map/operations/initialization.md](map/operations/initialization.md) |
| `reviewing` | 2 | [map/operations/reviewing.md](map/operations/reviewing.md) |
| `instantPayouts` | 1 | [map/operations/instant-payouts.md](map/operations/instant-payouts.md) |
| `rates` | 1 | [map/operations/rates.md](map/operations/rates.md) |
| `accountCompanyLevel` | 3 | [map/operations/account-company-level.md](map/operations/account-company-level.md) |
| `accountMerchantLevel` | 4 | [map/operations/account-merchant-level.md](map/operations/account-merchant-level.md) |
| `accountStoreLevel` | 8 | [map/operations/account-store-level.md](map/operations/account-store-level.md) |
| `payoutSettingsMerchantLevel` | 5 | [map/operations/payout-settings-merchant-level.md](map/operations/payout-settings-merchant-level.md) |
| `usersCompanyLevel` | 4 | [map/operations/users-company-level.md](map/operations/users-company-level.md) |
| `usersMerchantLevel` | 4 | [map/operations/users-merchant-level.md](map/operations/users-merchant-level.md) |
| `myApiCredential` | 6 | [map/operations/my-api-credential.md](map/operations/my-api-credential.md) |
| `apiCredentialsCompanyLevel` | 4 | [map/operations/api-credentials-company-level.md](map/operations/api-credentials-company-level.md) |
| `apiCredentialsMerchantLevel` | 4 | [map/operations/api-credentials-merchant-level.md](map/operations/api-credentials-merchant-level.md) |
| `apiKeyCompanyLevel` | 1 | [map/operations/api-key-company-level.md](map/operations/api-key-company-level.md) |
| `apiKeyMerchantLevel` | 1 | [map/operations/api-key-merchant-level.md](map/operations/api-key-merchant-level.md) |
| `clientKeyCompanyLevel` | 1 | [map/operations/client-key-company-level.md](map/operations/client-key-company-level.md) |
| `clientKeyMerchantLevel` | 1 | [map/operations/client-key-merchant-level.md](map/operations/client-key-merchant-level.md) |
| `allowedOriginsCompanyLevel` | 4 | [map/operations/allowed-origins-company-level.md](map/operations/allowed-origins-company-level.md) |
| `allowedOriginsMerchantLevel` | 4 | [map/operations/allowed-origins-merchant-level.md](map/operations/allowed-origins-merchant-level.md) |
| `webhooksCompanyLevel` | 7 | [map/operations/webhooks-company-level.md](map/operations/webhooks-company-level.md) |
| `webhooksMerchantLevel` | 7 | [map/operations/webhooks-merchant-level.md](map/operations/webhooks-merchant-level.md) |
| `paymentMethodsMerchantLevel` | 6 | [map/operations/payment-methods-merchant-level.md](map/operations/payment-methods-merchant-level.md) |
| `terminalsTerminalLevel` | 2 | [map/operations/terminals-terminal-level.md](map/operations/terminals-terminal-level.md) |
| `terminalActionsCompanyLevel` | 2 | [map/operations/terminal-actions-company-level.md](map/operations/terminal-actions-company-level.md) |
| `terminalActionsTerminalLevel` | 1 | [map/operations/terminal-actions-terminal-level.md](map/operations/terminal-actions-terminal-level.md) |
| `terminalOrdersCompanyLevel` | 10 | [map/operations/terminal-orders-company-level.md](map/operations/terminal-orders-company-level.md) |
| `terminalOrdersMerchantLevel` | 10 | [map/operations/terminal-orders-merchant-level.md](map/operations/terminal-orders-merchant-level.md) |
| `terminalSettingsCompanyLevel` | 4 | [map/operations/terminal-settings-company-level.md](map/operations/terminal-settings-company-level.md) |
| `terminalSettingsMerchantLevel` | 4 | [map/operations/terminal-settings-merchant-level.md](map/operations/terminal-settings-merchant-level.md) |
| `terminalSettingsStoreLevel` | 8 | [map/operations/terminal-settings-store-level.md](map/operations/terminal-settings-store-level.md) |
| `terminalSettingsTerminalLevel` | 4 | [map/operations/terminal-settings-terminal-level.md](map/operations/terminal-settings-terminal-level.md) |
| `androidFilesCompanyLevel` | 6 | [map/operations/android-files-company-level.md](map/operations/android-files-company-level.md) |
| `splitConfigurationMerchantLevel` | 9 | [map/operations/split-configuration-merchant-level.md](map/operations/split-configuration-merchant-level.md) |
| `donationCampaigns` | 6 | [map/operations/donation-campaigns.md](map/operations/donation-campaigns.md) |
| `accountHolders` | 16 | [map/operations/account-holders.md](map/operations/account-holders.md) |
| `accounts` | 3 | [map/operations/accounts.md](map/operations/accounts.md) |
| `verification` | 8 | [map/operations/verification.md](map/operations/verification.md) |
| `balancesOverview` | 2 | [map/operations/balances-overview.md](map/operations/balances-overview.md) |
| `balanceTransfers` | 1 | [map/operations/balance-transfers.md](map/operations/balance-transfers.md) |
| `platform` | 3 | [map/operations/platform.md](map/operations/platform.md) |
| `balanceAccounts` | 5 | [map/operations/balance-accounts.md](map/operations/balance-accounts.md) |
| `balances` | 5 | [map/operations/balances.md](map/operations/balances.md) |
| `managedPayoutSchedules` | 8 | [map/operations/managed-payout-schedules.md](map/operations/managed-payout-schedules.md) |
| `customPayoutSchedulesSweeps` | 5 | [map/operations/custom-payout-schedules-sweeps.md](map/operations/custom-payout-schedules-sweeps.md) |
| `authorizedCardUsers` | 4 | [map/operations/authorized-card-users.md](map/operations/authorized-card-users.md) |
| `recurringTopUps` | 4 | [map/operations/recurring-top-ups.md](map/operations/recurring-top-ups.md) |
| `paymentInstruments` | 9 | [map/operations/payment-instruments.md](map/operations/payment-instruments.md) |
| `paymentInstrumentGroups` | 3 | [map/operations/payment-instrument-groups.md](map/operations/payment-instrument-groups.md) |
| `transactionRules` | 4 | [map/operations/transaction-rules.md](map/operations/transaction-rules.md) |
| `bankAccountValidation` | 1 | [map/operations/bank-account-validation.md](map/operations/bank-account-validation.md) |
| `networkTokens` | 2 | [map/operations/network-tokens.md](map/operations/network-tokens.md) |
| `grantAccounts` | 2 | [map/operations/grant-accounts.md](map/operations/grant-accounts.md) |
| `grantOffersApi` | 4 | [map/operations/grant-offers-api.md](map/operations/grant-offers-api.md) |
| `cardOrders` | 2 | [map/operations/card-orders.md](map/operations/card-orders.md) |
| `directDebitMandates` | 4 | [map/operations/direct-debit-mandates.md](map/operations/direct-debit-mandates.md) |
| `manageCardPin` | 3 | [map/operations/manage-card-pin.md](map/operations/manage-card-pin.md) |
| `transferRoutes` | 1 | [map/operations/transfer-routes.md](map/operations/transfer-routes.md) |
| `scaDeviceManagement` | 4 | [map/operations/sca-device-management.md](map/operations/sca-device-management.md) |
| `transferLimitsBalanceAccountLevel` | 6 | [map/operations/transfer-limits-balance-account-level.md](map/operations/transfer-limits-balance-account-level.md) |
| `transferLimitsBalancePlatformLevel` | 4 | [map/operations/transfer-limits-balance-platform-level.md](map/operations/transfer-limits-balance-platform-level.md) |
| `manageScaDevices` | 6 | [map/operations/manage-sca-devices.md](map/operations/manage-sca-devices.md) |
| `scaAssociationManagement` | 3 | [map/operations/sca-association-management.md](map/operations/sca-association-management.md) |
| `transfers` | 6 | [map/operations/transfers.md](map/operations/transfers.md) |
| `transactions` | 2 | [map/operations/transactions.md](map/operations/transactions.md) |
| `capital` | 3 | [map/operations/capital.md](map/operations/capital.md) |
| `cashOutApi` | 1 | [map/operations/cash-out-api.md](map/operations/cash-out-api.md) |
| `dynamicOffers` | 3 | [map/operations/dynamic-offers.md](map/operations/dynamic-offers.md) |
| `grantsApi` | 6 | [map/operations/grants-api.md](map/operations/grants-api.md) |
| `sessionAuthentication` | 2 | [map/operations/session-authentication.md](map/operations/session-authentication.md) |
| `legalEntities` | 7 | [map/operations/legal-entities.md](map/operations/legal-entities.md) |
| `transferInstruments` | 4 | [map/operations/transfer-instruments.md](map/operations/transfer-instruments.md) |
| `businessLinesApi` | 4 | [map/operations/business-lines-api.md](map/operations/business-lines-api.md) |
| `documents` | 4 | [map/operations/documents.md](map/operations/documents.md) |
| `termsOfService` | 5 | [map/operations/terms-of-service.md](map/operations/terms-of-service.md) |
| `pciQuestionnaires` | 5 | [map/operations/pci-questionnaires.md](map/operations/pci-questionnaires.md) |
| `taxEDeliveryConsent` | 2 | [map/operations/tax-edelivery-consent.md](map/operations/tax-edelivery-consent.md) |
| `hostedOnboarding` | 3 | [map/operations/hosted-onboarding.md](map/operations/hosted-onboarding.md) |
| `hostedOnboardingPage` | 1 | [map/operations/hosted-onboarding-page.md](map/operations/hosted-onboarding-page.md) |
| `pciComplianceQuestionnairePage` | 1 | [map/operations/pci-compliance-questionnaire-page.md](map/operations/pci-compliance-questionnaire-page.md) |
| `iDealProfiles` | 3 | [map/operations/ideal-profiles.md](map/operations/ideal-profiles.md) |
| `accountVerification` | 2 | [map/operations/account-verification.md](map/operations/account-verification.md) |
| `disputeAttachments` | 4 | [map/operations/dispute-attachments.md](map/operations/dispute-attachments.md) |
| `raiseDisputes` | 4 | [map/operations/raise-disputes.md](map/operations/raise-disputes.md) |
| `paymentsApp` | 5 | [map/operations/payments-app.md](map/operations/payments-app.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type AchDirectDebit, achDirectDebitSchema } from "adyen";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 2047 | `src/models/` |
| Enums (open; const companion plus schema) | 581 | `src/models/` |
| Discriminated unions | 21 | `src/models/unions/` |
| Unions without a discriminant | 1 | `src/models/unions/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `AccountAgeIndicator` | `NotApplicable` to `"notApplicable"` · `ThisTransaction` to `"thisTransaction"` · `LessThan30Days` to `"lessThan30Days"` · `From30To60Days` to `"from30To60Days"` · `MoreThan60Days` to `"moreThan60Days"` | `accountAgeIndicatorSchema` |
| `AccountChangeIndicator` | `ThisTransaction` to `"thisTransaction"` · `LessThan30Days` to `"lessThan30Days"` · `From30To60Days` to `"from30To60Days"` · `MoreThan60Days` to `"moreThan60Days"` | `accountChangeIndicatorSchema` |
| `AccountHolderType` | `Business` to `"business"` · `Personal` to `"personal"` | `accountHolderTypeSchema` |
| `AccountStateType` | `LimitedPayout` to `"LimitedPayout"` · `LimitedProcessing` to `"LimitedProcessing"` · `LimitlessPayout` to `"LimitlessPayout"` · `LimitlessProcessing` to `"LimitlessProcessing"` · `Payout` to `"Payout"` · `Processing` to `"Processing"` | `accountStateTypeSchema` |
| `AccountType` | `NotApplicable` to `"notApplicable"` · `Credit` to `"credit"` · `Debit` to `"debit"` | `accountTypeSchema` |
| `AccountType1` | `Balance` to `"balance"` · `Checking` to `"checking"` · `Deposit` to `"deposit"` · `General` to `"general"` · `Other` to `"other"` · `Payment` to `"payment"` · `Savings` to `"savings"` | `accountType1Schema` |
| `AccountType11` | `Current` to `"CURRENT"` · `Savings` to `"SAVINGS"` · `Business` to `"BUSINESS"` · `CreditCard` to `"CREDIT_CARD"` · `Loan` to `"LOAN"` · `Unknown` to `"UNKNOWN"` | `accountType11Schema` |
| `AccountType12` | `Default` to `"Default"` · `Savings` to `"Savings"` · `Checking` to `"Checking"` · `CreditCard` to `"CreditCard"` · `Universal` to `"Universal"` · `Investment` to `"Investment"` · `CardTotals` to `"CardTotals"` · `EpurseCard` to `"EpurseCard"` | `accountType12Schema` |
| `AccountType2` | `Checking` to `"checking"` · `Savings` to `"savings"` | `accountType2Schema` |
| `AccountType3` | `Current` to `"CURRENT"` · `Savings` to `"SAVINGS"` · `Business` to `"BUSINESS"` · `CreditCard` to `"CREDIT_CARD"` · `Loan` to `"LOAN"` · `Unknown` to `"UNKNOWN"` | `accountType3Schema` |
| `AccountType4` | `Default` to `"Default"` · `Savings` to `"Savings"` · `Checking` to `"Checking"` · `CreditCard` to `"CreditCard"` · `Universal` to `"Universal"` · `Investment` to `"Investment"` · `CardTotals` to `"CardTotals"` · `EpurseCard` to `"EpurseCard"` | `accountType4Schema` |
| `AccountVerificationCountry` | `Se` to `"SE"` · `Fi` to `"FI"` · `No` to `"NO"` · `Dk` to `"DK"` · `Nl` to `"NL"` · `It` to `"IT"` · `De` to `"DE"` · `At` to `"AT"` · `Es` to `"ES"` · `Pt` to `"PT"` · `Fr` to `"FR"` · `Gb` to `"GB"` · `Be` to `"BE"` · `Lv` to `"LV"` · `Lt` to `"LT"` · `Pl` to `"PL"` · `Ee` to `"EE"` · `Ie` to `"IE"` · `Us` to `"US"` · `Ca` to `"CA"` · `Au` to `"AU"` | `accountVerificationCountrySchema` |
| `AccountVerificationCountry1` | `Se` to `"SE"` · `Fi` to `"FI"` · `No` to `"NO"` · `Dk` to `"DK"` · `Nl` to `"NL"` · `It` to `"IT"` · `De` to `"DE"` · `At` to `"AT"` · `Es` to `"ES"` · `Pt` to `"PT"` · `Fr` to `"FR"` · `Gb` to `"GB"` · `Be` to `"BE"` · `Lv` to `"LV"` · `Lt` to `"LT"` · `Pl` to `"PL"` · `Ee` to `"EE"` · `Ie` to `"IE"` · `Us` to `"US"` · `Ca` to `"CA"` · `Au` to `"AU"` | `accountVerificationCountry1Schema` |
| `AccountVerificationCountry2` | `Se` to `"SE"` · `Fi` to `"FI"` · `No` to `"NO"` · `Dk` to `"DK"` · `Nl` to `"NL"` · `It` to `"IT"` · `De` to `"DE"` · `At` to `"AT"` · `Es` to `"ES"` · `Pt` to `"PT"` · `Fr` to `"FR"` · `Gb` to `"GB"` · `Be` to `"BE"` · `Lv` to `"LV"` · `Lt` to `"LT"` · `Pl` to `"PL"` · `Ee` to `"EE"` · `Ie` to `"IE"` · `Us` to `"US"` · `Ca` to `"CA"` · `Au` to `"AU"` | `accountVerificationCountry2Schema` |
| `AcctType` | `_01` to `"01"` · `_02` to `"02"` · `_03` to `"03"` | `acctTypeSchema` |
| `AcquiringFees` | `DeductFromLiableAccount` to `"deductFromLiableAccount"` · `DeductFromOneBalanceAccount` to `"deductFromOneBalanceAccount"` | `acquiringFeesSchema` |
| `Action` | `Close` to `"CLOSE"` · `Nothing` to `"NOTHING"` · `Update` to `"UPDATE"` | `actionSchema` |
| `AdditionalBankIdentificationType` | `AuBsbCode` to `"auBsbCode"` · `CaRoutingNumber` to `"caRoutingNumber"` · `GbSortCode` to `"gbSortCode"` · `UsRoutingNumber` to `"usRoutingNumber"` | `additionalBankIdentificationTypeSchema` |
| `AdditionalSalesChannel` | `ECommerce` to `"eCommerce"` · `EcomMoto` to `"ecomMoto"` · `Pos` to `"pos"` · `PosMoto` to `"posMoto"` | `additionalSalesChannelSchema` |
| `AddrMatch` | `Y` to `"Y"` · `N` to `"N"` | `addrMatchSchema` |
| `AddrMatch1` | `Y` to `"Y"` · `N` to `"N"` | `addrMatch1Schema` |
| `AdjustAuthType` | `CardholderInitiatedTransaction` to `"cardholderInitiatedTransaction"` · `MerchantInitiatedTransaction` to `"merchantInitiatedTransaction"` | `adjustAuthTypeSchema` |
| `AdyenCommission` | `DeductFromLiableAccount` to `"deductFromLiableAccount"` · `DeductFromOneBalanceAccount` to `"deductFromOneBalanceAccount"` | `adyenCommissionSchema` |
| `AdyenFees` | `DeductFromLiableAccount` to `"deductFromLiableAccount"` · `DeductFromOneBalanceAccount` to `"deductFromOneBalanceAccount"` | `adyenFeesSchema` |
| `AdyenMarkup` | `DeductFromLiableAccount` to `"deductFromLiableAccount"` · `DeductFromOneBalanceAccount` to `"deductFromOneBalanceAccount"` | `adyenMarkupSchema` |
| `Alignment` | `Left` to `"Left"` · `Right` to `"Right"` · `Centred` to `"Centred"` · `Justified` to `"Justified"` | `alignmentSchema` |
| `Alignment1` | `Left` to `"Left"` · `Right` to `"Right"` · `Centred` to `"Centred"` · `Justified` to `"Justified"` | `alignment1Schema` |
| `AllowedLevel` | `High` to `"high"` · `Low` to `"low"` · `Medium` to `"medium"` · `NotApplicable` to `"notApplicable"` | `allowedLevelSchema` |
| `AmountAdjustmentType` | `AtmMarkup` to `"atmMarkup"` · `AuthHoldReserve` to `"authHoldReserve"` · `Exchange` to `"exchange"` · `ForexMarkup` to `"forexMarkup"` | `amountAdjustmentTypeSchema` |
| `AmountRule` | `Max` to `"max"` · `Exact` to `"exact"` | `amountRuleSchema` |
| `AssociationStatus` | `PendingApproval` to `"pendingApproval"` · `Active` to `"active"` | `associationStatusSchema` |
| `AssociationStatus1` | `PendingApproval` to `"pendingApproval"` · `Active` to `"active"` | `associationStatus1Schema` |
| `AttachmentType` | `Receipt` to `"receipt"` · `Correspondence` to `"correspondence"` · `Other` to `"other"` | `attachmentTypeSchema` |
| `AttachmentType1` | `Receipt` to `"receipt"` · `Correspondence` to `"correspondence"` · `Other` to `"other"` | `attachmentType1Schema` |
| `AttemptAuthentication` | `Always` to `"always"` · `Never` to `"never"` | `attemptAuthenticationSchema` |
| `AuthenticationMethod` | `Magswipe` to `"MAGSWIPE"` · `Mke` to `"MKE"` | `authenticationMethodSchema` |
| `AuthenticationMethod1` | `Bypass` to `"Bypass"` · `ManualVerification` to `"ManualVerification"` · `MerchantAuthentication` to `"MerchantAuthentication"` · `OfflinePin` to `"OfflinePIN"` · `OnlinePin` to `"OnlinePIN"` · `PaperSignature` to `"PaperSignature"` · `SecuredChannel` to `"SecuredChannel"` · `SecureCertificate` to `"SecureCertificate"` · `SecureNoCertificate` to `"SecureNoCertificate"` · `SignatureCapture` to `"SignatureCapture"` · `UnknownMethod` to `"UnknownMethod"` | `authenticationMethod1Schema` |
| `AuthenticationResponse` | `Y` to `"Y"` · `N` to `"N"` · `U` to `"U"` · `A` to `"A"` | `authenticationResponseSchema` |
| `BalanceTransferType` | `Tax` to `"tax"` · `Fee` to `"fee"` · `TerminalSale` to `"terminalSale"` · `Credit` to `"credit"` · `Debit` to `"debit"` · `Adjustment` to `"adjustment"` | `balanceTransferTypeSchema` |
| `BalanceTransferType2` | `Tax` to `"tax"` · `Fee` to `"fee"` · `TerminalSale` to `"terminalSale"` · `Credit` to `"credit"` · `Debit` to `"debit"` · `Adjustment` to `"adjustment"` | `balanceTransferType2Schema` |
| `BalanceType` | `Balance` to `"balance"` · `Available` to `"available"` · `Pending` to `"pending"` · `Reserved` to `"reserved"` | `balanceTypeSchema` |
| `BankAccountIdentificationType` | `AuLocal` to `"auLocal"` · `BrLocal` to `"brLocal"` · `CaLocal` to `"caLocal"` · `CzLocal` to `"czLocal"` · `DkLocal` to `"dkLocal"` · `HkLocal` to `"hkLocal"` · `HuLocal` to `"huLocal"` · `Iban` to `"iban"` · `InLocal` to `"inLocal"` · `JpLocal` to `"jpLocal"` · `Legacy` to `"legacy"` · `MxLocal` to `"mxLocal"` · `MyLocal` to `"myLocal"` · `NoLocal` to `"noLocal"` · `NumberAndBic` to `"numberAndBic"` · `NzLocal` to `"nzLocal"` · `PlLocal` to `"plLocal"` · `SeLocal` to `"seLocal"` · `SgLocal` to `"sgLocal"` · `UkLocal` to `"ukLocal"` · `UsLocal` to `"usLocal"` | `bankAccountIdentificationTypeSchema` |
| `BankAccountType` | `Balance` to `"balance"` · `Checking` to `"checking"` · `Deposit` to `"deposit"` · `General` to `"general"` · `Other` to `"other"` · `Payment` to `"payment"` · `Savings` to `"savings"` | `bankAccountTypeSchema` |
| `Behavior` | `DeductFromOneBalanceAccount` to `"deductFromOneBalanceAccount"` · `DeductAccordingToSplitRatio` to `"deductAccordingToSplitRatio"` · `DeductFromLiableAccount` to `"deductFromLiableAccount"` | `behaviorSchema` |
| `BillingAttemptsRule` | `On` to `"on"` · `Before` to `"before"` · `After` to `"after"` | `billingAttemptsRuleSchema` |
| `BusinessType` | `Other` to `"other"` · `ListedPublicCompany` to `"listedPublicCompany"` · `SubsidiaryOfListedPublicCompany` to `"subsidiaryOfListedPublicCompany"` · `GovernmentalOrganization` to `"governmentalOrganization"` · `InternationalOrganization` to `"internationalOrganization"` · `FinancialInstitution` to `"financialInstitution"` | `businessTypeSchema` |
| `CampaignStatusTransition` | `Activate` to `"activate"` · `End` to `"end"` | `campaignStatusTransitionSchema` |
| `CancellingEntity` | `Merchant` to `"merchant"` · `Cardholder` to `"cardholder"` | `cancellingEntitySchema` |
| `CancellingEntity1` | `Merchant` to `"merchant"` · `Cardholder` to `"cardholder"` | `cancellingEntity1Schema` |
| `Capability` | `AcceptExternalFunding` to `"acceptExternalFunding"` · `AcceptPspFunding` to `"acceptPspFunding"` · `AcceptTransactionInRestrictedCountries` to `"acceptTransactionInRestrictedCountries"` · `AcceptTransactionInRestrictedCountriesCommercial` to `"acceptTransactionInRestrictedCountriesCommercial"` · `AcceptTransactionInRestrictedCountriesConsumer` to `"acceptTransactionInRestrictedCountriesConsumer"` · `AcceptTransactionInRestrictedIndustries` to `"acceptTransactionInRestrictedIndustries"` · `AcceptTransactionInRestrictedIndustriesCommercial` to `"acceptTransactionInRestrictedIndustriesCommercial"` · `AcceptTransactionInRestrictedIndustriesConsumer` to `"acceptTransactionInRestrictedIndustriesConsumer"` · `Acquiring` to `"acquiring"` · `AtmWithdrawal` to `"atmWithdrawal"` · `AtmWithdrawalCommercial` to `"atmWithdrawalCommercial"` · `AtmWithdrawalConsumer` to `"atmWithdrawalConsumer"` · `AtmWithdrawalInRestrictedCountries` to `"atmWithdrawalInRestrictedCountries"` · `AtmWithdrawalInRestrictedCountriesCommercial` to `"atmWithdrawalInRestrictedCountriesCommercial"` · `AtmWithdrawalInRestrictedCountriesConsumer` to `"atmWithdrawalInRestrictedCountriesConsumer"` · `AuthorisedPaymentInstrumentUser` to `"authorisedPaymentInstrumentUser"` · `GetGrantOffers` to `"getGrantOffers"` · `IssueBankAccount` to `"issueBankAccount"` · `IssueCard` to `"issueCard"` · `IssueCardCommercial` to `"issueCardCommercial"` · `IssueCardConsumer` to `"issueCardConsumer"` · `IssueChargeCard` to `"issueChargeCard"` · `IssueChargeCardCommercial` to `"issueChargeCardCommercial"` · `IssueCreditLimit` to `"issueCreditLimit"` · `LocalAcceptance` to `"localAcceptance"` · `Payout` to `"payout"` · `PayoutToTransferInstrument` to `"payoutToTransferInstrument"` · `Processing` to `"processing"` · `ReceiveFromBalanceAccount` to `"receiveFromBalanceAccount"` · `ReceiveFromPlatformPayments` to `"receiveFromPlatformPayments"` · `ReceiveFromThirdParty` to `"receiveFromThirdParty"` · `ReceiveFromTransferInstrument` to `"receiveFromTransferInstrument"` · `ReceiveGrants` to `"receiveGrants"` · `ReceivePayments` to `"receivePayments"` · `SendToBalanceAccount` to `"sendToBalanceAccount"` · `SendToThirdParty` to `"sendToThirdParty"` · `SendToTransferInstrument` to `"sendToTransferInstrument"` · `ThirdPartyFunding` to `"thirdPartyFunding"` · `UseCard` to `"useCard"` · `UseCardCommercial` to `"useCardCommercial"` · `UseCardConsumer` to `"useCardConsumer"` · `UseCardInRestrictedCountries` to `"useCardInRestrictedCountries"` · `UseCardInRestrictedCountriesCommercial` to `"useCardInRestrictedCountriesCommercial"` · `UseCardInRestrictedCountriesConsumer` to `"useCardInRestrictedCountriesConsumer"` · `UseCardInRestrictedIndustries` to `"useCardInRestrictedIndustries"` · `UseCardInRestrictedIndustriesCommercial` to `"useCardInRestrictedIndustriesCommercial"` · `UseCardInRestrictedIndustriesConsumer` to `"useCardInRestrictedIndustriesConsumer"` · `UseChargeCard` to `"useChargeCard"` · `UseChargeCardCommercial` to `"useChargeCardCommercial"` · `WithdrawFromAtm` to `"withdrawFromAtm"` · `WithdrawFromAtmCommercial` to `"withdrawFromAtmCommercial"` · `WithdrawFromAtmConsumer` to `"withdrawFromAtmConsumer"` · `WithdrawFromAtmInRestrictedCountries` to `"withdrawFromAtmInRestrictedCountries"` · `WithdrawFromAtmInRestrictedCountriesCommercial` to `"withdrawFromAtmInRestrictedCountriesCommercial"` · `WithdrawFromAtmInRestrictedCountriesConsumer` to `"withdrawFromAtmInRestrictedCountriesConsumer"` | `capabilitySchema` |
| `CardRegion` | `International` to `"international"` · `IntraEea` to `"intraEEA"` · `IntraRegional` to `"intraRegional"` · `InterRegional` to `"interRegional"` · `Domestic` to `"domestic"` · `Any` to `"ANY"` | `cardRegionSchema` |
| `Category` | `SaleWakeUp` to `"SaleWakeUp"` · `KeyPressed` to `"KeyPressed"` | `categorySchema` |
| `Category1` | `Bank` to `"bank"` · `Internal` to `"internal"` · `PlatformPayment` to `"platformPayment"` | `category1Schema` |
| `Category2` | `Bank` to `"bank"` · `Card` to `"card"` · `Grants` to `"grants"` · `Interest` to `"interest"` · `Internal` to `"internal"` · `IssuedCard` to `"issuedCard"` · `Migration` to `"migration"` · `PlatformPayment` to `"platformPayment"` · `TopUp` to `"topUp"` · `Upgrade` to `"upgrade"` | `category2Schema` |
| `Category3` | `Bank` to `"bank"` | `category3Schema` |
| `Category4` | `Bank` to `"bank"` · `Card` to `"card"` · `Internal` to `"internal"` · `IssuedCard` to `"issuedCard"` · `PlatformPayment` to `"platformPayment"` · `TopUp` to `"topUp"` | `category4Schema` |
| `ChAccAgeInd` | `_01` to `"01"` · `_02` to `"02"` · `_03` to `"03"` · `_04` to `"04"` · `_05` to `"05"` | `chAccAgeIndSchema` |
| `ChAccChangeInd` | `_01` to `"01"` · `_02` to `"02"` · `_03` to `"03"` · `_04` to `"04"` | `chAccChangeIndSchema` |
| `ChAccPwChangeInd` | `_01` to `"01"` · `_02` to `"02"` · `_03` to `"03"` · `_04` to `"04"` · `_05` to `"05"` | `chAccPwChangeIndSchema` |
| `ChallengeCancel` | `_01` to `"01"` · `_02` to `"02"` · `_03` to `"03"` · `_04` to `"04"` · `_05` to `"05"` · `_06` to `"06"` · `_07` to `"07"` | `challengeCancelSchema` |
| `ChallengeIndicator` | `NoPreference` to `"noPreference"` · `RequestNoChallenge` to `"requestNoChallenge"` · `RequestChallenge` to `"requestChallenge"` · `RequestChallengeAsMandate` to `"requestChallengeAsMandate"` | `challengeIndicatorSchema` |
| `ChallengeWindowSize` | `_01` to `"01"` · `_02` to `"02"` · `_03` to `"03"` · `_04` to `"04"` · `_05` to `"05"` | `challengeWindowSizeSchema` |
| `Channel` | `IOs` to `"iOS"` · `Android` to `"Android"` · `Web` to `"Web"` | `channelSchema` |
| `Channel2` | `IOs` to `"iOS"` · `Android` to `"Android"` · `Web` to `"Web"` | `channel2Schema` |
| `Channel3` | `IOs` to `"iOS"` · `Android` to `"Android"` · `Web` to `"Web"` | `channel3Schema` |
| `CharacterHeight` | `SingleHeight` to `"SingleHeight"` · `DoubleHeight` to `"DoubleHeight"` · `HalfHeight` to `"HalfHeight"` | `characterHeightSchema` |
| `CharacterHeight1` | `SingleHeight` to `"SingleHeight"` · `DoubleHeight` to `"DoubleHeight"` · `HalfHeight` to `"HalfHeight"` | `characterHeight1Schema` |
| `CharacterStyle` | `Normal` to `"Normal"` · `Bold` to `"Bold"` · `Italic` to `"Italic"` · `Underline` to `"Underline"` | `characterStyleSchema` |
| `CharacterStyle1` | `Normal` to `"Normal"` · `Bold` to `"Bold"` · `Italic` to `"Italic"` · `Underline` to `"Underline"` | `characterStyle1Schema` |
| `CharacterWidth` | `SingleWidth` to `"SingleWidth"` · `DoubleWidth` to `"DoubleWidth"` | `characterWidthSchema` |
| `CharacterWidth1` | `SingleWidth` to `"SingleWidth"` · `DoubleWidth` to `"DoubleWidth"` | `characterWidth1Schema` |
| `ChargebackCostAllocation` | `DeductFromLiableAccount` to `"deductFromLiableAccount"` · `DeductFromOneBalanceAccount` to `"deductFromOneBalanceAccount"` | `chargebackCostAllocationSchema` |
| `Code` | `Pending` to `"Pending"` · `Active` to `"Active"` · `Repaid` to `"Repaid"` · `WrittenOff` to `"WrittenOff"` · `Failed` to `"Failed"` · `Revoked` to `"Revoked"` · `Requested` to `"Requested"` · `Reviewing` to `"Reviewing"` · `Approved` to `"Approved"` · `Rejected` to `"Rejected"` · `Cancelled` to `"Cancelled"` | `codeSchema` |
| `CommunicationFormat` | `Http` to `"http"` · `Json` to `"json"` · `Soap` to `"soap"` | `communicationFormatSchema` |
| `ConditionType` | `GreaterThan` to `"greaterThan"` · `GreaterThanOrEqual` to `"greaterThanOrEqual"` · `LessThan` to `"lessThan"` · `LessThanOrEqual` to `"lessThanOrEqual"` | `conditionTypeSchema` |
| `ContentType` | `ApplicationPdf` to `"application/pdf"` | `contentTypeSchema` |
| `Contract` | `Oneclick` to `"ONECLICK"` · `OneclickRecurring` to `"ONECLICK,RECURRING"` · `Recurring` to `"RECURRING"` · `Payout` to `"PAYOUT"` · `External` to `"EXTERNAL"` | `contractSchema` |
| `ContractType` | `CashAdvance` to `"cashAdvance"` · `Loan` to `"loan"` | `contractTypeSchema` |
| `CreationResultCode` | `AlreadyExists` to `"ALREADY_EXISTS"` · `Created` to `"CREATED"` · `Error` to `"ERROR"` | `creationResultCodeSchema` |
| `CustomerOrderReq` | `Open` to `"Open"` · `Closed` to `"Closed"` · `Both` to `"Both"` | `customerOrderReqSchema` |
| `DataOnly` | `False` to `"false"` · `True` to `"true"` | `dataOnlySchema` |
| `DayOfWeek` | `Friday` to `"friday"` · `Monday` to `"monday"` · `Saturday` to `"saturday"` · `Sunday` to `"sunday"` · `Thursday` to `"thursday"` · `Tuesday` to `"tuesday"` · `Wednesday` to `"wednesday"` | `dayOfWeekSchema` |
| `DeliveryAddressIndicator` | `ShipToBillingAddress` to `"shipToBillingAddress"` · `ShipToVerifiedAddress` to `"shipToVerifiedAddress"` · `ShipToNewAddress` to `"shipToNewAddress"` · `ShipToStore` to `"shipToStore"` · `DigitalGoods` to `"digitalGoods"` · `GoodsNotShipped` to `"goodsNotShipped"` · `Other` to `"other"` | `deliveryAddressIndicatorSchema` |
| `DeliveryAddressUsageIndicator` | `ThisTransaction` to `"thisTransaction"` · `LessThan30Days` to `"lessThan30Days"` · `From30To60Days` to `"from30To60Days"` · `MoreThan60Days` to `"moreThan60Days"` | `deliveryAddressUsageIndicatorSchema` |
| `DeliveryTimeframe` | `ElectronicDelivery` to `"electronicDelivery"` · `SameDayShipping` to `"sameDayShipping"` · `OvernightShipping` to `"overnightShipping"` · `TwoOrMoreDaysShipping` to `"twoOrMoreDaysShipping"` | `deliveryTimeframeSchema` |
| `Device1` | `CashierDisplay` to `"CashierDisplay"` · `CustomerDisplay` to `"CustomerDisplay"` · `CashierInput` to `"CashierInput"` · `CustomerInput` to `"CustomerInput"` | `device1Schema` |
| `Device11` | `CashierDisplay` to `"CashierDisplay"` · `CustomerDisplay` to `"CustomerDisplay"` · `CashierInput` to `"CashierInput"` · `CustomerInput` to `"CustomerInput"` | `device11Schema` |
| `Device2` | `CashierDisplay` to `"CashierDisplay"` · `CustomerDisplay` to `"CustomerDisplay"` · `CashierInput` to `"CashierInput"` · `CustomerInput` to `"CustomerInput"` | `device2Schema` |
| `Device3` | `CashierDisplay` to `"CashierDisplay"` · `CustomerDisplay` to `"CustomerDisplay"` · `CashierInput` to `"CashierInput"` · `CustomerInput` to `"CustomerInput"` | `device3Schema` |
| `Device4` | `CashierDisplay` to `"CashierDisplay"` · `CustomerDisplay` to `"CustomerDisplay"` · `CashierInput` to `"CashierInput"` · `CustomerInput` to `"CustomerInput"` | `device4Schema` |
| `Direction` | `Incoming` to `"incoming"` · `Outgoing` to `"outgoing"` | `directionSchema` |
| `DirectoryResponse` | `A` to `"A"` · `C` to `"C"` · `D` to `"D"` · `I` to `"I"` · `N` to `"N"` · `R` to `"R"` · `U` to `"U"` · `Y` to `"Y"` | `directoryResponseSchema` |
| `DisplayTextField` | `CauseName` to `"causeName"` · `NonprofitName` to `"nonprofitName"` | `displayTextFieldSchema` |
| `DisplayTextField1` | `CauseName` to `"causeName"` · `NonprofitName` to `"nonprofitName"` | `displayTextField1Schema` |
| `DisplayTextField2` | `CauseName` to `"causeName"` · `NonprofitName` to `"nonprofitName"` | `displayTextField2Schema` |
| `DisputeStatus` | `Draft` to `"draft"` · `Submitted` to `"submitted"` · `Chargeback` to `"chargeback"` · `SecondPresentment` to `"secondPresentment"` · `Won` to `"won"` · `Closed` to `"closed"` | `disputeStatusSchema` |
| `DisputeStatus1` | `Draft` to `"draft"` · `Submitted` to `"submitted"` · `Chargeback` to `"chargeback"` · `SecondPresentment` to `"secondPresentment"` · `Won` to `"won"` · `Closed` to `"closed"` | `disputeStatus1Schema` |
| `DocumentQualifier` | `SaleReceipt` to `"SaleReceipt"` · `CashierReceipt` to `"CashierReceipt"` · `CustomerReceipt` to `"CustomerReceipt"` · `Document` to `"Document"` · `Voucher` to `"Voucher"` · `Journal` to `"Journal"` | `documentQualifierSchema` |
| `DocumentQualifier1` | `SaleReceipt` to `"SaleReceipt"` · `CashierReceipt` to `"CashierReceipt"` · `CustomerReceipt` to `"CustomerReceipt"` · `Document` to `"Document"` · `Voucher` to `"Voucher"` · `Journal` to `"Journal"` | `documentQualifier1Schema` |
| `DocumentQualifier2` | `SaleReceipt` to `"SaleReceipt"` · `CashierReceipt` to `"CashierReceipt"` · `CustomerReceipt` to `"CustomerReceipt"` · `Document` to `"Document"` · `Voucher` to `"Voucher"` · `Journal` to `"Journal"` | `documentQualifier2Schema` |
| `DocumentType` | `BankStatement` to `"BANK_STATEMENT"` · `Bsn` to `"BSN"` · `CompanyRegistrationScreening` to `"COMPANY_REGISTRATION_SCREENING"` · `ConstitutionalDocument` to `"CONSTITUTIONAL_DOCUMENT"` · `DrivingLicence` to `"DRIVING_LICENCE"` · `DrivingLicenceBack` to `"DRIVING_LICENCE_BACK"` · `DrivingLicenceFront` to `"DRIVING_LICENCE_FRONT"` · `IdCard` to `"ID_CARD"` · `IdCardBack` to `"ID_CARD_BACK"` · `IdCardFront` to `"ID_CARD_FRONT"` · `Passport` to `"PASSPORT"` · `ProofOfResidency` to `"PROOF_OF_RESIDENCY"` · `Ssn` to `"SSN"` · `SupportingDocuments` to `"SUPPORTING_DOCUMENTS"` | `documentTypeSchema` |
| `DonationCampaignStatus` | `Active` to `"active"` · `Inactive` to `"inactive"` · `Ended` to `"ended"` | `donationCampaignStatusSchema` |
| `DonationCampaignStatus2` | `Active` to `"active"` · `Inactive` to `"inactive"` · `Ended` to `"ended"` | `donationCampaignStatus2Schema` |
| `DonationFlow` | `OneStep` to `"oneStep"` · `TwoStep` to `"twoStep"` | `donationFlowSchema` |
| `DonationFlow1` | `OneStep` to `"oneStep"` · `TwoStep` to `"twoStep"` | `donationFlow1Schema` |
| `DonationFlow4` | `OneStep` to `"oneStep"` · `TwoStep` to `"twoStep"` | `donationFlow4Schema` |
| `DonationType` | `Roundup` to `"roundup"` · `FixedAmounts` to `"fixedAmounts"` · `FixedAmountsRoundup` to `"fixedAmountsRoundup"` | `donationTypeSchema` |
| `DonationType1` | `Roundup` to `"roundup"` · `FixedAmounts` to `"fixedAmounts"` · `FixedAmountsRoundup` to `"fixedAmountsRoundup"` | `donationType1Schema` |
| `EncryptionProtocol` | `Http` to `"HTTP"` · `TlSv12` to `"TLSv1.2"` · `TlSv13` to `"TLSv1.3"` | `encryptionProtocolSchema` |
| `EntityType` | `NaturalPerson` to `"NaturalPerson"` · `CompanyName` to `"CompanyName"` | `entityTypeSchema` |
| `EntityType1` | `NaturalPerson` to `"NaturalPerson"` · `Company` to `"Company"` | `entityType1Schema` |
| `EntityType2` | `NaturalPerson` to `"NaturalPerson"` · `Company` to `"Company"` | `entityType2Schema` |
| `EntryMode` | `Rfid` to `"RFID"` · `Keyed` to `"Keyed"` · `Manual` to `"Manual"` · `File` to `"File"` · `Scanned` to `"Scanned"` · `MagStripe` to `"MagStripe"` · `Icc` to `"ICC"` · `SynchronousIcc` to `"SynchronousICC"` · `Tapped` to `"Tapped"` · `Contactless` to `"Contactless"` · `Mobile` to `"Mobile"` | `entryModeSchema` |
| `ErrorCondition` | `Aborted` to `"Aborted"` · `Busy` to `"Busy"` · `Cancel` to `"Cancel"` · `DeviceOut` to `"DeviceOut"` · `InsertedCard` to `"InsertedCard"` · `InProgress` to `"InProgress"` · `LoggedOut` to `"LoggedOut"` · `MessageFormat` to `"MessageFormat"` · `NotAllowed` to `"NotAllowed"` · `NotFound` to `"NotFound"` · `PaymentRestriction` to `"PaymentRestriction"` · `Refusal` to `"Refusal"` · `UnavailableDevice` to `"UnavailableDevice"` · `UnavailableService` to `"UnavailableService"` · `InvalidCard` to `"InvalidCard"` · `UnreachableHost` to `"UnreachableHost"` · `WrongPin` to `"WrongPIN"` | `errorConditionSchema` |
| `ErrorCondition1` | `Aborted` to `"Aborted"` · `Busy` to `"Busy"` · `Cancel` to `"Cancel"` · `DeviceOut` to `"DeviceOut"` · `InsertedCard` to `"InsertedCard"` · `InProgress` to `"InProgress"` · `LoggedOut` to `"LoggedOut"` · `MessageFormat` to `"MessageFormat"` · `NotAllowed` to `"NotAllowed"` · `NotFound` to `"NotFound"` · `PaymentRestriction` to `"PaymentRestriction"` · `Refusal` to `"Refusal"` · `UnavailableDevice` to `"UnavailableDevice"` · `UnavailableService` to `"UnavailableService"` · `InvalidCard` to `"InvalidCard"` · `UnreachableHost` to `"UnreachableHost"` · `WrongPin` to `"WrongPIN"` | `errorCondition1Schema` |
| `Event` | `InactivateAccount` to `"InactivateAccount"` · `RefundNotPaidOutTransfers` to `"RefundNotPaidOutTransfers"` | `eventSchema` |
| `EventToNotify` | `BeginMaintenance` to `"BeginMaintenance"` · `EndMaintenance` to `"EndMaintenance"` · `Shutdown` to `"Shutdown"` · `Initialised` to `"Initialised"` · `OutOfOrder` to `"OutOfOrder"` · `Completed` to `"Completed"` · `Abort` to `"Abort"` · `SaleWakeUp` to `"SaleWakeUp"` · `SaleAdmin` to `"SaleAdmin"` · `CustomerLanguage` to `"CustomerLanguage"` · `KeyPressed` to `"KeyPressed"` · `SecurityAlarm` to `"SecurityAlarm"` · `StopAssistance` to `"StopAssistance"` · `CardInserted` to `"CardInserted"` · `CardRemoved` to `"CardRemoved"` · `Reject` to `"Reject"` · `UseAnotherCardForPreauth` to `"UseAnotherCardForPreauth"` · `ScanBarcodeResult` to `"ScanBarcodeResult"` | `eventToNotifySchema` |
| `EventToNotify1` | `BeginMaintenance` to `"BeginMaintenance"` · `EndMaintenance` to `"EndMaintenance"` · `Shutdown` to `"Shutdown"` · `Initialised` to `"Initialised"` · `OutOfOrder` to `"OutOfOrder"` · `Completed` to `"Completed"` · `Abort` to `"Abort"` · `SaleWakeUp` to `"SaleWakeUp"` · `SaleAdmin` to `"SaleAdmin"` · `CustomerLanguage` to `"CustomerLanguage"` · `KeyPressed` to `"KeyPressed"` · `SecurityAlarm` to `"SecurityAlarm"` · `StopAssistance` to `"StopAssistance"` · `CardInserted` to `"CardInserted"` · `CardRemoved` to `"CardRemoved"` · `Reject` to `"Reject"` · `UseAnotherCardForPreauth` to `"UseAnotherCardForPreauth"` · `ScanBarcodeResult` to `"ScanBarcodeResult"` | `eventToNotify1Schema` |
| `EventType` | `AccountClosed` to `"ACCOUNT_CLOSED"` · `AccountCreated` to `"ACCOUNT_CREATED"` · `AccountFundsBelowThreshold` to `"ACCOUNT_FUNDS_BELOW_THRESHOLD"` · `AccountHolderCreated` to `"ACCOUNT_HOLDER_CREATED"` · `AccountHolderLimitReached` to `"ACCOUNT_HOLDER_LIMIT_REACHED"` · `AccountHolderMigrated` to `"ACCOUNT_HOLDER_MIGRATED"` · `AccountHolderPayout` to `"ACCOUNT_HOLDER_PAYOUT"` · `AccountHolderStatusChange` to `"ACCOUNT_HOLDER_STATUS_CHANGE"` · `AccountHolderStoreStatusChange` to `"ACCOUNT_HOLDER_STORE_STATUS_CHANGE"` · `AccountHolderUpcomingDeadline` to `"ACCOUNT_HOLDER_UPCOMING_DEADLINE"` · `AccountHolderUpdated` to `"ACCOUNT_HOLDER_UPDATED"` · `AccountHolderVerification` to `"ACCOUNT_HOLDER_VERIFICATION"` · `AccountUpdated` to `"ACCOUNT_UPDATED"` · `BeneficiarySetup` to `"BENEFICIARY_SETUP"` · `CompensateNegativeBalance` to `"COMPENSATE_NEGATIVE_BALANCE"` · `DirectDebitInitiated` to `"DIRECT_DEBIT_INITIATED"` · `FundsMigrated` to `"FUNDS_MIGRATED"` · `PaymentFailure` to `"PAYMENT_FAILURE"` · `PendingCredit` to `"PENDING_CREDIT"` · `RefundFundsTransfer` to `"REFUND_FUNDS_TRANSFER"` · `ReportAvailable` to `"REPORT_AVAILABLE"` · `ScheduledRefunds` to `"SCHEDULED_REFUNDS"` · `ScoreSignalTriggered` to `"SCORE_SIGNAL_TRIGGERED"` · `TransferFunds` to `"TRANSFER_FUNDS"` · `TransferNotPaidoutTransfers` to `"TRANSFER_NOT_PAIDOUT_TRANSFERS"` | `eventTypeSchema` |
| `EventType1` | `AccountClosed` to `"ACCOUNT_CLOSED"` · `AccountCreated` to `"ACCOUNT_CREATED"` · `AccountFundsBelowThreshold` to `"ACCOUNT_FUNDS_BELOW_THRESHOLD"` · `AccountHolderCreated` to `"ACCOUNT_HOLDER_CREATED"` · `AccountHolderLimitReached` to `"ACCOUNT_HOLDER_LIMIT_REACHED"` · `AccountHolderMigrated` to `"ACCOUNT_HOLDER_MIGRATED"` · `AccountHolderPayout` to `"ACCOUNT_HOLDER_PAYOUT"` · `AccountHolderStatusChange` to `"ACCOUNT_HOLDER_STATUS_CHANGE"` · `AccountHolderStoreStatusChange` to `"ACCOUNT_HOLDER_STORE_STATUS_CHANGE"` · `AccountHolderUpcomingDeadline` to `"ACCOUNT_HOLDER_UPCOMING_DEADLINE"` · `AccountHolderUpdated` to `"ACCOUNT_HOLDER_UPDATED"` · `AccountHolderVerification` to `"ACCOUNT_HOLDER_VERIFICATION"` · `AccountUpdated` to `"ACCOUNT_UPDATED"` · `BeneficiarySetup` to `"BENEFICIARY_SETUP"` · `CompensateNegativeBalance` to `"COMPENSATE_NEGATIVE_BALANCE"` · `DirectDebitInitiated` to `"DIRECT_DEBIT_INITIATED"` · `FundsMigrated` to `"FUNDS_MIGRATED"` · `PaymentFailure` to `"PAYMENT_FAILURE"` · `PendingCredit` to `"PENDING_CREDIT"` · `RefundFundsTransfer` to `"REFUND_FUNDS_TRANSFER"` · `ReportAvailable` to `"REPORT_AVAILABLE"` · `ScheduledRefunds` to `"SCHEDULED_REFUNDS"` · `ScoreSignalTriggered` to `"SCORE_SIGNAL_TRIGGERED"` · `TransferFunds` to `"TRANSFER_FUNDS"` · `TransferNotPaidoutTransfers` to `"TRANSFER_NOT_PAIDOUT_TRANSFERS"` | `eventType1Schema` |
| `ExchangeSide` | `Buy` to `"buy"` · `Sell` to `"sell"` | `exchangeSideSchema` |
| `ExchangeSide2` | `Buy` to `"buy"` · `Sell` to `"sell"` | `exchangeSide2Schema` |
| `ExecutionResult` | `Failed` to `"failed"` · `Succeeded` to `"succeeded"` · `Skipped` to `"skipped"` | `executionResultSchema` |
| `ExecutionResult1` | `Failed` to `"failed"` · `Succeeded` to `"succeeded"` · `Skipped` to `"skipped"` | `executionResult1Schema` |
| `ExemptionIndicator` | `LowValue` to `"lowValue"` · `SecureCorporate` to `"secureCorporate"` · `TrustedBeneficiary` to `"trustedBeneficiary"` · `TransactionRiskAnalysis` to `"transactionRiskAnalysis"` | `exemptionIndicatorSchema` |
| `ExpiryMonth` | `April` to `"APRIL"` · `August` to `"AUGUST"` · `December` to `"DECEMBER"` · `February` to `"FEBRUARY"` · `January` to `"JANUARY"` · `July` to `"JULY"` · `June` to `"JUNE"` · `March` to `"MARCH"` · `May` to `"MAY"` · `November` to `"NOVEMBER"` · `October` to `"OCTOBER"` · `September` to `"SEPTEMBER"` | `expiryMonthSchema` |
| `FeeType` | `MerchantPays` to `"merchantPays"` · `ShopperPays` to `"shopperPays"` | `feeTypeSchema` |
| `FieldName` | `AccountCode` to `"accountCode"` · `AccountHolderCode` to `"accountHolderCode"` · `AccountHolderDetails` to `"accountHolderDetails"` · `AccountNumber` to `"accountNumber"` · `AccountStateType` to `"accountStateType"` · `AccountStatus` to `"accountStatus"` · `AccountType` to `"accountType"` · `Address` to `"address"` · `BalanceAccount` to `"balanceAccount"` · `BalanceAccountActive` to `"balanceAccountActive"` · `BalanceAccountCode` to `"balanceAccountCode"` · `BalanceAccountId` to `"balanceAccountId"` · `BankAccount` to `"bankAccount"` · `BankAccountCode` to `"bankAccountCode"` · `BankAccountName` to `"bankAccountName"` · `BankAccountUuid` to `"bankAccountUUID"` · `BankBicSwift` to `"bankBicSwift"` · `BankCity` to `"bankCity"` · `BankCode` to `"bankCode"` · `BankName` to `"bankName"` · `BankStatement` to `"bankStatement"` · `BranchCode` to `"branchCode"` · `BusinessContact` to `"businessContact"` · `CardToken` to `"cardToken"` · `CheckCode` to `"checkCode"` · `City` to `"city"` · `CompanyRegistration` to `"companyRegistration"` · `ConstitutionalDocument` to `"constitutionalDocument"` · `Controller` to `"controller"` · `Country` to `"country"` · `CountryCode` to `"countryCode"` · `Currency` to `"currency"` · `CurrencyCode` to `"currencyCode"` · `DateOfBirth` to `"dateOfBirth"` · `Description` to `"description"` · `DestinationAccountCode` to `"destinationAccountCode"` · `Document` to `"document"` · `DocumentContent` to `"documentContent"` · `DocumentExpirationDate` to `"documentExpirationDate"` · `DocumentIssuerCountry` to `"documentIssuerCountry"` · `DocumentIssuerState` to `"documentIssuerState"` · `DocumentName` to `"documentName"` · `DocumentNumber` to `"documentNumber"` · `DocumentType` to `"documentType"` · `DoingBusinessAs` to `"doingBusinessAs"` · `DrivingLicence` to `"drivingLicence"` · `DrivingLicenceBack` to `"drivingLicenceBack"` · `DrivingLicenceFront` to `"drivingLicenceFront"` · `DrivingLicense` to `"drivingLicense"` · `Email` to `"email"` · `FirstName` to `"firstName"` · `FormType` to `"formType"` · `FullPhoneNumber` to `"fullPhoneNumber"` · `Gender` to `"gender"` · `HopWebserviceUser` to `"hopWebserviceUser"` · `HouseNumberOrName` to `"houseNumberOrName"` · `Iban` to `"iban"` · `IdCard` to `"idCard"` · `IdCardBack` to `"idCardBack"` · `IdCardFront` to `"idCardFront"` · `IdNumber` to `"idNumber"` · `IdentityDocument` to `"identityDocument"` · `IndividualDetails` to `"individualDetails"` · `Infix` to `"infix"` · `JobTitle` to `"jobTitle"` · `LastName` to `"lastName"` · `LastReviewDate` to `"lastReviewDate"` · `LegalArrangement` to `"legalArrangement"` · `LegalArrangementCode` to `"legalArrangementCode"` · `LegalArrangementEntity` to `"legalArrangementEntity"` · `LegalArrangementEntityCode` to `"legalArrangementEntityCode"` · `LegalArrangementLegalForm` to `"legalArrangementLegalForm"` · `LegalArrangementMember` to `"legalArrangementMember"` · `LegalArrangementMembers` to `"legalArrangementMembers"` · `LegalArrangementName` to `"legalArrangementName"` · `LegalArrangementReference` to `"legalArrangementReference"` · `LegalArrangementRegistrationNumber` to `"legalArrangementRegistrationNumber"` · `LegalArrangementTaxNumber` to `"legalArrangementTaxNumber"` · `LegalArrangementType` to `"legalArrangementType"` · `LegalBusinessName` to `"legalBusinessName"` · `LegalEntity` to `"legalEntity"` · `LegalEntityType` to `"legalEntityType"` · `LinkedViasVirtualAccount` to `"linkedViasVirtualAccount"` · `Logo` to `"logo"` · `MerchantAccount` to `"merchantAccount"` · `MerchantCategoryCode` to `"merchantCategoryCode"` · `MerchantHouseNumber` to `"merchantHouseNumber"` · `MerchantReference` to `"merchantReference"` · `MicroDeposit` to `"microDeposit"` · `Name` to `"name"` · `Nationality` to `"nationality"` · `OriginalReference` to `"originalReference"` · `OwnerCity` to `"ownerCity"` · `OwnerCountryCode` to `"ownerCountryCode"` · `OwnerDateOfBirth` to `"ownerDateOfBirth"` · `OwnerHouseNumberOrName` to `"ownerHouseNumberOrName"` · `OwnerName` to `"ownerName"` · `OwnerPostalCode` to `"ownerPostalCode"` · `OwnerState` to `"ownerState"` · `OwnerStreet` to `"ownerStreet"` · `Passport` to `"passport"` · `PassportNumber` to `"passportNumber"` · `PayoutMethod` to `"payoutMethod"` · `PayoutMethodCode` to `"payoutMethodCode"` · `PayoutSchedule` to `"payoutSchedule"` · `PciSelfAssessment` to `"pciSelfAssessment"` · `PersonalData` to `"personalData"` · `PhoneCountryCode` to `"phoneCountryCode"` · `PhoneNumber` to `"phoneNumber"` · `PostalCode` to `"postalCode"` · `PrimaryCurrency` to `"primaryCurrency"` · `Reason` to `"reason"` · `RegistrationNumber` to `"registrationNumber"` · `ReturnUrl` to `"returnUrl"` · `Schedule` to `"schedule"` · `Shareholder` to `"shareholder"` · `ShareholderCode` to `"shareholderCode"` · `ShareholderCodeAndSignatoryCode` to `"shareholderCodeAndSignatoryCode"` · `ShareholderCodeOrSignatoryCode` to `"shareholderCodeOrSignatoryCode"` · `ShareholderType` to `"shareholderType"` · `ShareholderTypes` to `"shareholderTypes"` · `ShopperInteraction` to `"shopperInteraction"` · `Signatory` to `"signatory"` · `SignatoryCode` to `"signatoryCode"` · `SocialSecurityNumber` to `"socialSecurityNumber"` · `SourceAccountCode` to `"sourceAccountCode"` · `SplitAccount` to `"splitAccount"` · `SplitConfigurationUuid` to `"splitConfigurationUUID"` · `SplitCurrency` to `"splitCurrency"` · `SplitValue` to `"splitValue"` · `Splits` to `"splits"` · `StateOrProvince` to `"stateOrProvince"` · `Status` to `"status"` · `StockExchange` to `"stockExchange"` · `StockNumber` to `"stockNumber"` · `StockTicker` to `"stockTicker"` · `Store` to `"store"` · `StoreDetail` to `"storeDetail"` · `StoreName` to `"storeName"` · `StoreReference` to `"storeReference"` · `Street` to `"street"` · `TaxId` to `"taxId"` · `Tier` to `"tier"` · `TierNumber` to `"tierNumber"` · `TransferCode` to `"transferCode"` · `UltimateParentCompany` to `"ultimateParentCompany"` · `UltimateParentCompanyAddressDetails` to `"ultimateParentCompanyAddressDetails"` · `UltimateParentCompanyAddressDetailsCountry` to `"ultimateParentCompanyAddressDetailsCountry"` · `UltimateParentCompanyBusinessDetails` to `"ultimateParentCompanyBusinessDetails"` · `UltimateParentCompanyBusinessDetailsLegalBusinessName` to `"ultimateParentCompanyBusinessDetailsLegalBusinessName"` · `UltimateParentCompanyBusinessDetailsRegistrationNumber` to `"ultimateParentCompanyBusinessDetailsRegistrationNumber"` · `UltimateParentCompanyCode` to `"ultimateParentCompanyCode"` · `UltimateParentCompanyStockExchange` to `"ultimateParentCompanyStockExchange"` · `UltimateParentCompanyStockNumber` to `"ultimateParentCompanyStockNumber"` · `UltimateParentCompanyStockNumberOrStockTicker` to `"ultimateParentCompanyStockNumberOrStockTicker"` · `UltimateParentCompanyStockTicker` to `"ultimateParentCompanyStockTicker"` · `Unknown` to `"unknown"` · `Value` to `"value"` · `VerificationType` to `"verificationType"` · `VirtualAccount` to `"virtualAccount"` · `VisaNumber` to `"visaNumber"` · `WebAddress` to `"webAddress"` · `Year` to `"year"` | `fieldNameSchema` |
| `FilterMerchantAccountType` | `AllAccounts` to `"allAccounts"` · `ExcludeAccounts` to `"excludeAccounts"` · `IncludeAccounts` to `"includeAccounts"` | `filterMerchantAccountTypeSchema` |
| `FilterMerchantAccountType1` | `AllAccounts` to `"allAccounts"` · `ExcludeAccounts` to `"excludeAccounts"` · `IncludeAccounts` to `"includeAccounts"` | `filterMerchantAccountType1Schema` |
| `FilterMerchantAccountType2` | `AllAccounts` to `"allAccounts"` · `ExcludeAccounts` to `"excludeAccounts"` · `IncludeAccounts` to `"includeAccounts"` | `filterMerchantAccountType2Schema` |
| `FinancingType` | `HardwareFinancing` to `"hardwareFinancing"` · `BusinessFinancing` to `"businessFinancing"` | `financingTypeSchema` |
| `FinancingType2` | `HardwareFinancing` to `"hardwareFinancing"` · `BusinessFinancing` to `"businessFinancing"` | `financingType2Schema` |
| `ForceEntryMode` | `Rfid` to `"RFID"` · `Keyed` to `"Keyed"` · `Manual` to `"Manual"` · `File` to `"File"` · `Scanned` to `"Scanned"` · `MagStripe` to `"MagStripe"` · `Icc` to `"ICC"` · `SynchronousIcc` to `"SynchronousICC"` · `Tapped` to `"Tapped"` · `Contactless` to `"Contactless"` · `CheckReader` to `"CheckReader"` | `forceEntryModeSchema` |
| `FormFactor` | `Physical` to `"physical"` · `Unknown` to `"unknown"` · `Virtual` to `"virtual"` | `formFactorSchema` |
| `FormFactor1` | `Physical` to `"physical"` · `Unknown` to `"unknown"` · `Virtual` to `"virtual"` | `formFactor1Schema` |
| `FraudResultType` | `Amber` to `"AMBER"` · `Green` to `"GREEN"` · `Red` to `"RED"` | `fraudResultTypeSchema` |
| `FraudRiskLevel` | `VeryLow` to `"veryLow"` · `Low` to `"low"` · `Medium` to `"medium"` · `High` to `"high"` · `VeryHigh` to `"veryHigh"` | `fraudRiskLevelSchema` |
| `Frequency` | `Adhoc` to `"adhoc"` · `Daily` to `"daily"` · `Weekly` to `"weekly"` · `BiWeekly` to `"biWeekly"` · `Monthly` to `"monthly"` · `Quarterly` to `"quarterly"` · `HalfYearly` to `"halfYearly"` · `Yearly` to `"yearly"` | `frequencySchema` |
| `Frequency1` | `Daily` to `"daily"` · `Weekly` to `"weekly"` · `Weekdays` to `"weekdays"` · `Monthly` to `"monthly"` | `frequency1Schema` |
| `Frequency2` | `Weekly` to `"weekly"` · `Monthly` to `"monthly"` · `Quarterly` to `"quarterly"` · `HalfYearly` to `"half-yearly"` · `Yearly` to `"yearly"` | `frequency2Schema` |
| `FundingSource` | `Credit` to `"credit"` · `Debit` to `"debit"` · `Prepaid` to `"prepaid"` | `fundingSourceSchema` |
| `FundingSource1` | `Charged` to `"charged"` · `Credit` to `"credit"` · `Debit` to `"debit"` · `DeferredDebit` to `"deferred_debit"` · `Prepaid` to `"prepaid"` · `Any` to `"ANY"` | `fundingSource1Schema` |
| `FundingSource9` | `Credit` to `"credit"` · `Debit` to `"debit"` · `Prepaid` to `"prepaid"` | `fundingSource9Schema` |
| `FundsCollectionType` | `UnscheduledRepayment` to `"UnscheduledRepayment"` · `Revocation` to `"Revocation"` | `fundsCollectionTypeSchema` |
| `FundsCollectionType2` | `UnscheduledRepayment` to `"UnscheduledRepayment"` · `Revocation` to `"Revocation"` | `fundsCollectionType2Schema` |
| `Gender` | `Male` to `"MALE"` · `Female` to `"FEMALE"` · `Unknown` to `"UNKNOWN"` | `genderSchema` |
| `GlobalStatus` | `Ok` to `"OK"` · `Busy` to `"Busy"` · `Maintenance` to `"Maintenance"` · `Unreachable` to `"Unreachable"` | `globalStatusSchema` |
| `GlobalStatus1` | `Ok` to `"OK"` · `Busy` to `"Busy"` · `Maintenance` to `"Maintenance"` · `Unreachable` to `"Unreachable"` | `globalStatus1Schema` |
| `HttpMethod` | `Post` to `"post"` · `Put` to `"put"` · `Patch` to `"patch"` | `httpMethodSchema` |
| `IdentificationSupport` | `NoCard` to `"NoCard"` · `LoyaltyCard` to `"LoyaltyCard"` · `HybridCard` to `"HybridCard"` · `LinkedCard` to `"LinkedCard"` | `identificationSupportSchema` |
| `IdentificationSupport1` | `NoCard` to `"NoCard"` · `LoyaltyCard` to `"LoyaltyCard"` · `HybridCard` to `"HybridCard"` · `LinkedCard` to `"LinkedCard"` | `identificationSupport1Schema` |
| `IdentificationType` | `Bic` to `"bic"` · `Iban` to `"iban"` · `RoutingNumber` to `"routingNumber"` · `SortCode` to `"sortCode"` | `identificationTypeSchema` |
| `IdentificationType1` | `Pan` to `"PAN"` · `IsoTrack2` to `"ISOTrack2"` · `BarCode` to `"BarCode"` · `AccountNumber` to `"AccountNumber"` · `PhoneNumber` to `"PhoneNumber"` | `identificationType1Schema` |
| `IdentificationType11` | `Pan` to `"PAN"` · `IsoTrack2` to `"ISOTrack2"` · `BarCode` to `"BarCode"` · `AccountNumber` to `"AccountNumber"` · `PhoneNumber` to `"PhoneNumber"` | `identificationType11Schema` |
| `IncludeMode` | `Exclude` to `"EXCLUDE"` · `Include` to `"INCLUDE"` | `includeModeSchema` |
| `IndustryUsage` | `NoShow` to `"NoShow"` · `DelayedCharge` to `"DelayedCharge"` | `industryUsageSchema` |
| `IndustryUsage1` | `DelayedCharge` to `"delayedCharge"` · `Installment` to `"installment"` · `NoShow` to `"noShow"` | `industryUsage1Schema` |
| `InfoQualify` | `Status` to `"Status"` · `Error` to `"Error"` · `Display` to `"Display"` · `Sound` to `"Sound"` · `Input` to `"Input"` · `PoiReplication` to `"POIReplication"` · `CustomerAssistance` to `"CustomerAssistance"` · `Receipt` to `"Receipt"` · `Document` to `"Document"` · `Voucher` to `"Voucher"` | `infoQualifySchema` |
| `InfoQualify1` | `Status` to `"Status"` · `Error` to `"Error"` · `Display` to `"Display"` · `Sound` to `"Sound"` · `Input` to `"Input"` · `PoiReplication` to `"POIReplication"` · `CustomerAssistance` to `"CustomerAssistance"` · `Receipt` to `"Receipt"` · `Document` to `"Document"` · `Voucher` to `"Voucher"` | `infoQualify1Schema` |
| `InfoQualify2` | `Status` to `"Status"` · `Error` to `"Error"` · `Display` to `"Display"` · `Sound` to `"Sound"` · `Input` to `"Input"` · `PoiReplication` to `"POIReplication"` · `CustomerAssistance` to `"CustomerAssistance"` · `Receipt` to `"Receipt"` · `Document` to `"Document"` · `Voucher` to `"Voucher"` | `infoQualify2Schema` |
| `InfoQualify3` | `Status` to `"Status"` · `Error` to `"Error"` · `Display` to `"Display"` · `Sound` to `"Sound"` · `Input` to `"Input"` · `PoiReplication` to `"POIReplication"` · `CustomerAssistance` to `"CustomerAssistance"` · `Receipt` to `"Receipt"` · `Document` to `"Document"` · `Voucher` to `"Voucher"` | `infoQualify3Schema` |
| `InputCommand` | `GetAnyKey` to `"GetAnyKey"` · `GetConfirmation` to `"GetConfirmation"` · `SiteManager` to `"SiteManager"` · `TextString` to `"TextString"` · `DigitString` to `"DigitString"` · `DecimalString` to `"DecimalString"` · `GetFunctionKey` to `"GetFunctionKey"` · `GetMenuEntry` to `"GetMenuEntry"` · `Password` to `"Password"` | `inputCommandSchema` |
| `InputCommand1` | `GetAnyKey` to `"GetAnyKey"` · `GetConfirmation` to `"GetConfirmation"` · `SiteManager` to `"SiteManager"` · `TextString` to `"TextString"` · `DigitString` to `"DigitString"` · `DecimalString` to `"DecimalString"` · `GetFunctionKey` to `"GetFunctionKey"` · `GetMenuEntry` to `"GetMenuEntry"` · `Password` to `"Password"` | `inputCommand1Schema` |
| `InstalmentType` | `DeferredInstalments` to `"DeferredInstalments"` · `EqualInstalments` to `"EqualInstalments"` · `InequalInstalments` to `"InequalInstalments"` | `instalmentTypeSchema` |
| `InstitutionalSector` | `NonFinancialCorporation` to `"nonFinancialCorporation"` · `CentralBank` to `"centralBank"` · `CreditInstitutions` to `"creditInstitutions"` · `DepositTakingCorporations` to `"depositTakingCorporations"` · `MoneyMarketFunds` to `"moneyMarketFunds"` · `NonMmfInvestmentFunds` to `"nonMMFInvestmentFunds"` · `FinancialVehicleCorporation` to `"financialVehicleCorporation"` · `OtherFinancialIntermediaries` to `"otherFinancialIntermediaries"` · `FinancialAuxiliaries` to `"financialAuxiliaries"` · `CaptiveFinancialInstitutionsAndMoneyLenders` to `"captiveFinancialInstitutionsAndMoneyLenders"` · `InsuranceCorporations` to `"insuranceCorporations"` · `PensionFunds` to `"pensionFunds"` · `CentralGovernment` to `"centralGovernment"` · `StateGovernment` to `"stateGovernment"` · `LocalGovernment` to `"localGovernment"` · `SocialSecurityFunds` to `"socialSecurityFunds"` · `NonProfitInstitutionsServingHouseholds` to `"nonProfitInstitutionsServingHouseholds"` | `institutionalSectorSchema` |
| `Interchange` | `DeductFromLiableAccount` to `"deductFromLiableAccount"` · `DeductFromOneBalanceAccount` to `"deductFromOneBalanceAccount"` | `interchangeSchema` |
| `Interval` | `Daily` to `"daily"` · `Monthly` to `"monthly"` · `Weekly` to `"weekly"` | `intervalSchema` |
| `LegalArrangementMember` | `Beneficiary` to `"Beneficiary"` · `ControllingPerson` to `"ControllingPerson"` · `Partner` to `"Partner"` · `Protector` to `"Protector"` · `Settlor` to `"Settlor"` · `Shareholder` to `"Shareholder"` · `Trustee` to `"Trustee"` | `legalArrangementMemberSchema` |
| `LegalEntity` | `Business` to `"Business"` · `Individual` to `"Individual"` · `NonProfit` to `"NonProfit"` · `Partnership` to `"Partnership"` · `PublicCompany` to `"PublicCompany"` | `legalEntitySchema` |
| `LegalEntity1` | `Business` to `"Business"` · `Individual` to `"Individual"` · `NonProfit` to `"NonProfit"` · `Partnership` to `"Partnership"` · `PublicCompany` to `"PublicCompany"` | `legalEntity1Schema` |
| `LegalEntity2` | `Business` to `"Business"` · `Individual` to `"Individual"` · `NonProfit` to `"NonProfit"` · `Partnership` to `"Partnership"` · `PublicCompany` to `"PublicCompany"` | `legalEntity2Schema` |
| `LegalEntityType` | `Business` to `"Business"` · `Individual` to `"Individual"` · `NonProfit` to `"NonProfit"` · `Partnership` to `"Partnership"` · `PublicCompany` to `"PublicCompany"` | `legalEntityTypeSchema` |
| `LegalForm` | `CashManagementTrust` to `"CashManagementTrust"` · `CorporateUnitTrust` to `"CorporateUnitTrust"` · `DeceasedEstate` to `"DeceasedEstate"` · `DiscretionaryInvestmentTrust` to `"DiscretionaryInvestmentTrust"` · `DiscretionaryServicesManagementTrust` to `"DiscretionaryServicesManagementTrust"` · `DiscretionaryTradingTrust` to `"DiscretionaryTradingTrust"` · `FirstHomeSaverAccountsTrust` to `"FirstHomeSaverAccountsTrust"` · `FixedTrust` to `"FixedTrust"` · `FixedUnitTrust` to `"FixedUnitTrust"` · `HybridTrust` to `"HybridTrust"` · `ListedPublicUnitTrust` to `"ListedPublicUnitTrust"` · `OtherTrust` to `"OtherTrust"` · `PooledSuperannuationTrust` to `"PooledSuperannuationTrust"` · `PublicTradingTrust` to `"PublicTradingTrust"` · `UnlistedPublicUnitTrust` to `"UnlistedPublicUnitTrust"` · `LimitedPartnership` to `"LimitedPartnership"` · `FamilyPartnership` to `"FamilyPartnership"` · `OtherPartnership` to `"OtherPartnership"` | `legalFormSchema` |
| `LimitStatus` | `Active` to `"active"` · `Inactive` to `"inactive"` · `PendingSca` to `"pendingSCA"` · `Scheduled` to `"scheduled"` | `limitStatusSchema` |
| `LoadType` | `MerchandiseReturn` to `"merchandiseReturn"` · `Load` to `"load"` | `loadTypeSchema` |
| `LodgingChargeType` | `AdvanceDeposit` to `"advanceDeposit"` · `NoShow` to `"noShow"` · `Stay` to `"stay"` | `lodgingChargeTypeSchema` |
| `LoyaltyHandling` | `Forbidden` to `"Forbidden"` · `Processed` to `"Processed"` · `Allowed` to `"Allowed"` · `Proposed` to `"Proposed"` · `Required` to `"Required"` | `loyaltyHandlingSchema` |
| `LoyaltyHandling1` | `Forbidden` to `"Forbidden"` · `Processed` to `"Processed"` · `Allowed` to `"Allowed"` · `Proposed` to `"Proposed"` · `Required` to `"Required"` | `loyaltyHandling1Schema` |
| `LoyaltyHandling2` | `Forbidden` to `"Forbidden"` · `Processed` to `"Processed"` · `Allowed` to `"Allowed"` · `Proposed` to `"Proposed"` · `Required` to `"Required"` | `loyaltyHandling2Schema` |
| `MainSourceOfIncome` | `BusinessOperation` to `"businessOperation"` · `RealEstateSales` to `"realEstateSales"` · `InvestmentInterestOrRoyalty` to `"investmentInterestOrRoyalty"` · `PropertyRental` to `"propertyRental"` · `Other` to `"other"` | `mainSourceOfIncomeSchema` |
| `MandateStatus` | `Pending` to `"pending"` · `Approved` to `"approved"` · `Cancelled` to `"cancelled"` | `mandateStatusSchema` |
| `MandateStatus2` | `Pending` to `"pending"` · `Approved` to `"approved"` · `Cancelled` to `"cancelled"` | `mandateStatus2Schema` |
| `MandateType` | `Bacs` to `"bacs"` | `mandateTypeSchema` |
| `MandateType2` | `Bacs` to `"bacs"` | `mandateType2Schema` |
| `MenuEntryTag` | `Selectable` to `"Selectable"` · `NonSelectable` to `"NonSelectable"` · `SubMenu` to `"SubMenu"` · `NonSelectableSubMenu` to `"NonSelectableSubMenu"` | `menuEntryTagSchema` |
| `MenuEntryTag1` | `Selectable` to `"Selectable"` · `NonSelectable` to `"NonSelectable"` · `SubMenu` to `"SubMenu"` · `NonSelectableSubMenu` to `"NonSelectableSubMenu"` | `menuEntryTag1Schema` |
| `MerchantRefundReason` | `Fraud` to `"FRAUD"` · `CustomerRequest` to `"CUSTOMER REQUEST"` · `Return` to `"RETURN"` · `Duplicate` to `"DUPLICATE"` · `Other` to `"OTHER"` | `merchantRefundReasonSchema` |
| `MerchantRefundReason1` | `Fraud` to `"FRAUD"` · `CustomerRequest` to `"CUSTOMER REQUEST"` · `Return` to `"RETURN"` · `Duplicate` to `"DUPLICATE"` · `Other` to `"OTHER"` | `merchantRefundReason1Schema` |
| `MessageCategory` | `Abort` to `"Abort"` · `Admin` to `"Admin"` · `BalanceInquiry` to `"BalanceInquiry"` · `CardAcquisition` to `"CardAcquisition"` · `Diagnosis` to `"Diagnosis"` · `Display` to `"Display"` · `EnableService` to `"EnableService"` · `Event` to `"Event"` · `GetTotals` to `"GetTotals"` · `Input` to `"Input"` · `InputUpdate` to `"InputUpdate"` · `Login` to `"Login"` · `Logout` to `"Logout"` · `Loyalty` to `"Loyalty"` · `Payment` to `"Payment"` · `Print` to `"Print"` · `Reconciliation` to `"Reconciliation"` · `Reversal` to `"Reversal"` · `StoredValue` to `"StoredValue"` · `TransactionStatus` to `"TransactionStatus"` · `None` to `"None"` | `messageCategorySchema` |
| `MessageCategory1` | `Abort` to `"Abort"` · `Admin` to `"Admin"` · `BalanceInquiry` to `"BalanceInquiry"` · `CardAcquisition` to `"CardAcquisition"` · `Diagnosis` to `"Diagnosis"` · `Display` to `"Display"` · `EnableService` to `"EnableService"` · `Event` to `"Event"` · `GetTotals` to `"GetTotals"` · `Input` to `"Input"` · `InputUpdate` to `"InputUpdate"` · `Login` to `"Login"` · `Logout` to `"Logout"` · `Loyalty` to `"Loyalty"` · `Payment` to `"Payment"` · `Print` to `"Print"` · `Reconciliation` to `"Reconciliation"` · `Reversal` to `"Reversal"` · `StoredValue` to `"StoredValue"` · `TransactionStatus` to `"TransactionStatus"` · `None` to `"None"` | `messageCategory1Schema` |
| `MessageCategory2` | `Abort` to `"Abort"` · `Admin` to `"Admin"` · `BalanceInquiry` to `"BalanceInquiry"` · `CardAcquisition` to `"CardAcquisition"` · `Diagnosis` to `"Diagnosis"` · `Display` to `"Display"` · `EnableService` to `"EnableService"` · `Event` to `"Event"` · `GetTotals` to `"GetTotals"` · `Input` to `"Input"` · `InputUpdate` to `"InputUpdate"` · `Login` to `"Login"` · `Logout` to `"Logout"` · `Loyalty` to `"Loyalty"` · `Payment` to `"Payment"` · `Print` to `"Print"` · `Reconciliation` to `"Reconciliation"` · `Reversal` to `"Reversal"` · `StoredValue` to `"StoredValue"` · `TransactionStatus` to `"TransactionStatus"` · `None` to `"None"` | `messageCategory2Schema` |
| `MessageClass` | `Service` to `"Service"` · `Device` to `"Device"` · `Event` to `"Event"` | `messageClassSchema` |
| `MessageClass1` | `Service` to `"Service"` · `Device` to `"Device"` · `Event` to `"Event"` | `messageClass1Schema` |
| `MessageType` | `Request` to `"Request"` · `Response` to `"Response"` · `Notification` to `"Notification"` | `messageTypeSchema` |
| `MessageType1` | `Request` to `"Request"` · `Response` to `"Response"` · `Notification` to `"Notification"` | `messageType1Schema` |
| `Mode` | `Embedded` to `"embedded"` · `Hosted` to `"hosted"` | `modeSchema` |
| `Namespace` | `Iso8583ResponseCode` to `"iso8583ResponseCode"` · `UkFpsRejectionCode` to `"ukFpsRejectionCode"` · `UkFpsReturnReasonCode` to `"ukFpsReturnReasonCode"` · `UsAchReturnReasonCode` to `"usAchReturnReasonCode"` | `namespaceSchema` |
| `NativeThreeDs` | `Preferred` to `"preferred"` · `Disabled` to `"disabled"` | `nativeThreeDsSchema` |
| `NetworkType` | `Local` to `"local"` · `Public` to `"public"` | `networkTypeSchema` |
| `NetworkType2` | `Local` to `"local"` · `Public` to `"public"` | `networkType2Schema` |
| `Operation` | `Contains` to `"contains"` · `EndsWith` to `"endsWith"` · `IsEqualTo` to `"isEqualTo"` · `StartsWith` to `"startsWith"` | `operationSchema` |
| `OutcomeType` | `EnforceSca` to `"enforceSCA"` · `HardBlock` to `"hardBlock"` · `ScoreBased` to `"scoreBased"` · `TimedBlock` to `"timedBlock"` | `outcomeTypeSchema` |
| `OutputFormat` | `MessageRef` to `"MessageRef"` · `Text` to `"Text"` · `Xhtml` to `"XHTML"` · `BarCode` to `"BarCode"` | `outputFormatSchema` |
| `OutputFormat1` | `MessageRef` to `"MessageRef"` · `Text` to `"Text"` · `Xhtml` to `"XHTML"` · `BarCode` to `"BarCode"` | `outputFormat1Schema` |
| `OutputFormat2` | `MessageRef` to `"MessageRef"` · `Text` to `"Text"` · `Xhtml` to `"XHTML"` · `BarCode` to `"BarCode"` | `outputFormat2Schema` |
| `PinFormat` | `Iso0` to `"ISO0"` · `Iso1` to `"ISO1"` · `Iso2` to `"ISO2"` · `Iso3` to `"ISO3"` | `pinFormatSchema` |
| `PinFormat1` | `Iso0` to `"ISO0"` · `Iso1` to `"ISO1"` · `Iso2` to `"ISO2"` · `Iso3` to `"ISO3"` | `pinFormat1Schema` |
| `PinRequestType` | `PinVerify` to `"PINVerify"` · `PinVerifyOnly` to `"PINVerifyOnly"` · `PinEnter` to `"PINEnter"` | `pinRequestTypeSchema` |
| `PanEntryMode` | `Chip` to `"chip"` · `Cof` to `"cof"` · `Contactless` to `"contactless"` · `Ecommerce` to `"ecommerce"` · `Magstripe` to `"magstripe"` · `Manual` to `"manual"` · `Token` to `"token"` | `panEntryModeSchema` |
| `PartyRole` | `Holder` to `"HOLDER"` · `AuthorizedUser` to `"AUTHORIZED_USER"` · `Other` to `"OTHER"` · `Unknown` to `"UNKNOWN"` | `partyRoleSchema` |
| `PartyRole2` | `Holder` to `"HOLDER"` · `AuthorizedUser` to `"AUTHORIZED_USER"` · `Other` to `"OTHER"` · `Unknown` to `"UNKNOWN"` | `partyRole2Schema` |
| `PasswordChangeIndicator` | `NotApplicable` to `"notApplicable"` · `ThisTransaction` to `"thisTransaction"` · `LessThan30Days` to `"lessThan30Days"` · `From30To60Days` to `"from30To60Days"` · `MoreThan60Days` to `"moreThan60Days"` | `passwordChangeIndicatorSchema` |
| `PaymentAccInd` | `_01` to `"01"` · `_02` to `"02"` · `_03` to `"03"` · `_04` to `"04"` · `_05` to `"05"` | `paymentAccIndSchema` |
| `PaymentAccountIndicator` | `NotApplicable` to `"notApplicable"` · `ThisTransaction` to `"thisTransaction"` · `LessThan30Days` to `"lessThan30Days"` · `From30To60Days` to `"from30To60Days"` · `MoreThan60Days` to `"moreThan60Days"` | `paymentAccountIndicatorSchema` |
| `PaymentFee` | `DeductFromLiableAccount` to `"deductFromLiableAccount"` · `DeductFromOneBalanceAccount` to `"deductFromOneBalanceAccount"` | `paymentFeeSchema` |
| `PaymentFlow` | `Ecommerce` to `"Ecommerce"` · `Pos` to `"POS"` | `paymentFlowSchema` |
| `PaymentInstrument` | `Cash` to `"Cash"` · `Card` to `"Card"` | `paymentInstrumentSchema` |
| `PaymentInstrumentType` | `BankAccount` to `"BankAccount"` · `Card` to `"Card"` | `paymentInstrumentTypeSchema` |
| `PaymentInstrumentType1` | `Card` to `"Card"` · `Check` to `"Check"` · `Mobile` to `"Mobile"` · `StoredValue` to `"StoredValue"` · `Cash` to `"Cash"` | `paymentInstrumentType1Schema` |
| `PaymentInstrumentType11` | `Card` to `"Card"` · `Check` to `"Check"` · `Mobile` to `"Mobile"` · `StoredValue` to `"StoredValue"` · `Cash` to `"Cash"` | `paymentInstrumentType11Schema` |
| `PaymentSource` | `Redirect` to `"redirect"` · `Qr` to `"qr"` · `PushNotification` to `"pushNotification"` | `paymentSourceSchema` |
| `PaymentSource2` | `Redirect` to `"redirect"` · `Qr` to `"qr"` · `PushNotification` to `"pushNotification"` | `paymentSource2Schema` |
| `PaymentType` | `Normal` to `"Normal"` · `Refund` to `"Refund"` · `OneTimeReservation` to `"OneTimeReservation"` · `FirstReservation` to `"FirstReservation"` · `UpdateReservation` to `"UpdateReservation"` · `Completion` to `"Completion"` · `CashAdvance` to `"CashAdvance"` · `CashDeposit` to `"CashDeposit"` · `Recurring` to `"Recurring"` · `Instalment` to `"Instalment"` · `IssuerInstalment` to `"IssuerInstalment"` · `PaidOut` to `"PaidOut"` | `paymentTypeSchema` |
| `PaymentType1` | `Normal` to `"Normal"` · `Refund` to `"Refund"` · `OneTimeReservation` to `"OneTimeReservation"` · `FirstReservation` to `"FirstReservation"` · `UpdateReservation` to `"UpdateReservation"` · `Completion` to `"Completion"` · `CashAdvance` to `"CashAdvance"` · `CashDeposit` to `"CashDeposit"` · `Recurring` to `"Recurring"` · `Instalment` to `"Instalment"` · `IssuerInstalment` to `"IssuerInstalment"` · `PaidOut` to `"PaidOut"` | `paymentType1Schema` |
| `PayoutSchedule` | `BiweeklyOn1StAnd15ThAtMidnight` to `"BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"` · `Daily` to `"DAILY"` · `DailyAu` to `"DAILY_AU"` · `DailyEu` to `"DAILY_EU"` · `DailySg` to `"DAILY_SG"` · `DailyUs` to `"DAILY_US"` · `Hold` to `"HOLD"` · `Monthly` to `"MONTHLY"` · `Weekly` to `"WEEKLY"` · `WeeklyMonToFriAu` to `"WEEKLY_MON_TO_FRI_AU"` · `WeeklyMonToFriEu` to `"WEEKLY_MON_TO_FRI_EU"` · `WeeklyMonToFriUs` to `"WEEKLY_MON_TO_FRI_US"` · `WeeklyOnTueFriMidnight` to `"WEEKLY_ON_TUE_FRI_MIDNIGHT"` · `WeeklySunToThuAu` to `"WEEKLY_SUN_TO_THU_AU"` · `WeeklySunToThuUs` to `"WEEKLY_SUN_TO_THU_US"` | `payoutScheduleSchema` |
| `PayoutSpeed` | `Instant` to `"INSTANT"` · `SameDay` to `"SAME_DAY"` · `Standard` to `"STANDARD"` | `payoutSpeedSchema` |
| `PayoutSpeed1` | `Instant` to `"INSTANT"` · `SameDay` to `"SAME_DAY"` · `Standard` to `"STANDARD"` | `payoutSpeed1Schema` |
| `PayoutSpeed4` | `Instant` to `"INSTANT"` · `SameDay` to `"SAME_DAY"` · `Standard` to `"STANDARD"` | `payoutSpeed4Schema` |
| `PeriodUnit` | `Daily` to `"Daily"` · `Weekly` to `"Weekly"` · `Monthly` to `"Monthly"` · `Annual` to `"Annual"` | `periodUnitSchema` |
| `PeriodUnit1` | `Daily` to `"Daily"` · `Weekly` to `"Weekly"` · `Monthly` to `"Monthly"` · `Annual` to `"Annual"` | `periodUnit1Schema` |
| `PhoneType` | `Fax` to `"Fax"` · `Landline` to `"Landline"` · `Mobile` to `"Mobile"` · `Sip` to `"SIP"` | `phoneTypeSchema` |
| `PinSupport` | `Pin` to `"PIN"` · `NoPin` to `"NO PIN"` | `pinSupportSchema` |
| `Plan` | `Bonus` to `"bonus"` · `BuynowPaylater` to `"buynow_paylater"` · `InteresRefundPrctg` to `"interes_refund_prctg"` · `InterestBonus` to `"interest_bonus"` · `NointeresRefundPrctg` to `"nointeres_refund_prctg"` · `NointerestBonus` to `"nointerest_bonus"` · `RefundPrctg` to `"refund_prctg"` · `Regular` to `"regular"` · `Revolving` to `"revolving"` · `WithInterest` to `"with_interest"` | `planSchema` |
| `Plan1` | `Bonus` to `"bonus"` · `BuynowPaylater` to `"buynow_paylater"` · `InteresRefundPrctg` to `"interes_refund_prctg"` · `InterestBonus` to `"interest_bonus"` · `NointeresRefundPrctg` to `"nointeres_refund_prctg"` · `NointerestBonus` to `"nointerest_bonus"` · `RefundPrctg` to `"refund_prctg"` · `Regular` to `"regular"` · `Revolving` to `"revolving"` · `WithInterest` to `"with_interest"` | `plan1Schema` |
| `PlatformPaymentType` | `AcquiringFees` to `"AcquiringFees"` · `AdyenCommission` to `"AdyenCommission"` · `AdyenFees` to `"AdyenFees"` · `AdyenMarkup` to `"AdyenMarkup"` · `BalanceAccount` to `"BalanceAccount"` · `ChargebackRemainder` to `"ChargebackRemainder"` · `Commission` to `"Commission"` · `DccMarkup` to `"DCCMarkup"` · `DccPlatformCommission` to `"DCCPlatformCommission"` · `Default` to `"Default"` · `Interchange` to `"Interchange"` · `PaymentFee` to `"PaymentFee"` · `Remainder` to `"Remainder"` · `SchemeFee` to `"SchemeFee"` · `Surcharge` to `"Surcharge"` · `Tip` to `"Tip"` · `TopUp` to `"TopUp"` · `Vat` to `"VAT"` | `platformPaymentTypeSchema` |
| `PrinterStatus` | `Ok` to `"OK"` · `PaperLow` to `"PaperLow"` · `NoPaper` to `"NoPaper"` · `PaperJam` to `"PaperJam"` · `OutOfOrder` to `"OutOfOrder"` | `printerStatusSchema` |
| `PrinterStatus1` | `Ok` to `"OK"` · `PaperLow` to `"PaperLow"` · `NoPaper` to `"NoPaper"` · `PaperJam` to `"PaperJam"` · `OutOfOrder` to `"OutOfOrder"` | `printerStatus1Schema` |
| `Priority` | `First` to `"first"` · `Normal` to `"normal"` · `Urgent` to `"urgent"` | `prioritySchema` |
| `Priority1` | `CrossBorder` to `"crossBorder"` · `Fast` to `"fast"` · `Instant` to `"instant"` · `Internal` to `"internal"` · `Regular` to `"regular"` · `Wire` to `"wire"` | `priority1Schema` |
| `Priority2` | `CrossBorder` to `"crossBorder"` · `Fast` to `"fast"` · `Instant` to `"instant"` · `Internal` to `"internal"` · `Regular` to `"regular"` · `Wire` to `"wire"` | `priority2Schema` |
| `ProcessingType` | `Billpay` to `"billpay"` · `Ecom` to `"ecom"` · `Pos` to `"pos"` | `processingTypeSchema` |
| `ProcessingType1` | `AtmWithdraw` to `"atmWithdraw"` · `BalanceInquiry` to `"balanceInquiry"` · `Ecommerce` to `"ecommerce"` · `Moto` to `"moto"` · `Pos` to `"pos"` · `PurchaseWithCashback` to `"purchaseWithCashback"` · `Recurring` to `"recurring"` · `Token` to `"token"` | `processingType1Schema` |
| `ProductType` | `Onboarding` to `"onboarding"` · `Platform` to `"platform"` · `Bank` to `"bank"` | `productTypeSchema` |
| `ProductType1` | `Goods` to `"goods"` · `Services` to `"services"` | `productType1Schema` |
| `ProductType11` | `Goods` to `"goods"` · `Services` to `"services"` | `productType11Schema` |
| `ProductType2` | `Onboarding` to `"onboarding"` · `Platform` to `"platform"` · `Bank` to `"bank"` | `productType2Schema` |
| `ProductType21` | `Goods` to `"goods"` · `Services` to `"services"` | `productType21Schema` |
| `Purpose` | `Compliance` to `"compliance"` · `Fraud` to `"fraud"` · `InternalPolicy` to `"internalPolicy"` · `Policy` to `"policy"` · `System` to `"system"` | `purposeSchema` |
| `RateType` | `Daily` to `"daily"` · `Weekly` to `"weekly"` | `rateTypeSchema` |
| `RateType1` | `SplitPayment` to `"splitPayment"` · `BalanceConversion` to `"balanceConversion"` · `Transfer` to `"transfer"` · `SplitRefund` to `"splitRefund"` | `rateType1Schema` |
| `RateType2` | `SplitPayment` to `"splitPayment"` · `BalanceConversion` to `"balanceConversion"` · `Transfer` to `"transfer"` · `SplitRefund` to `"splitRefund"` | `rateType2Schema` |
| `Reason` | `AccountHierarchyNotActive` to `"accountHierarchyNotActive"` · `AmountLimitExceeded` to `"amountLimitExceeded"` · `Approved` to `"approved"` · `CounterpartyAccountBlocked` to `"counterpartyAccountBlocked"` · `CounterpartyAccountClosed` to `"counterpartyAccountClosed"` · `CounterpartyAccountNotFound` to `"counterpartyAccountNotFound"` · `CounterpartyAddressRequired` to `"counterpartyAddressRequired"` · `CounterpartyBankTimedOut` to `"counterpartyBankTimedOut"` · `CounterpartyBankUnavailable` to `"counterpartyBankUnavailable"` · `DirectDebitNotSupported` to `"directDebitNotSupported"` · `Error` to `"error"` · `NotEnoughBalance` to `"notEnoughBalance"` · `RefusedByCounterpartyBank` to `"refusedByCounterpartyBank"` · `RouteNotFound` to `"routeNotFound"` · `TransferInstrumentDoesNotExist` to `"transferInstrumentDoesNotExist"` · `Unknown` to `"unknown"` | `reasonSchema` |
| `Reason1` | `AccountHierarchyNotActive` to `"accountHierarchyNotActive"` · `AmountLimitExceeded` to `"amountLimitExceeded"` · `ApprovalExpired` to `"approvalExpired"` · `Approved` to `"approved"` · `AvsDeclined` to `"avsDeclined"` · `BalanceAccountTemporarilyBlockedByTransactionRule` to `"balanceAccountTemporarilyBlockedByTransactionRule"` · `BlockCard` to `"blockCard"` · `CallReferral` to `"callReferral"` · `Cancelled` to `"cancelled"` · `CaptureCard` to `"captureCard"` · `CardExpired` to `"cardExpired"` · `CardholderAuthenticationRequired` to `"cardholderAuthenticationRequired"` · `CashbackAmountExceedsLimit` to `"cashbackAmountExceedsLimit"` · `CavvDeclined` to `"cavvDeclined"` · `ContactlessFallback` to `"contactlessFallback"` · `ContactlessLimitReached` to `"contactlessLimitReached"` · `CounterpartyAccountBlocked` to `"counterpartyAccountBlocked"` · `CounterpartyAccountClosed` to `"counterpartyAccountClosed"` · `CounterpartyAccountNotFound` to `"counterpartyAccountNotFound"` · `CounterpartyAddressRequired` to `"counterpartyAddressRequired"` · `CounterpartyBankTimedOut` to `"counterpartyBankTimedOut"` · `CounterpartyBankUnavailable` to `"counterpartyBankUnavailable"` · `CryptographicFailure` to `"cryptographicFailure"` · `CvcDeclined` to `"cvcDeclined"` · `Declined` to `"declined"` · `DeclinedByBapValidation` to `"declinedByBapValidation"` · `DeclinedByTransactionRule` to `"declinedByTransactionRule"` · `DeclinedNonGeneric` to `"declinedNonGeneric"` · `DirectDebitNotSupported` to `"directDebitNotSupported"` · `DoNotHonor` to `"doNotHonor"` · `DomesticDebitTransactionNotAllowed` to `"domesticDebitTransactionNotAllowed"` · `DuplicateTransmissionDetected` to `"duplicateTransmissionDetected"` · `Error` to `"error"` · `FormatError` to `"formatError"` · `Fraud` to `"fraud"` · `FraudCancelled` to `"fraudCancelled"` · `HonorWithId` to `"honorWithId"` · `InternalTimeout` to `"internalTimeout"` · `InvalidAccount` to `"invalidAccount"` · `InvalidAmount` to `"invalidAmount"` · `InvalidAuthorizationLifeCycle` to `"invalidAuthorizationLifeCycle"` · `InvalidCard` to `"invalidCard"` · `InvalidExpiryDate` to `"invalidExpiryDate"` · `InvalidFromAccount` to `"invalidFromAccount"` · `InvalidIssuer` to `"invalidIssuer"` · `InvalidMerchant` to `"invalidMerchant"` · `InvalidPin` to `"invalidPin"` · `InvalidToAccount` to `"invalidToAccount"` · `InvalidTransaction` to `"invalidTransaction"` · `IssuerSuspectedFraud` to `"issuerSuspectedFraud"` · `LostCard` to `"lostCard"` · `MobilePinRequired` to `"mobilePinRequired"` · `NoCheckingAccount` to `"noCheckingAccount"` · `NoSavingsAccount` to `"noSavingsAccount"` · `Not3DAuthenticated` to `"not3dAuthenticated"` · `NotEnoughBalance` to `"notEnoughBalance"` · `NotSubmitted` to `"notSubmitted"` · `NotSupported` to `"notSupported"` · `PartiallyApproved` to `"partiallyApproved"` · `Pending` to `"pending"` · `PendingApproval` to `"pendingApproval"` · `PendingExecution` to `"pendingExecution"` · `PinNotChanged` to `"pinNotChanged"` · `PinRequired` to `"pinRequired"` · `PinTriesExceeded` to `"pinTriesExceeded"` · `PinValidationNotPossible` to `"pinValidationNotPossible"` · `PurchaseAmountOnlyNoCashBack` to `"purchaseAmountOnlyNoCashBack"` · `RefusedByCounterpartyBank` to `"refusedByCounterpartyBank"` · `RefusedByCustomer` to `"refusedByCustomer"` · `RestrictedCard` to `"restrictedCard"` · `RevocationOfAuth` to `"revocationOfAuth"` · `RouteNotFound` to `"routeNotFound"` · `ScaAuthenticationRequired` to `"scaAuthenticationRequired"` · `ScaFailed` to `"scaFailed"` · `SchemeAdvice` to `"schemeAdvice"` · `SecurityViolation` to `"securityViolation"` · `ShopperCancelled` to `"shopperCancelled"` · `StolenCard` to `"stolenCard"` · `ThreedsDynamicLinkingMismatch` to `"threedsDynamicLinkingMismatch"` · `TransactionNotPermitted` to `"transactionNotPermitted"` · `TransferInstrumentDoesNotExist` to `"transferInstrumentDoesNotExist"` · `UnableToRouteTransaction` to `"unableToRouteTransaction"` · `Unknown` to `"unknown"` · `WithdrawalAmountExceeded` to `"withdrawalAmountExceeded"` · `WithdrawalCountExceeded` to `"withdrawalCountExceeded"` | `reason1Schema` |
| `Reason11` | `RefusedForRegulatoryReasons` to `"refusedForRegulatoryReasons"` | `reason11Schema` |
| `Reason2` | `AccountHierarchyNotActive` to `"accountHierarchyNotActive"` · `AmountLimitExceeded` to `"amountLimitExceeded"` · `ApprovalExpired` to `"approvalExpired"` · `Approved` to `"approved"` · `AvsDeclined` to `"avsDeclined"` · `BalanceAccountTemporarilyBlockedByTransactionRule` to `"balanceAccountTemporarilyBlockedByTransactionRule"` · `BlockCard` to `"blockCard"` · `CallReferral` to `"callReferral"` · `Cancelled` to `"cancelled"` · `CaptureCard` to `"captureCard"` · `CardExpired` to `"cardExpired"` · `CardholderAuthenticationRequired` to `"cardholderAuthenticationRequired"` · `CashbackAmountExceedsLimit` to `"cashbackAmountExceedsLimit"` · `CavvDeclined` to `"cavvDeclined"` · `ContactlessFallback` to `"contactlessFallback"` · `ContactlessLimitReached` to `"contactlessLimitReached"` · `CounterpartyAccountBlocked` to `"counterpartyAccountBlocked"` · `CounterpartyAccountClosed` to `"counterpartyAccountClosed"` · `CounterpartyAccountNotFound` to `"counterpartyAccountNotFound"` · `CounterpartyAddressRequired` to `"counterpartyAddressRequired"` · `CounterpartyBankTimedOut` to `"counterpartyBankTimedOut"` · `CounterpartyBankUnavailable` to `"counterpartyBankUnavailable"` · `CryptographicFailure` to `"cryptographicFailure"` · `CvcDeclined` to `"cvcDeclined"` · `Declined` to `"declined"` · `DeclinedByBapValidation` to `"declinedByBapValidation"` · `DeclinedByTransactionRule` to `"declinedByTransactionRule"` · `DeclinedNonGeneric` to `"declinedNonGeneric"` · `DirectDebitNotSupported` to `"directDebitNotSupported"` · `DoNotHonor` to `"doNotHonor"` · `DomesticDebitTransactionNotAllowed` to `"domesticDebitTransactionNotAllowed"` · `DuplicateTransmissionDetected` to `"duplicateTransmissionDetected"` · `Error` to `"error"` · `FormatError` to `"formatError"` · `Fraud` to `"fraud"` · `FraudCancelled` to `"fraudCancelled"` · `HonorWithId` to `"honorWithId"` · `InternalTimeout` to `"internalTimeout"` · `InvalidAccount` to `"invalidAccount"` · `InvalidAmount` to `"invalidAmount"` · `InvalidAuthorizationLifeCycle` to `"invalidAuthorizationLifeCycle"` · `InvalidCard` to `"invalidCard"` · `InvalidExpiryDate` to `"invalidExpiryDate"` · `InvalidFromAccount` to `"invalidFromAccount"` · `InvalidIssuer` to `"invalidIssuer"` · `InvalidMerchant` to `"invalidMerchant"` · `InvalidPin` to `"invalidPin"` · `InvalidToAccount` to `"invalidToAccount"` · `InvalidTransaction` to `"invalidTransaction"` · `IssuerSuspectedFraud` to `"issuerSuspectedFraud"` · `LostCard` to `"lostCard"` · `MobilePinRequired` to `"mobilePinRequired"` · `NoCheckingAccount` to `"noCheckingAccount"` · `NoSavingsAccount` to `"noSavingsAccount"` · `Not3DAuthenticated` to `"not3dAuthenticated"` · `NotEnoughBalance` to `"notEnoughBalance"` · `NotSubmitted` to `"notSubmitted"` · `NotSupported` to `"notSupported"` · `PartiallyApproved` to `"partiallyApproved"` · `Pending` to `"pending"` · `PendingApproval` to `"pendingApproval"` · `PendingExecution` to `"pendingExecution"` · `PinNotChanged` to `"pinNotChanged"` · `PinRequired` to `"pinRequired"` · `PinTriesExceeded` to `"pinTriesExceeded"` · `PinValidationNotPossible` to `"pinValidationNotPossible"` · `PurchaseAmountOnlyNoCashBack` to `"purchaseAmountOnlyNoCashBack"` · `RefusedByCounterpartyBank` to `"refusedByCounterpartyBank"` · `RefusedByCustomer` to `"refusedByCustomer"` · `RestrictedCard` to `"restrictedCard"` · `RevocationOfAuth` to `"revocationOfAuth"` · `RouteNotFound` to `"routeNotFound"` · `ScaAuthenticationRequired` to `"scaAuthenticationRequired"` · `ScaFailed` to `"scaFailed"` · `SchemeAdvice` to `"schemeAdvice"` · `SecurityViolation` to `"securityViolation"` · `ShopperCancelled` to `"shopperCancelled"` · `StolenCard` to `"stolenCard"` · `ThreedsDynamicLinkingMismatch` to `"threedsDynamicLinkingMismatch"` · `TransactionNotPermitted` to `"transactionNotPermitted"` · `TransferInstrumentDoesNotExist` to `"transferInstrumentDoesNotExist"` · `UnableToRouteTransaction` to `"unableToRouteTransaction"` · `Unknown` to `"unknown"` · `WithdrawalAmountExceeded` to `"withdrawalAmountExceeded"` · `WithdrawalCountExceeded` to `"withdrawalCountExceeded"` | `reason2Schema` |
| `Reason3` | `NoOnlinePresence` to `"noOnlinePresence"` · `NotCollectedDuringOnboarding` to `"notCollectedDuringOnboarding"` | `reason3Schema` |
| `ReconciliationType` | `SaleReconciliation` to `"SaleReconciliation"` · `AcquirerSynchronisation` to `"AcquirerSynchronisation"` · `AcquirerReconciliation` to `"AcquirerReconciliation"` · `PreviousReconciliation` to `"PreviousReconciliation"` | `reconciliationTypeSchema` |
| `ReconciliationType1` | `SaleReconciliation` to `"SaleReconciliation"` · `AcquirerSynchronisation` to `"AcquirerSynchronisation"` · `AcquirerReconciliation` to `"AcquirerReconciliation"` · `PreviousReconciliation` to `"PreviousReconciliation"` | `reconciliationType1Schema` |
| `RecurringProcessingModel` | `CardOnFile` to `"CardOnFile"` · `Subscription` to `"Subscription"` · `UnscheduledCardOnFile` to `"UnscheduledCardOnFile"` | `recurringProcessingModelSchema` |
| `RecurringProcessingModel1` | `CardOnFile` to `"CardOnFile"` · `Subscription` to `"Subscription"` · `UnscheduledCardOnFile` to `"UnscheduledCardOnFile"` | `recurringProcessingModel1Schema` |
| `RecurringProcessingModel4` | `CardOnFile` to `"CardOnFile"` · `Subscription` to `"Subscription"` · `UnscheduledCardOnFile` to `"UnscheduledCardOnFile"` | `recurringProcessingModel4Schema` |
| `RecurringProcessingModel7` | `CardOnFile` to `"CardOnFile"` · `Subscription` to `"Subscription"` · `UnscheduledCardOnFile` to `"UnscheduledCardOnFile"` | `recurringProcessingModel7Schema` |
| `RefundCostAllocation` | `DeductFromLiableAccount` to `"deductFromLiableAccount"` · `DeductFromOneBalanceAccount` to `"deductFromOneBalanceAccount"` | `refundCostAllocationSchema` |
| `Region` | `Na` to `"NA"` · `Eu` to `"EU"` · `Ch` to `"CH"` · `Au` to `"AU"` | `regionSchema` |
| `Region1` | `Au` to `"AU"` · `Ch` to `"CH"` · `Eu` to `"EU"` · `Na` to `"NA"` | `region1Schema` |
| `Remainder` | `AddToLiableAccount` to `"addToLiableAccount"` · `AddToOneBalanceAccount` to `"addToOneBalanceAccount"` | `remainderSchema` |
| `RequestType` | `Authentication` to `"authentication"` · `Authorization` to `"authorization"` · `BankTransfer` to `"bankTransfer"` · `Tokenization` to `"tokenization"` | `requestTypeSchema` |
| `RequestedLevel` | `High` to `"high"` · `Low` to `"low"` · `Medium` to `"medium"` · `NotApplicable` to `"notApplicable"` | `requestedLevelSchema` |
| `RequiredAddressField` | `City` to `"city"` · `Country` to `"country"` · `Line1` to `"line1"` · `PostalCode` to `"postalCode"` · `StateOrProvince` to `"stateOrProvince"` | `requiredAddressFieldSchema` |
| `RequiredShopperField` | `BillingAddress` to `"billingAddress"` · `DeliveryAddress` to `"deliveryAddress"` · `ShopperEmail` to `"shopperEmail"` · `ShopperName` to `"shopperName"` · `TelephoneNumber` to `"telephoneNumber"` | `requiredShopperFieldSchema` |
| `Response` | `CaptureReceived` to `"[capture-received]"` · `CancelReceived` to `"[cancel-received]"` · `RefundReceived` to `"[refund-received]"` · `CancelOrRefundReceived` to `"[cancelOrRefund-received]"` · `AdjustAuthorisationReceived` to `"[adjustAuthorisation-received]"` · `DonationReceived` to `"[donation-received]"` · `TechnicalCancelReceived` to `"[technical-cancel-received]"` · `VoidPendingRefundReceived` to `"[voidPendingRefund-received]"` · `Authorised` to `"Authorised"` · `Refused` to `"Refused"` · `Error` to `"Error"` | `responseSchema` |
| `ResponseMode` | `NotRequired` to `"NotRequired"` · `Immediate` to `"Immediate"` · `PrintEnd` to `"PrintEnd"` · `SoundEnd` to `"SoundEnd"` | `responseModeSchema` |
| `ResponseMode1` | `NotRequired` to `"NotRequired"` · `Immediate` to `"Immediate"` · `PrintEnd` to `"PrintEnd"` · `SoundEnd` to `"SoundEnd"` | `responseMode1Schema` |
| `Result` | `Valid` to `"VALID"` · `Invalid` to `"INVALID"` · `Unknown` to `"UNKNOWN"` · `NotRequired` to `"NOT_REQUIRED"` | `resultSchema` |
| `Result1` | `Valid` to `"VALID"` · `Invalid` to `"INVALID"` · `Unknown` to `"UNKNOWN"` · `NotRequired` to `"NOT_REQUIRED"` | `result1Schema` |
| `Result11` | `Success` to `"Success"` · `Failure` to `"Failure"` · `Partial` to `"Partial"` | `result11Schema` |
| `Result2` | `ActiveRecurringTokenExists` to `"ACTIVE_RECURRING_TOKEN_EXISTS"` · `AlreadyProcessed` to `"ALREADY_PROCESSED"` · `PaymentNotFound` to `"PAYMENT_NOT_FOUND"` · `Success` to `"SUCCESS"` | `result2Schema` |
| `Result3` | `Success` to `"Success"` · `Failure` to `"Failure"` · `Partial` to `"Partial"` | `result3Schema` |
| `ResultCode` | `Success` to `"Success"` · `NotEnoughBalance` to `"NotEnoughBalance"` · `Failed` to `"Failed"` | `resultCodeSchema` |
| `ResultCode1` | `Received` to `"Received"` | `resultCode1Schema` |
| `ResultCode2` | `Success` to `"Success"` | `resultCode2Schema` |
| `ResultCode3` | `AuthenticationFinished` to `"AuthenticationFinished"` · `AuthenticationNotRequired` to `"AuthenticationNotRequired"` · `Authorised` to `"Authorised"` · `Cancelled` to `"Cancelled"` · `ChallengeShopper` to `"ChallengeShopper"` · `Error` to `"Error"` · `IdentifyShopper` to `"IdentifyShopper"` · `PartiallyAuthorised` to `"PartiallyAuthorised"` · `Pending` to `"Pending"` · `PresentToShopper` to `"PresentToShopper"` · `Received` to `"Received"` · `RedirectShopper` to `"RedirectShopper"` · `Refused` to `"Refused"` · `Success` to `"Success"` | `resultCode3Schema` |
| `ResultCode4` | `Authorised` to `"Authorised"` · `Received` to `"Received"` · `Pending` to `"Pending"` | `resultCode4Schema` |
| `ResultCode5` | `Success` to `"Success"` · `Refused` to `"Refused"` · `Error` to `"Error"` · `NotEnoughBalance` to `"NotEnoughBalance"` | `resultCode5Schema` |
| `RetryPolicy` | `True` to `"true"` · `False` to `"false"` | `retryPolicySchema` |
| `ReversalReason` | `CustCancel` to `"CustCancel"` · `MerchantCancel` to `"MerchantCancel"` · `Malfunction` to `"Malfunction"` · `Unable2Compl` to `"Unable2Compl"` | `reversalReasonSchema` |
| `ReversalReason1` | `CustCancel` to `"CustCancel"` · `MerchantCancel` to `"MerchantCancel"` · `Malfunction` to `"Malfunction"` · `Unable2Compl` to `"Unable2Compl"` | `reversalReason1Schema` |
| `SaleCapability` | `CashierStatus` to `"CashierStatus"` · `CashierError` to `"CashierError"` · `CashierDisplay` to `"CashierDisplay"` · `PoiReplication` to `"POIReplication"` · `CashierInput` to `"CashierInput"` · `CustomerAssistance` to `"CustomerAssistance"` · `CustomerDisplay` to `"CustomerDisplay"` · `CustomerError` to `"CustomerError"` · `CustomerInput` to `"CustomerInput"` · `PrinterReceipt` to `"PrinterReceipt"` · `PrinterDocument` to `"PrinterDocument"` · `PrinterVoucher` to `"PrinterVoucher"` · `MagStripe` to `"MagStripe"` · `Icc` to `"ICC"` · `EmvContactless` to `"EMVContactless"` | `saleCapabilitySchema` |
| `ScaDeviceType` | `Browser` to `"browser"` · `Ios` to `"ios"` · `Android` to `"android"` | `scaDeviceTypeSchema` |
| `ScaDeviceType1` | `Browser` to `"browser"` · `Ios` to `"ios"` · `Android` to `"android"` | `scaDeviceType1Schema` |
| `ScaDeviceType3` | `Browser` to `"browser"` · `Ios` to `"ios"` · `Android` to `"android"` | `scaDeviceType3Schema` |
| `ScaEntityType` | `AccountHolder` to `"accountHolder"` · `LegalEntity` to `"legalEntity"` · `PaymentInstrument` to `"paymentInstrument"` | `scaEntityTypeSchema` |
| `ScaEntityType1` | `AccountHolder` to `"accountHolder"` · `LegalEntity` to `"legalEntity"` · `PaymentInstrument` to `"paymentInstrument"` | `scaEntityType1Schema` |
| `ScaEntityType2` | `AccountHolder` to `"accountHolder"` · `LegalEntity` to `"legalEntity"` · `PaymentInstrument` to `"paymentInstrument"` | `scaEntityType2Schema` |
| `ScaEntityType3` | `AccountHolder` to `"accountHolder"` · `LegalEntity` to `"legalEntity"` · `PaymentInstrument` to `"paymentInstrument"` | `scaEntityType3Schema` |
| `ScaEntityType4` | `AccountHolder` to `"accountHolder"` · `LegalEntity` to `"legalEntity"` · `PaymentInstrument` to `"paymentInstrument"` | `scaEntityType4Schema` |
| `ScaExemption` | `SetByPlatform` to `"setByPlatform"` · `InitialLimit` to `"initialLimit"` · `LowerLimit` to `"lowerLimit"` · `NotRegulated` to `"notRegulated"` · `AlreadyPerformed` to `"alreadyPerformed"` | `scaExemptionSchema` |
| `ScaOnApproval` | `Completed` to `"completed"` · `NotApplicable` to `"notApplicable"` · `Required` to `"required"` | `scaOnApprovalSchema` |
| `ScaStatus` | `NotPerformed` to `"notPerformed"` · `Pending` to `"pending"` · `Performed` to `"performed"` | `scaStatusSchema` |
| `Schedule` | `BiweeklyOn1StAnd15ThAtMidnight` to `"BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"` · `Daily` to `"DAILY"` · `DailyAu` to `"DAILY_AU"` · `DailyEu` to `"DAILY_EU"` · `DailySg` to `"DAILY_SG"` · `DailyUs` to `"DAILY_US"` · `Hold` to `"HOLD"` · `Monthly` to `"MONTHLY"` · `Weekly` to `"WEEKLY"` · `WeeklyMonToFriAu` to `"WEEKLY_MON_TO_FRI_AU"` · `WeeklyMonToFriEu` to `"WEEKLY_MON_TO_FRI_EU"` · `WeeklyMonToFriUs` to `"WEEKLY_MON_TO_FRI_US"` · `WeeklyOnTueFriMidnight` to `"WEEKLY_ON_TUE_FRI_MIDNIGHT"` · `WeeklySunToThuAu` to `"WEEKLY_SUN_TO_THU_AU"` · `WeeklySunToThuUs` to `"WEEKLY_SUN_TO_THU_US"` | `scheduleSchema` |
| `Schedule1` | `BiweeklyOn1StAnd15ThAtMidnight` to `"BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"` · `Daily` to `"DAILY"` · `DailyAu` to `"DAILY_AU"` · `DailyEu` to `"DAILY_EU"` · `DailySg` to `"DAILY_SG"` · `DailyUs` to `"DAILY_US"` · `Hold` to `"HOLD"` · `Monthly` to `"MONTHLY"` · `Weekly` to `"WEEKLY"` · `WeeklyMonToFriAu` to `"WEEKLY_MON_TO_FRI_AU"` · `WeeklyMonToFriEu` to `"WEEKLY_MON_TO_FRI_EU"` · `WeeklyMonToFriUs` to `"WEEKLY_MON_TO_FRI_US"` · `WeeklyOnTueFriMidnight` to `"WEEKLY_ON_TUE_FRI_MIDNIGHT"` · `WeeklySunToThuAu` to `"WEEKLY_SUN_TO_THU_AU"` · `WeeklySunToThuUs` to `"WEEKLY_SUN_TO_THU_US"` | `schedule1Schema` |
| `ScheduleType` | `Weekdays` to `"weekdays"` · `Weekly` to `"weekly"` · `Monthly` to `"monthly"` | `scheduleTypeSchema` |
| `ScheduleType1` | `Weekdays` to `"weekdays"` · `Weekly` to `"weekly"` · `Monthly` to `"monthly"` | `scheduleType1Schema` |
| `Scheme` | `Mc` to `"mc"` · `Visa` to `"visa"` | `schemeSchema` |
| `SchemeFee` | `DeductFromLiableAccount` to `"deductFromLiableAccount"` · `DeductFromOneBalanceAccount` to `"deductFromOneBalanceAccount"` | `schemeFeeSchema` |
| `Scope` | `PerDay` to `"perDay"` · `PerTransaction` to `"perTransaction"` | `scopeSchema` |
| `SdkInterface` | `Native` to `"native"` · `Html` to `"html"` · `Both` to `"both"` | `sdkInterfaceSchema` |
| `SdkUiType` | `MultiSelect` to `"multiSelect"` · `OtherHtml` to `"otherHtml"` · `OutOfBand` to `"outOfBand"` · `SingleSelect` to `"singleSelect"` · `Text` to `"text"` | `sdkUiTypeSchema` |
| `Service` | `PaymentProcessing` to `"paymentProcessing"` · `Issuing` to `"issuing"` · `Banking` to `"banking"` | `serviceSchema` |
| `ServiceLevel` | `NoContract` to `"noContract"` · `GatewayContract` to `"gatewayContract"` · `PaymentDesignatorContract` to `"paymentDesignatorContract"` | `serviceLevelSchema` |
| `ServiceLevel1` | `NoContract` to `"noContract"` · `GatewayContract` to `"gatewayContract"` | `serviceLevel1Schema` |
| `ServiceLevel2` | `NoContract` to `"noContract"` · `GatewayContract` to `"gatewayContract"` · `PaymentDesignatorContract` to `"paymentDesignatorContract"` | `serviceLevel2Schema` |
| `ServicesEnabled` | `CardAcquisition` to `"CardAcquisition"` · `Payment` to `"Payment"` · `Loyalty` to `"Loyalty"` | `servicesEnabledSchema` |
| `SettingType` | `Balance` to `"balance"` | `settingTypeSchema` |
| `ShareholderType` | `Controller` to `"Controller"` · `Owner` to `"Owner"` · `Signatory` to `"Signatory"` | `shareholderTypeSchema` |
| `ShipAddressUsageInd` | `_01` to `"01"` · `_02` to `"02"` · `_03` to `"03"` · `_04` to `"04"` | `shipAddressUsageIndSchema` |
| `ShipNameIndicator` | `_01` to `"01"` · `_02` to `"02"` | `shipNameIndicatorSchema` |
| `ShopperInteraction` | `Ecommerce` to `"Ecommerce"` · `ContAuth` to `"ContAuth"` · `Moto` to `"Moto"` · `Pos` to `"POS"` | `shopperInteractionSchema` |
| `ShopperInteraction1` | `ECommerce` to `"eCommerce"` · `Pos` to `"pos"` · `Moto` to `"moto"` · `ContAuth` to `"contAuth"` | `shopperInteraction1Schema` |
| `ShopperInteraction11` | `Ecommerce` to `"Ecommerce"` · `ContAuth` to `"ContAuth"` · `Moto` to `"Moto"` · `Pos` to `"POS"` · `Any` to `"ANY"` | `shopperInteraction11Schema` |
| `ShopperInteraction3` | `Ecommerce` to `"Ecommerce"` · `ContAuth` to `"ContAuth"` · `Moto` to `"Moto"` · `Pos` to `"POS"` | `shopperInteraction3Schema` |
| `SimcardStatus` | `Activated` to `"ACTIVATED"` · `Inventory` to `"INVENTORY"` | `simcardStatusSchema` |
| `SoundAction` | `StartSound` to `"StartSound"` · `StopSound` to `"StopSound"` · `SetDefaultVolume` to `"SetDefaultVolume"` | `soundActionSchema` |
| `SoundFormat` | `SoundRef` to `"SoundRef"` · `MessageRef` to `"MessageRef"` · `Text` to `"Text"` | `soundFormatSchema` |
| `SoundFormat1` | `SoundRef` to `"SoundRef"` · `MessageRef` to `"MessageRef"` · `Text` to `"Text"` | `soundFormat1Schema` |
| `SourceOfFunds` | `Debit` to `"DEBIT"` · `DepositAccount` to `"DEPOSIT_ACCOUNT"` | `sourceOfFundsSchema` |
| `SslProtocol` | `TlSv12` to `"TLSv12"` · `TlSv13` to `"TLSv13"` | `sslProtocolSchema` |
| `StateType` | `LimitedPayout` to `"LimitedPayout"` · `LimitedProcessing` to `"LimitedProcessing"` · `LimitlessPayout` to `"LimitlessPayout"` · `LimitlessProcessing` to `"LimitlessProcessing"` · `Payout` to `"Payout"` · `Processing` to `"Processing"` | `stateTypeSchema` |
| `Status` | `NotPerformed` to `"notPerformed"` · `NotSupported` to `"notSupported"` · `Performed` to `"performed"` | `statusSchema` |
| `Status1` | `Completed` to `"completed"` · `Pending` to `"pending"` · `Refused` to `"refused"` | `status1Schema` |
| `Status10` | `Active` to `"active"` · `Closed` to `"closed"` · `Suspended` to `"suspended"` | `status10Schema` |
| `Status101` | `Active` to `"active"` · `Closed` to `"closed"` · `Inactive` to `"inactive"` · `Suspended` to `"suspended"` | `status101Schema` |
| `Status11` | `Expired` to `"expired"` | `status11Schema` |
| `Status12` | `Active` to `"active"` · `Closed` to `"closed"` · `Inactive` to `"inactive"` | `status12Schema` |
| `Status13` | `Active` to `"Active"` · `Closed` to `"Closed"` · `Inactive` to `"Inactive"` · `Suspended` to `"Suspended"` | `status13Schema` |
| `Status131` | `Completed` to `"completed"` · `Pending` to `"pending"` · `Unavailable` to `"unavailable"` | `status131Schema` |
| `Status14` | `Pending` to `"Pending"` · `Active` to `"Active"` · `Repaid` to `"Repaid"` · `Failed` to `"Failed"` · `WrittenOff` to `"WrittenOff"` · `Revoked` to `"Revoked"` | `status14Schema` |
| `Status15` | `Credited` to `"credited"` · `Accepted` to `"accepted"` | `status15Schema` |
| `Status16` | `Active` to `"active"` · `Suspended` to `"suspended"` · `Closed` to `"closed"` | `status16Schema` |
| `Status2` | `Authorised` to `"authorised"` · `Received` to `"received"` · `Refused` to `"refused"` | `status2Schema` |
| `Status21` | `Boarded` to `"boarded"` · `Deployed` to `"deployed"` · `Inventory` to `"inventory"` · `ReassignmentInProgress` to `"reassignmentInProgress"` | `status21Schema` |
| `Status22` | `Active` to `"Active"` · `Closed` to `"Closed"` · `Inactive` to `"Inactive"` · `Suspended` to `"Suspended"` | `status22Schema` |
| `Status23` | `Active` to `"active"` · `Closed` to `"closed"` · `Inactive` to `"inactive"` · `Suspended` to `"suspended"` | `status23Schema` |
| `Status24` | `ApprovalPending` to `"approvalPending"` · `AtmWithdrawal` to `"atmWithdrawal"` · `AtmWithdrawalReversalPending` to `"atmWithdrawalReversalPending"` · `AtmWithdrawalReversed` to `"atmWithdrawalReversed"` · `AuthAdjustmentAuthorised` to `"authAdjustmentAuthorised"` · `AuthAdjustmentError` to `"authAdjustmentError"` · `AuthAdjustmentRefused` to `"authAdjustmentRefused"` · `Authorised` to `"authorised"` · `BankTransfer` to `"bankTransfer"` · `BankTransferPending` to `"bankTransferPending"` · `Booked` to `"booked"` · `BookingPending` to `"bookingPending"` · `Cancelled` to `"cancelled"` · `CapturePending` to `"capturePending"` · `CaptureReversalPending` to `"captureReversalPending"` · `CaptureReversed` to `"captureReversed"` · `Captured` to `"captured"` · `CapturedExternally` to `"capturedExternally"` · `Chargeback` to `"chargeback"` · `ChargebackExternally` to `"chargebackExternally"` · `ChargebackPending` to `"chargebackPending"` · `ChargebackReversalPending` to `"chargebackReversalPending"` · `ChargebackReversed` to `"chargebackReversed"` · `Credited` to `"credited"` · `DepositCorrection` to `"depositCorrection"` · `DepositCorrectionPending` to `"depositCorrectionPending"` · `Dispute` to `"dispute"` · `DisputeClosed` to `"disputeClosed"` · `DisputeExpired` to `"disputeExpired"` · `DisputeNeedsReview` to `"disputeNeedsReview"` · `Error` to `"error"` · `Expired` to `"expired"` · `Failed` to `"failed"` · `Fee` to `"fee"` · `FeePending` to `"feePending"` · `InterchangeAdjusted` to `"interchangeAdjusted"` · `InternalTransfer` to `"internalTransfer"` · `InternalTransferPending` to `"internalTransferPending"` · `InvoiceDeduction` to `"invoiceDeduction"` · `InvoiceDeductionPending` to `"invoiceDeductionPending"` · `ManualCorrectionPending` to `"manualCorrectionPending"` · `ManuallyCorrected` to `"manuallyCorrected"` · `MatchedStatement` to `"matchedStatement"` · `MatchedStatementPending` to `"matchedStatementPending"` · `MerchantPayin` to `"merchantPayin"` · `MerchantPayinPending` to `"merchantPayinPending"` · `MerchantPayinReversed` to `"merchantPayinReversed"` · `MerchantPayinReversedPending` to `"merchantPayinReversedPending"` · `MiscCost` to `"miscCost"` · `MiscCostPending` to `"miscCostPending"` · `PaymentCost` to `"paymentCost"` · `PaymentCostPending` to `"paymentCostPending"` · `Pending` to `"pending"` · `PendingApproval` to `"pendingApproval"` · `PendingExecution` to `"pendingExecution"` · `Received` to `"received"` · `RefundPending` to `"refundPending"` · `RefundReversalPending` to `"refundReversalPending"` · `RefundReversed` to `"refundReversed"` · `Refunded` to `"refunded"` · `RefundedExternally` to `"refundedExternally"` · `Refused` to `"refused"` · `Rejected` to `"rejected"` · `ReserveAdjustment` to `"reserveAdjustment"` · `ReserveAdjustmentPending` to `"reserveAdjustmentPending"` · `Returned` to `"returned"` · `Reversed` to `"reversed"` · `SecondChargeback` to `"secondChargeback"` · `SecondChargebackPending` to `"secondChargebackPending"` · `Undefined` to `"undefined"` | `status24Schema` |
| `Status3` | `Received` to `"received"` | `status3Schema` |
| `Status31` | `Activated` to `"activated"` · `Deactivated` to `"deactivated"` · `Deprecated` to `"deprecated"` · `Inventory` to `"inventory"` · `ReadyForActivation` to `"readyForActivation"` | `status31Schema` |
| `Status32` | `AwaitingData` to `"AWAITING_DATA"` · `DataProvided` to `"DATA_PROVIDED"` · `Failed` to `"FAILED"` · `InvalidData` to `"INVALID_DATA"` · `Passed` to `"PASSED"` · `Pending` to `"PENDING"` · `PendingReview` to `"PENDING_REVIEW"` · `RetryLimitReached` to `"RETRY_LIMIT_REACHED"` · `Unchecked` to `"UNCHECKED"` | `status32Schema` |
| `Status4` | `Active` to `"active"` · `Inactive` to `"inactive"` | `status4Schema` |
| `Status41` | `Active` to `"active"` · `Closed` to `"closed"` · `Inactive` to `"inactive"` | `status41Schema` |
| `Status42` | `Active` to `"Active"` · `Closed` to `"Closed"` · `Inactive` to `"Inactive"` · `Suspended` to `"Suspended"` | `status42Schema` |
| `Status43` | `Active` to `"active"` · `Closed` to `"closed"` · `Inactive` to `"inactive"` · `Suspended` to `"suspended"` | `status43Schema` |
| `Status44` | `Pending` to `"pending"` · `Failed` to `"failed"` | `status44Schema` |
| `Status5` | `Active` to `"active"` · `Completed` to `"completed"` · `Expired` to `"expired"` · `Paid` to `"paid"` · `PaymentPending` to `"paymentPending"` | `status5Schema` |
| `Status51` | `ApprovalPending` to `"approvalPending"` · `AtmWithdrawal` to `"atmWithdrawal"` · `AtmWithdrawalReversalPending` to `"atmWithdrawalReversalPending"` · `AtmWithdrawalReversed` to `"atmWithdrawalReversed"` · `AuthAdjustmentAuthorised` to `"authAdjustmentAuthorised"` · `AuthAdjustmentError` to `"authAdjustmentError"` · `AuthAdjustmentRefused` to `"authAdjustmentRefused"` · `Authorised` to `"authorised"` · `BankTransfer` to `"bankTransfer"` · `BankTransferPending` to `"bankTransferPending"` · `Booked` to `"booked"` · `BookingPending` to `"bookingPending"` · `Cancelled` to `"cancelled"` · `CapturePending` to `"capturePending"` · `CaptureReversalPending` to `"captureReversalPending"` · `CaptureReversed` to `"captureReversed"` · `Captured` to `"captured"` · `CapturedExternally` to `"capturedExternally"` · `Chargeback` to `"chargeback"` · `ChargebackExternally` to `"chargebackExternally"` · `ChargebackPending` to `"chargebackPending"` · `ChargebackReversalPending` to `"chargebackReversalPending"` · `ChargebackReversed` to `"chargebackReversed"` · `Credited` to `"credited"` · `DepositCorrection` to `"depositCorrection"` · `DepositCorrectionPending` to `"depositCorrectionPending"` · `Dispute` to `"dispute"` · `DisputeClosed` to `"disputeClosed"` · `DisputeExpired` to `"disputeExpired"` · `DisputeNeedsReview` to `"disputeNeedsReview"` · `Error` to `"error"` · `Expired` to `"expired"` · `Failed` to `"failed"` · `Fee` to `"fee"` · `FeePending` to `"feePending"` · `InterchangeAdjusted` to `"interchangeAdjusted"` · `InternalTransfer` to `"internalTransfer"` · `InternalTransferPending` to `"internalTransferPending"` · `InvoiceDeduction` to `"invoiceDeduction"` · `InvoiceDeductionPending` to `"invoiceDeductionPending"` · `ManualCorrectionPending` to `"manualCorrectionPending"` · `ManuallyCorrected` to `"manuallyCorrected"` · `MatchedStatement` to `"matchedStatement"` · `MatchedStatementPending` to `"matchedStatementPending"` · `MerchantPayin` to `"merchantPayin"` · `MerchantPayinPending` to `"merchantPayinPending"` · `MerchantPayinReversed` to `"merchantPayinReversed"` · `MerchantPayinReversedPending` to `"merchantPayinReversedPending"` · `MiscCost` to `"miscCost"` · `MiscCostPending` to `"miscCostPending"` · `PaymentCost` to `"paymentCost"` · `PaymentCostPending` to `"paymentCostPending"` · `Pending` to `"pending"` · `PendingApproval` to `"pendingApproval"` · `PendingExecution` to `"pendingExecution"` · `Received` to `"received"` · `RefundPending` to `"refundPending"` · `RefundReversalPending` to `"refundReversalPending"` · `RefundReversed` to `"refundReversed"` · `Refunded` to `"refunded"` · `RefundedExternally` to `"refundedExternally"` · `Refused` to `"refused"` · `Rejected` to `"rejected"` · `ReserveAdjustment` to `"reserveAdjustment"` · `ReserveAdjustmentPending` to `"reserveAdjustmentPending"` · `Returned` to `"returned"` · `Reversed` to `"reversed"` · `SecondChargeback` to `"secondChargeback"` · `SecondChargebackPending` to `"secondChargebackPending"` · `Undefined` to `"undefined"` | `status51Schema` |
| `Status6` | `Archived` to `"archived"` · `Error` to `"error"` · `Invalid` to `"invalid"` · `Processing` to `"processing"` · `Ready` to `"ready"` | `status6Schema` |
| `Status61` | `Closed` to `"closed"` · `Open` to `"open"` | `status61Schema` |
| `Status62` | `Authorised` to `"Authorised"` · `Declined` to `"Declined"` | `status62Schema` |
| `Status7` | `Active` to `"Active"` · `Closed` to `"Closed"` · `Inactive` to `"Inactive"` · `InactiveWithModifications` to `"InactiveWithModifications"` · `Pending` to `"Pending"` | `status7Schema` |
| `Status71` | `Created` to `"created"` · `Delivered` to `"delivered"` · `NotApplicable` to `"notApplicable"` · `Processing` to `"processing"` · `Produced` to `"produced"` · `Rejected` to `"rejected"` · `Shipped` to `"shipped"` · `Unknown` to `"unknown"` | `status71Schema` |
| `Status72` | `Booked` to `"booked"` · `Pending` to `"pending"` | `status72Schema` |
| `Status8` | `Error` to `"error"` · `Success` to `"success"` | `status8Schema` |
| `Status9` | `Active` to `"active"` · `Canceled` to `"canceled"` · `Completed` to `"completed"` · `Expired` to `"expired"` · `PaymentPending` to `"paymentPending"` · `Refused` to `"refused"` | `status9Schema` |
| `Status91` | `Active` to `"active"` · `Inactive` to `"inactive"` · `Suspended` to `"suspended"` · `Closed` to `"closed"` | `status91Schema` |
| `StatusOfLegalProceeding` | `NoLegalActionsTaken` to `"noLegalActionsTaken"` · `UnderJudicialAdministration` to `"underJudicialAdministration"` · `BankruptcyInsolvency` to `"bankruptcyInsolvency"` · `OtherLegalMeasures` to `"otherLegalMeasures"` | `statusOfLegalProceedingSchema` |
| `StatusReason` | `AccountClosure` to `"accountClosure"` · `Damaged` to `"damaged"` · `EndOfLife` to `"endOfLife"` · `Expired` to `"expired"` · `Lost` to `"lost"` · `Other` to `"other"` · `Stolen` to `"stolen"` · `SuspectedFraud` to `"suspectedFraud"` · `TransactionRule` to `"transactionRule"` | `statusReasonSchema` |
| `StatusReason2` | `AccountClosure` to `"accountClosure"` · `Damaged` to `"damaged"` · `EndOfLife` to `"endOfLife"` · `Expired` to `"expired"` · `Lost` to `"lost"` · `Other` to `"other"` · `Stolen` to `"stolen"` · `SuspectedFraud` to `"suspectedFraud"` · `TransactionRule` to `"transactionRule"` | `statusReason2Schema` |
| `StoreFiltrationMode` | `Exclusive` to `"exclusive"` · `Inclusive` to `"inclusive"` · `SkipFilter` to `"skipFilter"` | `storeFiltrationModeSchema` |
| `StoreFiltrationMode2` | `Exclusive` to `"exclusive"` · `Inclusive` to `"inclusive"` · `SkipFilter` to `"skipFilter"` | `storeFiltrationMode2Schema` |
| `StorePaymentMethodMode` | `AskForConsent` to `"askForConsent"` · `Disabled` to `"disabled"` · `Enabled` to `"enabled"` | `storePaymentMethodModeSchema` |
| `StorePaymentMethodMode2` | `AskForConsent` to `"askForConsent"` · `Disabled` to `"disabled"` · `Enabled` to `"enabled"` | `storePaymentMethodMode2Schema` |
| `StoredValueAccountType` | `GiftCard` to `"GiftCard"` · `PhoneCard` to `"PhoneCard"` · `Other` to `"Other"` | `storedValueAccountTypeSchema` |
| `StoredValueAccountType1` | `GiftCard` to `"GiftCard"` · `PhoneCard` to `"PhoneCard"` · `Other` to `"Other"` | `storedValueAccountType1Schema` |
| `StoredValueTransactionType` | `Reserve` to `"Reserve"` · `Activate` to `"Activate"` · `Load` to `"Load"` · `Unload` to `"Unload"` · `Reverse` to `"Reverse"` · `Duplicate` to `"Duplicate"` | `storedValueTransactionTypeSchema` |
| `StoredValueTransactionType1` | `Reserve` to `"Reserve"` · `Activate` to `"Activate"` · `Load` to `"Load"` · `Unload` to `"Unload"` · `Reverse` to `"Reverse"` · `Duplicate` to `"Duplicate"` | `storedValueTransactionType1Schema` |
| `StoredValueTransactionType2` | `Reserve` to `"Reserve"` · `Activate` to `"Activate"` · `Load` to `"Load"` · `Unload` to `"Unload"` · `Reverse` to `"Reverse"` · `Duplicate` to `"Duplicate"` | `storedValueTransactionType2Schema` |
| `SubType11` | `AtmDispute` to `"atmDispute"` · `CancelledGoodsServices` to `"cancelledGoodsServices"` · `CancelledRecurring` to `"cancelledRecurring"` · `CreditNotProcessed` to `"creditNotProcessed"` · `Counterfeit` to `"counterfeit"` · `NotAsDescribed` to `"notAsDescribed"` | `subType11Schema` |
| `SubType2` | `AtmDispute` to `"atmDispute"` · `CancelledGoodsServices` to `"cancelledGoodsServices"` · `CancelledRecurring` to `"cancelledRecurring"` · `CreditNotProcessed` to `"creditNotProcessed"` · `Counterfeit` to `"counterfeit"` · `NotAsDescribed` to `"notAsDescribed"` | `subType2Schema` |
| `Subtype` | `Hilton` to `"hilton"` | `subtypeSchema` |
| `Subtype1` | `Express` to `"express"` · `Redirect` to `"redirect"` · `Sdk` to `"sdk"` | `subtype1Schema` |
| `Surcharge3` | `AddToLiableAccount` to `"addToLiableAccount"` · `AddToOneBalanceAccount` to `"addToOneBalanceAccount"` | `surcharge3Schema` |
| `SuspiciousAccActivity` | `_01` to `"01"` · `_02` to `"02"` | `suspiciousAccActivitySchema` |
| `TerminalStatus` | `OnlineLast1Day` to `"OnlineLast1Day"` · `OnlineLast2Days` to `"OnlineLast2Days"` · `OnlineLast3Days` to `"OnlineLast3Days"` · `OnlineLast4Days` to `"OnlineLast4Days"` · `OnlineLast5Days` to `"OnlineLast5Days"` · `OnlineLast6Days` to `"OnlineLast6Days"` · `OnlineLast7Days` to `"OnlineLast7Days"` · `OnlineToday` to `"OnlineToday"` · `ReAssignToInventoryPending` to `"ReAssignToInventoryPending"` · `ReAssignToMerchantInventoryPending` to `"ReAssignToMerchantInventoryPending"` · `ReAssignToStorePending` to `"ReAssignToStorePending"` · `SwitchedOff` to `"SwitchedOff"` | `terminalStatusSchema` |
| `TermsOfServiceDocumentFormat` | `Json` to `"JSON"` · `Pdf` to `"PDF"` · `Txt` to `"TXT"` | `termsOfServiceDocumentFormatSchema` |
| `TermsOfServiceType` | `AdyenAccount` to `"adyenAccount"` · `AdyenCapital` to `"adyenCapital"` · `AdyenCard` to `"adyenCard"` · `AdyenChargeCard` to `"adyenChargeCard"` · `AdyenForPlatformsAdvanced` to `"adyenForPlatformsAdvanced"` · `AdyenForPlatformsManage` to `"adyenForPlatformsManage"` · `AdyenFranchisee` to `"adyenFranchisee"` · `AdyenIssuing` to `"adyenIssuing"` · `AdyenPccr` to `"adyenPccr"` · `KycOnInvite` to `"kycOnInvite"` | `termsOfServiceTypeSchema` |
| `ThreeDDirectoryServerResponse` | `N` to `"N"` · `U` to `"U"` · `Y` to `"Y"` | `threeDDirectoryServerResponseSchema` |
| `ThreeDsReqAuthMethod` | `_01` to `"01"` · `_02` to `"02"` · `_03` to `"03"` · `_04` to `"04"` · `_05` to `"05"` · `_06` to `"06"` | `threeDsReqAuthMethodSchema` |
| `ThreeDsReqPriorAuthMethod` | `_01` to `"01"` · `_02` to `"02"` · `_03` to `"03"` · `_04` to `"04"` | `threeDsReqPriorAuthMethodSchema` |
| `ThreeDsRequestorChallengeInd` | `_01` to `"01"` · `_02` to `"02"` · `_03` to `"03"` · `_04` to `"04"` · `_05` to `"05"` · `_06` to `"06"` | `threeDsRequestorChallengeIndSchema` |
| `ThreeDsVersion` | `_210` to `"2.1.0"` · `_220` to `"2.2.0"` | `threeDsVersionSchema` |
| `Tip` | `AddToLiableAccount` to `"addToLiableAccount"` · `AddToOneBalanceAccount` to `"addToOneBalanceAccount"` | `tipSchema` |
| `TokenRequestedType` | `Transaction` to `"Transaction"` · `Customer` to `"Customer"` | `tokenRequestedTypeSchema` |
| `TokenRequestedType1` | `Transaction` to `"Transaction"` · `Customer` to `"Customer"` | `tokenRequestedType1Schema` |
| `TokenService` | `Visatokenservice` to `"VISATOKENSERVICE"` · `Mctokenservice` to `"MCTOKENSERVICE"` · `Amextokenservice` to `"AMEXTOKENSERVICE"` · `TokenSharing` to `"TOKEN_SHARING"` | `tokenServiceSchema` |
| `TokenizationStoreOperationType` | `Created` to `"created"` · `Updated` to `"updated"` · `AlreadyExisting` to `"alreadyExisting"` | `tokenizationStoreOperationTypeSchema` |
| `TotalDetail` | `Poiid` to `"POIID"` · `SaleId` to `"SaleID"` · `OperatorId` to `"OperatorID"` · `ShiftNumber` to `"ShiftNumber"` · `TotalsGroupId` to `"TotalsGroupID"` | `totalDetailSchema` |
| `TrackFormat` | `Iso` to `"ISO"` · `JisI` to `"JIS-I"` · `JisIi` to `"JIS-II"` · `Aamva` to `"AAMVA"` · `Cmc7` to `"CMC-7"` · `E13B` to `"E-13B"` | `trackFormatSchema` |
| `TrackFormat1` | `Iso` to `"ISO"` · `JisI` to `"JIS-I"` · `JisIi` to `"JIS-II"` · `Aamva` to `"AAMVA"` · `Cmc7` to `"CMC-7"` · `E13B` to `"E-13B"` | `trackFormat1Schema` |
| `TransType` | `_01` to `"01"` · `_03` to `"03"` · `_10` to `"10"` · `_11` to `"11"` · `_28` to `"28"` | `transTypeSchema` |
| `TransactionAction` | `StartTransaction` to `"StartTransaction"` · `AbortTransaction` to `"AbortTransaction"` | `transactionActionSchema` |
| `TransactionAction1` | `StartTransaction` to `"StartTransaction"` · `AbortTransaction` to `"AbortTransaction"` | `transactionAction1Schema` |
| `TransactionStatus` | `BalanceNotPaidOutTransfer` to `"BalanceNotPaidOutTransfer"` · `BalancePlatformFundTransfer` to `"BalancePlatformFundTransfer"` · `BalancePlatformSweep` to `"BalancePlatformSweep"` · `BalancePlatformSweepReturned` to `"BalancePlatformSweepReturned"` · `Chargeback` to `"Chargeback"` · `ChargebackCorrection` to `"ChargebackCorrection"` · `ChargebackCorrectionReceived` to `"ChargebackCorrectionReceived"` · `ChargebackReceived` to `"ChargebackReceived"` · `ChargebackReversed` to `"ChargebackReversed"` · `ChargebackReversedCorrection` to `"ChargebackReversedCorrection"` · `ChargebackReversedCorrectionReceived` to `"ChargebackReversedCorrectionReceived"` · `ChargebackReversedReceived` to `"ChargebackReversedReceived"` · `Converted` to `"Converted"` · `CreditClosed` to `"CreditClosed"` · `CreditFailed` to `"CreditFailed"` · `CreditReversed` to `"CreditReversed"` · `CreditReversedReceived` to `"CreditReversedReceived"` · `CreditSuspended` to `"CreditSuspended"` · `Credited` to `"Credited"` · `DebitFailed` to `"DebitFailed"` · `DebitReversedReceived` to `"DebitReversedReceived"` · `Debited` to `"Debited"` · `DebitedReversed` to `"DebitedReversed"` · `DepositCorrectionCredited` to `"DepositCorrectionCredited"` · `DepositCorrectionDebited` to `"DepositCorrectionDebited"` · `DepositCorrectionReceived` to `"DepositCorrectionReceived"` · `Fee` to `"Fee"` · `FeeReceived` to `"FeeReceived"` · `FundTransfer` to `"FundTransfer"` · `FundTransferReversed` to `"FundTransferReversed"` · `InvoiceDeductionCredited` to `"InvoiceDeductionCredited"` · `InvoiceDeductionDebited` to `"InvoiceDeductionDebited"` · `InvoiceDeductionReceived` to `"InvoiceDeductionReceived"` · `ManualCorrected` to `"ManualCorrected"` · `ManualCorrectionCredited` to `"ManualCorrectionCredited"` · `ManualCorrectionDebited` to `"ManualCorrectionDebited"` · `MerchantPayin` to `"MerchantPayin"` · `MerchantPayinReceived` to `"MerchantPayinReceived"` · `MerchantPayinReversed` to `"MerchantPayinReversed"` · `Payout` to `"Payout"` · `PayoutReversed` to `"PayoutReversed"` · `PendingCredit` to `"PendingCredit"` · `PendingDebit` to `"PendingDebit"` · `PendingFundTransfer` to `"PendingFundTransfer"` · `ReCredited` to `"ReCredited"` · `ReCreditedReceived` to `"ReCreditedReceived"` · `SecondChargeback` to `"SecondChargeback"` · `SecondChargebackCorrection` to `"SecondChargebackCorrection"` · `SecondChargebackCorrectionReceived` to `"SecondChargebackCorrectionReceived"` · `SecondChargebackReceived` to `"SecondChargebackReceived"` | `transactionStatusSchema` |
| `TransactionStatus1` | `BalanceNotPaidOutTransfer` to `"BalanceNotPaidOutTransfer"` · `BalancePlatformFundTransfer` to `"BalancePlatformFundTransfer"` · `BalancePlatformSweep` to `"BalancePlatformSweep"` · `BalancePlatformSweepReturned` to `"BalancePlatformSweepReturned"` · `Chargeback` to `"Chargeback"` · `ChargebackCorrection` to `"ChargebackCorrection"` · `ChargebackCorrectionReceived` to `"ChargebackCorrectionReceived"` · `ChargebackReceived` to `"ChargebackReceived"` · `ChargebackReversed` to `"ChargebackReversed"` · `ChargebackReversedCorrection` to `"ChargebackReversedCorrection"` · `ChargebackReversedCorrectionReceived` to `"ChargebackReversedCorrectionReceived"` · `ChargebackReversedReceived` to `"ChargebackReversedReceived"` · `Converted` to `"Converted"` · `CreditClosed` to `"CreditClosed"` · `CreditFailed` to `"CreditFailed"` · `CreditReversed` to `"CreditReversed"` · `CreditReversedReceived` to `"CreditReversedReceived"` · `CreditSuspended` to `"CreditSuspended"` · `Credited` to `"Credited"` · `DebitFailed` to `"DebitFailed"` · `DebitReversedReceived` to `"DebitReversedReceived"` · `Debited` to `"Debited"` · `DebitedReversed` to `"DebitedReversed"` · `DepositCorrectionCredited` to `"DepositCorrectionCredited"` · `DepositCorrectionDebited` to `"DepositCorrectionDebited"` · `DepositCorrectionReceived` to `"DepositCorrectionReceived"` · `Fee` to `"Fee"` · `FeeReceived` to `"FeeReceived"` · `FundTransfer` to `"FundTransfer"` · `FundTransferReversed` to `"FundTransferReversed"` · `InvoiceDeductionCredited` to `"InvoiceDeductionCredited"` · `InvoiceDeductionDebited` to `"InvoiceDeductionDebited"` · `InvoiceDeductionReceived` to `"InvoiceDeductionReceived"` · `ManualCorrected` to `"ManualCorrected"` · `ManualCorrectionCredited` to `"ManualCorrectionCredited"` · `ManualCorrectionDebited` to `"ManualCorrectionDebited"` · `MerchantPayin` to `"MerchantPayin"` · `MerchantPayinReceived` to `"MerchantPayinReceived"` · `MerchantPayinReversed` to `"MerchantPayinReversed"` · `Payout` to `"Payout"` · `PayoutReversed` to `"PayoutReversed"` · `PendingCredit` to `"PendingCredit"` · `PendingDebit` to `"PendingDebit"` · `PendingFundTransfer` to `"PendingFundTransfer"` · `ReCredited` to `"ReCredited"` · `ReCreditedReceived` to `"ReCreditedReceived"` · `SecondChargeback` to `"SecondChargeback"` · `SecondChargebackCorrection` to `"SecondChargebackCorrection"` · `SecondChargebackCorrectionReceived` to `"SecondChargebackCorrectionReceived"` · `SecondChargebackReceived` to `"SecondChargebackReceived"` | `transactionStatus1Schema` |
| `TransactionType` | `GoodsOrServicePurchase` to `"goodsOrServicePurchase"` · `CheckAcceptance` to `"checkAcceptance"` · `AccountFunding` to `"accountFunding"` · `QuasiCashTransaction` to `"quasiCashTransaction"` · `PrepaidActivationAndLoad` to `"prepaidActivationAndLoad"` | `transactionTypeSchema` |
| `TransactionType1` | `Debit` to `"Debit"` · `Credit` to `"Credit"` · `ReverseDebit` to `"ReverseDebit"` · `ReverseCredit` to `"ReverseCredit"` · `OneTimeReservation` to `"OneTimeReservation"` · `CompletedDeffered` to `"CompletedDeffered"` · `FirstReservation` to `"FirstReservation"` · `UpdateReservation` to `"UpdateReservation"` · `CompletedReservation` to `"CompletedReservation"` · `CashAdvance` to `"CashAdvance"` · `IssuerInstalment` to `"IssuerInstalment"` · `Declined` to `"Declined"` · `Failed` to `"Failed"` · `Award` to `"Award"` · `ReverseAward` to `"ReverseAward"` · `Redemption` to `"Redemption"` · `ReverseRedemption` to `"ReverseRedemption"` · `Rebate` to `"Rebate"` · `ReverseRebate` to `"ReverseRebate"` | `transactionType1Schema` |
| `TransactionType11` | `Debit` to `"Debit"` · `Credit` to `"Credit"` · `ReverseDebit` to `"ReverseDebit"` · `ReverseCredit` to `"ReverseCredit"` · `OneTimeReservation` to `"OneTimeReservation"` · `CompletedDeffered` to `"CompletedDeffered"` · `FirstReservation` to `"FirstReservation"` · `UpdateReservation` to `"UpdateReservation"` · `CompletedReservation` to `"CompletedReservation"` · `CashAdvance` to `"CashAdvance"` · `IssuerInstalment` to `"IssuerInstalment"` · `Declined` to `"Declined"` · `Failed` to `"Failed"` · `Award` to `"Award"` · `ReverseAward` to `"ReverseAward"` · `Redemption` to `"Redemption"` · `ReverseRedemption` to `"ReverseRedemption"` · `Rebate` to `"Rebate"` · `ReverseRebate` to `"ReverseRebate"` | `transactionType11Schema` |
| `TransferType` | `Instant` to `"instant"` · `All` to `"all"` | `transferTypeSchema` |
| `Type` | `Ach` to `"ach"` · `AchPlaid` to `"ach_plaid"` | `typeSchema` |
| `Type1` | `Affirm` to `"affirm"` | `type1Schema` |
| `Type10` | `DirectdebitGb` to `"directdebit_GB"` | `type10Schema` |
| `Type101` | `AmountNonZeroDecimalsRequirement` to `"amountNonZeroDecimalsRequirement"` | `type101Schema` |
| `Type11` | `AcquiringFees` to `"AcquiringFees"` · `AdyenCommission` to `"AdyenCommission"` · `AdyenFees` to `"AdyenFees"` · `AdyenMarkup` to `"AdyenMarkup"` · `BalanceAccount` to `"BalanceAccount"` · `Commission` to `"Commission"` · `Default` to `"Default"` · `Interchange` to `"Interchange"` · `MarketPlace` to `"MarketPlace"` · `PaymentFee` to `"PaymentFee"` · `Remainder` to `"Remainder"` · `SchemeFee` to `"SchemeFee"` · `Surcharge` to `"Surcharge"` · `Tip` to `"Tip"` · `TopUp` to `"TopUp"` · `Vat` to `"VAT"` | `type11Schema` |
| `Type110` | `Association` to `"Association"` · `Partnership` to `"Partnership"` · `SoleProprietorship` to `"SoleProprietorship"` · `Trust` to `"Trust"` | `type110Schema` |
| `Type111` | `BankAccount` to `"BankAccount"` · `Document` to `"Document"` · `LegalEntity` to `"LegalEntity"` | `type111Schema` |
| `Type112` | `PaymentInstrument` to `"PaymentInstrument"` | `type112Schema` |
| `Type113` | `AdyenAccount` to `"adyenAccount"` · `AdyenCapital` to `"adyenCapital"` · `AdyenCard` to `"adyenCard"` · `AdyenChargeCard` to `"adyenChargeCard"` · `AdyenForPlatformsAdvanced` to `"adyenForPlatformsAdvanced"` · `AdyenForPlatformsManage` to `"adyenForPlatformsManage"` · `AdyenFranchisee` to `"adyenFranchisee"` · `AdyenIssuing` to `"adyenIssuing"` · `AdyenPccr` to `"adyenPccr"` · `KycOnInvite` to `"kycOnInvite"` | `type113Schema` |
| `Type12` | `BilldeskOnline` to `"billdesk_online"` · `BilldeskWallet` to `"billdesk_wallet"` | `type12Schema` |
| `Type121` | `PaymentInstrument` to `"PAYMENT_INSTRUMENT"` | `type121Schema` |
| `Type13` | `Blik` to `"blik"` | `type13Schema` |
| `Type14` | `Bcmc` to `"bcmc"` · `Scheme` to `"scheme"` · `NetworkToken` to `"networkToken"` · `Giftcard` to `"giftcard"` · `Card` to `"card"` · `Clicktopay` to `"clicktopay"` | `type14Schema` |
| `Type141` | `BrLocal` to `"brLocal"` | `type141Schema` |
| `Type15` | `Drivinglicense` to `"DRIVINGLICENSE"` · `Id` to `"ID"` · `Passport` to `"PASSPORT"` · `Socialsecurity` to `"SOCIALSECURITY"` · `Visa` to `"VISA"` | `type15Schema` |
| `Type151` | `Daily` to `"daily"` · `Weekly` to `"weekly"` · `Monthly` to `"monthly"` · `Balance` to `"balance"` · `Cron` to `"cron"` | `type151Schema` |
| `Type16` | `Cashapp` to `"cashapp"` | `type16Schema` |
| `Type161` | `Pull` to `"pull"` · `Push` to `"push"` | `type161Schema` |
| `Type17` | `Cellulant` to `"cellulant"` | `type17Schema` |
| `Type171` | `CaLocal` to `"caLocal"` | `type171Schema` |
| `Type172` | `BankAccount` to `"BankAccount"` · `Document` to `"Document"` · `LegalEntity` to `"LegalEntity"` · `Product` to `"product"` | `type172Schema` |
| `Type18` | `Await` to `"await"` | `type18Schema` |
| `Type181` | `CzLocal` to `"czLocal"` | `type181Schema` |
| `Type19` | `BankTransfer` to `"bankTransfer"` | `type19Schema` |
| `Type191` | `DkLocal` to `"dkLocal"` | `type191Schema` |
| `Type192` | `Confirmation` to `"confirmation"` | `type192Schema` |
| `Type193` | `DataMissing` to `"dataMissing"` · `DataReview` to `"dataReview"` · `InvalidInput` to `"invalidInput"` · `PendingStatus` to `"pendingStatus"` · `Rejected` to `"rejected"` | `type193Schema` |
| `Type2` | `AfterpayDefault` to `"afterpay_default"` · `Afterpaytouch` to `"afterpaytouch"` · `AfterpayB2B` to `"afterpay_b2b"` · `Clearpay` to `"clearpay"` | `type2Schema` |
| `Type20` | `DelegatedAuthentication` to `"delegatedAuthentication"` | `type20Schema` |
| `Type201` | `HkLocal` to `"hkLocal"` | `type201Schema` |
| `Type202` | `Estimation` to `"estimation"` | `type202Schema` |
| `Type21` | `Scheme` to `"scheme"` | `type21Schema` |
| `Type210` | `ForceReboot` to `"ForceReboot"` | `type210Schema` |
| `Type211` | `BankAccountVerification` to `"BANK_ACCOUNT_VERIFICATION"` · `CardVerification` to `"CARD_VERIFICATION"` · `CompanyVerification` to `"COMPANY_VERIFICATION"` · `IdentityVerification` to `"IDENTITY_VERIFICATION"` · `LegalArrangementVerification` to `"LEGAL_ARRANGEMENT_VERIFICATION"` · `NonprofitVerification` to `"NONPROFIT_VERIFICATION"` · `PassportVerification` to `"PASSPORT_VERIFICATION"` · `PayoutMethodVerification` to `"PAYOUT_METHOD_VERIFICATION"` · `PciVerification` to `"PCI_VERIFICATION"` | `type211Schema` |
| `Type212` | `HuLocal` to `"huLocal"` | `type212Schema` |
| `Type213` | `Internal` to `"internal"` | `type213Schema` |
| `Type214` | `Business` to `"business"` · `Employment` to `"employment"` · `Donations` to `"donations"` · `Inheritance` to `"inheritance"` · `FinancialAid` to `"financialAid"` · `RentalIncome` to `"rentalIncome"` · `DividendIncome` to `"dividendIncome"` · `RoyaltyIncome` to `"royaltyIncome"` · `ThirdPartyFunding` to `"thirdPartyFunding"` · `PensionIncome` to `"pensionIncome"` · `InsuranceSettlement` to `"insuranceSettlement"` · `CryptocurrencyIncome` to `"cryptocurrencyIncome"` · `AssetSale` to `"assetSale"` · `Loans` to `"loans"` · `GamblingWinnings` to `"gamblingWinnings"` | `type214Schema` |
| `Type22` | `NativeRedirect` to `"nativeRedirect"` | `type22Schema` |
| `Type221` | `Iban` to `"iban"` | `type221Schema` |
| `Type222` | `IssuedCard` to `"issuedCard"` | `type222Schema` |
| `Type223` | `BankStatement` to `"bankStatement"` · `DriversLicense` to `"driversLicense"` · `IdentityCard` to `"identityCard"` · `NationalIdNumber` to `"nationalIdNumber"` · `Passport` to `"passport"` · `ProofOfAddress` to `"proofOfAddress"` · `ProofOfNationalIdNumber` to `"proofOfNationalIdNumber"` · `ProofOfResidency` to `"proofOfResidency"` · `RegistrationDocument` to `"registrationDocument"` · `VatDocument` to `"vatDocument"` · `ProofOfOrganizationTaxInfo` to `"proofOfOrganizationTaxInfo"` · `ProofOfIndividualTaxId` to `"proofOfIndividualTaxId"` · `ProofOfOwnership` to `"proofOfOwnership"` · `ProofOfSignatory` to `"proofOfSignatory"` · `LiveSelfie` to `"liveSelfie"` · `ProofOfIndustry` to `"proofOfIndustry"` · `ConstitutionalDocument` to `"constitutionalDocument"` · `ProofOfFundingOrWealthSource` to `"proofOfFundingOrWealthSource"` · `ProofOfRelationship` to `"proofOfRelationship"` · `ProofOfDirector` to `"proofOfDirector"` | `type223Schema` |
| `Type23` | `QrCode` to `"qrCode"` | `type23Schema` |
| `Type231` | `NoLocal` to `"noLocal"` | `type231Schema` |
| `Type232` | `PlatformPayment` to `"platformPayment"` | `type232Schema` |
| `Type233` | `Back` to `"BACK"` · `Front` to `"FRONT"` · `Undefined` to `"UNDEFINED"` | `type233Schema` |
| `Type24` | `Redirect` to `"redirect"` | `type24Schema` |
| `Type241` | `NzLocal` to `"nzLocal"` | `type241Schema` |
| `Type242` | `InterchangeData` to `"interchangeData"` | `type242Schema` |
| `Type25` | `Sdk` to `"sdk"` · `WechatpaySdk` to `"wechatpaySDK"` | `type25Schema` |
| `Type251` | `NumberAndBic` to `"numberAndBic"` | `type251Schema` |
| `Type252` | `IssuingTransactionData` to `"issuingTransactionData"` | `type252Schema` |
| `Type26` | `ThreeDs2` to `"threeDS2"` | `type26Schema` |
| `Type261` | `PlLocal` to `"plLocal"` | `type261Schema` |
| `Type262` | `MerchantPurchaseData` to `"merchantPurchaseData"` | `type262Schema` |
| `Type27` | `Voucher` to `"voucher"` | `type27Schema` |
| `Type271` | `SeLocal` to `"seLocal"` | `type271Schema` |
| `Type272` | `UkFps` to `"ukFps"` | `type272Schema` |
| `Type273` | `NationalIdNumber` to `"nationalIdNumber"` · `Passport` to `"passport"` · `DriversLicense` to `"driversLicense"` · `IdentityCard` to `"identityCard"` | `type273Schema` |
| `Type28` | `Dbarai` to `"dbarai"` | `type28Schema` |
| `Type281` | `SgLocal` to `"sgLocal"` | `type281Schema` |
| `Type282` | `UsAch` to `"usAch"` | `type282Schema` |
| `Type283` | `DefinedBeneficiary` to `"definedBeneficiary"` · `Director` to `"director"` · `ImmediateParentCompany` to `"immediateParentCompany"` · `LegalRepresentative` to `"legalRepresentative"` · `PciSignatory` to `"pciSignatory"` · `Protector` to `"protector"` · `SecondaryPartner` to `"secondaryPartner"` · `SecondaryTrustee` to `"secondaryTrustee"` · `Settlor` to `"settlor"` · `Signatory` to `"signatory"` · `SoleProprietorship` to `"soleProprietorship"` · `Trust` to `"trust"` · `TrustOwnership` to `"trustOwnership"` · `UboThroughControl` to `"uboThroughControl"` · `UboThroughOwnership` to `"uboThroughOwnership"` · `UltimateParentCompany` to `"ultimateParentCompany"` · `UndefinedBeneficiary` to `"undefinedBeneficiary"` · `UnincorporatedPartnership` to `"unincorporatedPartnership"` | `type283Schema` |
| `Type29` | `Shipping` to `"Shipping"` | `type29Schema` |
| `Type291` | `UkLocal` to `"ukLocal"` | `type291Schema` |
| `Type292` | `InternalReview` to `"internalReview"` | `type292Schema` |
| `Type293` | `NonFinancialNonReportable` to `"nonFinancialNonReportable"` · `FinancialNonReportable` to `"financialNonReportable"` · `NonFinancialActive` to `"nonFinancialActive"` · `NonFinancialPassive` to `"nonFinancialPassive"` | `type293Schema` |
| `Type3` | `Alma` to `"alma"` | `type3Schema` |
| `Type30` | `DirectdebitAu` to `"directdebit_AU"` | `type30Schema` |
| `Type301` | `UsLocal` to `"usLocal"` | `type301Schema` |
| `Type302` | `Accounting` to `"accounting"` · `Tracing` to `"tracing"` · `Tracking` to `"tracking"` | `type302Schema` |
| `Type303` | `AssociationIncorporated` to `"associationIncorporated"` · `GovernmentalOrganization` to `"governmentalOrganization"` · `ListedPublicCompany` to `"listedPublicCompany"` · `NonProfit` to `"nonProfit"` · `PartnershipIncorporated` to `"partnershipIncorporated"` · `PrivateCompany` to `"privateCompany"` | `type303Schema` |
| `Type31` | `DokuMandiriVa` to `"doku_mandiri_va"` · `DokuCimbVa` to `"doku_cimb_va"` · `DokuDanamonVa` to `"doku_danamon_va"` · `DokuBniVa` to `"doku_bni_va"` · `DokuPermataLiteAtm` to `"doku_permata_lite_atm"` · `DokuBriVa` to `"doku_bri_va"` · `DokuBcaVa` to `"doku_bca_va"` · `DokuAlfamart` to `"doku_alfamart"` · `DokuIndomaret` to `"doku_indomaret"` · `DokuWallet` to `"doku_wallet"` · `DokuOvo` to `"doku_ovo"` | `type31Schema` |
| `Type310` | `InstallAndroidApp` to `"InstallAndroidApp"` | `type310Schema` |
| `Type311` | `DataMissing` to `"dataMissing"` · `DataReview` to `"dataReview"` · `InvalidInput` to `"invalidInput"` · `PendingStatus` to `"pendingStatus"` | `type311Schema` |
| `Type312` | `BankAccountIdentificationTypeRequirement` to `"bankAccountIdentificationTypeRequirement"` | `type312Schema` |
| `Type313` | `Individual` to `"individual"` · `Organization` to `"organization"` · `Unknown` to `"unknown"` | `type313Schema` |
| `Type314` | `Payment` to `"payment"` · `Capture` to `"capture"` · `CaptureReversal` to `"captureReversal"` · `Refund` to `"refund"` · `RefundReversal` to `"refundReversal"` · `Chargeback` to `"chargeback"` · `ChargebackCorrection` to `"chargebackCorrection"` · `ChargebackReversal` to `"chargebackReversal"` · `ChargebackReversalCorrection` to `"chargebackReversalCorrection"` · `SecondChargeback` to `"secondChargeback"` · `SecondChargebackCorrection` to `"secondChargebackCorrection"` · `AtmWithdrawal` to `"atmWithdrawal"` · `AtmWithdrawalReversal` to `"atmWithdrawalReversal"` · `InternalTransfer` to `"internalTransfer"` · `InternalDirectDebit` to `"internalDirectDebit"` · `ManualCorrection` to `"manualCorrection"` · `InvoiceDeduction` to `"invoiceDeduction"` · `DepositCorrection` to `"depositCorrection"` · `ReserveAdjustment` to `"reserveAdjustment"` · `BankTransfer` to `"bankTransfer"` · `BankDirectDebit` to `"bankDirectDebit"` · `CardTransfer` to `"cardTransfer"` · `MiscCost` to `"miscCost"` · `PaymentCost` to `"paymentCost"` · `Fee` to `"fee"` · `Leftover` to `"leftover"` · `Grant` to `"grant"` · `CapitalFundsCollection` to `"capitalFundsCollection"` · `CashOutInstruction` to `"cashOutInstruction"` · `CashoutFee` to `"cashoutFee"` · `CashoutRepayment` to `"cashoutRepayment"` · `CashoutFunding` to `"cashoutFunding"` · `Repayment` to `"repayment"` · `Installment` to `"installment"` · `InstallmentReversal` to `"installmentReversal"` · `BalanceAdjustment` to `"balanceAdjustment"` · `BalanceRollover` to `"balanceRollover"` · `BalanceMigration` to `"balanceMigration"` | `type314Schema` |
| `Type315` | `BusinessTrust` to `"businessTrust"` · `CashManagementTrust` to `"cashManagementTrust"` · `CharitableTrust` to `"charitableTrust"` · `CorporateUnitTrust` to `"corporateUnitTrust"` · `DeceasedEstate` to `"deceasedEstate"` · `DiscretionaryTrust` to `"discretionaryTrust"` · `DiscretionaryInvestmentTrust` to `"discretionaryInvestmentTrust"` · `DiscretionaryServicesManagementTrust` to `"discretionaryServicesManagementTrust"` · `DiscretionaryTradingTrust` to `"discretionaryTradingTrust"` · `FamilyTrust` to `"familyTrust"` · `FirstHomeSaverAccountsTrust` to `"firstHomeSaverAccountsTrust"` · `FixedTrust` to `"fixedTrust"` · `FixedUnitTrust` to `"fixedUnitTrust"` · `HybridTrust` to `"hybridTrust"` · `ListedPublicUnitTrust` to `"listedPublicUnitTrust"` · `OtherTrust` to `"otherTrust"` · `PooledSuperannuationTrust` to `"pooledSuperannuationTrust"` · `PublicTradingTrust` to `"publicTradingTrust"` · `UnlistedPublicUnitTrust` to `"unlistedPublicUnitTrust"` | `type315Schema` |
| `Type32` | `Googlepay` to `"googlepay"` | `type32Schema` |
| `Type321` | `Individual` to `"individual"` · `Organization` to `"organization"` · `SoleProprietorship` to `"soleProprietorship"` · `Trust` to `"trust"` · `UnincorporatedPartnership` to `"unincorporatedPartnership"` | `type321Schema` |
| `Type33` | `Ideal` to `"ideal"` | `type33Schema` |
| `Type331` | `Ios` to `"ios"` · `Android` to `"android"` · `Browser` to `"browser"` | `type331Schema` |
| `Type332` | `LimitedPartnership` to `"limitedPartnership"` · `GeneralPartnership` to `"generalPartnership"` · `FamilyPartnership` to `"familyPartnership"` · `CommercialPartnership` to `"commercialPartnership"` · `PublicPartnership` to `"publicPartnership"` · `OtherPartnership` to `"otherPartnership"` · `Gbr` to `"gbr"` · `Gmbh` to `"gmbh"` · `Kgaa` to `"kgaa"` · `Cv` to `"cv"` · `Vof` to `"vof"` · `Maatschap` to `"maatschap"` · `PrivateFundLimitedPartnership` to `"privateFundLimitedPartnership"` · `BusinessTrustEntity` to `"businessTrustEntity"` · `BusinessPartnership` to `"businessPartnership"` · `LimitedLiabilityPartnership` to `"limitedLiabilityPartnership"` · `Eg` to `"eg"` · `Cooperative` to `"cooperative"` · `Vos` to `"vos"` · `ComunidadDeBienes` to `"comunidadDeBienes"` · `HerenciaYacente` to `"herenciaYacente"` · `ComunidadDePropietarios` to `"comunidadDePropietarios"` · `Sep` to `"sep"` · `Sca` to `"sca"` · `Bt` to `"bt"` · `Kkt` to `"kkt"` · `Scs` to `"scs"` · `Snc` to `"snc"` | `type332Schema` |
| `Type34` | `Paywithgoogle` to `"paywithgoogle"` | `type34Schema` |
| `Type341` | `IbanAccountIdentificationRequirement` to `"ibanAccountIdentificationRequirement"` | `type341Schema` |
| `Type342` | `BankTransfer` to `"bankTransfer"` · `InternalTransfer` to `"internalTransfer"` · `InternalDirectDebit` to `"internalDirectDebit"` | `type342Schema` |
| `Type35` | `Sepadirectdebit` to `"sepadirectdebit"` | `type35Schema` |
| `Type351` | `BankAccount` to `"bankAccount"` · `Card` to `"card"` | `type351Schema` |
| `Type352` | `CashoutRepayment` to `"cashoutRepayment"` · `CashoutFee` to `"cashoutFee"` | `type352Schema` |
| `Type353` | `Individual` to `"individual"` · `Organization` to `"organization"` · `SoleProprietorship` to `"soleProprietorship"` · `Trust` to `"trust"` · `UnincorporatedPartnership` to `"unincorporatedPartnership"` | `type353Schema` |
| `Type36` | `DragonpayEbanking` to `"dragonpay_ebanking"` · `DragonpayOtcBanking` to `"dragonpay_otc_banking"` · `DragonpayOtcNonBanking` to `"dragonpay_otc_non_banking"` · `DragonpayOtcPhilippines` to `"dragonpay_otc_philippines"` | `type36Schema` |
| `Type361` | `BankAccount` to `"bankAccount"` · `RecurringDetail` to `"recurringDetail"` | `type361Schema` |
| `Type37` | `EbankingFi` to `"ebanking_FI"` | `type37Schema` |
| `Type371` | `PaymentInstrumentRequirement` to `"paymentInstrumentRequirement"` | `type371Schema` |
| `Type38` | `EcontextSevenEleven` to `"econtext_seven_eleven"` · `EcontextOnline` to `"econtext_online"` · `Econtext` to `"econtext"` · `EcontextStores` to `"econtext_stores"` · `EcontextAtm` to `"econtext_atm"` | `type38Schema` |
| `Type381` | `Daily` to `"daily"` · `Lifetime` to `"lifetime"` · `Monthly` to `"monthly"` · `PerTransaction` to `"perTransaction"` · `Rolling` to `"rolling"` · `Sliding` to `"sliding"` · `Weekly` to `"weekly"` | `type381Schema` |
| `Type39` | `EftDirectdebitCa` to `"eft_directdebit_CA"` | `type39Schema` |
| `Type391` | `AllowList` to `"allowList"` · `BlockList` to `"blockList"` · `Bypass` to `"bypass"` · `MaxUsage` to `"maxUsage"` · `Velocity` to `"velocity"` | `type391Schema` |
| `Type4` | `Amazonpay` to `"amazonpay"` | `type4Schema` |
| `Type40` | `ExternalToken` to `"externalToken"` | `type40Schema` |
| `Type41` | `Fastlane` to `"fastlane"` | `type41Schema` |
| `Type411` | `UsInstantPayoutAddressRequirement` to `"usInstantPayoutAddressRequirement"` | `type411Schema` |
| `Type42` | `OnlineBankingPl` to `"onlineBanking_PL"` · `Eps` to `"eps"` · `OnlineBankingSk` to `"onlineBanking_SK"` · `OnlineBankingCz` to `"onlineBanking_CZ"` · `OnlinebankingIn` to `"onlinebanking_IN"` | `type42Schema` |
| `Type421` | `UsInternationalAchAddressRequirement` to `"usInternationalAchAddressRequirement"` | `type421Schema` |
| `Type43` | `InstallAndroidCertificate` to `"InstallAndroidCertificate"` | `type43Schema` |
| `Type431` | `UsInternationalAchPriorityRequirement` to `"usInternationalAchPriorityRequirement"` | `type431Schema` |
| `Type44` | `AuLocal` to `"auLocal"` | `type44Schema` |
| `Type45` | `Klarna` to `"klarna"` · `Klarnapayments` to `"klarnapayments"` · `KlarnapaymentsAccount` to `"klarnapayments_account"` · `KlarnapaymentsB2B` to `"klarnapayments_b2b"` · `KlarnaPaynow` to `"klarna_paynow"` · `KlarnaAccount` to `"klarna_account"` · `KlarnaB2B` to `"klarna_b2b"` | `type45Schema` |
| `Type46` | `KlarnaNetwork` to `"klarna_network"` | `type46Schema` |
| `Type461` | `BalanceAccount` to `"balanceAccount"` · `AccountHolder` to `"accountHolder"` · `BalancePlatform` to `"balancePlatform"` | `type461Schema` |
| `Type47` | `Masterpass` to `"masterpass"` | `type47Schema` |
| `Type471` | `Balance` to `"balance"` | `type471Schema` |
| `Type48` | `Mbway` to `"mbway"` | `type48Schema` |
| `Type49` | `Mobilepay` to `"mobilepay"` | `type49Schema` |
| `Type5` | `Ancv` to `"ancv"` | `type5Schema` |
| `Type50` | `MolpayEbankingFpxMy` to `"molpay_ebanking_fpx_MY"` · `MolpayEbankingTh` to `"molpay_ebanking_TH"` | `type50Schema` |
| `Type51` | `Openinvoice` to `"openinvoice"` · `AfterpayDirectdebit` to `"afterpay_directdebit"` · `AtomePos` to `"atome_pos"` | `type51Schema` |
| `Type510` | `Landline` to `"landline"` · `Mobile` to `"mobile"` | `type510Schema` |
| `Type52` | `PaybybankAisDd` to `"paybybank_AIS_DD"` | `type52Schema` |
| `Type53` | `Paybybank` to `"paybybank"` | `type53Schema` |
| `Type54` | `Paypal` to `"paypal"` | `type54Schema` |
| `Type55` | `Paypay` to `"paypay"` | `type55Schema` |
| `Type56` | `Payto` to `"payto"` | `type56Schema` |
| `Type57` | `PayuInUpi` to `"payu_IN_upi"` | `type57Schema` |
| `Type58` | `Abrapetite` to `"abrapetite"` · `AbrapetiteCredit` to `"abrapetite_credit"` · `AbrapetiteDebit` to `"abrapetite_debit"` · `AbrapetitePrepaid` to `"abrapetite_prepaid"` · `Accel` to `"accel"` · `Ach` to `"ach"` · `Affirm` to `"affirm"` · `Afterpaytouch` to `"afterpaytouch"` · `Alelo` to `"alelo"` · `Alipay` to `"alipay"` · `AlipayHk` to `"alipay_hk"` · `AlipayPlus` to `"alipay_plus"` · `AlipayPlusAlipayCn` to `"alipay_plus_alipay_cn"` · `AlipayPlusAlipayHk` to `"alipay_plus_alipay_hk"` · `AlipayPlusDana` to `"alipay_plus_dana"` · `AlipayPlusGcash` to `"alipay_plus_gcash"` · `AlipayPlusKakaopay` to `"alipay_plus_kakaopay"` · `AlipayPlusKplus` to `"alipay_plus_kplus"` · `AlipayPlusNaverpay` to `"alipay_plus_naverpay"` · `AlipayPlusRabbitlinepay` to `"alipay_plus_rabbitlinepay"` · `AlipayPlusTosspay` to `"alipay_plus_tosspay"` · `AlipayPlusTouchngo` to `"alipay_plus_touchngo"` · `AlipayPlusTruemoney` to `"alipay_plus_truemoney"` · `AlipayWap` to `"alipay_wap"` · `Amex` to `"amex"` · `Applepay` to `"applepay"` · `Avancard` to `"avancard"` · `AvancardCredit` to `"avancard_credit"` · `AvancardDebit` to `"avancard_debit"` · `BaneseCard` to `"banese_card"` · `BaneseCardCredit` to `"banese_card_credit"` · `BaneseCardDebit` to `"banese_card_debit"` · `BaneseCardPrepaid` to `"banese_card_prepaid"` · `Bcmc` to `"bcmc"` · `Blik` to `"blik"` · `BlikPos` to `"blik_pos"` · `BrSchemes` to `"br_schemes"` · `Carnet` to `"carnet"` · `Cartebancaire` to `"cartebancaire"` · `Cashapp` to `"cashapp"` · `Clearpay` to `"clearpay"` · `Clicktopay` to `"clicktopay"` · `Cooper` to `"cooper"` · `CooperCredit` to `"cooper_credit"` · `CooperDebit` to `"cooper_debit"` · `CooperFoodDebit` to `"cooper_food_debit"` · `CooperMealDebit` to `"cooper_meal_debit"` · `CooperPrepaid` to `"cooper_prepaid"` · `CooperPrivateCredit` to `"cooper_private_credit"` · `CooperRetailCredit` to `"cooper_retail_credit"` · `Credtodos` to `"credtodos"` · `CredtodosPrivateCredit` to `"credtodos_private_credit"` · `CredtodosPrivateDebit` to `"credtodos_private_debit"` · `Cup` to `"cup"` · `Diners` to `"diners"` · `DirectdebitGb` to `"directdebit_GB"` · `Discover` to `"discover"` · `EbankingFi` to `"ebanking_FI"` · `EftDirectdebitCa` to `"eft_directdebit_CA"` · `EftposAustralia` to `"eftpos_australia"` · `Elo` to `"elo"` · `Elocredit` to `"elocredit"` · `Elodebit` to `"elodebit"` · `Girocard` to `"girocard"` · `Givex` to `"givex"` · `Googlepay` to `"googlepay"` · `GreenCard` to `"green_card"` · `GreenCardCredit` to `"green_card_credit"` · `GreenCardDebit` to `"green_card_debit"` · `GreenCardFoodPrepaid` to `"green_card_food_prepaid"` · `GreenCardMealPrepaid` to `"green_card_meal_prepaid"` · `GreenCardPrepaid` to `"green_card_prepaid"` · `Hiper` to `"hiper"` · `Hipercard` to `"hipercard"` · `Ideal` to `"ideal"` · `InteracCard` to `"interac_card"` · `Jcb` to `"jcb"` · `Klarna` to `"klarna"` · `KlarnaAccount` to `"klarna_account"` · `KlarnaB2B` to `"klarna_b2b"` · `KlarnaPaynow` to `"klarna_paynow"` · `LeCard` to `"le_card"` · `LeCardCredit` to `"le_card_credit"` · `LeCardDebit` to `"le_card_debit"` · `Maestro` to `"maestro"` · `MaestroUsa` to `"maestro_usa"` · `Maxifrota` to `"maxifrota"` · `MaxifrotaPrepaid` to `"maxifrota_prepaid"` · `Mbway` to `"mbway"` · `Mc` to `"mc"` · `Mcdebit` to `"mcdebit"` · `MealVoucherFr` to `"mealVoucher_FR"` · `Megaleve` to `"megaleve"` · `MegaleveCredit` to `"megaleve_credit"` · `MegaleveDebit` to `"megaleve_debit"` · `Mobilepay` to `"mobilepay"` · `Multibanco` to `"multibanco"` · `Nutricash` to `"nutricash"` · `NutricashPrepaid` to `"nutricash_prepaid"` · `Nyce` to `"nyce"` · `OnlineBankingPl` to `"onlineBanking_PL"` · `Paybybank` to `"paybybank"` · `PaybybankPlaid` to `"paybybank_plaid"` · `Payme` to `"payme"` · `PaymePos` to `"payme_pos"` · `Paynow` to `"paynow"` · `PaynowPos` to `"paynow_pos"` · `Paypal` to `"paypal"` · `Payto` to `"payto"` · `PersonalCard` to `"personal_card"` · `PersonalCardCredit` to `"personal_card_credit"` · `PersonalCardDebit` to `"personal_card_debit"` · `Pulse` to `"pulse"` · `Romcard` to `"romcard"` · `RomcardCredit` to `"romcard_credit"` · `RomcardDebit` to `"romcard_debit"` · `Senff` to `"senff"` · `SenffCredit` to `"senff_credit"` · `Sepadirectdebit` to `"sepadirectdebit"` · `Sodexo` to `"sodexo"` · `Star` to `"star"` · `Svs` to `"svs"` · `Swish` to `"swish"` · `Ticket` to `"ticket"` · `TodoGiftcard` to `"todo_giftcard"` · `Trustly` to `"trustly"` · `Twint` to `"twint"` · `TwintPos` to `"twint_pos"` · `UpBrazil` to `"up_brazil"` · `UpBrazilCredit` to `"up_brazil_credit"` · `UpBrazilDebit` to `"up_brazil_debit"` · `UpBrazilPrepaid` to `"up_brazil_prepaid"` · `ValeRefeicao` to `"vale_refeicao"` · `ValeRefeicaoPrepaid` to `"vale_refeicao_prepaid"` · `Valuelink` to `"valuelink"` · `VegasCard` to `"vegas_card"` · `VegasCardCredit` to `"vegas_card_credit"` · `VegasCardDebit` to `"vegas_card_debit"` · `VeroCard` to `"vero_card"` · `VeroCardCredit` to `"vero_card_credit"` · `VeroCardDebit` to `"vero_card_debit"` · `VeroCardPrepaid` to `"vero_card_prepaid"` · `Vipps` to `"vipps"` · `Visa` to `"visa"` · `Visadebit` to `"visadebit"` · `Vpay` to `"vpay"` · `Wechatpay` to `"wechatpay"` · `WechatpayPos` to `"wechatpay_pos"` | `type58Schema` |
| `Type59` | `Alipay` to `"alipay"` · `Multibanco` to `"multibanco"` · `BankTransfer` to `"bankTransfer"` · `BankTransferIban` to `"bankTransfer_IBAN"` · `Paynow` to `"paynow"` · `AffirmPos` to `"affirm_pos"` · `Iris` to `"iris"` · `Wero` to `"wero"` · `Trustly` to `"trustly"` · `Trustlyvector` to `"trustlyvector"` · `Oney` to `"oney"` · `Facilypay` to `"facilypay"` · `Facilypay3X` to `"facilypay_3x"` · `Facilypay4X` to `"facilypay_4x"` · `Facilypay6X` to `"facilypay_6x"` · `Facilypay10X` to `"facilypay_10x"` · `Facilypay12X` to `"facilypay_12x"` · `Unionpay` to `"unionpay"` · `KcpBanktransfer` to `"kcp_banktransfer"` · `KcpPayco` to `"kcp_payco"` · `KcpCreditcard` to `"kcp_creditcard"` · `WechatpaySdk` to `"wechatpaySDK"` · `WechatpayQr` to `"wechatpayQR"` · `WechatpayWeb` to `"wechatpayWeb"` · `MolpayBoost` to `"molpay_boost"` · `WalletIn` to `"wallet_IN"` · `PayuInCashcard` to `"payu_IN_cashcard"` · `PayuInNb` to `"payu_IN_nb"` · `Paytm` to `"paytm"` · `MolpayEbankingVn` to `"molpay_ebanking_VN"` · `MolpayEbankingMy` to `"molpay_ebanking_MY"` · `MolpayEbankingDirectMy` to `"molpay_ebanking_direct_MY"` · `Swish` to `"swish"` · `Bizum` to `"bizum"` · `Walley` to `"walley"` · `WalleyB2B` to `"walley_b2b"` · `Paypo` to `"paypo"` · `Scalapay` to `"scalapay"` · `Scalapay3X` to `"scalapay_3x"` · `Scalapay4X` to `"scalapay_4x"` · `MolpayFpx` to `"molpay_fpx"` · `Payme` to `"payme"` · `PaymePos` to `"payme_pos"` · `Konbini` to `"konbini"` · `DirectEbanking` to `"directEbanking"` · `Boletobancario` to `"boletobancario"` · `Cashticket` to `"cashticket"` · `Ikano` to `"ikano"` · `Karenmillen` to `"karenmillen"` · `Oasis` to `"oasis"` · `Warehouse` to `"warehouse"` · `PrimeiropayBoleto` to `"primeiropay_boleto"` · `Mada` to `"mada"` · `Benefit` to `"benefit"` · `Knet` to `"knet"` · `Omannet` to `"omannet"` · `KcpNaverpay` to `"kcp_naverpay"` · `Fawry` to `"fawry"` · `Atome` to `"atome"` · `Naps` to `"naps"` · `Nordea` to `"nordea"` · `BoletobancarioBradesco` to `"boletobancario_bradesco"` · `BoletobancarioItau` to `"boletobancario_itau"` · `BoletobancarioSantander` to `"boletobancario_santander"` · `BoletobancarioBancodobrasil` to `"boletobancario_bancodobrasil"` · `BoletobancarioHsbc` to `"boletobancario_hsbc"` · `MolpayMaybank2U` to `"molpay_maybank2u"` · `MolpayCimb` to `"molpay_cimb"` · `MolpayRhb` to `"molpay_rhb"` · `MolpayAmb` to `"molpay_amb"` · `MolpayHlb` to `"molpay_hlb"` · `MolpayAffinEpg` to `"molpay_affin_epg"` · `MolpayBankislam` to `"molpay_bankislam"` · `MolpayPublicbank` to `"molpay_publicbank"` · `FpxAgrobank` to `"fpx_agrobank"` · `Touchngo` to `"touchngo"` · `Maybank2UMae` to `"maybank2u_mae"` · `Duitnow` to `"duitnow"` · `Promptpay` to `"promptpay"` · `TwintPos` to `"twint_pos"` · `AlipayHk` to `"alipay_hk"` · `AlipayHkWeb` to `"alipay_hk_web"` · `AlipayHkWap` to `"alipay_hk_wap"` · `AlipayWap` to `"alipay_wap"` · `Balanceplatform` to `"balanceplatform"` | `type59Schema` |
| `Type6` | `Androidpay` to `"androidpay"` | `type6Schema` |
| `Type60` | `Pix` to `"pix"` | `type60Schema` |
| `Type61` | `PaybybankPix` to `"paybybank_pix"` | `type61Schema` |
| `Type610` | `ReleaseUpdate` to `"ReleaseUpdate"` | `type610Schema` |
| `Type611` | `AuBsbCode` to `"auBsbCode"` · `CaRoutingNumber` to `"caRoutingNumber"` · `GbSortCode` to `"gbSortCode"` · `UsRoutingNumber` to `"usRoutingNumber"` | `type611Schema` |
| `Type62` | `PsePayulatam` to `"pse_payulatam"` | `type62Schema` |
| `Type63` | `Rakutenpay` to `"rakutenpay"` | `type63Schema` |
| `Type64` | `Ratepay` to `"ratepay"` · `RatepayDirectdebit` to `"ratepay_directdebit"` | `type64Schema` |
| `Type65` | `Riverty` to `"riverty"` · `RivertyAccount` to `"riverty_account"` · `RivertyInstallments` to `"riverty_installments"` · `SepadirectdebitRiverty` to `"sepadirectdebit_riverty"` | `type65Schema` |
| `Type66` | `Samsungpay` to `"samsungpay"` | `type66Schema` |
| `Type67` | `Sepadirectdebit` to `"sepadirectdebit"` · `SepadirectdebitAmazonpay` to `"sepadirectdebit_amazonpay"` | `type67Schema` |
| `Type68` | `AlipayPlus` to `"alipay_plus"` · `AlipayPlusAlipayCn` to `"alipay_plus_alipay_cn"` · `AlipayPlusAlipayHk` to `"alipay_plus_alipay_hk"` · `AlipayPlusDana` to `"alipay_plus_dana"` · `AlipayPlusGcash` to `"alipay_plus_gcash"` · `AlipayPlusKakaopay` to `"alipay_plus_kakaopay"` · `AlipayPlusKplus` to `"alipay_plus_kplus"` · `AlipayPlusNaverpay` to `"alipay_plus_naverpay"` · `AlipayPlusRabbitlinepay` to `"alipay_plus_rabbitlinepay"` · `AlipayPlusTosspay` to `"alipay_plus_tosspay"` · `AlipayPlusTouchngo` to `"alipay_plus_touchngo"` · `AlipayPlusTruemoney` to `"alipay_plus_truemoney"` · `BcmcMobile` to `"bcmc_mobile"` · `BcmcMobileQr` to `"bcmc_mobile_QR"` · `BcmcMobileApp` to `"bcmc_mobile_app"` · `MomoWallet` to `"momo_wallet"` · `MomoWalletApp` to `"momo_wallet_app"` · `PaymayaWallet` to `"paymaya_wallet"` · `GrabpaySg` to `"grabpay_SG"` · `GrabpayMy` to `"grabpay_MY"` · `GrabpayTh` to `"grabpay_TH"` · `GrabpayId` to `"grabpay_ID"` · `GrabpayVn` to `"grabpay_VN"` · `GrabpayPh` to `"grabpay_PH"` · `Oxxo` to `"oxxo"` · `Gcash` to `"gcash"` · `Dana` to `"dana"` · `Kakaopay` to `"kakaopay"` · `Truemoney` to `"truemoney"` · `Paysafecard` to `"paysafecard"` · `GopayWallet` to `"gopay_wallet"` | `type68Schema` |
| `Type69` | `Twint` to `"twint"` | `type69Schema` |
| `Type7` | `Applepay` to `"applepay"` | `type7Schema` |
| `Type70` | `UpiCollect` to `"upi_collect"` | `type70Schema` |
| `Type71` | `UpiIntent` to `"upi_intent"` | `type71Schema` |
| `Type72` | `UpiQr` to `"upi_qr"` | `type72Schema` |
| `Type73` | `Vipps` to `"vipps"` | `type73Schema` |
| `Type74` | `Visacheckout` to `"visacheckout"` | `type74Schema` |
| `Type75` | `Wechatpay` to `"wechatpay"` · `WechatpayPos` to `"wechatpay_pos"` | `type75Schema` |
| `Type76` | `WechatpayMiniProgram` to `"wechatpayMiniProgram"` | `type76Schema` |
| `Type77` | `Zip` to `"zip"` · `ZipPos` to `"zip_pos"` | `type77Schema` |
| `Type78` | `UninstallAndroidApp` to `"UninstallAndroidApp"` | `type78Schema` |
| `Type79` | `AdditionalBankIdentificationRequirement` to `"additionalBankIdentificationRequirement"` | `type79Schema` |
| `Type8` | `Append` to `"append"` · `Dynamic` to `"dynamic"` · `Fixed` to `"fixed"` | `type8Schema` |
| `Type80` | `AcquiringFees` to `"AcquiringFees"` · `AdyenCommission` to `"AdyenCommission"` · `AdyenFees` to `"AdyenFees"` · `AdyenMarkup` to `"AdyenMarkup"` · `BalanceAccount` to `"BalanceAccount"` · `Commission` to `"Commission"` · `Default` to `"Default"` · `Interchange` to `"Interchange"` · `MarketPlace` to `"MarketPlace"` · `PaymentFee` to `"PaymentFee"` · `Remainder` to `"Remainder"` · `SchemeFee` to `"SchemeFee"` · `Surcharge` to `"Surcharge"` · `Tip` to `"Tip"` · `Vat` to `"VAT"` | `type80Schema` |
| `Type81` | `UninstallAndroidCertificate` to `"UninstallAndroidCertificate"` | `type81Schema` |
| `Type82` | `AddressRequirement` to `"addressRequirement"` | `type82Schema` |
| `Type9` | `Aupay` to `"aupay"` | `type9Schema` |
| `Type91` | `AmountMinMaxRequirement` to `"amountMinMaxRequirement"` | `type91Schema` |
| `TypeCode` | `Personal` to `"Personal"` · `Company` to `"Company"` | `typeCodeSchema` |
| `TypeCode1` | `Personal` to `"Personal"` · `Company` to `"Company"` | `typeCode1Schema` |
| `TypesWithError` | `Abrapetite` to `"abrapetite"` · `AbrapetiteCredit` to `"abrapetite_credit"` · `AbrapetiteDebit` to `"abrapetite_debit"` · `AbrapetitePrepaid` to `"abrapetite_prepaid"` · `Accel` to `"accel"` · `Ach` to `"ach"` · `Affirm` to `"affirm"` · `Afterpaytouch` to `"afterpaytouch"` · `Alelo` to `"alelo"` · `Alipay` to `"alipay"` · `AlipayHk` to `"alipay_hk"` · `AlipayPlus` to `"alipay_plus"` · `AlipayPlusAlipayCn` to `"alipay_plus_alipay_cn"` · `AlipayPlusAlipayHk` to `"alipay_plus_alipay_hk"` · `AlipayPlusDana` to `"alipay_plus_dana"` · `AlipayPlusGcash` to `"alipay_plus_gcash"` · `AlipayPlusKakaopay` to `"alipay_plus_kakaopay"` · `AlipayPlusKplus` to `"alipay_plus_kplus"` · `AlipayPlusNaverpay` to `"alipay_plus_naverpay"` · `AlipayPlusRabbitlinepay` to `"alipay_plus_rabbitlinepay"` · `AlipayPlusTosspay` to `"alipay_plus_tosspay"` · `AlipayPlusTouchngo` to `"alipay_plus_touchngo"` · `AlipayPlusTruemoney` to `"alipay_plus_truemoney"` · `AlipayWap` to `"alipay_wap"` · `Amex` to `"amex"` · `Applepay` to `"applepay"` · `Avancard` to `"avancard"` · `AvancardCredit` to `"avancard_credit"` · `AvancardDebit` to `"avancard_debit"` · `BaneseCard` to `"banese_card"` · `BaneseCardCredit` to `"banese_card_credit"` · `BaneseCardDebit` to `"banese_card_debit"` · `BaneseCardPrepaid` to `"banese_card_prepaid"` · `Bcmc` to `"bcmc"` · `Blik` to `"blik"` · `BlikPos` to `"blik_pos"` · `BrSchemes` to `"br_schemes"` · `Carnet` to `"carnet"` · `Cartebancaire` to `"cartebancaire"` · `Cashapp` to `"cashapp"` · `Clearpay` to `"clearpay"` · `Clicktopay` to `"clicktopay"` · `Cooper` to `"cooper"` · `CooperCredit` to `"cooper_credit"` · `CooperDebit` to `"cooper_debit"` · `CooperFoodDebit` to `"cooper_food_debit"` · `CooperMealDebit` to `"cooper_meal_debit"` · `CooperPrepaid` to `"cooper_prepaid"` · `CooperPrivateCredit` to `"cooper_private_credit"` · `CooperRetailCredit` to `"cooper_retail_credit"` · `Credtodos` to `"credtodos"` · `CredtodosPrivateCredit` to `"credtodos_private_credit"` · `CredtodosPrivateDebit` to `"credtodos_private_debit"` · `Cup` to `"cup"` · `Diners` to `"diners"` · `DirectdebitGb` to `"directdebit_GB"` · `Discover` to `"discover"` · `EbankingFi` to `"ebanking_FI"` · `EftDirectdebitCa` to `"eft_directdebit_CA"` · `EftposAustralia` to `"eftpos_australia"` · `Elo` to `"elo"` · `Elocredit` to `"elocredit"` · `Elodebit` to `"elodebit"` · `Girocard` to `"girocard"` · `Givex` to `"givex"` · `Googlepay` to `"googlepay"` · `GreenCard` to `"green_card"` · `GreenCardCredit` to `"green_card_credit"` · `GreenCardDebit` to `"green_card_debit"` · `GreenCardFoodPrepaid` to `"green_card_food_prepaid"` · `GreenCardMealPrepaid` to `"green_card_meal_prepaid"` · `GreenCardPrepaid` to `"green_card_prepaid"` · `Hiper` to `"hiper"` · `Hipercard` to `"hipercard"` · `Ideal` to `"ideal"` · `InteracCard` to `"interac_card"` · `Jcb` to `"jcb"` · `Klarna` to `"klarna"` · `KlarnaAccount` to `"klarna_account"` · `KlarnaB2B` to `"klarna_b2b"` · `KlarnaPaynow` to `"klarna_paynow"` · `LeCard` to `"le_card"` · `LeCardCredit` to `"le_card_credit"` · `LeCardDebit` to `"le_card_debit"` · `Maestro` to `"maestro"` · `MaestroUsa` to `"maestro_usa"` · `Maxifrota` to `"maxifrota"` · `MaxifrotaPrepaid` to `"maxifrota_prepaid"` · `Mbway` to `"mbway"` · `Mc` to `"mc"` · `Mcdebit` to `"mcdebit"` · `MealVoucherFr` to `"mealVoucher_FR"` · `Megaleve` to `"megaleve"` · `MegaleveCredit` to `"megaleve_credit"` · `MegaleveDebit` to `"megaleve_debit"` · `Mobilepay` to `"mobilepay"` · `Multibanco` to `"multibanco"` · `Nutricash` to `"nutricash"` · `NutricashPrepaid` to `"nutricash_prepaid"` · `Nyce` to `"nyce"` · `OnlineBankingPl` to `"onlineBanking_PL"` · `Paybybank` to `"paybybank"` · `PaybybankPlaid` to `"paybybank_plaid"` · `Payme` to `"payme"` · `PaymePos` to `"payme_pos"` · `Paynow` to `"paynow"` · `PaynowPos` to `"paynow_pos"` · `Paypal` to `"paypal"` · `Payto` to `"payto"` · `PersonalCard` to `"personal_card"` · `PersonalCardCredit` to `"personal_card_credit"` · `PersonalCardDebit` to `"personal_card_debit"` · `Pulse` to `"pulse"` · `Romcard` to `"romcard"` · `RomcardCredit` to `"romcard_credit"` · `RomcardDebit` to `"romcard_debit"` · `Senff` to `"senff"` · `SenffCredit` to `"senff_credit"` · `Sepadirectdebit` to `"sepadirectdebit"` · `Sodexo` to `"sodexo"` · `Star` to `"star"` · `Svs` to `"svs"` · `Swish` to `"swish"` · `Ticket` to `"ticket"` · `TodoGiftcard` to `"todo_giftcard"` · `Trustly` to `"trustly"` · `Twint` to `"twint"` · `TwintPos` to `"twint_pos"` · `UpBrazil` to `"up_brazil"` · `UpBrazilCredit` to `"up_brazil_credit"` · `UpBrazilDebit` to `"up_brazil_debit"` · `UpBrazilPrepaid` to `"up_brazil_prepaid"` · `ValeRefeicao` to `"vale_refeicao"` · `ValeRefeicaoPrepaid` to `"vale_refeicao_prepaid"` · `Valuelink` to `"valuelink"` · `VegasCard` to `"vegas_card"` · `VegasCardCredit` to `"vegas_card_credit"` · `VegasCardDebit` to `"vegas_card_debit"` · `VeroCard` to `"vero_card"` · `VeroCardCredit` to `"vero_card_credit"` · `VeroCardDebit` to `"vero_card_debit"` · `VeroCardPrepaid` to `"vero_card_prepaid"` · `Vipps` to `"vipps"` · `Visa` to `"visa"` · `Visadebit` to `"visadebit"` · `Vpay` to `"vpay"` · `Wechatpay` to `"wechatpay"` · `WechatpayPos` to `"wechatpay_pos"` | `typesWithErrorSchema` |
| `Unit` | `Days` to `"days"` · `Hours` to `"hours"` · `Minutes` to `"minutes"` · `Months` to `"months"` · `Weeks` to `"weeks"` | `unitSchema` |
| `Value` | `BalanceAccount` to `"balanceAccount"` · `BankAccount` to `"bankAccount"` · `Card` to `"card"` · `TransferInstrument` to `"transferInstrument"` | `valueSchema` |
| `Value1` | `Friday` to `"friday"` · `Monday` to `"monday"` · `Saturday` to `"saturday"` · `Sunday` to `"sunday"` · `Thursday` to `"thursday"` · `Tuesday` to `"tuesday"` · `Wednesday` to `"wednesday"` | `value1Schema` |
| `Value2` | `Barcode` to `"barcode"` · `Chip` to `"chip"` · `Cof` to `"cof"` · `Contactless` to `"contactless"` · `Magstripe` to `"magstripe"` · `Manual` to `"manual"` · `Ocr` to `"ocr"` · `Server` to `"server"` · `Unknown` to `"unknown"` | `value2Schema` |
| `Value3` | `AcquirerId` to `"acquirerId"` · `Amount` to `"amount"` · `Currency` to `"currency"` · `MerchantId` to `"merchantId"` · `MerchantName` to `"merchantName"` | `value3Schema` |
| `Value4` | `AtmWithdraw` to `"atmWithdraw"` · `BalanceInquiry` to `"balanceInquiry"` · `Ecommerce` to `"ecommerce"` · `Moto` to `"moto"` · `Pos` to `"pos"` · `Recurring` to `"recurring"` · `Token` to `"token"` · `Unknown` to `"unknown"` | `value4Schema` |
| `Value5` | `BalanceAccount` to `"balanceAccount"` · `BusinessAccount` to `"businessAccount"` | `value5Schema` |
| `Value6` | `Card` to `"CARD"` · `MobilePhone` to `"MOBILE_PHONE"` · `Other` to `"OTHER"` · `Pc` to `"PC"` · `TabletOrEreader` to `"TABLET_OR_EREADER"` · `Unknown` to `"UNKNOWN"` · `WatchOrWristband` to `"WATCH_OR_WRISTBAND"` · `Wearable` to `"WEARABLE"` | `value6Schema` |
| `VatAbsenceReason` | `IndustryExemption` to `"industryExemption"` · `BelowTaxThreshold` to `"belowTaxThreshold"` | `vatAbsenceReasonSchema` |
| `VatAbsenceReason1` | `IndustryExemption` to `"industryExemption"` · `BelowTaxThreshold` to `"belowTaxThreshold"` | `vatAbsenceReason1Schema` |
| `VerificationStatus` | `Valid` to `"valid"` · `Pending` to `"pending"` · `Invalid` to `"invalid"` · `Rejected` to `"rejected"` | `verificationStatusSchema` |
| `VerificationStatus1` | `Invalid` to `"invalid"` · `Pending` to `"pending"` · `Rejected` to `"rejected"` · `Valid` to `"valid"` | `verificationStatus1Schema` |
| `WalletPurpose` | `IdentifiedBoleto` to `"identifiedBoleto"` · `TransferDifferentWallet` to `"transferDifferentWallet"` · `TransferOwnWallet` to `"transferOwnWallet"` · `TransferSameWallet` to `"transferSameWallet"` · `UnidentifiedBoleto` to `"unidentifiedBoleto"` | `walletPurposeSchema` |
| `FormType` | `Us1099K` to `"US1099k"` · `Us1099Nec` to `"US1099nec"` | `formTypeSchema` |
| `SortOrder` | `Asc` to `"asc"` · `Desc` to `"desc"` | `sortOrderSchema` |

**Unions.** A discriminated union is narrowed with an exhaustive `switch` on its tag, with no fallback arm and no type guard to import. One without a discriminant is narrowed on the shape of its arms.

| Union | Variants | Narrow with | Source |
| --- | --- | --- | --- |
| `AccountIdentification` | `type: "iban"` | `switch (x.type)` | `src/models/unions/account-identification.ts` |
| `AccountIdentification11` | `type: "iban"` · `type: "numberAndBic"` · `type: "auLocal"` · `type: "czLocal"` · `type: "noLocal"` · `type: "plLocal"` · `type: "huLocal"` · `type: "seLocal"` · `type: "sgLocal"` · `type: "ukLocal"` · `type: "usLocal"` · `type: "brLocal"` · `type: "dkLocal"` · `type: "caLocal"` · `type: "nzLocal"` · `type: "hkLocal"` | `switch (x.type)` | `src/models/unions/account-identification11.ts` |
| `AccountIdentification2` | `type: "iban"` · `type: "numberAndBic"` · `type: "auLocal"` · `type: "czLocal"` · `type: "noLocal"` · `type: "plLocal"` · `type: "huLocal"` · `type: "seLocal"` · `type: "sgLocal"` · `type: "ukLocal"` · `type: "usLocal"` · `type: "brLocal"` · `type: "dkLocal"` · `type: "caLocal"` · `type: "nzLocal"` · `type: "hkLocal"` | `switch (x.type)` | `src/models/unions/account-identification2.ts` |
| `AccountIdentification21` | `type: "iban"` · `type: "numberAndBic"` · `type: "auLocal"` · `type: "czLocal"` · `type: "noLocal"` · `type: "plLocal"` · `type: "huLocal"` · `type: "seLocal"` · `type: "sgLocal"` · `type: "ukLocal"` · `type: "usLocal"` · `type: "brLocal"` · `type: "dkLocal"` · `type: "caLocal"` · `type: "nzLocal"` · `type: "hkLocal"` | `switch (x.type)` | `src/models/unions/account-identification21.ts` |
| `AccountIdentification3` | no discriminant | `typeof`, or an `in` check | `src/models/unions/account-identification3.ts` |
| `Action11` | `type: "bankTransfer"` · `type: "qrCode"` · `type: "nativeRedirect"` · `type: "redirect"` · `type: "sdk"` · `type: "wechatpaySDK"` · `type: "threeDS2"` · `type: "delegatedAuthentication"` · `type: "await"` · `type: "voucher"` | `switch (x.type)` | `src/models/unions/action11.ts` |
| `ActionDetails` | `type: "InstallAndroidApp"` · `type: "InstallAndroidCertificate"` · `type: "ReleaseUpdate"` · `type: "UninstallAndroidApp"` · `type: "UninstallAndroidCertificate"` · `type: "ForceReboot"` | `switch (x.type)` | `src/models/unions/action-details.ts` |
| `BankAccountIdentification` | `type: "auLocal"` · `type: "brLocal"` · `type: "caLocal"` · `type: "czLocal"` · `type: "dkLocal"` · `type: "hkLocal"` · `type: "huLocal"` · `type: "iban"` · `type: "noLocal"` · `type: "nzLocal"` · `type: "numberAndBic"` · `type: "plLocal"` · `type: "seLocal"` · `type: "sgLocal"` · `type: "ukLocal"` · `type: "usLocal"` | `switch (x.type)` | `src/models/unions/bank-account-identification.ts` |
| `CategoryData` | `type: "issuedCard"` · `type: "platformPayment"` · `type: "bank"` · `type: "internal"` | `switch (x.type)` | `src/models/unions/category-data.ts` |
| `EventsDatum` | `type: "merchantPurchaseData"` · `type: "issuingTransactionData"` · `type: "interchangeData"` | `switch (x.type)` | `src/models/unions/events-datum.ts` |
| `MandateAccountIdentification` | `type: "ukLocal"` | `switch (x.type)` | `src/models/unions/mandate-account-identification.ts` |
| `PaymentDetailsRequest1` | `method: "ideal"` | `switch (x.method)` | `src/models/unions/payment-details-request1.ts` |
| `PaymentMethod1` | `type: "applepay"` · `type: "paywithgoogle"` · `type: "googlepay"` · `type: "scheme"` · `type: "networkToken"` · `type: "ideal"` · `type: "sepadirectdebit"` · `type: "card"` | `switch (x.type)` | `src/models/unions/payment-method1.ts` |
| `PaymentMethod11` | `type: "applepay"` · `type: "samsungpay"` · `type: "androidpay"` · `type: "visacheckout"` · `type: "paywithgoogle"` · `type: "amazonpay"` · `type: "masterpass"` · `type: "googlepay"` · `type: "fastlane"` · `type: "alipay"` · `type: "alipay_plus"` · `type: "alipay_plus_alipay_cn"` · `type: "alipay_plus_alipay_hk"` · `type: "alipay_plus_dana"` · `type: "alipay_plus_gcash"` · `type: "alipay_plus_kakaopay"` · `type: "alipay_plus_kplus"` · `type: "alipay_plus_naverpay"` · `type: "alipay_plus_rabbitlinepay"` · `type: "alipay_plus_tosspay"` · `type: "alipay_plus_touchngo"` · `type: "alipay_plus_truemoney"` · `type: "bcmc"` · `type: "bcmc_mobile"` · `type: "bcmc_mobile_QR"` · `type: "bcmc_mobile_app"` · `type: "scheme"` · `type: "networkToken"` · `type: "altId"` · `type: "externalToken"` · `type: "multibanco"` · `type: "ach"` · `type: "ach_plaid"` · `type: "eft_directdebit_CA"` · `type: "bankTransfer"` · `type: "bankTransfer_IBAN"` · `type: "klarna"` · `type: "klarnapayments"` · `type: "klarnapayments_account"` · `type: "klarnapayments_b2b"` · `type: "klarna_paynow"` · `type: "klarna_account"` · `type: "klarna_b2b"` · `type: "klarna_network"` · `type: "paynow"` · `type: "afterpay_default"` · `type: "afterpaytouch"` · `type: "afterpaytouch_pos"` · `type: "clearpay"` · `type: "afterpay_b2b"` · `type: "zip"` · `type: "zip_pos"` · `type: "ratepay"` · `type: "ratepay_directdebit"` · `type: "affirm"` · `type: "affirm_pos"` · `type: "riverty_account"` · `type: "ideal"` · `type: "iris"` · `type: "wero"` · `type: "paypal"` · `type: "paypay"` · `type: "rakutenpay"` · `type: "aupay"` · `type: "dbarai"` · `type: "trustly"` · `type: "trustlyvector"` · `type: "oney"` · `type: "facilypay"` · `type: "facilypay_3x"` · `type: "facilypay_4x"` · `type: "facilypay_6x"` · `type: "facilypay_10x"` · `type: "facilypay_12x"` · `type: "sepadirectdebit"` · `type: "sepadirectdebit_amazonpay"` · `type: "momo_wallet"` · `type: "momo_wallet_app"` · `type: "doku"` · `type: "doku_wallet"` · `type: "doku_ovo"` · `type: "doku_permata_lite_atm"` · `type: "doku_permata_atm"` · `type: "doku_alfamart"` · `type: "doku_indomaret"` · `type: "doku_sinarmas_va"` · `type: "doku_bca_va"` · `type: "doku_mandiri_va"` · `type: "doku_cimb_va"` · `type: "doku_danamon_va"` · `type: "doku_bri_va"` · `type: "doku_bni_va"` · `type: "doku_bni"` · `type: "vipps"` · `type: "mobilepay"` · `type: "cellulant"` · `type: "unionpay"` · `type: "kcp_banktransfer"` · `type: "kcp_payco"` · `type: "kcp_creditcard"` · `type: "wechatpay"` · `type: "wechatpay_pos"` · `type: "wechatpaySDK"` · `type: "wechatpayQR"` · `type: "wechatpayWeb"` · `type: "wechatpayMiniProgram"` · `type: "molpay_ebanking_fpx_MY"` · `type: "molpay_ebanking_TH"` · `type: "molpay_krungsribank"` · `type: "molpay_krungthaibank"` · `type: "molpay_siamcommercialbank"` · `type: "molpay_bangkokbank"` · `type: "molpay_kbank"` · `type: "molpay_boost"` · `type: "billdesk_online"` · `type: "billdesk_wallet"` · `type: "wallet_IN"` · `type: "payu_IN_cashcard"` · `type: "payu_IN_nb"` · `type: "payu_IN_upi"` · `type: "pse_payulatam"` · `type: "upi_collect"` · `type: "upi_intent"` · `type: "upi_qr"` · `type: "paytm"` · `type: "molpay_ebanking_VN"` · `type: "onlineBanking_PL"` · `type: "eps"` · `type: "paybybank"` · `type: "paybybank_AIS_DD"` · `type: "onlineBanking_SK"` · `type: "onlineBanking_CZ"` · `type: "openinvoice"` · `type: "afterpay_directdebit"` · `type: "atome_pos"` · `type: "doku_paymentmethods"` · `type: "doku_atm_mandiri_va"` · `type: "doku_briepay"` · `type: "doku_mandiri_multipayment_lite"` · `type: "doku_card"` · `type: "doku_atm_mandiri_va_lite"` · `type: "doku_bca_klikpay"` · `type: "doku_mandiri_multipayment"` · `type: "doku_mandiri_clickpay"` · `type: "ebanking_FI"` · `type: "molpay_ebanking_MY"` · `type: "molpay_ebanking_direct_MY"` · `type: "swish"` · `type: "twint"` · `type: "pix"` · `type: "paybybank_pix"` · `type: "bizum"` · `type: "walley"` · `type: "walley_b2b"` · `type: "alma"` · `type: "ancv"` · `type: "paypo"` · `type: "scalapay"` · `type: "scalapay_3x"` · `type: "scalapay_4x"` · `type: "riverty"` · `type: "riverty_installments"` · `type: "sepadirectdebit_riverty"` · `type: "payto"` · `type: "directdebit_AU"` · `type: "molpay_fpx"` · `type: "payme"` · `type: "payme_pos"` · `type: "econtext_seven_eleven"` · `type: "econtext_online"` · `type: "econtext"` · `type: "econtext_stores"` · `type: "econtext_atm"` · `type: "konbini"` · `type: "dragonpay_ebanking"` · `type: "dragonpay_otc_banking"` · `type: "dragonpay_otc_non_banking"` · `type: "dragonpay_otc_philippines"` · `type: "directEbanking"` · `type: "directdebit_GB"` · `type: "boletobancario"` · `type: "giftcard"` · `type: "paymaya_wallet"` · `type: "grabpay_SG"` · `type: "grabpay_MY"` · `type: "grabpay_TH"` · `type: "grabpay_ID"` · `type: "grabpay_VN"` · `type: "grabpay_PH"` · `type: "oxxo"` · `type: "blik"` · `type: "gcash"` · `type: "dana"` · `type: "kakaopay"` · `type: "truemoney"` · `type: "mbway"` · `type: "alliancedata"` · `type: "paysafecard"` · `type: "cashticket"` · `type: "ikano"` · `type: "karenmillen"` · `type: "oasis"` · `type: "warehouse"` · `type: "primeiropay_boleto"` · `type: "mada"` · `type: "benefit"` · `type: "knet"` · `type: "omannet"` · `type: "gopay_wallet"` · `type: "kcp_naverpay"` · `type: "onlinebanking_IN"` · `type: "fawry"` · `type: "atome"` · `type: "naps"` · `type: "nordea"` · `type: "boletobancario_bradesco"` · `type: "boletobancario_itau"` · `type: "boletobancario_santander"` · `type: "boletobancario_bancodobrasil"` · `type: "boletobancario_hsbc"` · `type: "molpay_maybank2u"` · `type: "molpay_cimb"` · `type: "molpay_rhb"` · `type: "molpay_amb"` · `type: "molpay_hlb"` · `type: "molpay_affin_epg"` · `type: "molpay_bankislam"` · `type: "molpay_publicbank"` · `type: "fpx_agrobank"` · `type: "touchngo"` · `type: "maybank2u_mae"` · `type: "duitnow"` · `type: "promptpay"` · `type: "twint_pos"` · `type: "alipay_hk"` · `type: "alipay_hk_web"` · `type: "alipay_hk_wap"` · `type: "alipay_wap"` · `type: "balanceplatform"` · `type: "cashapp"` · `type: "card"` | `switch (x.type)` | `src/models/unions/payment-method11.ts` |
| `Requirement` | `type: "amountMinMaxRequirement"` · `type: "additionalBankIdentificationRequirement"` · `type: "addressRequirement"` · `type: "amountNonZeroDecimalsRequirement"` · `type: "bankAccountIdentificationTypeRequirement"` · `type: "ibanAccountIdentificationRequirement"` · `type: "paymentInstrumentRequirement"` · `type: "usInternationalAchAddressRequirement"` · `type: "usInstantPayoutAddressRequirement"` · `type: "usInternationalAchPriorityRequirement"` | `switch (x.type)` | `src/models/unions/requirement.ts` |
| `Resource` | `type: "accountHolder"` · `type: "legalEntity"` · `type: "paymentInstrument"` | `switch (x.type)` | `src/models/unions/resource.ts` |
| `ShopperIdPaymentMethod` | `type: "payTo"` · `type: "upi_collect"` | `switch (x.type)` | `src/models/unions/shopper-id-payment-method.ts` |
| `Tracing` | `type: "usAch"` · `type: "ukFps"` | `switch (x.type)` | `src/models/unions/tracing.ts` |
| `TracingData` | `type: "usAch"` · `type: "ukFps"` | `switch (x.type)` | `src/models/unions/tracing-data.ts` |
| `Tracking` | `type: "estimation"` · `type: "confirmation"` · `type: "internalReview"` | `switch (x.type)` | `src/models/unions/tracking.ts` |
| `TrackingData` | `type: "estimation"` · `type: "confirmation"` · `type: "internalReview"` | `switch (x.type)` | `src/models/unions/tracking-data.ts` |
| `WebhookSetting` | `type: "balance"` | `switch (x.type)` | `src/models/unions/webhook-setting.ts` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `AbortRequest` | `messageReference` | `MessageReference` |
| `AbortRequest` | `abortReason` | `AbortReason` |
| `AbortRequest` | `displayOutput` | `DisplayOutput` |
| `AbortRequest2` | `messageReference` | `MessageReference` |
| `AbortRequest2` | `abortReason` | `AbortReason` |
| `AbortRequest2` | `displayOutput` | `DisplayOutput` |
| `Account` | `bankAccountUuid` | `bankAccountUUID` |
| `AdditionalData3DSecure` | `allow3Ds2` | `allow3DS2` |
| `AdditionalData3DSecure` | `threeDsVersion` | `threeDSVersion` |
| `AdditionalDataAirline` | `airlineAgencyInvoiceNumber` | `airline.agency_invoice_number` |
| `AdditionalDataAirline` | `airlineAgencyPlanName` | `airline.agency_plan_name` |
| `AdditionalDataAirline` | `airlineAirlineCode` | `airline.airline_code` |
| `AdditionalDataAirline` | `airlineAirlineDesignatorCode` | `airline.airline_designator_code` |
| `AdditionalDataAirline` | `airlineBoardingFee` | `airline.boarding_fee` |
| `AdditionalDataAirline` | `airlineComputerizedReservationSystem` | `airline.computerized_reservation_system` |
| `AdditionalDataAirline` | `airlineCustomerReferenceNumber` | `airline.customer_reference_number` |
| `AdditionalDataAirline` | `airlineDocumentType` | `airline.document_type` |
| `AdditionalDataAirline` | `airlineFlightDate` | `airline.flight_date` |
| `AdditionalDataAirline` | `airlineIssueDate` | `airline.issue_date` |
| `AdditionalDataAirline` | `airlineLegCarrierCode` | `airline.leg.carrier_code` |
| `AdditionalDataAirline` | `airlineLegClassOfTravel` | `airline.leg.class_of_travel` |
| `AdditionalDataAirline` | `airlineLegDateOfTravel` | `airline.leg.date_of_travel` |
| `AdditionalDataAirline` | `airlineLegDepartAirport` | `airline.leg.depart_airport` |
| `AdditionalDataAirline` | `airlineLegDepartTax` | `airline.leg.depart_tax` |
| `AdditionalDataAirline` | `airlineLegDestinationCode` | `airline.leg.destination_code` |
| `AdditionalDataAirline` | `airlineLegFareBaseCode` | `airline.leg.fare_base_code` |
| `AdditionalDataAirline` | `airlineLegFlightNumber` | `airline.leg.flight_number` |
| `AdditionalDataAirline` | `airlineLegStopOverCode` | `airline.leg.stop_over_code` |
| `AdditionalDataAirline` | `airlinePassengerDateOfBirth` | `airline.passenger.date_of_birth` |
| `AdditionalDataAirline` | `airlinePassengerFirstName` | `airline.passenger.first_name` |
| `AdditionalDataAirline` | `airlinePassengerLastName` | `airline.passenger.last_name` |
| `AdditionalDataAirline` | `airlinePassengerPhoneNumber` | `airline.passenger.phone_number` |
| `AdditionalDataAirline` | `airlinePassengerTravellerType` | `airline.passenger.traveller_type` |
| `AdditionalDataAirline` | `airlinePassengerName` | `airline.passenger_name` |
| `AdditionalDataAirline` | `airlineTicketIssueAddress` | `airline.ticket_issue_address` |
| `AdditionalDataAirline` | `airlineTicketNumber` | `airline.ticket_number` |
| `AdditionalDataAirline` | `airlineTravelAgencyCode` | `airline.travel_agency_code` |
| `AdditionalDataAirline` | `airlineTravelAgencyName` | `airline.travel_agency_name` |
| `AdditionalDataCarRental` | `carRentalCheckOutDate` | `carRental.checkOutDate` |
| `AdditionalDataCarRental` | `carRentalCustomerServiceTollFreeNumber` | `carRental.customerServiceTollFreeNumber` |
| `AdditionalDataCarRental` | `carRentalDaysRented` | `carRental.daysRented` |
| `AdditionalDataCarRental` | `carRentalFuelCharges` | `carRental.fuelCharges` |
| `AdditionalDataCarRental` | `carRentalInsuranceCharges` | `carRental.insuranceCharges` |
| `AdditionalDataCarRental` | `carRentalLocationCity` | `carRental.locationCity` |
| `AdditionalDataCarRental` | `carRentalLocationCountry` | `carRental.locationCountry` |
| `AdditionalDataCarRental` | `carRentalLocationStateProvince` | `carRental.locationStateProvince` |
| `AdditionalDataCarRental` | `carRentalNoShowIndicator` | `carRental.noShowIndicator` |
| `AdditionalDataCarRental` | `carRentalOneWayDropOffCharges` | `carRental.oneWayDropOffCharges` |
| `AdditionalDataCarRental` | `carRentalRate` | `carRental.rate` |
| `AdditionalDataCarRental` | `carRentalRateIndicator` | `carRental.rateIndicator` |
| `AdditionalDataCarRental` | `carRentalRentalAgreementNumber` | `carRental.rentalAgreementNumber` |
| `AdditionalDataCarRental` | `carRentalRentalClassId` | `carRental.rentalClassId` |
| `AdditionalDataCarRental` | `carRentalRenterName` | `carRental.renterName` |
| `AdditionalDataCarRental` | `carRentalReturnCity` | `carRental.returnCity` |
| `AdditionalDataCarRental` | `carRentalReturnCountry` | `carRental.returnCountry` |
| `AdditionalDataCarRental` | `carRentalReturnDate` | `carRental.returnDate` |
| `AdditionalDataCarRental` | `carRentalReturnLocationId` | `carRental.returnLocationId` |
| `AdditionalDataCarRental` | `carRentalReturnStateProvince` | `carRental.returnStateProvince` |
| `AdditionalDataCarRental` | `carRentalTaxExemptIndicator` | `carRental.taxExemptIndicator` |
| `AdditionalDataCarRental` | `travelEntertainmentAuthDataDuration` | `travelEntertainmentAuthData.duration` |
| `AdditionalDataCarRental` | `travelEntertainmentAuthDataMarket` | `travelEntertainmentAuthData.market` |
| `AdditionalDataCommon` | `requestedTestAcquirerResponseCode` | `RequestedTestAcquirerResponseCode` |
| `AdditionalDataCommon` | `requestedTestErrorResponseCode` | `RequestedTestErrorResponseCode` |
| `AdditionalDataCommon` | `subMerchantId` | `subMerchantID` |
| `AdditionalDataLevel23` | `enhancedSchemeDataCustomerReference` | `enhancedSchemeData.customerReference` |
| `AdditionalDataLevel23` | `enhancedSchemeDataDestinationCountryCode` | `enhancedSchemeData.destinationCountryCode` |
| `AdditionalDataLevel23` | `enhancedSchemeDataDestinationPostalCode` | `enhancedSchemeData.destinationPostalCode` |
| `AdditionalDataLevel23` | `enhancedSchemeDataDestinationStateProvinceCode` | `enhancedSchemeData.destinationStateProvinceCode` |
| `AdditionalDataLevel23` | `enhancedSchemeDataDutyAmount` | `enhancedSchemeData.dutyAmount` |
| `AdditionalDataLevel23` | `enhancedSchemeDataFreightAmount` | `enhancedSchemeData.freightAmount` |
| `AdditionalDataLevel23` | `enhancedSchemeDataItemDetailLineItemNrCommodityCode` | `enhancedSchemeData.itemDetailLine[itemNr].commodityCode` |
| `AdditionalDataLevel23` | `enhancedSchemeDataItemDetailLineItemNrDescription` | `enhancedSchemeData.itemDetailLine[itemNr].description` |
| `AdditionalDataLevel23` | `enhancedSchemeDataItemDetailLineItemNrDiscountAmount` | `enhancedSchemeData.itemDetailLine[itemNr].discountAmount` |
| `AdditionalDataLevel23` | `enhancedSchemeDataItemDetailLineItemNrProductCode` | `enhancedSchemeData.itemDetailLine[itemNr].productCode` |
| `AdditionalDataLevel23` | `enhancedSchemeDataItemDetailLineItemNrQuantity` | `enhancedSchemeData.itemDetailLine[itemNr].quantity` |
| `AdditionalDataLevel23` | `enhancedSchemeDataItemDetailLineItemNrTotalAmount` | `enhancedSchemeData.itemDetailLine[itemNr].totalAmount` |
| `AdditionalDataLevel23` | `enhancedSchemeDataItemDetailLineItemNrUnitOfMeasure` | `enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure` |
| `AdditionalDataLevel23` | `enhancedSchemeDataItemDetailLineItemNrUnitPrice` | `enhancedSchemeData.itemDetailLine[itemNr].unitPrice` |
| `AdditionalDataLevel23` | `enhancedSchemeDataOrderDate` | `enhancedSchemeData.orderDate` |
| `AdditionalDataLevel23` | `enhancedSchemeDataShipFromPostalCode` | `enhancedSchemeData.shipFromPostalCode` |
| `AdditionalDataLevel23` | `enhancedSchemeDataTotalTaxAmount` | `enhancedSchemeData.totalTaxAmount` |
| `AdditionalDataLodging` | `lodgingSpecialProgramCode` | `lodging.SpecialProgramCode` |
| `AdditionalDataLodging` | `lodgingCheckInDate` | `lodging.checkInDate` |
| `AdditionalDataLodging` | `lodgingCheckOutDate` | `lodging.checkOutDate` |
| `AdditionalDataLodging` | `lodgingCustomerServiceTollFreeNumber` | `lodging.customerServiceTollFreeNumber` |
| `AdditionalDataLodging` | `lodgingFireSafetyActIndicator` | `lodging.fireSafetyActIndicator` |
| `AdditionalDataLodging` | `lodgingFolioCashAdvances` | `lodging.folioCashAdvances` |
| `AdditionalDataLodging` | `lodgingFolioNumber` | `lodging.folioNumber` |
| `AdditionalDataLodging` | `lodgingFoodBeverageCharges` | `lodging.foodBeverageCharges` |
| `AdditionalDataLodging` | `lodgingNoShowIndicator` | `lodging.noShowIndicator` |
| `AdditionalDataLodging` | `lodgingPrepaidExpenses` | `lodging.prepaidExpenses` |
| `AdditionalDataLodging` | `lodgingPropertyPhoneNumber` | `lodging.propertyPhoneNumber` |
| `AdditionalDataLodging` | `lodgingRoom1NumberOfNights` | `lodging.room1.numberOfNights` |
| `AdditionalDataLodging` | `lodgingRoom1Rate` | `lodging.room1.rate` |
| `AdditionalDataLodging` | `lodgingTotalRoomTax` | `lodging.totalRoomTax` |
| `AdditionalDataLodging` | `lodgingTotalTax` | `lodging.totalTax` |
| `AdditionalDataLodging` | `travelEntertainmentAuthDataDuration` | `travelEntertainmentAuthData.duration` |
| `AdditionalDataLodging` | `travelEntertainmentAuthDataMarket` | `travelEntertainmentAuthData.market` |
| `AdditionalDataModifications` | `installmentPaymentDataSelectedInstallmentOption` | `installmentPaymentData.selectedInstallmentOption` |
| `AdditionalDataOpenInvoice` | `openinvoicedataMerchantData` | `openinvoicedata.merchantData` |
| `AdditionalDataOpenInvoice` | `openinvoicedataNumberOfLines` | `openinvoicedata.numberOfLines` |
| `AdditionalDataOpenInvoice` | `openinvoicedataRecipientFirstName` | `openinvoicedata.recipientFirstName` |
| `AdditionalDataOpenInvoice` | `openinvoicedataRecipientLastName` | `openinvoicedata.recipientLastName` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrCurrencyCode` | `openinvoicedataLine[itemNr].currencyCode` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrDescription` | `openinvoicedataLine[itemNr].description` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrItemAmount` | `openinvoicedataLine[itemNr].itemAmount` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrItemId` | `openinvoicedataLine[itemNr].itemId` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrItemVatAmount` | `openinvoicedataLine[itemNr].itemVatAmount` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrItemVatPercentage` | `openinvoicedataLine[itemNr].itemVatPercentage` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrNumberOfItems` | `openinvoicedataLine[itemNr].numberOfItems` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrReturnShippingCompany` | `openinvoicedataLine[itemNr].returnShippingCompany` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrReturnTrackingNumber` | `openinvoicedataLine[itemNr].returnTrackingNumber` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrReturnTrackingUri` | `openinvoicedataLine[itemNr].returnTrackingUri` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrShippingCompany` | `openinvoicedataLine[itemNr].shippingCompany` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrShippingMethod` | `openinvoicedataLine[itemNr].shippingMethod` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrTrackingNumber` | `openinvoicedataLine[itemNr].trackingNumber` |
| `AdditionalDataOpenInvoice` | `openinvoicedataLineItemNrTrackingUri` | `openinvoicedataLine[itemNr].trackingUri` |
| `AdditionalDataOpi` | `opiIncludeTransToken` | `opi.includeTransToken` |
| `AdditionalDataRatepay` | `ratepayInstallmentAmount` | `ratepay.installmentAmount` |
| `AdditionalDataRatepay` | `ratepayInterestRate` | `ratepay.interestRate` |
| `AdditionalDataRatepay` | `ratepayLastInstallmentAmount` | `ratepay.lastInstallmentAmount` |
| `AdditionalDataRatepay` | `ratepayPaymentFirstday` | `ratepay.paymentFirstday` |
| `AdditionalDataRatepay` | `ratepaydataDeliveryDate` | `ratepaydata.deliveryDate` |
| `AdditionalDataRatepay` | `ratepaydataDueDate` | `ratepaydata.dueDate` |
| `AdditionalDataRatepay` | `ratepaydataInvoiceDate` | `ratepaydata.invoiceDate` |
| `AdditionalDataRatepay` | `ratepaydataInvoiceId` | `ratepaydata.invoiceId` |
| `AdditionalDataRetry` | `retryChainAttemptNumber` | `retry.chainAttemptNumber` |
| `AdditionalDataRetry` | `retryOrderAttemptNumber` | `retry.orderAttemptNumber` |
| `AdditionalDataRetry` | `retrySkipRetry` | `retry.skipRetry` |
| `AdditionalDataRisk` | `riskdataCustomFieldName` | `riskdata.[customFieldName]` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrAmountPerItem` | `riskdata.basket.item[itemNr].amountPerItem` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrBrand` | `riskdata.basket.item[itemNr].brand` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrCategory` | `riskdata.basket.item[itemNr].category` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrColor` | `riskdata.basket.item[itemNr].color` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrCurrency` | `riskdata.basket.item[itemNr].currency` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrItemId` | `riskdata.basket.item[itemNr].itemID` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrManufacturer` | `riskdata.basket.item[itemNr].manufacturer` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrProductTitle` | `riskdata.basket.item[itemNr].productTitle` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrQuantity` | `riskdata.basket.item[itemNr].quantity` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrReceiverEmail` | `riskdata.basket.item[itemNr].receiverEmail` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrSize` | `riskdata.basket.item[itemNr].size` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrSku` | `riskdata.basket.item[itemNr].sku` |
| `AdditionalDataRisk` | `riskdataBasketItemItemNrUpc` | `riskdata.basket.item[itemNr].upc` |
| `AdditionalDataRisk` | `riskdataPromotionsPromotionItemNrPromotionCode` | `riskdata.promotions.promotion[itemNr].promotionCode` |
| `AdditionalDataRisk` | `riskdataPromotionsPromotionItemNrPromotionDiscountAmount` | `riskdata.promotions.promotion[itemNr].promotionDiscountAmount` |
| `AdditionalDataRisk` | `riskdataPromotionsPromotionItemNrPromotionDiscountCurrency` | `riskdata.promotions.promotion[itemNr].promotionDiscountCurrency` |
| `AdditionalDataRisk` | `riskdataPromotionsPromotionItemNrPromotionDiscountPercentage` | `riskdata.promotions.promotion[itemNr].promotionDiscountPercentage` |
| `AdditionalDataRisk` | `riskdataPromotionsPromotionItemNrPromotionName` | `riskdata.promotions.promotion[itemNr].promotionName` |
| `AdditionalDataRisk` | `riskdataRiskProfileReference` | `riskdata.riskProfileReference` |
| `AdditionalDataRisk` | `riskdataSkipRisk` | `riskdata.skipRisk` |
| `AdditionalDataRiskStandalone` | `payPalCountryCode` | `PayPal.CountryCode` |
| `AdditionalDataRiskStandalone` | `payPalEmailId` | `PayPal.EmailId` |
| `AdditionalDataRiskStandalone` | `payPalFirstName` | `PayPal.FirstName` |
| `AdditionalDataRiskStandalone` | `payPalLastName` | `PayPal.LastName` |
| `AdditionalDataRiskStandalone` | `payPalPayerId` | `PayPal.PayerId` |
| `AdditionalDataRiskStandalone` | `payPalPhone` | `PayPal.Phone` |
| `AdditionalDataRiskStandalone` | `payPalProtectionEligibility` | `PayPal.ProtectionEligibility` |
| `AdditionalDataRiskStandalone` | `payPalTransactionId` | `PayPal.TransactionId` |
| `AdditionalDataSubMerchant` | `subMerchantNumberOfSubSellers` | `subMerchant.numberOfSubSellers` |
| `AdditionalDataSubMerchant` | `subMerchantSubSellerSubSellerNrCity` | `subMerchant.subSeller[subSellerNr].city` |
| `AdditionalDataSubMerchant` | `subMerchantSubSellerSubSellerNrCountry` | `subMerchant.subSeller[subSellerNr].country` |
| `AdditionalDataSubMerchant` | `subMerchantSubSellerSubSellerNrEmail` | `subMerchant.subSeller[subSellerNr].email` |
| `AdditionalDataSubMerchant` | `subMerchantSubSellerSubSellerNrId` | `subMerchant.subSeller[subSellerNr].id` |
| `AdditionalDataSubMerchant` | `subMerchantSubSellerSubSellerNrMcc` | `subMerchant.subSeller[subSellerNr].mcc` |
| `AdditionalDataSubMerchant` | `subMerchantSubSellerSubSellerNrName` | `subMerchant.subSeller[subSellerNr].name` |
| `AdditionalDataSubMerchant` | `subMerchantSubSellerSubSellerNrPhoneNumber` | `subMerchant.subSeller[subSellerNr].phoneNumber` |
| `AdditionalDataSubMerchant` | `subMerchantSubSellerSubSellerNrPostalCode` | `subMerchant.subSeller[subSellerNr].postalCode` |
| `AdditionalDataSubMerchant` | `subMerchantSubSellerSubSellerNrState` | `subMerchant.subSeller[subSellerNr].state` |
| `AdditionalDataSubMerchant` | `subMerchantSubSellerSubSellerNrStreet` | `subMerchant.subSeller[subSellerNr].street` |
| `AdditionalDataSubMerchant` | `subMerchantSubSellerSubSellerNrTaxId` | `subMerchant.subSeller[subSellerNr].taxId` |
| `AdditionalDataTemporaryServices` | `enhancedSchemeDataCustomerReference` | `enhancedSchemeData.customerReference` |
| `AdditionalDataTemporaryServices` | `enhancedSchemeDataEmployeeName` | `enhancedSchemeData.employeeName` |
| `AdditionalDataTemporaryServices` | `enhancedSchemeDataJobDescription` | `enhancedSchemeData.jobDescription` |
| `AdditionalDataTemporaryServices` | `enhancedSchemeDataRegularHoursRate` | `enhancedSchemeData.regularHoursRate` |
| `AdditionalDataTemporaryServices` | `enhancedSchemeDataRegularHoursWorked` | `enhancedSchemeData.regularHoursWorked` |
| `AdditionalDataTemporaryServices` | `enhancedSchemeDataRequestName` | `enhancedSchemeData.requestName` |
| `AdditionalDataTemporaryServices` | `enhancedSchemeDataTempStartDate` | `enhancedSchemeData.tempStartDate` |
| `AdditionalDataTemporaryServices` | `enhancedSchemeDataTempWeekEnding` | `enhancedSchemeData.tempWeekEnding` |
| `AdditionalDataTemporaryServices` | `enhancedSchemeDataTotalTaxAmount` | `enhancedSchemeData.totalTaxAmount` |
| `AdditionalDataWallets` | `androidpayToken` | `androidpay.token` |
| `AdditionalDataWallets` | `masterpassTransactionId` | `masterpass.transactionId` |
| `AdditionalDataWallets` | `paymentToken` | `payment.token` |
| `AdditionalDataWallets` | `paywithgoogleToken` | `paywithgoogle.token` |
| `AdditionalDataWallets` | `samsungpayToken` | `samsungpay.token` |
| `AdditionalDataWallets` | `visacheckoutCallId` | `visacheckout.callId` |
| `AdminRequest` | `serviceIdentification` | `ServiceIdentification` |
| `AdminRequest2` | `serviceIdentification` | `ServiceIdentification` |
| `AdminResponse` | `response` | `Response` |
| `AdminResponse2` | `response` | `Response` |
| `AllowedOrigin` | `links` | `_links` |
| `AmountsReq` | `currency` | `Currency` |
| `AmountsReq` | `requestedAmount` | `RequestedAmount` |
| `AmountsReq` | `cashBackAmount` | `CashBackAmount` |
| `AmountsReq` | `tipAmount` | `TipAmount` |
| `AmountsReq` | `paidAmount` | `PaidAmount` |
| `AmountsReq` | `minimumAmountToDeliver` | `MinimumAmountToDeliver` |
| `AmountsReq` | `maximumCashBackAmount` | `MaximumCashBackAmount` |
| `AmountsReq` | `minimumSplitAmount` | `MinimumSplitAmount` |
| `AmountsResp` | `currency` | `Currency` |
| `AmountsResp` | `authorizedAmount` | `AuthorizedAmount` |
| `AmountsResp` | `totalRebatesAmount` | `TotalRebatesAmount` |
| `AmountsResp` | `totalFeesAmount` | `TotalFeesAmount` |
| `AmountsResp` | `cashBackAmount` | `CashBackAmount` |
| `AmountsResp` | `tipAmount` | `TipAmount` |
| `AmountsResp1` | `currency` | `Currency` |
| `AmountsResp1` | `authorizedAmount` | `AuthorizedAmount` |
| `AmountsResp1` | `totalRebatesAmount` | `TotalRebatesAmount` |
| `AmountsResp1` | `totalFeesAmount` | `TotalFeesAmount` |
| `AmountsResp1` | `cashBackAmount` | `CashBackAmount` |
| `AmountsResp1` | `tipAmount` | `TipAmount` |
| `ApiCredential` | `links` | `_links` |
| `ApiCredential` | `subjectDn` | `subjectDN` |
| `AreaSize` | `x` | `X` |
| `AreaSize` | `y` | `Y` |
| `AreaSize1` | `x` | `X` |
| `AreaSize1` | `y` | `Y` |
| `AuthenticationData` | `threeDsRequestData` | `threeDSRequestData` |
| `AuthenticationData1` | `threeDsRequestData` | `threeDSRequestData` |
| `AuthenticationData3` | `threeDsRequestData` | `threeDSRequestData` |
| `AuthenticationResultResponse` | `threeDs1Result` | `threeDS1Result` |
| `AuthenticationResultResponse` | `threeDs2Result` | `threeDS2Result` |
| `BalanceCheckRequest` | `shopperIp` | `shopperIP` |
| `BalanceCheckRequest` | `threeDs2RequestData` | `threeDS2RequestData` |
| `BalanceCheckRequest` | `threeDsAuthenticationOnly` | `threeDSAuthenticationOnly` |
| `BalanceInquiryRequest` | `paymentAccountReq` | `PaymentAccountReq` |
| `BalanceInquiryRequest` | `loyaltyAccountReq` | `LoyaltyAccountReq` |
| `BalanceInquiryRequest2` | `paymentAccountReq` | `PaymentAccountReq` |
| `BalanceInquiryRequest2` | `loyaltyAccountReq` | `LoyaltyAccountReq` |
| `BalanceInquiryResponse` | `response` | `Response` |
| `BalanceInquiryResponse` | `paymentAccountStatus` | `PaymentAccountStatus` |
| `BalanceInquiryResponse` | `paymentReceipt` | `PaymentReceipt` |
| `BalanceInquiryResponse2` | `response` | `Response` |
| `BalanceInquiryResponse2` | `paymentAccountStatus` | `PaymentAccountStatus` |
| `BalanceInquiryResponse2` | `paymentReceipt` | `PaymentReceipt` |
| `BankAccountDetail` | `bankAccountUuid` | `bankAccountUUID` |
| `CapturedSignature` | `areaSize` | `AreaSize` |
| `CapturedSignature` | `signaturePoint` | `SignaturePoint` |
| `CapturedSignature1` | `areaSize` | `AreaSize` |
| `CapturedSignature1` | `signaturePoint` | `SignaturePoint` |
| `CardAcquisitionRequest` | `saleData` | `SaleData` |
| `CardAcquisitionRequest` | `cardAcquisitionTransaction` | `CardAcquisitionTransaction` |
| `CardAcquisitionRequest2` | `saleData` | `SaleData` |
| `CardAcquisitionRequest2` | `cardAcquisitionTransaction` | `CardAcquisitionTransaction` |
| `CardAcquisitionResponse` | `response` | `Response` |
| `CardAcquisitionResponse` | `saleData` | `SaleData` |
| `CardAcquisitionResponse` | `poiData` | `POIData` |
| `CardAcquisitionResponse` | `paymentBrand` | `PaymentBrand` |
| `CardAcquisitionResponse` | `paymentInstrumentData` | `PaymentInstrumentData` |
| `CardAcquisitionResponse` | `loyaltyAccount` | `LoyaltyAccount` |
| `CardAcquisitionResponse2` | `response` | `Response` |
| `CardAcquisitionResponse2` | `saleData` | `SaleData` |
| `CardAcquisitionResponse2` | `poiData` | `POIData` |
| `CardAcquisitionResponse2` | `paymentBrand` | `PaymentBrand` |
| `CardAcquisitionResponse2` | `paymentInstrumentData` | `PaymentInstrumentData` |
| `CardAcquisitionResponse2` | `loyaltyAccount` | `LoyaltyAccount` |
| `CardAcquisitionTransaction` | `allowedPaymentBrand` | `AllowedPaymentBrand` |
| `CardAcquisitionTransaction` | `allowedLoyaltyBrand` | `AllowedLoyaltyBrand` |
| `CardAcquisitionTransaction` | `loyaltyHandling` | `LoyaltyHandling` |
| `CardAcquisitionTransaction` | `customerLanguage` | `CustomerLanguage` |
| `CardAcquisitionTransaction` | `forceEntryMode` | `ForceEntryMode` |
| `CardAcquisitionTransaction` | `forceCustomerSelectionFlag` | `ForceCustomerSelectionFlag` |
| `CardAcquisitionTransaction` | `totalAmount` | `TotalAmount` |
| `CardAcquisitionTransaction` | `paymentType` | `PaymentType` |
| `CardAcquisitionTransaction` | `cashBackFlag` | `CashBackFlag` |
| `CardAcquisitionTransaction1` | `allowedPaymentBrand` | `AllowedPaymentBrand` |
| `CardAcquisitionTransaction1` | `allowedLoyaltyBrand` | `AllowedLoyaltyBrand` |
| `CardAcquisitionTransaction1` | `loyaltyHandling` | `LoyaltyHandling` |
| `CardAcquisitionTransaction1` | `customerLanguage` | `CustomerLanguage` |
| `CardAcquisitionTransaction1` | `forceEntryMode` | `ForceEntryMode` |
| `CardAcquisitionTransaction1` | `forceCustomerSelectionFlag` | `ForceCustomerSelectionFlag` |
| `CardAcquisitionTransaction1` | `totalAmount` | `TotalAmount` |
| `CardAcquisitionTransaction1` | `paymentType` | `PaymentType` |
| `CardAcquisitionTransaction1` | `cashBackFlag` | `CashBackFlag` |
| `CardData` | `paymentBrand` | `PaymentBrand` |
| `CardData` | `maskedPan` | `MaskedPan` |
| `CardData` | `paymentAccountRef` | `PaymentAccountRef` |
| `CardData` | `entryMode` | `EntryMode` |
| `CardData` | `cardCountryCode` | `CardCountryCode` |
| `CardData` | `protectedCardData` | `ProtectedCardData` |
| `CardData` | `sensitiveCardData` | `SensitiveCardData` |
| `CardData` | `paymentToken` | `PaymentToken` |
| `CardData1` | `paymentBrand` | `PaymentBrand` |
| `CardData1` | `maskedPan` | `MaskedPan` |
| `CardData1` | `paymentAccountRef` | `PaymentAccountRef` |
| `CardData1` | `entryMode` | `EntryMode` |
| `CardData1` | `cardCountryCode` | `CardCountryCode` |
| `CardData1` | `protectedCardData` | `ProtectedCardData` |
| `CardData1` | `sensitiveCardData` | `SensitiveCardData` |
| `CardData1` | `paymentToken` | `PaymentToken` |
| `CardDetails` | `cupsecureplusSmscode` | `cupsecureplus.smscode` |
| `CardDetails` | `threeDs2SdkVersion` | `threeDS2SdkVersion` |
| `CardDetails1` | `cupsecureplusSmscode` | `cupsecureplus.smscode` |
| `CardDetails1` | `threeDs2SdkVersion` | `threeDS2SdkVersion` |
| `CardDonations` | `cupsecureplusSmscode` | `cupsecureplus.smscode` |
| `CardDonations` | `threeDs2SdkVersion` | `threeDS2SdkVersion` |
| `CardHolderPin` | `encrPinBlock` | `EncrPINBlock` |
| `CardHolderPin` | `pinFormat` | `PINFormat` |
| `CardHolderPin` | `additionalInput` | `AdditionalInput` |
| `CardReaderApduRequest` | `apduClass` | `APDUClass` |
| `CardReaderApduRequest` | `apduInstruction` | `APDUInstruction` |
| `CardReaderApduRequest` | `apduPar1` | `APDUPar1` |
| `CardReaderApduRequest` | `apduPar2` | `APDUPar2` |
| `CardReaderApduRequest` | `apduData` | `APDUData` |
| `CardReaderApduRequest` | `apduExpectedLength` | `APDUExpectedLength` |
| `CardReaderApduRequest2` | `apduClass` | `APDUClass` |
| `CardReaderApduRequest2` | `apduInstruction` | `APDUInstruction` |
| `CardReaderApduRequest2` | `apduPar1` | `APDUPar1` |
| `CardReaderApduRequest2` | `apduPar2` | `APDUPar2` |
| `CardReaderApduRequest2` | `apduData` | `APDUData` |
| `CardReaderApduRequest2` | `apduExpectedLength` | `APDUExpectedLength` |
| `CardReaderApduResponse` | `response` | `Response` |
| `CardReaderApduResponse` | `apduData` | `APDUData` |
| `CardReaderApduResponse` | `cardStatusWords` | `CardStatusWords` |
| `CardReaderApduResponse2` | `response` | `Response` |
| `CardReaderApduResponse2` | `apduData` | `APDUData` |
| `CardReaderApduResponse2` | `cardStatusWords` | `CardStatusWords` |
| `CheckData` | `bankId` | `BankID` |
| `CheckData` | `accountNumber` | `AccountNumber` |
| `CheckData` | `checkNumber` | `CheckNumber` |
| `CheckData` | `trackData` | `TrackData` |
| `CheckData` | `checkCardNumber` | `CheckCardNumber` |
| `CheckData` | `typeCode` | `TypeCode` |
| `CheckData` | `country` | `Country` |
| `CheckData1` | `bankId` | `BankID` |
| `CheckData1` | `accountNumber` | `AccountNumber` |
| `CheckData1` | `checkNumber` | `CheckNumber` |
| `CheckData1` | `trackData` | `TrackData` |
| `CheckData1` | `checkCardNumber` | `CheckCardNumber` |
| `CheckData1` | `typeCode` | `TypeCode` |
| `CheckData1` | `country` | `Country` |
| `CheckTaxElectronicDeliveryConsentResponse` | `us1099K` | `US1099k` |
| `CheckoutSessionThreeDs2RequestData` | `threeDsRequestorChallengeInd` | `threeDSRequestorChallengeInd` |
| `CheckoutSessionThreeDs2RequestData1` | `threeDsRequestorChallengeInd` | `threeDSRequestorChallengeInd` |
| `CheckoutSessionThreeDs2RequestData3` | `threeDsRequestorChallengeInd` | `threeDSRequestorChallengeInd` |
| `Company2` | `links` | `_links` |
| `CompanyApiCredential` | `links` | `_links` |
| `CompanyApiCredential` | `subjectDn` | `subjectDN` |
| `CompanyUser` | `links` | `_links` |
| `Connectivity` | `terminalIpAddressUrl` | `terminalIPAddressURL` |
| `Connectivity1` | `terminalIpAddressUrl` | `terminalIPAddressURL` |
| `ConvertedAmount` | `amountValue` | `AmountValue` |
| `ConvertedAmount` | `currency` | `Currency` |
| `ConvertedAmount1` | `amountValue` | `AmountValue` |
| `ConvertedAmount1` | `currency` | `Currency` |
| `CreateAccountRequest` | `bankAccountUuid` | `bankAccountUUID` |
| `CreateAccountResponse` | `bankAccountUuid` | `bankAccountUUID` |
| `CreateAllowedOriginRequest` | `links` | `_links` |
| `CreateApiCredentialResponse` | `links` | `_links` |
| `CreateApiCredentialResponse` | `subjectDn` | `subjectDN` |
| `CreateCheckoutSessionRequest` | `shopperIp` | `shopperIP` |
| `CreateCheckoutSessionRequest` | `threeDs2RequestData` | `threeDS2RequestData` |
| `CreateCheckoutSessionRequest` | `threeDsAuthenticationOnly` | `threeDSAuthenticationOnly` |
| `CreateCheckoutSessionResponse` | `shopperIp` | `shopperIP` |
| `CreateCheckoutSessionResponse` | `threeDs2RequestData` | `threeDS2RequestData` |
| `CreateCheckoutSessionResponse` | `threeDsAuthenticationOnly` | `threeDSAuthenticationOnly` |
| `CreateCompanyApiCredentialResponse` | `links` | `_links` |
| `CreateCompanyApiCredentialResponse` | `subjectDn` | `subjectDN` |
| `CreateCompanyUserResponse` | `links` | `_links` |
| `CreateUserResponse` | `links` | `_links` |
| `CurrencyConversion` | `customerApprovedFlag` | `CustomerApprovedFlag` |
| `CurrencyConversion` | `convertedAmount` | `ConvertedAmount` |
| `CurrencyConversion` | `rate` | `Rate` |
| `CurrencyConversion` | `markup` | `Markup` |
| `CurrencyConversion` | `commission` | `Commission` |
| `CurrencyConversion` | `declaration` | `Declaration` |
| `DsPublicKeyDetail` | `fromSdkVersion` | `fromSDKVersion` |
| `DebitAccountHolderRequest` | `bankAccountUuid` | `bankAccountUUID` |
| `DebitAccountHolderResponse` | `bankAccountUuid` | `bankAccountUUID` |
| `DeleteBankAccountRequest` | `bankAccountUuiDs` | `bankAccountUUIDs` |
| `DiagnosisRequest` | `poiid` | `POIID` |
| `DiagnosisRequest` | `hostDiagnosisFlag` | `HostDiagnosisFlag` |
| `DiagnosisRequest` | `acquirerId` | `AcquirerID` |
| `DiagnosisRequest2` | `poiid` | `POIID` |
| `DiagnosisRequest2` | `hostDiagnosisFlag` | `HostDiagnosisFlag` |
| `DiagnosisRequest2` | `acquirerId` | `AcquirerID` |
| `DiagnosisResponse` | `response` | `Response` |
| `DiagnosisResponse` | `poiStatus` | `POIStatus` |
| `DiagnosisResponse` | `hostStatus` | `HostStatus` |
| `DiagnosisResponse2` | `response` | `Response` |
| `DiagnosisResponse2` | `poiStatus` | `POIStatus` |
| `DiagnosisResponse2` | `hostStatus` | `HostStatus` |
| `DisplayOutput` | `responseRequiredFlag` | `ResponseRequiredFlag` |
| `DisplayOutput` | `minimumDisplayTime` | `MinimumDisplayTime` |
| `DisplayOutput` | `device` | `Device` |
| `DisplayOutput` | `infoQualify` | `InfoQualify` |
| `DisplayOutput` | `outputContent` | `OutputContent` |
| `DisplayOutput` | `menuEntry` | `MenuEntry` |
| `DisplayOutput` | `outputSignature` | `OutputSignature` |
| `DisplayOutput1` | `responseRequiredFlag` | `ResponseRequiredFlag` |
| `DisplayOutput1` | `minimumDisplayTime` | `MinimumDisplayTime` |
| `DisplayOutput1` | `device` | `Device` |
| `DisplayOutput1` | `infoQualify` | `InfoQualify` |
| `DisplayOutput1` | `outputContent` | `OutputContent` |
| `DisplayOutput1` | `menuEntry` | `MenuEntry` |
| `DisplayOutput1` | `outputSignature` | `OutputSignature` |
| `DisplayOutput2` | `responseRequiredFlag` | `ResponseRequiredFlag` |
| `DisplayOutput2` | `minimumDisplayTime` | `MinimumDisplayTime` |
| `DisplayOutput2` | `device` | `Device` |
| `DisplayOutput2` | `infoQualify` | `InfoQualify` |
| `DisplayOutput2` | `outputContent` | `OutputContent` |
| `DisplayOutput2` | `menuEntry` | `MenuEntry` |
| `DisplayOutput2` | `outputSignature` | `OutputSignature` |
| `DisplayRequest` | `displayOutput` | `DisplayOutput` |
| `DisplayRequest2` | `displayOutput` | `DisplayOutput` |
| `DisplayResponse` | `outputResult` | `OutputResult` |
| `DisplayResponse2` | `outputResult` | `OutputResult` |
| `DocumentDetail` | `bankAccountUuid` | `bankAccountUUID` |
| `DocumentDetail1` | `bankAccountUuid` | `bankAccountUUID` |
| `DonationPaymentRequest` | `shopperIp` | `shopperIP` |
| `DonationPaymentRequest` | `threeDs2RequestData` | `threeDS2RequestData` |
| `EnableServiceRequest` | `transactionAction` | `TransactionAction` |
| `EnableServiceRequest` | `servicesEnabled` | `ServicesEnabled` |
| `EnableServiceRequest` | `displayOutput` | `DisplayOutput` |
| `EnableServiceRequest2` | `transactionAction` | `TransactionAction` |
| `EnableServiceRequest2` | `servicesEnabled` | `ServicesEnabled` |
| `EnableServiceRequest2` | `displayOutput` | `DisplayOutput` |
| `EnableServiceResponse` | `response` | `Response` |
| `EnableServiceResponse2` | `response` | `Response` |
| `EventNotification` | `timeStamp` | `TimeStamp` |
| `EventNotification` | `eventToNotify` | `EventToNotify` |
| `EventNotification` | `eventDetails` | `EventDetails` |
| `EventNotification` | `rejectedMessage` | `RejectedMessage` |
| `EventNotification` | `maintenanceRequiredFlag` | `MaintenanceRequiredFlag` |
| `EventNotification` | `displayOutput` | `DisplayOutput` |
| `EventNotification2` | `timeStamp` | `TimeStamp` |
| `EventNotification2` | `eventToNotify` | `EventToNotify` |
| `EventNotification2` | `eventDetails` | `EventDetails` |
| `EventNotification2` | `rejectedMessage` | `RejectedMessage` |
| `EventNotification2` | `maintenanceRequiredFlag` | `MaintenanceRequiredFlag` |
| `EventNotification2` | `displayOutput` | `DisplayOutput` |
| `FindTransfersResponse` | `links` | `_links` |
| `FraudCheckResultWrapper` | `fraudCheckResult` | `FraudCheckResult` |
| `FundDestination` | `iban` | `IBAN` |
| `FundDestination1` | `iban` | `IBAN` |
| `FundRecipient` | `iban` | `IBAN` |
| `FundRecipient1` | `iban` | `IBAN` |
| `GeographicCoordinates` | `latitude` | `Latitude` |
| `GeographicCoordinates` | `longitude` | `Longitude` |
| `Geolocation` | `geographicCoordinates` | `GeographicCoordinates` |
| `Geolocation` | `utmCoordinates` | `UTMCoordinates` |
| `Geolocation1` | `geographicCoordinates` | `GeographicCoordinates` |
| `Geolocation1` | `utmCoordinates` | `UTMCoordinates` |
| `GetTotalsRequest` | `totalDetails` | `TotalDetails` |
| `GetTotalsRequest` | `totalFilter` | `TotalFilter` |
| `GetTotalsRequest2` | `totalDetails` | `TotalDetails` |
| `GetTotalsRequest2` | `totalFilter` | `TotalFilter` |
| `GetTotalsResponse` | `response` | `Response` |
| `GetTotalsResponse` | `poiReconciliationId` | `POIReconciliationID` |
| `GetTotalsResponse` | `transactionTotals` | `TransactionTotals` |
| `GetTotalsResponse2` | `response` | `Response` |
| `GetTotalsResponse2` | `poiReconciliationId` | `POIReconciliationID` |
| `GetTotalsResponse2` | `transactionTotals` | `TransactionTotals` |
| `GetUploadedDocumentsRequest` | `bankAccountUuid` | `bankAccountUUID` |
| `GooglePayDetails` | `threeDs2SdkVersion` | `threeDS2SdkVersion` |
| `GooglePayDonations` | `threeDs2SdkVersion` | `threeDS2SdkVersion` |
| `HostStatus` | `acquirerId` | `AcquirerID` |
| `HostStatus` | `isReachableFlag` | `IsReachableFlag` |
| `IccResetData` | `atrValue` | `ATRValue` |
| `IccResetData` | `cardStatusWords` | `CardStatusWords` |
| `Input` | `inputCommand` | `InputCommand` |
| `Input` | `confirmedFlag` | `ConfirmedFlag` |
| `Input` | `functionKey` | `FunctionKey` |
| `Input` | `textInput` | `TextInput` |
| `Input` | `digitInput` | `DigitInput` |
| `Input` | `password` | `Password` |
| `Input` | `menuEntryNumber` | `MenuEntryNumber` |
| `Input2` | `inputCommand` | `InputCommand` |
| `Input2` | `confirmedFlag` | `ConfirmedFlag` |
| `Input2` | `functionKey` | `FunctionKey` |
| `Input2` | `textInput` | `TextInput` |
| `Input2` | `digitInput` | `DigitInput` |
| `Input2` | `password` | `Password` |
| `Input2` | `menuEntryNumber` | `MenuEntryNumber` |
| `InputData` | `device` | `Device` |
| `InputData` | `infoQualify` | `InfoQualify` |
| `InputData` | `inputCommand` | `InputCommand` |
| `InputData` | `notifyCardInputFlag` | `NotifyCardInputFlag` |
| `InputData` | `maxInputTime` | `MaxInputTime` |
| `InputData` | `immediateResponseFlag` | `ImmediateResponseFlag` |
| `InputData` | `minLength` | `MinLength` |
| `InputData` | `maxLength` | `MaxLength` |
| `InputData` | `maxDecimalLength` | `MaxDecimalLength` |
| `InputData` | `waitUserValidationFlag` | `WaitUserValidationFlag` |
| `InputData` | `defaultInputString` | `DefaultInputString` |
| `InputData` | `defaultLayoutString` | `DefaultLayoutString` |
| `InputData` | `stringMask` | `StringMask` |
| `InputData` | `fromRightToLeftFlag` | `FromRightToLeftFlag` |
| `InputData` | `maskCharactersFlag` | `MaskCharactersFlag` |
| `InputData` | `beepKeyFlag` | `BeepKeyFlag` |
| `InputData` | `globalCorrectionFlag` | `GlobalCorrectionFlag` |
| `InputData` | `disableCancelFlag` | `DisableCancelFlag` |
| `InputData` | `disableCorrectFlag` | `DisableCorrectFlag` |
| `InputData` | `disableValidFlag` | `DisableValidFlag` |
| `InputData` | `menuBackFlag` | `MenuBackFlag` |
| `InputData2` | `device` | `Device` |
| `InputData2` | `infoQualify` | `InfoQualify` |
| `InputData2` | `inputCommand` | `InputCommand` |
| `InputData2` | `notifyCardInputFlag` | `NotifyCardInputFlag` |
| `InputData2` | `maxInputTime` | `MaxInputTime` |
| `InputData2` | `immediateResponseFlag` | `ImmediateResponseFlag` |
| `InputData2` | `minLength` | `MinLength` |
| `InputData2` | `maxLength` | `MaxLength` |
| `InputData2` | `maxDecimalLength` | `MaxDecimalLength` |
| `InputData2` | `waitUserValidationFlag` | `WaitUserValidationFlag` |
| `InputData2` | `defaultInputString` | `DefaultInputString` |
| `InputData2` | `defaultLayoutString` | `DefaultLayoutString` |
| `InputData2` | `stringMask` | `StringMask` |
| `InputData2` | `fromRightToLeftFlag` | `FromRightToLeftFlag` |
| `InputData2` | `maskCharactersFlag` | `MaskCharactersFlag` |
| `InputData2` | `beepKeyFlag` | `BeepKeyFlag` |
| `InputData2` | `globalCorrectionFlag` | `GlobalCorrectionFlag` |
| `InputData2` | `disableCancelFlag` | `DisableCancelFlag` |
| `InputData2` | `disableCorrectFlag` | `DisableCorrectFlag` |
| `InputData2` | `disableValidFlag` | `DisableValidFlag` |
| `InputData2` | `menuBackFlag` | `MenuBackFlag` |
| `InputRequest` | `displayOutput` | `DisplayOutput` |
| `InputRequest` | `inputData` | `InputData` |
| `InputRequest2` | `displayOutput` | `DisplayOutput` |
| `InputRequest2` | `inputData` | `InputData` |
| `InputResponse` | `outputResult` | `OutputResult` |
| `InputResponse` | `inputResult` | `InputResult` |
| `InputResponse2` | `outputResult` | `OutputResult` |
| `InputResponse2` | `inputResult` | `InputResult` |
| `InputResult` | `device` | `Device` |
| `InputResult` | `infoQualify` | `InfoQualify` |
| `InputResult` | `response` | `Response` |
| `InputResult` | `input` | `Input` |
| `InputResult2` | `device` | `Device` |
| `InputResult2` | `infoQualify` | `InfoQualify` |
| `InputResult2` | `response` | `Response` |
| `InputResult2` | `input` | `Input` |
| `InputUpdate` | `messageReference` | `MessageReference` |
| `InputUpdate` | `outputContent` | `OutputContent` |
| `InputUpdate` | `menuEntry` | `MenuEntry` |
| `InputUpdate` | `outputSignature` | `OutputSignature` |
| `InputUpdate` | `minLength` | `MinLength` |
| `InputUpdate` | `maxLength` | `MaxLength` |
| `InputUpdate` | `maxDecimalLength` | `MaxDecimalLength` |
| `InputUpdate2` | `messageReference` | `MessageReference` |
| `InputUpdate2` | `outputContent` | `OutputContent` |
| `InputUpdate2` | `menuEntry` | `MenuEntry` |
| `InputUpdate2` | `outputSignature` | `OutputSignature` |
| `InputUpdate2` | `minLength` | `MinLength` |
| `InputUpdate2` | `maxLength` | `MaxLength` |
| `InputUpdate2` | `maxDecimalLength` | `MaxDecimalLength` |
| `Instalment` | `instalmentType` | `InstalmentType` |
| `Instalment` | `sequenceNumber` | `SequenceNumber` |
| `Instalment` | `planId` | `PlanID` |
| `Instalment` | `period` | `Period` |
| `Instalment` | `periodUnit` | `PeriodUnit` |
| `Instalment` | `firstPaymentDate` | `FirstPaymentDate` |
| `Instalment` | `totalNbOfPayments` | `TotalNbOfPayments` |
| `Instalment` | `cumulativeAmount` | `CumulativeAmount` |
| `Instalment` | `firstAmount` | `FirstAmount` |
| `Instalment` | `charges` | `Charges` |
| `Instalment1` | `instalmentType` | `InstalmentType` |
| `Instalment1` | `sequenceNumber` | `SequenceNumber` |
| `Instalment1` | `planId` | `PlanID` |
| `Instalment1` | `period` | `Period` |
| `Instalment1` | `periodUnit` | `PeriodUnit` |
| `Instalment1` | `firstPaymentDate` | `FirstPaymentDate` |
| `Instalment1` | `totalNbOfPayments` | `TotalNbOfPayments` |
| `Instalment1` | `cumulativeAmount` | `CumulativeAmount` |
| `Instalment1` | `firstAmount` | `FirstAmount` |
| `Instalment1` | `charges` | `Charges` |
| `ListAssociationsResponse` | `links` | `_links` |
| `ListCompanyApiCredentialsResponse` | `links` | `_links` |
| `ListCompanyResponse` | `links` | `_links` |
| `ListCompanyUsersResponse` | `links` | `_links` |
| `ListDonationCampaignsResponse` | `links` | `_links` |
| `ListMerchantApiCredentialsResponse` | `links` | `_links` |
| `ListMerchantResponse` | `links` | `_links` |
| `ListMerchantUsersResponse` | `links` | `_links` |
| `ListNonprofitsResponse` | `links` | `_links` |
| `ListStoresResponse` | `links` | `_links` |
| `ListTerminalsResponse` | `links` | `_links` |
| `ListWebhooksResponse` | `links` | `_links` |
| `LoginRequest` | `dateTime` | `DateTime` |
| `LoginRequest` | `saleSoftware` | `SaleSoftware` |
| `LoginRequest` | `saleTerminalData` | `SaleTerminalData` |
| `LoginRequest` | `trainingModeFlag` | `TrainingModeFlag` |
| `LoginRequest` | `operatorLanguage` | `OperatorLanguage` |
| `LoginRequest` | `operatorId` | `OperatorID` |
| `LoginRequest` | `shiftNumber` | `ShiftNumber` |
| `LoginRequest` | `tokenRequestedType` | `TokenRequestedType` |
| `LoginRequest` | `customerOrderReq` | `CustomerOrderReq` |
| `LoginRequest` | `poiSerialNumber` | `POISerialNumber` |
| `LoginRequest2` | `dateTime` | `DateTime` |
| `LoginRequest2` | `saleSoftware` | `SaleSoftware` |
| `LoginRequest2` | `saleTerminalData` | `SaleTerminalData` |
| `LoginRequest2` | `trainingModeFlag` | `TrainingModeFlag` |
| `LoginRequest2` | `operatorLanguage` | `OperatorLanguage` |
| `LoginRequest2` | `operatorId` | `OperatorID` |
| `LoginRequest2` | `shiftNumber` | `ShiftNumber` |
| `LoginRequest2` | `tokenRequestedType` | `TokenRequestedType` |
| `LoginRequest2` | `customerOrderReq` | `CustomerOrderReq` |
| `LoginRequest2` | `poiSerialNumber` | `POISerialNumber` |
| `LoginResponse` | `response` | `Response` |
| `LoginResponse` | `poiSystemData` | `POISystemData` |
| `LoginResponse` | `tokenRequestStatus` | `TokenRequestStatus` |
| `LoginResponse2` | `response` | `Response` |
| `LoginResponse2` | `poiSystemData` | `POISystemData` |
| `LoginResponse2` | `tokenRequestStatus` | `TokenRequestStatus` |
| `LogoutRequest` | `maintenanceAllowed` | `MaintenanceAllowed` |
| `LogoutRequest2` | `maintenanceAllowed` | `MaintenanceAllowed` |
| `LogoutResponse` | `response` | `Response` |
| `LogoutResponse2` | `response` | `Response` |
| `LoyaltyAccount` | `loyaltyAccountId` | `LoyaltyAccountID` |
| `LoyaltyAccount` | `loyaltyBrand` | `LoyaltyBrand` |
| `LoyaltyAccount1` | `loyaltyAccountId` | `LoyaltyAccountID` |
| `LoyaltyAccount1` | `loyaltyBrand` | `LoyaltyBrand` |
| `LoyaltyAccountId` | `entryMode` | `EntryMode` |
| `LoyaltyAccountId` | `identificationType` | `IdentificationType` |
| `LoyaltyAccountId` | `identificationSupport` | `IdentificationSupport` |
| `LoyaltyAccountId` | `loyaltyId` | `LoyaltyID` |
| `LoyaltyAccountId1` | `entryMode` | `EntryMode` |
| `LoyaltyAccountId1` | `identificationType` | `IdentificationType` |
| `LoyaltyAccountId1` | `identificationSupport` | `IdentificationSupport` |
| `LoyaltyAccountId1` | `loyaltyId` | `LoyaltyID` |
| `LoyaltyAccountId2` | `entryMode` | `EntryMode` |
| `LoyaltyAccountId2` | `identificationType` | `IdentificationType` |
| `LoyaltyAccountId2` | `identificationSupport` | `IdentificationSupport` |
| `LoyaltyAccountId2` | `loyaltyId` | `LoyaltyID` |
| `LoyaltyAccountReq` | `cardAcquisitionReference` | `CardAcquisitionReference` |
| `LoyaltyAccountReq` | `loyaltyAccountId` | `LoyaltyAccountID` |
| `LoyaltyAccountReq2` | `cardAcquisitionReference` | `CardAcquisitionReference` |
| `LoyaltyAccountReq2` | `loyaltyAccountId` | `LoyaltyAccountID` |
| `LoyaltyAcquirerData` | `loyaltyAcquirerId` | `LoyaltyAcquirerID` |
| `LoyaltyAcquirerData` | `approvalCode` | `ApprovalCode` |
| `LoyaltyAcquirerData` | `loyaltyTransactionId` | `LoyaltyTransactionID` |
| `LoyaltyAcquirerData` | `hostReconciliationId` | `HostReconciliationID` |
| `LoyaltyAcquirerData1` | `loyaltyAcquirerId` | `LoyaltyAcquirerID` |
| `LoyaltyAcquirerData1` | `approvalCode` | `ApprovalCode` |
| `LoyaltyAcquirerData1` | `loyaltyTransactionId` | `LoyaltyTransactionID` |
| `LoyaltyAcquirerData1` | `hostReconciliationId` | `HostReconciliationID` |
| `LoyaltyData` | `cardAcquisitionReference` | `CardAcquisitionReference` |
| `LoyaltyData` | `loyaltyAccountId` | `LoyaltyAccountID` |
| `LoyaltyResponse` | `response` | `Response` |
| `LoyaltyResponse` | `saleData` | `SaleData` |
| `LoyaltyResponse` | `poiData` | `POIData` |
| `LoyaltyResponse` | `loyaltyResult` | `LoyaltyResult` |
| `LoyaltyResponse` | `paymentReceipt` | `PaymentReceipt` |
| `LoyaltyResponse2` | `response` | `Response` |
| `LoyaltyResponse2` | `saleData` | `SaleData` |
| `LoyaltyResponse2` | `poiData` | `POIData` |
| `LoyaltyResponse2` | `loyaltyResult` | `LoyaltyResult` |
| `LoyaltyResponse2` | `paymentReceipt` | `PaymentReceipt` |
| `LoyaltyResult` | `loyaltyAccount` | `LoyaltyAccount` |
| `LoyaltyResult` | `currentBalance` | `CurrentBalance` |
| `LoyaltyResult` | `loyaltyAcquirerData` | `LoyaltyAcquirerData` |
| `ManagementPaymentMethod` | `eftDirectdebitCa` | `eft_directdebit_CA` |
| `ManagementPaymentMethod` | `eftposAustralia` | `eftpos_australia` |
| `ManagementPaymentMethod` | `interacCard` | `interac_card` |
| `ManagementPaymentMethod` | `maestroUsa` | `maestro_usa` |
| `ManagementPaymentMethod` | `mealVoucherFr` | `mealVoucher_FR` |
| `ManagementPaymentMethod` | `paybybankPlaid` | `paybybank_plaid` |
| `ManagementPaymentMethod` | `wechatpayPos` | `wechatpay_pos` |
| `MeApiCredential` | `links` | `_links` |
| `MeApiCredential` | `subjectDn` | `subjectDN` |
| `MenuEntry` | `menuEntryTag` | `MenuEntryTag` |
| `MenuEntry` | `defaultSelectedFlag` | `DefaultSelectedFlag` |
| `MenuEntry` | `outputFormat` | `OutputFormat` |
| `MenuEntry` | `predefinedContent` | `PredefinedContent` |
| `MenuEntry` | `outputText` | `OutputText` |
| `MenuEntry` | `outputXhtml` | `OutputXHTML` |
| `Merchant` | `links` | `_links` |
| `MessageHeader` | `protocolVersion` | `ProtocolVersion` |
| `MessageHeader` | `messageClass` | `MessageClass` |
| `MessageHeader` | `messageCategory` | `MessageCategory` |
| `MessageHeader` | `messageType` | `MessageType` |
| `MessageHeader` | `serviceId` | `ServiceID` |
| `MessageHeader` | `deviceId` | `DeviceID` |
| `MessageHeader` | `saleId` | `SaleID` |
| `MessageHeader` | `poiid` | `POIID` |
| `MessageReference` | `messageCategory` | `MessageCategory` |
| `MessageReference` | `serviceId` | `ServiceID` |
| `MessageReference` | `deviceId` | `DeviceID` |
| `MessageReference` | `saleId` | `SaleID` |
| `MessageReference` | `poiid` | `POIID` |
| `MessageReference2` | `messageCategory` | `MessageCategory` |
| `MessageReference2` | `serviceId` | `ServiceID` |
| `MessageReference2` | `deviceId` | `DeviceID` |
| `MessageReference2` | `saleId` | `SaleID` |
| `MessageReference2` | `poiid` | `POIID` |
| `MessageReference3` | `messageCategory` | `MessageCategory` |
| `MessageReference3` | `serviceId` | `ServiceID` |
| `MessageReference3` | `deviceId` | `DeviceID` |
| `MessageReference3` | `saleId` | `SaleID` |
| `MessageReference3` | `poiid` | `POIID` |
| `MessageReference4` | `messageCategory` | `MessageCategory` |
| `MessageReference4` | `serviceId` | `ServiceID` |
| `MessageReference4` | `deviceId` | `DeviceID` |
| `MessageReference4` | `saleId` | `SaleID` |
| `MessageReference4` | `poiid` | `POIID` |
| `MobileData` | `mobileCountryCode` | `MobileCountryCode` |
| `MobileData` | `mobileNetworkCode` | `MobileNetworkCode` |
| `MobileData` | `maskedMsisdn` | `MaskedMSISDN` |
| `MobileData` | `geolocation` | `Geolocation` |
| `MobileData` | `protectedMobileData` | `ProtectedMobileData` |
| `MobileData` | `sensitiveMobileData` | `SensitiveMobileData` |
| `MobileData1` | `mobileCountryCode` | `MobileCountryCode` |
| `MobileData1` | `mobileNetworkCode` | `MobileNetworkCode` |
| `MobileData1` | `maskedMsisdn` | `MaskedMSISDN` |
| `MobileData1` | `geolocation` | `Geolocation` |
| `MobileData1` | `protectedMobileData` | `ProtectedMobileData` |
| `MobileData1` | `sensitiveMobileData` | `SensitiveMobileData` |
| `NotificationConfigurationDetails` | `notifyUrl` | `notifyURL` |
| `NotificationConfigurationDetails2` | `notifyUrl` | `notifyURL` |
| `NotificationConfigurationDetails3` | `notifyUrl` | `notifyURL` |
| `NotificationConfigurationDetails4` | `notifyUrl` | `notifyURL` |
| `Opi` | `payAtTableUrl` | `payAtTableURL` |
| `Opi1` | `payAtTableUrl` | `payAtTableURL` |
| `OriginalPoiTransaction` | `saleId` | `SaleID` |
| `OriginalPoiTransaction` | `poiid` | `POIID` |
| `OriginalPoiTransaction` | `poiTransactionId` | `POITransactionID` |
| `OriginalPoiTransaction` | `reuseCardDataFlag` | `ReuseCardDataFlag` |
| `OriginalPoiTransaction` | `approvalCode` | `ApprovalCode` |
| `OriginalPoiTransaction` | `acquirerId` | `AcquirerID` |
| `OriginalPoiTransaction` | `amountValue` | `AmountValue` |
| `OriginalPoiTransaction` | `hostTransactionId` | `HostTransactionID` |
| `OriginalPoiTransaction1` | `saleId` | `SaleID` |
| `OriginalPoiTransaction1` | `poiid` | `POIID` |
| `OriginalPoiTransaction1` | `poiTransactionId` | `POITransactionID` |
| `OriginalPoiTransaction1` | `reuseCardDataFlag` | `ReuseCardDataFlag` |
| `OriginalPoiTransaction1` | `approvalCode` | `ApprovalCode` |
| `OriginalPoiTransaction1` | `acquirerId` | `AcquirerID` |
| `OriginalPoiTransaction1` | `amountValue` | `AmountValue` |
| `OriginalPoiTransaction1` | `hostTransactionId` | `HostTransactionID` |
| `OriginalPoiTransaction2` | `saleId` | `SaleID` |
| `OriginalPoiTransaction2` | `poiid` | `POIID` |
| `OriginalPoiTransaction2` | `poiTransactionId` | `POITransactionID` |
| `OriginalPoiTransaction2` | `reuseCardDataFlag` | `ReuseCardDataFlag` |
| `OriginalPoiTransaction2` | `approvalCode` | `ApprovalCode` |
| `OriginalPoiTransaction2` | `acquirerId` | `AcquirerID` |
| `OriginalPoiTransaction2` | `amountValue` | `AmountValue` |
| `OriginalPoiTransaction2` | `hostTransactionId` | `HostTransactionID` |
| `OutputBarcode` | `barcodeValue` | `BarcodeValue` |
| `OutputBarcode1` | `barcodeValue` | `BarcodeValue` |
| `OutputContent` | `outputFormat` | `OutputFormat` |
| `OutputContent` | `predefinedContent` | `PredefinedContent` |
| `OutputContent` | `outputText` | `OutputText` |
| `OutputContent` | `outputXhtml` | `OutputXHTML` |
| `OutputContent` | `outputBarcode` | `OutputBarcode` |
| `OutputContent1` | `outputFormat` | `OutputFormat` |
| `OutputContent1` | `predefinedContent` | `PredefinedContent` |
| `OutputContent1` | `outputText` | `OutputText` |
| `OutputContent1` | `outputXhtml` | `OutputXHTML` |
| `OutputContent1` | `outputBarcode` | `OutputBarcode` |
| `OutputContent3` | `outputFormat` | `OutputFormat` |
| `OutputContent3` | `predefinedContent` | `PredefinedContent` |
| `OutputContent3` | `outputText` | `OutputText` |
| `OutputContent3` | `outputXhtml` | `OutputXHTML` |
| `OutputContent3` | `outputBarcode` | `OutputBarcode` |
| `OutputResult` | `device` | `Device` |
| `OutputResult` | `infoQualify` | `InfoQualify` |
| `OutputResult` | `response` | `Response` |
| `OutputResult1` | `device` | `Device` |
| `OutputResult1` | `infoQualify` | `InfoQualify` |
| `OutputResult1` | `response` | `Response` |
| `OutputText` | `text` | `Text` |
| `OutputText` | `characterSet` | `CharacterSet` |
| `OutputText` | `startRow` | `StartRow` |
| `OutputText` | `startColumn` | `StartColumn` |
| `OutputText` | `characterWidth` | `CharacterWidth` |
| `OutputText` | `characterHeight` | `CharacterHeight` |
| `OutputText` | `characterStyle` | `CharacterStyle` |
| `OutputText` | `alignment` | `Alignment` |
| `OutputText` | `endOfLineFlag` | `EndOfLineFlag` |
| `PoiData` | `poiTransactionId` | `POITransactionID` |
| `PoiData` | `poiReconciliationId` | `POIReconciliationID` |
| `PoiData1` | `poiTransactionId` | `POITransactionID` |
| `PoiData1` | `poiReconciliationId` | `POIReconciliationID` |
| `PoiData4` | `poiTransactionId` | `POITransactionID` |
| `PoiData4` | `poiReconciliationId` | `POIReconciliationID` |
| `PoiSoftware` | `manufacturerId` | `ManufacturerID` |
| `PoiSoftware` | `applicationName` | `ApplicationName` |
| `PoiSoftware` | `softwareVersion` | `SoftwareVersion` |
| `PoiSoftware` | `certificationCode` | `CertificationCode` |
| `PoiStatus` | `globalStatus` | `GlobalStatus` |
| `PoiStatus` | `securityOkFlag` | `SecurityOKFlag` |
| `PoiStatus` | `pedokFlag` | `PEDOKFlag` |
| `PoiStatus` | `cardReaderOkFlag` | `CardReaderOKFlag` |
| `PoiStatus` | `printerStatus` | `PrinterStatus` |
| `PoiStatus` | `communicationOkFlag` | `CommunicationOKFlag` |
| `PoiStatus` | `fraudPreventionFlag` | `FraudPreventionFlag` |
| `PoiStatus1` | `globalStatus` | `GlobalStatus` |
| `PoiStatus1` | `securityOkFlag` | `SecurityOKFlag` |
| `PoiStatus1` | `pedokFlag` | `PEDOKFlag` |
| `PoiStatus1` | `cardReaderOkFlag` | `CardReaderOKFlag` |
| `PoiStatus1` | `printerStatus` | `PrinterStatus` |
| `PoiStatus1` | `communicationOkFlag` | `CommunicationOKFlag` |
| `PoiStatus1` | `fraudPreventionFlag` | `FraudPreventionFlag` |
| `PoiSystemData` | `dateTime` | `DateTime` |
| `PoiSystemData` | `poiSoftware` | `POISoftware` |
| `PoiSystemData` | `poiStatus` | `POIStatus` |
| `PoiSystemData1` | `dateTime` | `DateTime` |
| `PoiSystemData1` | `poiSoftware` | `POISoftware` |
| `PoiSystemData1` | `poiStatus` | `POIStatus` |
| `PayPal` | `orderId` | `orderID` |
| `PayPal` | `payerId` | `payerID` |
| `PayWithGoogleDetails` | `threeDs2SdkVersion` | `threeDS2SdkVersion` |
| `PayWithGoogleDonations` | `threeDs2SdkVersion` | `threeDS2SdkVersion` |
| `PaymentAccountReq` | `accountType` | `AccountType` |
| `PaymentAccountReq` | `cardAcquisitionReference` | `CardAcquisitionReference` |
| `PaymentAccountReq` | `paymentInstrumentData` | `PaymentInstrumentData` |
| `PaymentAccountReq2` | `accountType` | `AccountType` |
| `PaymentAccountReq2` | `cardAcquisitionReference` | `CardAcquisitionReference` |
| `PaymentAccountReq2` | `paymentInstrumentData` | `PaymentInstrumentData` |
| `PaymentAccountStatus` | `paymentInstrumentData` | `PaymentInstrumentData` |
| `PaymentAccountStatus` | `currentBalance` | `CurrentBalance` |
| `PaymentAccountStatus` | `currency` | `Currency` |
| `PaymentAccountStatus` | `paymentAcquirerData` | `PaymentAcquirerData` |
| `PaymentAccountStatus2` | `paymentInstrumentData` | `PaymentInstrumentData` |
| `PaymentAccountStatus2` | `currentBalance` | `CurrentBalance` |
| `PaymentAccountStatus2` | `currency` | `Currency` |
| `PaymentAccountStatus2` | `paymentAcquirerData` | `PaymentAcquirerData` |
| `PaymentAcquirerData` | `acquirerId` | `AcquirerID` |
| `PaymentAcquirerData` | `merchantId` | `MerchantID` |
| `PaymentAcquirerData` | `acquirerPoiid` | `AcquirerPOIID` |
| `PaymentAcquirerData` | `acquirerTransactionId` | `AcquirerTransactionID` |
| `PaymentAcquirerData` | `approvalCode` | `ApprovalCode` |
| `PaymentAcquirerData` | `hostReconciliationId` | `HostReconciliationID` |
| `PaymentCompletionDetails` | `md` | `MD` |
| `PaymentCompletionDetails` | `paReq` | `PaReq` |
| `PaymentCompletionDetails` | `paRes` | `PaRes` |
| `PaymentCompletionDetails` | `authorizationToken` | `authorization_token` |
| `PaymentCompletionDetails` | `cupsecureplusSmscode` | `cupsecureplus.smscode` |
| `PaymentCompletionDetails` | `orderId` | `orderID` |
| `PaymentCompletionDetails` | `payerId` | `payerID` |
| `PaymentCompletionDetails` | `paymentId` | `paymentID` |
| `PaymentCompletionDetails` | `threeDsResult` | `threeDSResult` |
| `PaymentCompletionDetails` | `threeds2ChallengeResult` | `threeds2.challengeResult` |
| `PaymentCompletionDetails` | `threeds2Fingerprint` | `threeds2.fingerprint` |
| `PaymentCompletionDetails1` | `md` | `MD` |
| `PaymentCompletionDetails1` | `paReq` | `PaReq` |
| `PaymentCompletionDetails1` | `paRes` | `PaRes` |
| `PaymentCompletionDetails1` | `authorizationToken` | `authorization_token` |
| `PaymentCompletionDetails1` | `cupsecureplusSmscode` | `cupsecureplus.smscode` |
| `PaymentCompletionDetails1` | `orderId` | `orderID` |
| `PaymentCompletionDetails1` | `payerId` | `payerID` |
| `PaymentCompletionDetails1` | `paymentId` | `paymentID` |
| `PaymentCompletionDetails1` | `threeDsResult` | `threeDSResult` |
| `PaymentCompletionDetails1` | `threeds2ChallengeResult` | `threeds2.challengeResult` |
| `PaymentCompletionDetails1` | `threeds2Fingerprint` | `threeds2.fingerprint` |
| `PaymentData` | `paymentType` | `PaymentType` |
| `PaymentData` | `splitPaymentFlag` | `SplitPaymentFlag` |
| `PaymentData` | `requestedValidityDate` | `RequestedValidityDate` |
| `PaymentData` | `cardAcquisitionReference` | `CardAcquisitionReference` |
| `PaymentData` | `instalment` | `Instalment` |
| `PaymentData` | `paymentInstrumentData` | `PaymentInstrumentData` |
| `PaymentData1` | `paymentType` | `PaymentType` |
| `PaymentData1` | `splitPaymentFlag` | `SplitPaymentFlag` |
| `PaymentData1` | `requestedValidityDate` | `RequestedValidityDate` |
| `PaymentData1` | `cardAcquisitionReference` | `CardAcquisitionReference` |
| `PaymentData1` | `instalment` | `Instalment` |
| `PaymentData1` | `paymentInstrumentData` | `PaymentInstrumentData` |
| `PaymentDetailsRequest` | `threeDsAuthenticationOnly` | `threeDSAuthenticationOnly` |
| `PaymentDetailsResponse` | `threeDs2ResponseData` | `threeDS2ResponseData` |
| `PaymentDetailsResponse` | `threeDs2Result` | `threeDS2Result` |
| `PaymentDetailsResponse` | `threeDsPaymentData` | `threeDSPaymentData` |
| `PaymentInstrumentData` | `paymentInstrumentType` | `PaymentInstrumentType` |
| `PaymentInstrumentData` | `protectedCardData` | `ProtectedCardData` |
| `PaymentInstrumentData` | `cardData` | `CardData` |
| `PaymentInstrumentData` | `checkData` | `CheckData` |
| `PaymentInstrumentData` | `mobileData` | `MobileData` |
| `PaymentInstrumentData` | `storedValueAccountId` | `StoredValueAccountID` |
| `PaymentInstrumentData1` | `paymentInstrumentType` | `PaymentInstrumentType` |
| `PaymentInstrumentData1` | `protectedCardData` | `ProtectedCardData` |
| `PaymentInstrumentData1` | `cardData` | `CardData` |
| `PaymentInstrumentData1` | `checkData` | `CheckData` |
| `PaymentInstrumentData1` | `mobileData` | `MobileData` |
| `PaymentInstrumentData1` | `storedValueAccountId` | `StoredValueAccountID` |
| `PaymentLinkRequest` | `threeDs2RequestData` | `threeDS2RequestData` |
| `PaymentLinkResponse` | `threeDs2RequestData` | `threeDS2RequestData` |
| `PaymentMethodResponse` | `links` | `_links` |
| `PaymentMethodSetupInfo` | `eftDirectdebitCa` | `eft_directdebit_CA` |
| `PaymentMethodSetupInfo` | `eftposAustralia` | `eftpos_australia` |
| `PaymentMethodSetupInfo` | `interacCard` | `interac_card` |
| `PaymentMethodSetupInfo` | `maestroUsa` | `maestro_usa` |
| `PaymentMethodSetupInfo` | `mealVoucherFr` | `mealVoucher_FR` |
| `PaymentMethodSetupInfo` | `paybybankPlaid` | `paybybank_plaid` |
| `PaymentMethodSetupInfo` | `wechatpayPos` | `wechatpay_pos` |
| `PaymentMethodsRequest` | `shopperIp` | `shopperIP` |
| `PaymentReceipt` | `documentQualifier` | `DocumentQualifier` |
| `PaymentReceipt` | `integratedPrintFlag` | `IntegratedPrintFlag` |
| `PaymentReceipt` | `requiredSignatureFlag` | `RequiredSignatureFlag` |
| `PaymentReceipt` | `outputContent` | `OutputContent` |
| `PaymentRequest` | `shopperIp` | `shopperIP` |
| `PaymentRequest` | `threeDs2RequestData` | `threeDS2RequestData` |
| `PaymentRequest` | `threeDsAuthenticationOnly` | `threeDSAuthenticationOnly` |
| `PaymentRequest1` | `shopperIp` | `shopperIP` |
| `PaymentRequest1` | `threeDs2RequestData` | `threeDS2RequestData` |
| `PaymentRequest1` | `threeDsAuthenticationOnly` | `threeDSAuthenticationOnly` |
| `PaymentRequest2` | `saleData` | `SaleData` |
| `PaymentRequest2` | `paymentTransaction` | `PaymentTransaction` |
| `PaymentRequest2` | `paymentData` | `PaymentData` |
| `PaymentRequest2` | `loyaltyData` | `LoyaltyData` |
| `PaymentRequest21` | `saleData` | `SaleData` |
| `PaymentRequest21` | `paymentTransaction` | `PaymentTransaction` |
| `PaymentRequest21` | `paymentData` | `PaymentData` |
| `PaymentRequest21` | `loyaltyData` | `LoyaltyData` |
| `PaymentRequest3D` | `shopperIp` | `shopperIP` |
| `PaymentRequest3D` | `threeDs2RequestData` | `threeDS2RequestData` |
| `PaymentRequest3D` | `threeDsAuthenticationOnly` | `threeDSAuthenticationOnly` |
| `PaymentRequest3Ds2` | `shopperIp` | `shopperIP` |
| `PaymentRequest3Ds2` | `threeDs2RequestData` | `threeDS2RequestData` |
| `PaymentRequest3Ds2` | `threeDs2Result` | `threeDS2Result` |
| `PaymentRequest3Ds2` | `threeDs2Token` | `threeDS2Token` |
| `PaymentRequest3Ds2` | `threeDsAuthenticationOnly` | `threeDSAuthenticationOnly` |
| `PaymentResponse` | `threeDs2ResponseData` | `threeDS2ResponseData` |
| `PaymentResponse` | `threeDs2Result` | `threeDS2Result` |
| `PaymentResponse` | `threeDsPaymentData` | `threeDSPaymentData` |
| `PaymentResponse21` | `response` | `Response` |
| `PaymentResponse21` | `saleData` | `SaleData` |
| `PaymentResponse21` | `poiData` | `POIData` |
| `PaymentResponse21` | `paymentResult` | `PaymentResult` |
| `PaymentResponse21` | `loyaltyResult` | `LoyaltyResult` |
| `PaymentResponse21` | `paymentReceipt` | `PaymentReceipt` |
| `PaymentResponse4` | `response` | `Response` |
| `PaymentResponse4` | `saleData` | `SaleData` |
| `PaymentResponse4` | `poiData` | `POIData` |
| `PaymentResponse4` | `paymentResult` | `PaymentResult` |
| `PaymentResponse4` | `loyaltyResult` | `LoyaltyResult` |
| `PaymentResponse4` | `paymentReceipt` | `PaymentReceipt` |
| `PaymentResponse9` | `threeDs2ResponseData` | `threeDS2ResponseData` |
| `PaymentResponse9` | `threeDs2Result` | `threeDS2Result` |
| `PaymentResponse9` | `threeDsPaymentData` | `threeDSPaymentData` |
| `PaymentResult1` | `paymentType` | `PaymentType` |
| `PaymentResult1` | `paymentInstrumentData` | `PaymentInstrumentData` |
| `PaymentResult1` | `amountsResp` | `AmountsResp` |
| `PaymentResult1` | `instalment` | `Instalment` |
| `PaymentResult1` | `currencyConversion` | `CurrencyConversion` |
| `PaymentResult1` | `merchantOverrideFlag` | `MerchantOverrideFlag` |
| `PaymentResult1` | `capturedSignature` | `CapturedSignature` |
| `PaymentResult1` | `protectedSignature` | `ProtectedSignature` |
| `PaymentResult1` | `customerLanguage` | `CustomerLanguage` |
| `PaymentResult1` | `onlineFlag` | `OnlineFlag` |
| `PaymentResult1` | `authenticationMethod` | `AuthenticationMethod` |
| `PaymentResult1` | `validityDate` | `ValidityDate` |
| `PaymentResult1` | `paymentAcquirerData` | `PaymentAcquirerData` |
| `PaymentResult11` | `paymentType` | `PaymentType` |
| `PaymentResult11` | `paymentInstrumentData` | `PaymentInstrumentData` |
| `PaymentResult11` | `amountsResp` | `AmountsResp` |
| `PaymentResult11` | `instalment` | `Instalment` |
| `PaymentResult11` | `currencyConversion` | `CurrencyConversion` |
| `PaymentResult11` | `merchantOverrideFlag` | `MerchantOverrideFlag` |
| `PaymentResult11` | `capturedSignature` | `CapturedSignature` |
| `PaymentResult11` | `protectedSignature` | `ProtectedSignature` |
| `PaymentResult11` | `customerLanguage` | `CustomerLanguage` |
| `PaymentResult11` | `onlineFlag` | `OnlineFlag` |
| `PaymentResult11` | `authenticationMethod` | `AuthenticationMethod` |
| `PaymentResult11` | `validityDate` | `ValidityDate` |
| `PaymentResult11` | `paymentAcquirerData` | `PaymentAcquirerData` |
| `PaymentToken` | `tokenRequestedType` | `TokenRequestedType` |
| `PaymentToken` | `tokenValue` | `TokenValue` |
| `PaymentToken` | `expiryDateTime` | `ExpiryDateTime` |
| `PaymentToken1` | `tokenRequestedType` | `TokenRequestedType` |
| `PaymentToken1` | `tokenValue` | `TokenValue` |
| `PaymentToken1` | `expiryDateTime` | `ExpiryDateTime` |
| `PaymentTotals` | `transactionType` | `TransactionType` |
| `PaymentTotals` | `transactionCount` | `TransactionCount` |
| `PaymentTotals` | `transactionAmount` | `TransactionAmount` |
| `PaymentTransaction` | `amountsReq` | `AmountsReq` |
| `PaymentTransaction` | `originalPoiTransaction` | `OriginalPOITransaction` |
| `PaymentTransaction` | `transactionConditions` | `TransactionConditions` |
| `PaymentTransaction1` | `amountsReq` | `AmountsReq` |
| `PaymentTransaction1` | `originalPoiTransaction` | `OriginalPOITransaction` |
| `PaymentTransaction1` | `transactionConditions` | `TransactionConditions` |
| `PayoutAccountHolderRequest` | `bankAccountUuid` | `bankAccountUUID` |
| `PayoutAccountHolderResponse` | `bankAccountUuid` | `bankAccountUUID` |
| `PerformedTransaction` | `response` | `Response` |
| `PerformedTransaction` | `saleData` | `SaleData` |
| `PerformedTransaction` | `poiData` | `POIData` |
| `PerformedTransaction` | `paymentResult` | `PaymentResult` |
| `PerformedTransaction` | `loyaltyResult` | `LoyaltyResult` |
| `PerformedTransaction` | `reversedAmount` | `ReversedAmount` |
| `Point` | `x` | `X` |
| `Point` | `y` | `Y` |
| `PredefinedContent` | `referenceId` | `ReferenceID` |
| `PredefinedContent` | `language` | `Language` |
| `PredefinedContent1` | `referenceId` | `ReferenceID` |
| `PredefinedContent1` | `language` | `Language` |
| `PrintOutput` | `documentQualifier` | `DocumentQualifier` |
| `PrintOutput` | `responseMode` | `ResponseMode` |
| `PrintOutput` | `integratedPrintFlag` | `IntegratedPrintFlag` |
| `PrintOutput` | `requiredSignatureFlag` | `RequiredSignatureFlag` |
| `PrintOutput` | `outputContent` | `OutputContent` |
| `PrintOutput2` | `documentQualifier` | `DocumentQualifier` |
| `PrintOutput2` | `responseMode` | `ResponseMode` |
| `PrintOutput2` | `integratedPrintFlag` | `IntegratedPrintFlag` |
| `PrintOutput2` | `requiredSignatureFlag` | `RequiredSignatureFlag` |
| `PrintOutput2` | `outputContent` | `OutputContent` |
| `PrintRequest` | `printOutput` | `PrintOutput` |
| `PrintRequest2` | `printOutput` | `PrintOutput` |
| `PrintResponse` | `documentQualifier` | `DocumentQualifier` |
| `PrintResponse` | `response` | `Response` |
| `PrintResponse2` | `documentQualifier` | `DocumentQualifier` |
| `PrintResponse2` | `response` | `Response` |
| `Provider` | `logoUrl` | `logoURL` |
| `Provider2` | `logoUrl` | `logoURL` |
| `ReconciliationRequest` | `reconciliationType` | `ReconciliationType` |
| `ReconciliationRequest` | `acquirerId` | `AcquirerID` |
| `ReconciliationRequest` | `poiReconciliationId` | `POIReconciliationID` |
| `ReconciliationRequest2` | `reconciliationType` | `ReconciliationType` |
| `ReconciliationRequest2` | `acquirerId` | `AcquirerID` |
| `ReconciliationRequest2` | `poiReconciliationId` | `POIReconciliationID` |
| `ReconciliationResponse` | `response` | `Response` |
| `ReconciliationResponse` | `reconciliationType` | `ReconciliationType` |
| `ReconciliationResponse` | `poiReconciliationId` | `POIReconciliationID` |
| `ReconciliationResponse` | `transactionTotals` | `TransactionTotals` |
| `ReconciliationResponse2` | `response` | `Response` |
| `ReconciliationResponse2` | `reconciliationType` | `ReconciliationType` |
| `ReconciliationResponse2` | `poiReconciliationId` | `POIReconciliationID` |
| `ReconciliationResponse2` | `transactionTotals` | `TransactionTotals` |
| `RecurringDetailWrapper` | `recurringDetail` | `RecurringDetail` |
| `RepeatedMessageResponse` | `messageHeader` | `MessageHeader` |
| `RepeatedMessageResponse` | `repeatedResponseMessageBody` | `RepeatedResponseMessageBody` |
| `RepeatedMessageResponse2` | `messageHeader` | `MessageHeader` |
| `RepeatedMessageResponse2` | `repeatedResponseMessageBody` | `RepeatedResponseMessageBody` |
| `RepeatedResponseMessageBody` | `loyaltyResponse` | `LoyaltyResponse` |
| `RepeatedResponseMessageBody` | `paymentResponse` | `PaymentResponse` |
| `RepeatedResponseMessageBody` | `reversalResponse` | `ReversalResponse` |
| `RepeatedResponseMessageBody` | `storedValueResponse` | `StoredValueResponse` |
| `RepeatedResponseMessageBody` | `cardAcquisitionResponse` | `CardAcquisitionResponse` |
| `RepeatedResponseMessageBody` | `cardReaderApduResponse` | `CardReaderAPDUResponse` |
| `ReprocessAndroidAppResponse` | `message` | `Message` |
| `Response1` | `result` | `Result` |
| `Response1` | `errorCondition` | `ErrorCondition` |
| `Response1` | `additionalResponse` | `AdditionalResponse` |
| `Response11` | `result` | `Result` |
| `Response11` | `errorCondition` | `ErrorCondition` |
| `Response11` | `additionalResponse` | `AdditionalResponse` |
| `ResponseAdditionalData3DSecure` | `threeds2CardEnrolled` | `threeds2.cardEnrolled` |
| `ResponseAdditionalDataBillingAddress` | `billingAddressCity` | `billingAddress.city` |
| `ResponseAdditionalDataBillingAddress` | `billingAddressCountry` | `billingAddress.country` |
| `ResponseAdditionalDataBillingAddress` | `billingAddressHouseNumberOrName` | `billingAddress.houseNumberOrName` |
| `ResponseAdditionalDataBillingAddress` | `billingAddressPostalCode` | `billingAddress.postalCode` |
| `ResponseAdditionalDataBillingAddress` | `billingAddressStateOrProvince` | `billingAddress.stateOrProvince` |
| `ResponseAdditionalDataBillingAddress` | `billingAddressStreet` | `billingAddress.street` |
| `ResponseAdditionalDataCard` | `cardAltId` | `cardAltID` |
| `ResponseAdditionalDataCommon` | `dsTransId` | `dsTransID` |
| `ResponseAdditionalDataCommon` | `fraudCheckItemNrFraudCheckname` | `fraudCheck-[itemNr]-[FraudCheckname]` |
| `ResponseAdditionalDataCommon` | `recurringContractTypes` | `recurring.contractTypes` |
| `ResponseAdditionalDataCommon` | `recurringFirstPspReference` | `recurring.firstPspReference` |
| `ResponseAdditionalDataCommon` | `recurringRecurringDetailReference` | `recurring.recurringDetailReference` |
| `ResponseAdditionalDataCommon` | `recurringShopperReference` | `recurring.shopperReference` |
| `ResponseAdditionalDataCommon` | `threeDsVersion` | `threeDSVersion` |
| `ResponseAdditionalDataCommon` | `tokenizationShopperReference` | `tokenization.shopperReference` |
| `ResponseAdditionalDataCommon` | `tokenizationStoreOperationType` | `tokenization.store.operationType` |
| `ResponseAdditionalDataCommon` | `tokenizationStoredPaymentMethodId` | `tokenization.storedPaymentMethodId` |
| `ResponseAdditionalDataCommon1` | `dsTransId` | `dsTransID` |
| `ResponseAdditionalDataCommon1` | `fraudCheckItemNrFraudCheckname` | `fraudCheck-[itemNr]-[FraudCheckname]` |
| `ResponseAdditionalDataCommon1` | `recurringContractTypes` | `recurring.contractTypes` |
| `ResponseAdditionalDataCommon1` | `recurringFirstPspReference` | `recurring.firstPspReference` |
| `ResponseAdditionalDataCommon1` | `recurringRecurringDetailReference` | `recurring.recurringDetailReference` |
| `ResponseAdditionalDataCommon1` | `recurringShopperReference` | `recurring.shopperReference` |
| `ResponseAdditionalDataCommon1` | `threeDsVersion` | `threeDSVersion` |
| `ResponseAdditionalDataCommon1` | `tokenizationShopperReference` | `tokenization.shopperReference` |
| `ResponseAdditionalDataCommon1` | `tokenizationStoreOperationType` | `tokenization.store.operationType` |
| `ResponseAdditionalDataCommon1` | `tokenizationStoredPaymentMethodId` | `tokenization.storedPaymentMethodId` |
| `ResponseAdditionalDataInstallments` | `installmentPaymentDataInstallmentType` | `installmentPaymentData.installmentType` |
| `ResponseAdditionalDataInstallments` | `installmentPaymentDataOptionItemNrAnnualPercentageRate` | `installmentPaymentData.option[itemNr].annualPercentageRate` |
| `ResponseAdditionalDataInstallments` | `installmentPaymentDataOptionItemNrFirstInstallmentAmount` | `installmentPaymentData.option[itemNr].firstInstallmentAmount` |
| `ResponseAdditionalDataInstallments` | `installmentPaymentDataOptionItemNrInstallmentFee` | `installmentPaymentData.option[itemNr].installmentFee` |
| `ResponseAdditionalDataInstallments` | `installmentPaymentDataOptionItemNrInterestRate` | `installmentPaymentData.option[itemNr].interestRate` |
| `ResponseAdditionalDataInstallments` | `installmentPaymentDataOptionItemNrMaximumNumberOfInstallments` | `installmentPaymentData.option[itemNr].maximumNumberOfInstallments` |
| `ResponseAdditionalDataInstallments` | `installmentPaymentDataOptionItemNrMinimumNumberOfInstallments` | `installmentPaymentData.option[itemNr].minimumNumberOfInstallments` |
| `ResponseAdditionalDataInstallments` | `installmentPaymentDataOptionItemNrNumberOfInstallments` | `installmentPaymentData.option[itemNr].numberOfInstallments` |
| `ResponseAdditionalDataInstallments` | `installmentPaymentDataOptionItemNrSubsequentInstallmentAmount` | `installmentPaymentData.option[itemNr].subsequentInstallmentAmount` |
| `ResponseAdditionalDataInstallments` | `installmentPaymentDataOptionItemNrTotalAmountDue` | `installmentPaymentData.option[itemNr].totalAmountDue` |
| `ResponseAdditionalDataInstallments` | `installmentPaymentDataPaymentOptions` | `installmentPaymentData.paymentOptions` |
| `ResponseAdditionalDataInstallments` | `installmentsValue` | `installments.value` |
| `ResponseAdditionalDataNetworkTokens` | `networkTokenAvailable` | `networkToken.available` |
| `ResponseAdditionalDataNetworkTokens` | `networkTokenBin` | `networkToken.bin` |
| `ResponseAdditionalDataNetworkTokens` | `networkTokenTokenSummary` | `networkToken.tokenSummary` |
| `ResponseAdditionalDataOpi` | `opiTransToken` | `opi.transToken` |
| `ResponseAdditionalDataSepa` | `sepadirectdebitDateOfSignature` | `sepadirectdebit.dateOfSignature` |
| `ResponseAdditionalDataSepa` | `sepadirectdebitMandateId` | `sepadirectdebit.mandateId` |
| `ResponseAdditionalDataSepa` | `sepadirectdebitSepadirectdebitDueDate` | `sepadirectdebit.sepadirectdebit.dueDate` |
| `ResponseAdditionalDataSepa` | `sepadirectdebitSequenceType` | `sepadirectdebit.sequenceType` |
| `ResponseAdditionalDataSwish` | `swishPayerAlias` | `swish.payerAlias` |
| `ReversalRequest` | `saleData` | `SaleData` |
| `ReversalRequest` | `originalPoiTransaction` | `OriginalPOITransaction` |
| `ReversalRequest` | `reversedAmount` | `ReversedAmount` |
| `ReversalRequest` | `reversalReason` | `ReversalReason` |
| `ReversalRequest2` | `saleData` | `SaleData` |
| `ReversalRequest2` | `originalPoiTransaction` | `OriginalPOITransaction` |
| `ReversalRequest2` | `reversedAmount` | `ReversedAmount` |
| `ReversalRequest2` | `reversalReason` | `ReversalReason` |
| `ReversalResponse` | `response` | `Response` |
| `ReversalResponse` | `poiData` | `POIData` |
| `ReversalResponse` | `originalPoiTransaction` | `OriginalPOITransaction` |
| `ReversalResponse` | `reversedAmount` | `ReversedAmount` |
| `ReversalResponse` | `paymentReceipt` | `PaymentReceipt` |
| `ReversalResponse2` | `response` | `Response` |
| `ReversalResponse2` | `poiData` | `POIData` |
| `ReversalResponse2` | `originalPoiTransaction` | `OriginalPOITransaction` |
| `ReversalResponse2` | `reversedAmount` | `ReversedAmount` |
| `ReversalResponse2` | `paymentReceipt` | `PaymentReceipt` |
| `SaleData` | `operatorId` | `OperatorID` |
| `SaleData` | `operatorLanguage` | `OperatorLanguage` |
| `SaleData` | `shiftNumber` | `ShiftNumber` |
| `SaleData` | `saleTransactionId` | `SaleTransactionID` |
| `SaleData` | `saleReferenceId` | `SaleReferenceID` |
| `SaleData` | `saleTerminalData` | `SaleTerminalData` |
| `SaleData` | `tokenRequestedType` | `TokenRequestedType` |
| `SaleData` | `customerOrderId` | `CustomerOrderID` |
| `SaleData` | `customerOrderReq` | `CustomerOrderReq` |
| `SaleData` | `saleToPoiData` | `SaleToPOIData` |
| `SaleData` | `saleToAcquirerData` | `SaleToAcquirerData` |
| `SaleData` | `saleToIssuerData` | `SaleToIssuerData` |
| `SaleData1` | `operatorId` | `OperatorID` |
| `SaleData1` | `operatorLanguage` | `OperatorLanguage` |
| `SaleData1` | `shiftNumber` | `ShiftNumber` |
| `SaleData1` | `saleTransactionId` | `SaleTransactionID` |
| `SaleData1` | `saleReferenceId` | `SaleReferenceID` |
| `SaleData1` | `saleTerminalData` | `SaleTerminalData` |
| `SaleData1` | `tokenRequestedType` | `TokenRequestedType` |
| `SaleData1` | `customerOrderId` | `CustomerOrderID` |
| `SaleData1` | `customerOrderReq` | `CustomerOrderReq` |
| `SaleData1` | `saleToPoiData` | `SaleToPOIData` |
| `SaleData1` | `saleToAcquirerData` | `SaleToAcquirerData` |
| `SaleData1` | `saleToIssuerData` | `SaleToIssuerData` |
| `SaleData6` | `operatorId` | `OperatorID` |
| `SaleData6` | `operatorLanguage` | `OperatorLanguage` |
| `SaleData6` | `shiftNumber` | `ShiftNumber` |
| `SaleData6` | `saleTransactionId` | `SaleTransactionID` |
| `SaleData6` | `saleReferenceId` | `SaleReferenceID` |
| `SaleData6` | `saleTerminalData` | `SaleTerminalData` |
| `SaleData6` | `tokenRequestedType` | `TokenRequestedType` |
| `SaleData6` | `customerOrderId` | `CustomerOrderID` |
| `SaleData6` | `customerOrderReq` | `CustomerOrderReq` |
| `SaleData6` | `saleToPoiData` | `SaleToPOIData` |
| `SaleData6` | `saleToAcquirerData` | `SaleToAcquirerData` |
| `SaleData6` | `saleToIssuerData` | `SaleToIssuerData` |
| `SaleSoftware` | `manufacturerId` | `ManufacturerID` |
| `SaleSoftware` | `applicationName` | `ApplicationName` |
| `SaleSoftware` | `softwareVersion` | `SoftwareVersion` |
| `SaleSoftware` | `certificationCode` | `CertificationCode` |
| `SaleSoftware1` | `manufacturerId` | `ManufacturerID` |
| `SaleSoftware1` | `applicationName` | `ApplicationName` |
| `SaleSoftware1` | `softwareVersion` | `SoftwareVersion` |
| `SaleSoftware1` | `certificationCode` | `CertificationCode` |
| `SaleTerminalData` | `totalsGroupId` | `TotalsGroupID` |
| `SaleTerminalData1` | `totalsGroupId` | `TotalsGroupID` |
| `SaleTerminalData2` | `totalsGroupId` | `TotalsGroupID` |
| `SaleToIssuerData` | `statementReference` | `StatementReference` |
| `SaleToIssuerData1` | `statementReference` | `StatementReference` |
| `SaleToPoiRequest` | `messageHeader` | `MessageHeader` |
| `SaleToPoiRequest` | `abortRequest` | `AbortRequest` |
| `SaleToPoiRequest` | `balanceInquiryRequest` | `BalanceInquiryRequest` |
| `SaleToPoiRequest` | `cardAcquisitionRequest` | `CardAcquisitionRequest` |
| `SaleToPoiRequest` | `adminRequest` | `AdminRequest` |
| `SaleToPoiRequest` | `diagnosisRequest` | `DiagnosisRequest` |
| `SaleToPoiRequest` | `displayRequest` | `DisplayRequest` |
| `SaleToPoiRequest` | `enableServiceRequest` | `EnableServiceRequest` |
| `SaleToPoiRequest` | `eventNotification` | `EventNotification` |
| `SaleToPoiRequest` | `getTotalsRequest` | `GetTotalsRequest` |
| `SaleToPoiRequest` | `inputRequest` | `InputRequest` |
| `SaleToPoiRequest` | `inputUpdate` | `InputUpdate` |
| `SaleToPoiRequest` | `loginRequest` | `LoginRequest` |
| `SaleToPoiRequest` | `logoutRequest` | `LogoutRequest` |
| `SaleToPoiRequest` | `paymentRequest` | `PaymentRequest` |
| `SaleToPoiRequest` | `printRequest` | `PrintRequest` |
| `SaleToPoiRequest` | `cardReaderApduRequest` | `CardReaderAPDURequest` |
| `SaleToPoiRequest` | `reconciliationRequest` | `ReconciliationRequest` |
| `SaleToPoiRequest` | `reversalRequest` | `ReversalRequest` |
| `SaleToPoiRequest` | `storedValueRequest` | `StoredValueRequest` |
| `SaleToPoiRequest` | `transactionStatusRequest` | `TransactionStatusRequest` |
| `SaleToPoiResponse` | `messageHeader` | `MessageHeader` |
| `SaleToPoiResponse` | `balanceInquiryResponse` | `BalanceInquiryResponse` |
| `SaleToPoiResponse` | `cardAcquisitionResponse` | `CardAcquisitionResponse` |
| `SaleToPoiResponse` | `adminResponse` | `AdminResponse` |
| `SaleToPoiResponse` | `diagnosisResponse` | `DiagnosisResponse` |
| `SaleToPoiResponse` | `displayResponse` | `DisplayResponse` |
| `SaleToPoiResponse` | `enableServiceResponse` | `EnableServiceResponse` |
| `SaleToPoiResponse` | `getTotalsResponse` | `GetTotalsResponse` |
| `SaleToPoiResponse` | `inputResponse` | `InputResponse` |
| `SaleToPoiResponse` | `loginResponse` | `LoginResponse` |
| `SaleToPoiResponse` | `logoutResponse` | `LogoutResponse` |
| `SaleToPoiResponse` | `loyaltyResponse` | `LoyaltyResponse` |
| `SaleToPoiResponse` | `paymentResponse` | `PaymentResponse` |
| `SaleToPoiResponse` | `printResponse` | `PrintResponse` |
| `SaleToPoiResponse` | `cardReaderApduResponse` | `CardReaderAPDUResponse` |
| `SaleToPoiResponse` | `reconciliationResponse` | `ReconciliationResponse` |
| `SaleToPoiResponse` | `reversalResponse` | `ReversalResponse` |
| `SaleToPoiResponse` | `storedValueResponse` | `StoredValueResponse` |
| `SaleToPoiResponse` | `transactionStatusResponse` | `TransactionStatusResponse` |
| `SecurityTrailer` | `adyenCryptoVersion` | `AdyenCryptoVersion` |
| `SecurityTrailer` | `keyIdentifier` | `KeyIdentifier` |
| `SecurityTrailer` | `keyVersion` | `KeyVersion` |
| `SecurityTrailer` | `nonce` | `Nonce` |
| `SecurityTrailer` | `hmac` | `Hmac` |
| `SensitiveCardData` | `pan` | `PAN` |
| `SensitiveCardData` | `cardSeqNumb` | `CardSeqNumb` |
| `SensitiveCardData` | `expiryDate` | `ExpiryDate` |
| `SensitiveCardData` | `trackData` | `TrackData` |
| `SensitiveCardData1` | `pan` | `PAN` |
| `SensitiveCardData1` | `cardSeqNumb` | `CardSeqNumb` |
| `SensitiveCardData1` | `expiryDate` | `ExpiryDate` |
| `SensitiveCardData1` | `trackData` | `TrackData` |
| `SensitiveMobileData` | `msisdn` | `MSISDN` |
| `SensitiveMobileData` | `imsi` | `IMSI` |
| `SensitiveMobileData` | `imei` | `IMEI` |
| `SensitiveMobileData1` | `msisdn` | `MSISDN` |
| `SensitiveMobileData1` | `imsi` | `IMSI` |
| `SensitiveMobileData1` | `imei` | `IMEI` |
| `SetTaxElectronicDeliveryConsentRequest` | `us1099K` | `US1099k` |
| `SoundContent` | `soundFormat` | `SoundFormat` |
| `SoundContent` | `language` | `Language` |
| `SoundContent` | `referenceId` | `ReferenceID` |
| `SoundContent` | `text` | `Text` |
| `Store` | `links` | `_links` |
| `StoreDetail` | `splitConfigurationUuid` | `splitConfigurationUUID` |
| `StoredPaymentMethodRequest` | `shopperIp` | `shopperIP` |
| `StoredValueAccountId` | `storedValueAccountType` | `StoredValueAccountType` |
| `StoredValueAccountId` | `storedValueProvider` | `StoredValueProvider` |
| `StoredValueAccountId` | `ownerName` | `OwnerName` |
| `StoredValueAccountId` | `expiryDate` | `ExpiryDate` |
| `StoredValueAccountId` | `entryMode` | `EntryMode` |
| `StoredValueAccountId` | `identificationType` | `IdentificationType` |
| `StoredValueAccountId` | `storedValueId` | `StoredValueID` |
| `StoredValueAccountId1` | `storedValueAccountType` | `StoredValueAccountType` |
| `StoredValueAccountId1` | `storedValueProvider` | `StoredValueProvider` |
| `StoredValueAccountId1` | `ownerName` | `OwnerName` |
| `StoredValueAccountId1` | `expiryDate` | `ExpiryDate` |
| `StoredValueAccountId1` | `entryMode` | `EntryMode` |
| `StoredValueAccountId1` | `identificationType` | `IdentificationType` |
| `StoredValueAccountId1` | `storedValueId` | `StoredValueID` |
| `StoredValueAccountStatus` | `storedValueAccountId` | `StoredValueAccountID` |
| `StoredValueAccountStatus` | `currentBalance` | `CurrentBalance` |
| `StoredValueAccountStatus1` | `storedValueAccountId` | `StoredValueAccountID` |
| `StoredValueAccountStatus1` | `currentBalance` | `CurrentBalance` |
| `StoredValueData` | `storedValueProvider` | `StoredValueProvider` |
| `StoredValueData` | `storedValueTransactionType` | `StoredValueTransactionType` |
| `StoredValueData` | `storedValueAccountId` | `StoredValueAccountID` |
| `StoredValueData` | `originalPoiTransaction` | `OriginalPOITransaction` |
| `StoredValueData` | `productCode` | `ProductCode` |
| `StoredValueData` | `eanUpc` | `EanUpc` |
| `StoredValueData` | `itemAmount` | `ItemAmount` |
| `StoredValueData` | `currency` | `Currency` |
| `StoredValueRequest` | `saleData` | `SaleData` |
| `StoredValueRequest` | `storedValueData` | `StoredValueData` |
| `StoredValueRequest2` | `saleData` | `SaleData` |
| `StoredValueRequest2` | `storedValueData` | `StoredValueData` |
| `StoredValueResponse` | `response` | `Response` |
| `StoredValueResponse` | `saleData` | `SaleData` |
| `StoredValueResponse` | `poiData` | `POIData` |
| `StoredValueResponse` | `storedValueResult` | `StoredValueResult` |
| `StoredValueResponse` | `paymentReceipt` | `PaymentReceipt` |
| `StoredValueResponse2` | `response` | `Response` |
| `StoredValueResponse2` | `saleData` | `SaleData` |
| `StoredValueResponse2` | `poiData` | `POIData` |
| `StoredValueResponse2` | `storedValueResult` | `StoredValueResult` |
| `StoredValueResponse2` | `paymentReceipt` | `PaymentReceipt` |
| `StoredValueResult` | `storedValueTransactionType` | `StoredValueTransactionType` |
| `StoredValueResult` | `productCode` | `ProductCode` |
| `StoredValueResult` | `eanUpc` | `EanUpc` |
| `StoredValueResult` | `itemAmount` | `ItemAmount` |
| `StoredValueResult` | `currency` | `Currency` |
| `StoredValueResult` | `storedValueAccountStatus` | `StoredValueAccountStatus` |
| `StoredValueResult` | `hostTransactionId` | `HostTransactionID` |
| `Terminal` | `installedApKs` | `installedAPKs` |
| `TerminalApiRequest` | `saleToPoiRequest` | `SaleToPOIRequest` |
| `TerminalApiResponse` | `saleToPoiResponse` | `SaleToPOIResponse` |
| `ThreeDs2CardRangeDetail` | `threeDs2Versions` | `threeDS2Versions` |
| `ThreeDs2CardRangeDetail` | `threeDsMethodUrl` | `threeDSMethodURL` |
| `ThreeDs2RequestData` | `acquirerBin` | `acquirerBIN` |
| `ThreeDs2RequestData` | `acquirerMerchantId` | `acquirerMerchantID` |
| `ThreeDs2RequestData` | `notificationUrl` | `notificationURL` |
| `ThreeDs2RequestData` | `sdkAppId` | `sdkAppID` |
| `ThreeDs2RequestData` | `sdkTransId` | `sdkTransID` |
| `ThreeDs2RequestData` | `threeDsCompInd` | `threeDSCompInd` |
| `ThreeDs2RequestData` | `threeDsRequestorAuthenticationInd` | `threeDSRequestorAuthenticationInd` |
| `ThreeDs2RequestData` | `threeDsRequestorAuthenticationInfo` | `threeDSRequestorAuthenticationInfo` |
| `ThreeDs2RequestData` | `threeDsRequestorChallengeInd` | `threeDSRequestorChallengeInd` |
| `ThreeDs2RequestData` | `threeDsRequestorId` | `threeDSRequestorID` |
| `ThreeDs2RequestData` | `threeDsRequestorName` | `threeDSRequestorName` |
| `ThreeDs2RequestData` | `threeDsRequestorPriorAuthenticationInfo` | `threeDSRequestorPriorAuthenticationInfo` |
| `ThreeDs2RequestData` | `threeDsRequestorUrl` | `threeDSRequestorURL` |
| `ThreeDs2RequestData1` | `acquirerBin` | `acquirerBIN` |
| `ThreeDs2RequestData1` | `acquirerMerchantId` | `acquirerMerchantID` |
| `ThreeDs2RequestData1` | `notificationUrl` | `notificationURL` |
| `ThreeDs2RequestData1` | `sdkAppId` | `sdkAppID` |
| `ThreeDs2RequestData1` | `sdkTransId` | `sdkTransID` |
| `ThreeDs2RequestData1` | `threeDsCompInd` | `threeDSCompInd` |
| `ThreeDs2RequestData1` | `threeDsRequestorAuthenticationInd` | `threeDSRequestorAuthenticationInd` |
| `ThreeDs2RequestData1` | `threeDsRequestorAuthenticationInfo` | `threeDSRequestorAuthenticationInfo` |
| `ThreeDs2RequestData1` | `threeDsRequestorChallengeInd` | `threeDSRequestorChallengeInd` |
| `ThreeDs2RequestData1` | `threeDsRequestorId` | `threeDSRequestorID` |
| `ThreeDs2RequestData1` | `threeDsRequestorName` | `threeDSRequestorName` |
| `ThreeDs2RequestData1` | `threeDsRequestorPriorAuthenticationInfo` | `threeDSRequestorPriorAuthenticationInfo` |
| `ThreeDs2RequestData1` | `threeDsRequestorUrl` | `threeDSRequestorURL` |
| `ThreeDs2RequestData11` | `acquirerBin` | `acquirerBIN` |
| `ThreeDs2RequestData11` | `acquirerMerchantId` | `acquirerMerchantID` |
| `ThreeDs2RequestData11` | `notificationUrl` | `notificationURL` |
| `ThreeDs2RequestData11` | `sdkAppId` | `sdkAppID` |
| `ThreeDs2RequestData11` | `sdkTransId` | `sdkTransID` |
| `ThreeDs2RequestData11` | `threeDsCompInd` | `threeDSCompInd` |
| `ThreeDs2RequestData11` | `threeDsRequestorAuthenticationInd` | `threeDSRequestorAuthenticationInd` |
| `ThreeDs2RequestData11` | `threeDsRequestorAuthenticationInfo` | `threeDSRequestorAuthenticationInfo` |
| `ThreeDs2RequestData11` | `threeDsRequestorChallengeInd` | `threeDSRequestorChallengeInd` |
| `ThreeDs2RequestData11` | `threeDsRequestorId` | `threeDSRequestorID` |
| `ThreeDs2RequestData11` | `threeDsRequestorName` | `threeDSRequestorName` |
| `ThreeDs2RequestData11` | `threeDsRequestorPriorAuthenticationInfo` | `threeDSRequestorPriorAuthenticationInfo` |
| `ThreeDs2RequestData11` | `threeDsRequestorUrl` | `threeDSRequestorURL` |
| `ThreeDs2RequestData2` | `acquirerBin` | `acquirerBIN` |
| `ThreeDs2RequestData2` | `acquirerMerchantId` | `acquirerMerchantID` |
| `ThreeDs2RequestData2` | `notificationUrl` | `notificationURL` |
| `ThreeDs2RequestData2` | `sdkAppId` | `sdkAppID` |
| `ThreeDs2RequestData2` | `sdkTransId` | `sdkTransID` |
| `ThreeDs2RequestData2` | `threeDsCompInd` | `threeDSCompInd` |
| `ThreeDs2RequestData2` | `threeDsRequestorAuthenticationInd` | `threeDSRequestorAuthenticationInd` |
| `ThreeDs2RequestData2` | `threeDsRequestorAuthenticationInfo` | `threeDSRequestorAuthenticationInfo` |
| `ThreeDs2RequestData2` | `threeDsRequestorChallengeInd` | `threeDSRequestorChallengeInd` |
| `ThreeDs2RequestData2` | `threeDsRequestorId` | `threeDSRequestorID` |
| `ThreeDs2RequestData2` | `threeDsRequestorName` | `threeDSRequestorName` |
| `ThreeDs2RequestData2` | `threeDsRequestorPriorAuthenticationInfo` | `threeDSRequestorPriorAuthenticationInfo` |
| `ThreeDs2RequestData2` | `threeDsRequestorUrl` | `threeDSRequestorURL` |
| `ThreeDs2RequestFields` | `acquirerBin` | `acquirerBIN` |
| `ThreeDs2RequestFields` | `acquirerMerchantId` | `acquirerMerchantID` |
| `ThreeDs2RequestFields` | `notificationUrl` | `notificationURL` |
| `ThreeDs2RequestFields` | `sdkAppId` | `sdkAppID` |
| `ThreeDs2RequestFields` | `sdkTransId` | `sdkTransID` |
| `ThreeDs2RequestFields` | `threeDsCompInd` | `threeDSCompInd` |
| `ThreeDs2RequestFields` | `threeDsRequestorAuthenticationInd` | `threeDSRequestorAuthenticationInd` |
| `ThreeDs2RequestFields` | `threeDsRequestorAuthenticationInfo` | `threeDSRequestorAuthenticationInfo` |
| `ThreeDs2RequestFields` | `threeDsRequestorChallengeInd` | `threeDSRequestorChallengeInd` |
| `ThreeDs2RequestFields` | `threeDsRequestorId` | `threeDSRequestorID` |
| `ThreeDs2RequestFields` | `threeDsRequestorName` | `threeDSRequestorName` |
| `ThreeDs2RequestFields` | `threeDsRequestorPriorAuthenticationInfo` | `threeDSRequestorPriorAuthenticationInfo` |
| `ThreeDs2RequestFields` | `threeDsRequestorUrl` | `threeDSRequestorURL` |
| `ThreeDs2RequestFields1` | `acquirerBin` | `acquirerBIN` |
| `ThreeDs2RequestFields1` | `acquirerMerchantId` | `acquirerMerchantID` |
| `ThreeDs2RequestFields1` | `notificationUrl` | `notificationURL` |
| `ThreeDs2RequestFields1` | `sdkAppId` | `sdkAppID` |
| `ThreeDs2RequestFields1` | `sdkTransId` | `sdkTransID` |
| `ThreeDs2RequestFields1` | `threeDsCompInd` | `threeDSCompInd` |
| `ThreeDs2RequestFields1` | `threeDsRequestorAuthenticationInd` | `threeDSRequestorAuthenticationInd` |
| `ThreeDs2RequestFields1` | `threeDsRequestorAuthenticationInfo` | `threeDSRequestorAuthenticationInfo` |
| `ThreeDs2RequestFields1` | `threeDsRequestorChallengeInd` | `threeDSRequestorChallengeInd` |
| `ThreeDs2RequestFields1` | `threeDsRequestorId` | `threeDSRequestorID` |
| `ThreeDs2RequestFields1` | `threeDsRequestorName` | `threeDSRequestorName` |
| `ThreeDs2RequestFields1` | `threeDsRequestorPriorAuthenticationInfo` | `threeDSRequestorPriorAuthenticationInfo` |
| `ThreeDs2RequestFields1` | `threeDsRequestorUrl` | `threeDSRequestorURL` |
| `ThreeDs2ResponseData` | `acsOperatorId` | `acsOperatorID` |
| `ThreeDs2ResponseData` | `acsTransId` | `acsTransID` |
| `ThreeDs2ResponseData` | `acsUrl` | `acsURL` |
| `ThreeDs2ResponseData` | `dsTransId` | `dsTransID` |
| `ThreeDs2ResponseData` | `threeDsServerTransId` | `threeDSServerTransID` |
| `ThreeDs2ResponseData1` | `acsOperatorId` | `acsOperatorID` |
| `ThreeDs2ResponseData1` | `acsTransId` | `acsTransID` |
| `ThreeDs2ResponseData1` | `acsUrl` | `acsURL` |
| `ThreeDs2ResponseData1` | `dsTransId` | `dsTransID` |
| `ThreeDs2ResponseData1` | `threeDsServerTransId` | `threeDSServerTransID` |
| `ThreeDs2Result` | `dsTransId` | `dsTransID` |
| `ThreeDs2Result` | `threeDsRequestorChallengeInd` | `threeDSRequestorChallengeInd` |
| `ThreeDs2Result` | `threeDsServerTransId` | `threeDSServerTransID` |
| `ThreeDs2Result1` | `dsTransId` | `dsTransID` |
| `ThreeDs2Result1` | `threeDsRequestorChallengeInd` | `threeDSRequestorChallengeInd` |
| `ThreeDs2Result1` | `threeDsServerTransId` | `threeDSServerTransID` |
| `ThreeDs2ResultResponse` | `threeDs2Result` | `threeDS2Result` |
| `ThreeDsAvailabilityResponse` | `threeDs1Supported` | `threeDS1Supported` |
| `ThreeDsAvailabilityResponse` | `threeDs2CardRangeDetails` | `threeDS2CardRangeDetails` |
| `ThreeDsAvailabilityResponse` | `threeDs2Supported` | `threeDS2supported` |
| `ThreeDsRequestData` | `nativeThreeDs` | `nativeThreeDS` |
| `ThreeDsRequestData` | `threeDsVersion` | `threeDSVersion` |
| `ThreeDsRequestData2` | `nativeThreeDs` | `nativeThreeDS` |
| `ThreeDsRequestData2` | `threeDsVersion` | `threeDSVersion` |
| `ThreeDsRequestorAuthenticationInfo` | `threeDsReqAuthData` | `threeDSReqAuthData` |
| `ThreeDsRequestorAuthenticationInfo` | `threeDsReqAuthMethod` | `threeDSReqAuthMethod` |
| `ThreeDsRequestorAuthenticationInfo` | `threeDsReqAuthTimestamp` | `threeDSReqAuthTimestamp` |
| `ThreeDsRequestorPriorAuthenticationInfo` | `threeDsReqPriorAuthData` | `threeDSReqPriorAuthData` |
| `ThreeDsRequestorPriorAuthenticationInfo` | `threeDsReqPriorAuthMethod` | `threeDSReqPriorAuthMethod` |
| `ThreeDsRequestorPriorAuthenticationInfo` | `threeDsReqPriorAuthTimestamp` | `threeDSReqPriorAuthTimestamp` |
| `ThreeDsRequestorPriorAuthenticationInfo` | `threeDsReqPriorRef` | `threeDSReqPriorRef` |
| `ThreeDSecureData` | `dsTransId` | `dsTransID` |
| `ThreeDSecureData` | `threeDsVersion` | `threeDSVersion` |
| `ThreeDSecureData3` | `dsTransId` | `dsTransID` |
| `ThreeDSecureData3` | `threeDsVersion` | `threeDSVersion` |
| `TotalFilter` | `poiid` | `POIID` |
| `TotalFilter` | `saleId` | `SaleID` |
| `TotalFilter` | `operatorId` | `OperatorID` |
| `TotalFilter` | `shiftNumber` | `ShiftNumber` |
| `TotalFilter` | `totalsGroupId` | `TotalsGroupID` |
| `TotalFilter2` | `poiid` | `POIID` |
| `TotalFilter2` | `saleId` | `SaleID` |
| `TotalFilter2` | `operatorId` | `OperatorID` |
| `TotalFilter2` | `shiftNumber` | `ShiftNumber` |
| `TotalFilter2` | `totalsGroupId` | `TotalsGroupID` |
| `TrackData` | `trackNumb` | `TrackNumb` |
| `TrackData` | `trackFormat` | `TrackFormat` |
| `TrackData` | `trackValue` | `TrackValue` |
| `TrackData1` | `trackNumb` | `TrackNumb` |
| `TrackData1` | `trackFormat` | `TrackFormat` |
| `TrackData1` | `trackValue` | `TrackValue` |
| `TransactionConditions` | `allowedPaymentBrand` | `AllowedPaymentBrand` |
| `TransactionConditions` | `acquirerId` | `AcquirerID` |
| `TransactionConditions` | `debitPreferredFlag` | `DebitPreferredFlag` |
| `TransactionConditions` | `allowedLoyaltyBrand` | `AllowedLoyaltyBrand` |
| `TransactionConditions` | `loyaltyHandling` | `LoyaltyHandling` |
| `TransactionConditions` | `customerLanguage` | `CustomerLanguage` |
| `TransactionConditions` | `forceOnlineFlag` | `ForceOnlineFlag` |
| `TransactionConditions` | `forceEntryMode` | `ForceEntryMode` |
| `TransactionConditions` | `merchantCategoryCode` | `MerchantCategoryCode` |
| `TransactionIdType` | `transactionId` | `TransactionID` |
| `TransactionIdType` | `timeStamp` | `TimeStamp` |
| `TransactionIdType1` | `transactionId` | `TransactionID` |
| `TransactionIdType1` | `timeStamp` | `TimeStamp` |
| `TransactionIdType2` | `transactionId` | `TransactionID` |
| `TransactionIdType2` | `timeStamp` | `TimeStamp` |
| `TransactionIdType3` | `transactionId` | `TransactionID` |
| `TransactionIdType3` | `timeStamp` | `TimeStamp` |
| `TransactionIdType4` | `transactionId` | `TransactionID` |
| `TransactionIdType4` | `timeStamp` | `TimeStamp` |
| `TransactionIdType5` | `transactionId` | `TransactionID` |
| `TransactionIdType5` | `timeStamp` | `TimeStamp` |
| `TransactionIdType6` | `transactionId` | `TransactionID` |
| `TransactionIdType6` | `timeStamp` | `TimeStamp` |
| `TransactionIdType7` | `transactionId` | `TransactionID` |
| `TransactionIdType7` | `timeStamp` | `TimeStamp` |
| `TransactionSearchResponse` | `links` | `_links` |
| `TransactionStatusRequest` | `messageReference` | `MessageReference` |
| `TransactionStatusRequest` | `receiptReprintFlag` | `ReceiptReprintFlag` |
| `TransactionStatusRequest` | `documentQualifier` | `DocumentQualifier` |
| `TransactionStatusRequest2` | `messageReference` | `MessageReference` |
| `TransactionStatusRequest2` | `receiptReprintFlag` | `ReceiptReprintFlag` |
| `TransactionStatusRequest2` | `documentQualifier` | `DocumentQualifier` |
| `TransactionStatusResponse` | `response` | `Response` |
| `TransactionStatusResponse` | `messageReference` | `MessageReference` |
| `TransactionStatusResponse` | `repeatedMessageResponse` | `RepeatedMessageResponse` |
| `TransactionStatusResponse2` | `response` | `Response` |
| `TransactionStatusResponse2` | `messageReference` | `MessageReference` |
| `TransactionStatusResponse2` | `repeatedMessageResponse` | `RepeatedMessageResponse` |
| `TransactionTotals` | `paymentInstrumentType` | `PaymentInstrumentType` |
| `TransactionTotals` | `acquirerId` | `AcquirerID` |
| `TransactionTotals` | `hostReconciliationId` | `HostReconciliationID` |
| `TransactionTotals` | `cardBrand` | `CardBrand` |
| `TransactionTotals` | `poiid` | `POIID` |
| `TransactionTotals` | `saleId` | `SaleID` |
| `TransactionTotals` | `operatorId` | `OperatorID` |
| `TransactionTotals` | `shiftNumber` | `ShiftNumber` |
| `TransactionTotals` | `totalsGroupId` | `TotalsGroupID` |
| `TransactionTotals` | `paymentCurrency` | `PaymentCurrency` |
| `TransactionTotals` | `paymentTotals` | `PaymentTotals` |
| `UtmCoordinates` | `utmZone` | `UTMZone` |
| `UtmCoordinates` | `utmEastward` | `UTMEastward` |
| `UtmCoordinates` | `utmNorthward` | `UTMNorthward` |
| `UpdateAccountRequest` | `bankAccountUuid` | `bankAccountUUID` |
| `UpdateAccountResponse` | `bankAccountUuid` | `bankAccountUUID` |
| `UpdateCompanyApiCredentialRequest` | `subjectDn` | `subjectDN` |
| `UpdateMerchantApiCredentialRequest` | `subjectDn` | `subjectDN` |
| `UpdatePaymentMethodInfo` | `eftDirectdebitCa` | `eft_directdebit_CA` |
| `UpdatePaymentMethodInfo` | `eftposAustralia` | `eftpos_australia` |
| `UpdatePaymentMethodInfo` | `interacCard` | `interac_card` |
| `UpdatePaymentMethodInfo` | `maestroUsa` | `maestro_usa` |
| `UpdatePaymentMethodInfo` | `paybybankPlaid` | `paybybank_plaid` |
| `User` | `links` | `_links` |
| `ValidateShopperIdRequest` | `shopperIp` | `shopperIP` |
| `Webhook` | `links` | `_links` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **364 of the 449 operations** require a credential and **85** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `apiKeyAuth` | `apiKeyAuth` | header `X-API-Key: <key>` |
| `basicAuth` | `basicAuth: { username, password }` | `Authorization: Basic <base64 of username:password>`, UTF-8 |
| `clientKey` | `clientKey` | query `clientKey=<key>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Test` *(default)* | `test` |

**Server groups.** 29 logical servers; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`.

| Group | Options type |
| --- | --- |
| `default` | `DefaultServerOptions` |
| `default1` | `Default1ServerOptions` |
| `default2` | `Default2ServerOptions` |
| `default3` | `Default3ServerOptions` |
| `default4` | `Default4ServerOptions` |
| `default5` | `Default5ServerOptions` |
| `default6` | `Default6ServerOptions` |
| `default7` | `Default7ServerOptions` |
| `default8` | `Default8ServerOptions` |
| `default9` | `Default9ServerOptions` |
| `default10` | `Default10ServerOptions` |
| `default11` | `Default11ServerOptions` |
| `default12` | `Default12ServerOptions` |
| `default13` | `Default13ServerOptions` |
| `default14` | `Default14ServerOptions` |
| `default15` | `Default15ServerOptions` |
| `default16` | `Default16ServerOptions` |
| `default17` | `Default17ServerOptions` |
| `default18` | `Default18ServerOptions` |
| `default19` | `Default19ServerOptions` |
| `default20` | `Default20ServerOptions` |
| `default21` | `Default21ServerOptions` |
| `default22` | `Default22ServerOptions` |
| `default23` | `Default23ServerOptions` |
| `default24` | `Default24ServerOptions` |
| `default25` | `Default25ServerOptions` |
| `default26` | `Default26ServerOptions` |
| `default27` | `Default27ServerOptions` |
| `default28` | `Default28ServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `default` | `test` | `https://checkout-test.adyen.com/v72` | — |
| `default1` | `test` | `https://pal-test.adyen.com/pal/servlet/Payment/v68` | — |
| `default2` | `test` | `https://pal-test.adyen.com/pal/servlet/Recurring/v68` | — |
| `default3` | `test` | `https://pal-test.adyen.com/pal/servlet/Payout/v68` | — |
| `default4` | `test` | `https://pal-test.adyen.com/pal/servlet/BinLookup/v54` | — |
| `default5` | `test` | `https://pal-test.adyen.com/pal/servlet/StoredValue/v46` | — |
| `default6` | `test` | `https://ca-test.adyen.com/ca/services/DataProtectionService/v1` | — |
| `default7` | `test` | `https://balanceplatform-api-test.adyen.com/fx/api/v1` | — |
| `default8` | `test` | `https://pal-test.adyen.com/pal/services/TestCard/v1` | — |
| `default9` | `test` | `https://management-test.adyen.com/v3` | — |
| `default10` | `test` | `https://cal-test.adyen.com/cal/services/Account/v6` | — |
| `default11` | `test` | `https://balance-control-test.adyen.com/balance-control/api/v2` | — |
| `default12` | `test` | `https://cal-test.adyen.com/cal/services/Notification/v6` | — |
| `default13` | `test` | `https://balanceplatform-api-test.adyen.com/bcl/v2` | — |
| `default14` | `test` | `https://balanceplatform-api-test.adyen.com/btl/v4` | — |
| `default15` | `test` | `https://balanceplatform-api-test.adyen.com/capital/v1` | — |
| `default16` | `test` | `https://cal-test.adyen.com/cal/services/Fund/v6` | — |
| `default17` | `test` | `https://test.adyen.com/authe/api/v1` | — |
| `default18` | `test` | `https://kyc-test.adyen.com/lem/v4` | — |
| `default19` | `test` | `https://cal-test.adyen.com/cal/services/Hop/v6` | — |
| `default20` | `test` | `https://balanceplatform-api-test.adyen.com/a2aissuer-api/v1` | — |
| `default21` | `test` | `https://obgateway-test.adyen.com/obgateway/v1` | — |
| `default22` | `test` | `https://ca-test.adyen.com/ca/services/DisputeService/v30` | — |
| `default23` | `test` | `https://balanceplatform-api-test.adyen.com/btl/api/v4` | — |
| `default24` | `test` | `https://device-api-test.adyen.com/v1` | — |
| `default25` | `test` | `https://softposconfig-test.adyen.com/softposconfig/v3` | — |
| `default26` | `test` | `https://management-test.adyen.com/v1` | — |
| `default27` | `test` | `https://checkout-test.adyen.com/checkout/possdk/v68` | — |
| `default28` | `test` | `https://postfmapi-test.adyen.com/postfmapi/terminal/v1` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("adyen")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Auth adds more, each reached only once the credential needing it is configured. `TextEncoder` and `btoa` build every `Authorization: Basic` value, sent on every request that authenticates with basic. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

