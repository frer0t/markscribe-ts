#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("markscribe-ts")
  .description("typescript version of markscribe")
  .version("1.0.0")
  .argument("<template>", "path to template file")
  .option("-w, --write <file>", "write output to file instead of stdout")
  .option(
    "--hackatime-token <token>",
    "Hackatime API key",
    process.env["HACKATIME_API_KEY"]
  );

program.parse();
