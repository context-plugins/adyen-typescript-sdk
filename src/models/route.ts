import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { provider2Schema, type Provider2 } from "./provider2.js";

export type Route = {
  link: string;
  provider: Provider2;
};

export const routeSchema: Schema<Route> = s.object<Route>({
  link: s.string(),
  provider: provider2Schema,
});
