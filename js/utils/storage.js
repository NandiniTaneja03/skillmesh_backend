// Browser storage helpers. Keep this loaded before state.js.
function loadState(){try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));return saved?{...initialState,...saved,profile:{...initialState.profile,...saved.profile}}:structuredClone(initialState)}catch{return structuredClone(initialState)}}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
