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
    let target = prompt("Who's crypto would you like to steal?");
    let { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
    stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
        if (players && Object.keys(players).map(x => x.toLowerCase()).includes(target.toLowerCase())) {
            let [player, { cr }] = Object.entries(players).find(([name]) => name.toLowerCase() == target.toLowerCase());
            console.log(!!players, players, player, cr, stateNode.state)
            stateNode.setState({
                crypto: stateNode.state.crypto + cr,
                crypto2: stateNode.state.crypto + cr
            });
            stateNode.props.liveGameController.setVal({
                path: "c/".concat(stateNode.props.client.name),
                val: {
                    b: stateNode.props.client.blook,
                    p: stateNode.state.password,
                    cr: stateNode.state.crypto + cr,
                    tat: `${player}:${cr}`
                }
            });
            console.log('done')
        }
    })
})();