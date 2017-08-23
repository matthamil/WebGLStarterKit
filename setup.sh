#!/bin/bash
yarn
printf "# WebGL Project\nThis project was scaffolded using the [WebGL Starter Kit](https://github.com/matthamil/WebGLStarterKit)." > README.md
sed -i '' /'setup'/d package.json
rm setup.sh # self-destroy this setup script