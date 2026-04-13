This fork focuses on compatibility maintenance for current Expo SDK + React Native New Architecture, while keeping the Zeego public API stable.

![Frame 32](https://user-images.githubusercontent.com/13172299/172878122-8e27ccd8-d04e-431d-85fb-099cbe48457a.png)

Beautiful, native menus for React Native + Web, inspired by Radix UI.

- 🕺 Radix UI on Web
- 🛫 Native elements on iOS/Android (where possible)
- 🌲 Same API cross-platform
- 🌊 Works with Solito and Next.js
- 🤖 Supports Expo (with custom dev clients)
- 🍦 Vanilla React Native too
- 🎨 100% unstyled components

## Documentation

- [Documentation](https://zeego.dev)
- [Installation](https://zeego.dev/start)

## Compatibility Notes

- Current target: Expo SDK `55` (React Native `0.83`, React `19.2`).
- Expo SDK `54` remains supported as a compatibility target.
- New Architecture:
  - required on Expo SDK `55+`
  - supported (optional) on Expo SDK `52-54`
- Zeego still requires a native build (custom dev client / prebuild). Expo Go is not supported.

## Local Validation

```sh
yarn install
yarn typescript
yarn lint
yarn test
yarn --cwd examples/expo expo install --check
cd examples/expo && npx expo-doctor
```
