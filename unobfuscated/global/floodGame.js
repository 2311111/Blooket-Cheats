/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) Aerell McKnight 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    
    const id = prompt("Game ID:");
    const name = prompt("Name:");
    const amount = parseInt(prompt("Amount:"));
    
    let cache = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache);
    const axios = cache.find((x) => x.exports?.a?.get).exports.a;
    const firebase = cache.find(x => x.exports?.a?.initializeApp).exports.a;
    const blooks = Object.keys(Object.values(cache).find(x => x.exports.a?.Black).exports.a);
    
    for (let i = 1; i <= amount; i++) {
        (async () => {
            let ign = `${name}${String.fromCharCode(96 + i)}`;
            const { data: { success, fbToken, fbShardURL } } = await axios.put("https://fb.blooket.com/c/firebase/join", { id, name: ign });
            if (!success) return;
            const liveApp = firebase.initializeApp({
                apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                authDomain: "blooket-2020.firebaseapp.com",
                projectId: "blooket-2020",
                storageBucket: "blooket-2020.appspot.com",
                messagingSenderId: "741533559105",
                appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                measurementId: "G-S3H5NGN10Z",
                databaseURL: fbShardURL
            }, ign);
            const auth = firebase.auth(liveApp);
            await auth.setPersistence(firebase.auth.Auth.Persistence.NONE).catch(console.error);
            await auth.signInWithCustomToken(fbToken).catch(console.error);
            await liveApp.database().ref(`${id}/c/${ign}`).set({ b: blooks[Math.floor(Math.random() * blooks.length)] });
            liveApp.delete();
        })();
        await new Promise(r => setTimeout(r, 100));
    }
})();