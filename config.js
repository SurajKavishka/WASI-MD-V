t//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01GOVZ3Q1JESGU3R2pNbFFvb1hvZWNRMDBwenVrWlV0TFdUZ2J6anZYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVdNeHJjdWhXMkgycWpuUTk4cys4L2ZhcW00aEJsNGFWOHdWb1BjakNEaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SG5OeG42Q1kzdG5XVWlVWkpybmplQTVUWnI4UlZLOTArVkFBSHRXYUV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJMjc5SVd5VFJzRStmb2t5ZnE3ZDJZd2U2S3VCekhVQ0JqMmpPamVZaDJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVDMWxka0ZoOW8zOGdtRU1oOTR1Q2YyemVkK2tVYTdWV21FNFJpRFc4Mjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxWQi9ya1M0djIxU2oyQ1VqNHgvMGhsb0Voc1ltN21sSmI2WXNsRC9aMnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURCODhZcG83L3YxU2dWMjJsMTNhZGtJNkM2K0ZYcEI3TXFGeXluTS9rOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURxdzdMU0pHZWczYy9mNGFwRlVMRnEwMXFOdEpBNVZDUlVoSGxBUXFqVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxnOWdmZmFUUmc1K3lRd1NGREl2SE9WL1BLNExXbHNnZHVnbkN4ODBaaTI3VkROc2hhMm9XKytEYjU5QWVCUEc2dk82QjRYa0sxdVdHdHlpZ2pRSERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjksImFkdlNlY3JldEtleSI6IkNTL0w4cjRHRXNQUThUam13OXp1dzBJRzhuWGhENHVtbXMxYnR4YjhWUWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDAyMDMzMTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTlENzRDREQ3RTVEOEMzNkQzNjQ3QjJFQTY2OTdCMTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjk2OTgzNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDAyMDMzMTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjAzREQwMDMyOEFEMzQ1QjhGQjUxQUExOTNBMUY1M0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjk2OTgzN30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDAyMDMzMTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTUxMjI4MkI0OEY3NjEwOEY2N0MwNTgxNEUyNkYwNDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjk2OTgzOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaWhhdnRXS09ScU96dFl4S05udWxlQSIsInBob25lSWQiOiJiZTBiNzE5MS0zNmY4LTRlZDktYjNkNy1hMjIwMjg1MzQ4Y2IiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidy8yWlRjZW8vTVVwVWYvWW1INVdkcWhCTGFFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBiNTI4NXBzdUZoZUNPN0dnL3cyU01WMk1kTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI1Qk5LSzdFVyIsIm1lIjp7ImlkIjoiOTQ3NDAyMDMzMTk6M0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmZGOHRFR0VOeUtyTG9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid3drR3ZrU3RrNEhVdS9wdnBHOU1ZTCsvNXhzUjJMZHV0UHRZWmhFTThWST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaWxBRlJJbElZRitvYUlXbG1DOW8yMlZtM3NLT3M2emttc3dwS0F1WUp2R3FLa29NZFlST1dzYlpSQkk4V0hCU0U2YWxQSmVJa1Z3TmtQOXlHTlBxQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlJIM050YkJMci9keE9jUUNWTzFoV204WjIwSXJlVW5EYWNDelBRLzBZWGMwdGRMS3JyMFJUeGs0L1RzeGNydm16QjhlMjh0NEthNXRUWjBZMXUydUF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDAyMDMzMTk6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjTUpCcjVFclpPQjFMdjZiNlJ2VEdDL3YrY2JFZGkzYnJUN1dHWVJEUEZTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyOTY5ODM0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpHUSJ9";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
