# React Native Dimensions API Height Issue

This repository demonstrates a common issue in React Native where the `Dimensions` API returns an incorrect height on initial app render. This can lead to layout problems and unexpected visual glitches.

## Problem
The `Dimensions` API, while useful, sometimes provides an inaccurate height measurement before the layout is fully complete.  This results in elements being rendered with incorrect dimensions, causing clipping or misalignment.

## Solution
The solution involves using the `useEffect` hook with an empty dependency array to ensure the dimensions are fetched *after* the component has mounted and the layout has been calculated.  This provides a more reliable height measurement.

## Setup
Clone this repository and run `npm install` or `yarn install` to install the dependencies.

Run the app and observe the behavior.  The solution branch demonstrates the fix.