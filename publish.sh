#!/bin/bash

# Clean the dist directory
npm run clean

# Build the package
npm run build

# Publish to npm
# npm publish

echo "Package built successfully. To publish, run: npm publish"