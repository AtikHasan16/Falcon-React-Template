#!/usr/bin/env node

// -----------------------

import fs from "fs-extra";
import path from "path";
import prompts from "prompts";
import { fileURLToPath } from "url";
import { reset, green, yellow, cyan, red } from "kolorist";

// Get the current directory of this script
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function init() {
  try {
    console.log(reset("\n🚀  Welcome to Your Custom React Project Setup! \n"));

    // 1. Ask the user for the project name
    const response = await prompts({
      type: "text",
      name: "projectName",
      message: "What is the name of your new project?",
      initial: "my-app",
    });

    const { projectName } = response;

    if (!projectName) {
      console.log(yellow("⚠  Operation cancelled."));
      return;
    }

    // 2. Determine paths
    const templateDir = path.join(__dirname, "template");
    const targetDir = path.join(process.cwd(), projectName);

    console.log(cyan(`\n🔍  Debug Info:`));
    console.log(cyan(`    Template Path: ${templateDir}`));
    console.log(cyan(`    Target Path:   ${targetDir}`));

    // 3. Check if template exists
    if (!fs.existsSync(templateDir)) {
      console.error(
        red(`Error: Could not find the template directory at ${templateDir}`)
      );
      return;
    }

    // Check if template has package.json
    if (!fs.existsSync(path.join(templateDir, "package.json"))) {
      console.error(red(`Error: Template is missing package.json!`));
      return;
    }

    // 4. Create the target directory
    if (fs.existsSync(targetDir)) {
      console.log(
        yellow(
          `⚠  Directory "${projectName}" already exists. Files may be overwritten.`
        )
      );
    } else {
      fs.mkdirSync(targetDir);
    }

    console.log(cyan(`\n📂  Creating project in ${targetDir}...`));
    console.log(cyan(`    (Template: ${templateDir})`));

    // 5. Copy files from template to target
    fs.copySync(templateDir, targetDir, {
      filter: (src) => {
        // Don't copy node_modules if they exist in template
        const basename = path.basename(src);
        return basename !== "node_modules";
      },
    });

    // 6. Rename _gitignore to .gitignore
    // (NPM automatically renames .gitignore to .npmignore when publishing,
    // so we store it as _gitignore in the template and rename it back here)
    const gitignorePath = path.join(targetDir, "_gitignore");
    if (fs.existsSync(gitignorePath)) {
      fs.renameSync(gitignorePath, path.join(targetDir, ".gitignore"));
    }

    // 7. Update package.json name in the new project
    const pkgPath = path.join(targetDir, "package.json");
    if (fs.existsSync(pkgPath)) {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
      pkg.name = projectName;
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    } else {
      console.warn(
        yellow("⚠  Warning: package.json not found in the generated project.")
      );
    }

    console.log(green(`\n✅  Success! Project "${projectName}" created.`));
    console.log(reset("\nTo get started run:\n"));
    console.log(cyan(`  cd ${projectName}`));
    console.log(cyan(`  npm install`));
    console.log(cyan(`  npm run dev`));
    console.log(reset("\nHappy Coding! 🎉\n"));

    // Wait for user input before exiting (keeps the window open on Windows)
    await prompts({
      type: "text",
      name: "exit",
      message: "Press Enter to exit...",
    });
  } catch (err) {
    console.error(red("\n❌  An error occurred:"));
    console.error(err);
  }
}

init().catch((e) => {
  console.error(e);
});
