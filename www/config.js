System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  },
  "packages": {
    "app": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    }
  },
  "typescriptOptions": {
    "noImplicitAny": true
  }
});

System.config({
  "map": {
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "ts": "github:frankwallis/plugin-typescript@2.0.2",
    "github:frankwallis/plugin-typescript@2.0.2": {
      "typescript": "github:mhegazy/typescript@v1.5-beta2"
    }
  }
});

