#!/usr/bin/env bash

cat header.tpl.js > helpers.js
node generate.js >> helpers.js
