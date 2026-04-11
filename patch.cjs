const fs = require('fs');

function patchFile(filepath, target, replacement) {
  let content = fs.readFileSync(filepath, 'utf8');
  content = content.replaceAll(target, replacement);
  fs.writeFileSync(filepath, content);
}

patchFile('src/pages/tools/MetaTagGenerator.jsx', 
  "desc:",
  "description:"
);

patchFile('src/pages/tools/MetaTagGenerator.jsx', 
  "desc}",
  "description}"
);

patchFile('src/pages/tools/MetaTagGenerator.jsx', 
  "meta.desc",
  "meta.description"
);

console.log("Patched successfully");
