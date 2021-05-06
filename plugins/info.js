let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: ʀᴀғɪғ ɢᴀɴᴢ
╠➥ Script: @Nurotomo
║
╠➥ Instagram: @rafif05__
╠➥ Facebook: Rafif Dominiks
║
╠═〘 Thanks To 〙 ═
╠➥ ALLAH SWT
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0888-0207-5155
║
║>Request? Wa.me/6288802075155
║
╠═〘 Aǫᴜᴀ Bᴏᴛᴢ 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

