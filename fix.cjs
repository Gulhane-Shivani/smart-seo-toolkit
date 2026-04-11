const fs = require('fs');
let c = fs.readFileSync('src/pages/tools/MetaTagGenerator.jsx', 'utf8');
c = c.replace(
    'onChange={e => setMeta({...meta, title: e.target.value})}\n                     <div>',
    `onChange={e => setMeta({...meta, title: e.target.value})}
                        placeholder="e.g. My Awesome SEO Tools"
                        className="w-full p-3 bg-slate-100 dark:bg-navy-950/50 rounded-lg border border-transparent focus:border-primary-500 outline-none dark:text-white text-sm"
                    />
                </div>
                <div>
                     <label className="block text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider">Meta Description</label>
                    <textarea 
                        value={meta.description}
                        onChange={e => setMeta({...meta, description: e.target.value})}
                        placeholder="Describe your page here..."
                        className="w-full h-24 p-3 bg-slate-100 dark:bg-navy-950/50 rounded-lg border border-transparent focus:border-primary-500 outline-none dark:text-white text-sm"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                     <div>`
);
fs.writeFileSync('src/pages/tools/MetaTagGenerator.jsx', c);
