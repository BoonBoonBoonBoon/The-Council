# The Council

**Personal AI Council** — A React Native mobile application for iOS and Android.

---

## Project Structure

```
The-Council/
├── android/                        # Android native project
│   ├── app/
│   │   ├── build.gradle            # App-level Gradle config
│   │   ├── proguard-rules.pro      # ProGuard rules for release builds
│   │   └── src/main/
│   │       ├── AndroidManifest.xml # App manifest
│   │       ├── java/com/thecouncil/
│   │       │   ├── MainActivity.kt     # App entry Activity
│   │       │   └── MainApplication.kt  # Application class
│   │       └── res/                # Android resources (drawables, layouts, values, …)
│   ├── build.gradle                # Root Gradle config
│   └── settings.gradle
├── ios/                            # iOS native project
│   ├── TheCouncil/
│   │   ├── AppDelegate.h / .mm     # App delegate
│   │   ├── main.m                  # Entry point
│   │   ├── Info.plist              # App metadata & permissions
│   │   └── LaunchScreen.storyboard # Launch screen UI
│   ├── TheCouncil.xcodeproj/       # Xcode project file
│   ├── Podfile                     # CocoaPods dependency file
│   └── .xcode.env                  # Node binary path for Xcode scripts
├── src/                            # JavaScript / TypeScript source
│   ├── assets/                     # Images and fonts
│   ├── components/                 # Reusable UI components
│   ├── hooks/                      # Custom React hooks
│   ├── navigation/                 # React Navigation setup
│   ├── screens/                    # Screen-level components
│   ├── services/                   # API and storage services
│   ├── store/                      # Application state
│   ├── types/                      # TypeScript type definitions
│   └── utils/                      # Utility / helper functions
├── __tests__/                      # Unit and integration tests
├── App.tsx                         # Root React component
├── index.js                        # App entry point (registered with AppRegistry)
├── app.json                        # App name used by React Native
├── babel.config.js
├── metro.config.js
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 18 |
| React Native CLI | ≥ 0.73 |
| Xcode (macOS) | ≥ 15 |
| Android Studio | ≥ Hedgehog |
| CocoaPods (macOS) | ≥ 1.14 |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. iOS — install CocoaPods

```bash
cd ios && pod install && cd ..
```

### 3. Start the Metro bundler

```bash
npm start
```

### 4. Run on a device / simulator

```bash
# iOS (macOS only)
npm run ios

# Android
npm run android
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the Metro bundler |
| `npm run ios` | Build and launch on iOS simulator |
| `npm run android` | Build and launch on Android emulator |
| `npm test` | Run the Jest test suite |
| `npm run lint` | Run ESLint |

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a pull request
