# Nuxt3 Template

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Nuxt_logo_%282021%29.svg" width="400" alt="Nuxt.js Logo" />
</p>

This is a [Nuxt.js](https://v3.nuxtjs.org/) project bootstrapped with [`nuxt-app`](https://v3.nuxtjs.org/getting-started/quick-start).

---

## INSTRUCTIONS

Once you have this repo cloned to your local system, you will need to install the VSCode extension Remote Development, the ID of the extension is provided below:

- `ms-vscode-remote.vscode-remote-extensionpack`

Once installed, you can then run the following command in the command palette: `Remote-Containers: Open Folder in Container...`

Note: If you restart the docker container for this app and then you open the container within VSCode, you will need to click on `File -> Open Folder` and then navigate to the path `/workspaces/nuxt3-template` and click the `OK` button to open the project folder.

---

## SSH GUIDE

Follow the steps outlined on `Clickup`...

---

## INSTALLATION AND SETUP

```bash
# Install the required libraries
$ yarn install
```

---

## BUILDING

```bash
$ yarn build
```

---

## UPDATING

```bash
# Update all libs
$ yarn upgrade --latest

## Update all libs interactively
$ yarn upgrade-interactive --latest
```

---

## RUNNING THE APP

```bash
# Run the app in dev mode
$ yarn dev

# Run the app in production mode
$ yarn build
$ yarn preview
```

---

## RUNNING TESTS

### Vitest

```bash
# Run tests
$ yarn test

# Run tests in watch mode, so making any changes will re-run any tests that have changed.
$ yarn test:watch

# Run tests and display a coverage report of all tests
$ yarn test:coverage
```

### Cypress

If using WSL on Windows, you will need to download an X-Server display app such as GWSL and OpenInWSL in order to be able to run cypress within it. This will also work inside of the devcontainer too.

```bash
# Run cypress tests in a GUI window.
$ yarn cy:open

# Run cypress in headless mode without a GUI.
$ yarn cy:run
```

---
