exports.runcmd = (fivemexports, client, message, params) => {
    if (!params[0] || !parseInt(params[0]) || !params[1]) {
        return message.reply('Invalid args! Correct term is: ' + process.env.PREFIX + 'removegroup [permid] [group name]')
    }
    fivemexports.ghmattimysql.execute("SELECT * FROM `vrp_user_data` WHERE user_id = ?", [params[0]], (result) => {
        if (result.length > 0) {
            let dvalue = JSON.parse(result[0].dvalue)
            let groups = dvalue.groups
            groups[params[1]] = undefined;
            fivemexports.ghmattimysql.execute("UPDATE `vrp_user_data` SET dvalue = ? WHERE user_id = ?", [JSON.stringify(dvalue), params[0]])
        }
    })
    let embed = {
        "title": "Removed Group",
        "description": `\nSuccess! Removed Group to: ${params[0]} Group Name: ${params[1]}`,
        "color": 3015041,
        "footer": {
            "text": "GRP"
        },
        "timestamp": new Date()
    }
    message.channel.send({ embed })
}

exports.conf = {
    name: "removegroup",
    perm: 3
}