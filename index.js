#!/usr/bin/env node

// -----------------------

import fs from "fs-extra";
import path from "path";
import prompts from "prompts";
import { fileURLToPath } from "url";
import { reset, green, yellow, cyan } from "kolorist";

// Get the current directory of this script
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function init() {
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

  // 3. Check if template exists
  if (!fs.existsSync(templateDir)) {
    console.error(
      red(`Error: Could not find the template directory at ${templateDir}`)
    );
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

  // 5. Copy files from template to target
  try {
    fs.copySync(templateDir, targetDir, {
      filter: (src) => {
        // Don't copy node_modules if they exist in template (usually shouldn't be there)
        return !src.includes("node_modules");
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
    }

    console.log(green(`\n✅  Success! Project "${projectName}" created.`));
    console.log(reset("\nTo get started run:\n"));
    console.log(cyan(`  cd ${projectName}`));
    console.log(cyan(`  npm install`));
    console.log(cyan(`  npm run dev`));
    console.log(reset("\nHappy Coding! 🎉\n"));
  } catch (err) {
    console.error(red("Error copying files:"), err);
  }
}

init().catch((e) => {
  console.error(e);
});
