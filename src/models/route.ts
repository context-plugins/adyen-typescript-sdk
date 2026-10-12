import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { provider2Schema, type Provider2 } from "./provider2.js";

export type Route = {
  /**
   * The redirection link. You can use this link to redirect the user to the open banking flow when
   * the user selects it.
   */
  link: string;
  /**
   * Metadata about the selected provider, including the name and company logo. You can use this
   * information to inform the user about the provider they will be redirected to when they select
   * the link.
   */
  provider: Provider2;
};

export const routeSchema: Schema<Route> = s.object<Route>({
  link: s.string(),
  provider: provider2Schema,
});
