#!/usr/bin/env node

const yaml = require('js-yaml');
const fs   = require('fs');

try {
  const doc = yaml.load(fs.readFileSync('helm/values.yaml', 'utf8'));
  doc.image.tag = process.env.GITHUB_REF_NAME;
  fs.writeFileSync('helm/values.yaml', yaml.dump(doc))
} catch (e) {
  console.log(e);
}