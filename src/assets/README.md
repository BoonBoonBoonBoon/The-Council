# Assets

Place static assets in the appropriate subdirectory:

- `images/` — App images and icons (PNG, JPG, SVG)
- `fonts/` — Custom font files (TTF, OTF)

## Usage

Reference images in React Native:
```tsx
import React from 'react';
import {Image} from 'react-native';

const MyImage = () => (
  <Image source={require('./images/logo.png')} style={{width: 100, height: 100}} />
);
```

Register fonts in `android/app/src/main/assets/fonts/` (Android) and via
`Info.plist` (iOS) before use.
