# @anushrut/somaiya-adrn-lab

A complete, publish-ready Expo React Native component library covering all 4 ADRN Lab experiments from KJ Somaiya School of Engineering, Sem VI (2025-26).

## Installation

```bash
npm install @anushrut/somaiya-adrn-lab
```

Install the required peer dependencies:
```bash
npm install react react-native expo @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated @reduxjs/toolkit react-redux
```

## Usage

```javascript
import { ADRNLabApp } from '@anushrut/somaiya-adrn-lab';

export default ADRNLabApp;
```

## Experiments Covered

| Exp No | Title | Key Concepts |
|--------|-------|--------------|
| 1 | Core Components & Setup | View, Text, Image, StyleSheet, Flexbox |
| 2 | Components, Props & State | Functional components, useState, useCallback, useMemo, Props |
| 3 | Navigation | Tab Navigator, Stack Navigator, Passing Params |
| 4 | State Management | Context API (Theme), Redux Toolkit (Counter), useReducer |

## Publishing

To publish this package to npm:
```bash
npm publish --access public
```

## License
MIT
