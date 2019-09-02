### Add a package to an app
Eg:
- `lerna add ui-core --scope showcases --ignore storybook`

## Run a command on `scripts` of each package
- `lerna run --scope quiz --stream serve`

## NOTES
- If use alias in `ui-core` cannot work.
- Should NOT run command inside earch packages.
