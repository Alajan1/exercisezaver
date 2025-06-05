import { defineConfig } from "cypress";
import {readFileSync} from "fs";

export default defineConfig({
  watchForFileChanges: false,
   projectId: "hwpgo3",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const customConfig = readFileSync('cypress/config/configuration.json', 'utf8')
      const parsedConfig = JSON.parse(customConfig)

      config.env = { ...parsedConfig}
      return config
    },
  },
});
