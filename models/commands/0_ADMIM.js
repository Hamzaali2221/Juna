module.exports.config = {
  name: "goiadmin2",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "uzairrajput",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100086716792385") {
    var aid = ["100086716792385"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝗕𝗢𝗦𝗦 𝗕𝗨𝗦𝗬 𝗛𝗔𝗜𝗡🙁", "𝗕𝗮𝗯𝗬 𝗠𝗲𝗿𝘆 𝗢𝘄𝗻𝗲𝗿 𝗸𝗼 𝗥𝗲𝘀𝘁 𝗞𝗿𝗻𝘆 𝗗𝗼 𝗠𝗲𝗻𝘁𝗶𝗼𝗻 𝗻𝗶 𝗞𝗿𝗼😐😒", "𝗬𝘄𝗿 𝗘𝗸 𝗕𝗮𝗿𝗿 𝗞𝗲𝗵 𝘁𝘂 𝗱𝗶𝗬𝗮 𝗵𝗮𝗶 𝗠𝘂𝗷𝗛𝘆 𝗯𝘁𝗮𝗼 𝗞𝗬𝗮 𝗸𝗮𝗮𝗺 𝗛𝗮𝗶🤧😣", "BOSS KIRAN CODING KR RAHIN HAIN", "KYA KAM HA APKO OUSY NAI BULAO", "KIRAN SOYI HUWA HAI FZOL MANTION NAHI KRO"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}