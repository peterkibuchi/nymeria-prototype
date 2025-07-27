import { betterAuthComponent } from "convex/auth";
import { httpRouter } from "convex/server";

import { createAuth } from "~/lib/auth";

const http = httpRouter();

betterAuthComponent.registerRoutes(http, createAuth);

export default http;
