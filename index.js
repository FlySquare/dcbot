const botconfig = require('./botconfig.json');
const sosyalmedya = require('./sosyalmedya.json');
const Discord = require('discord.js');
const talkedRecently = new Set();
const bot = new Discord.Client();



bot.on('ready', () => {
  bot.user.setActivity("OtuzFps.Com Discord Sunucusu Botu!", { type: "STREAMING", url: "https://www.twitch.tv/ksinctv" });
    console.log(` BOT: Şu an ` + bot.guilds.size + ` adet sunucuya hizmet veriliyor!`);
});
// Sosyal Medya Hesapları

bot.on('message', msg => {
  if(msg.channel.id === botconfig.botchatid){
    //avatar
      if (msg.content === botconfig.prefix +"avatar") {
        msg.reply(msg.author.displayAvatarURL);
      }
   //avatar
  if (msg.content === botconfig.prefix +"facebook") {

    const embed = new Discord.RichEmbed()
    .setTitle(`${botconfig.yayinciisim} Twitch adresine buradan ulaşabilirsin`)
    .setAuthor(botconfig.botisim, botconfig.botlogo)
    .setColor(0x6A1B9A)
    .setDescription("Facebook grubumuza katılarak her ortamdan bizden haberdar olabilirsin.")
    .setFooter(botconfig.botisim, botconfig.botlogo)
    .setThumbnail("https://otuzfps.com/wp-content/uploads/2019/08/indir-150x150.png")
    .setTimestamp()
    .setURL(sosyalmedya.facebook)
    msg.reply({embed}); 
  };
  if (msg.content === botconfig.prefix +"twitch") {
    const embed = new Discord.RichEmbed()
    .setTitle(`${botconfig.yayinciisim} Twitch adresine buradan ulaşabilirsin`)
    .setAuthor(botconfig.botisim, botconfig.botlogo)
    .setColor(0x6A1B9A)
    .setDescription("Yayın olmasa bile arada profilime bakıp hasret giderebilirsin :).")
    .setFooter(botconfig.botisim, botconfig.botlogo)
    .setThumbnail("https://otuzfps.com/wp-content/uploads/2019/08/twitch-20-721977-150x150.png")
    .setTimestamp()
    .setURL(sosyalmedya.twitch)
    msg.reply({embed}); 
  };
  if (msg.content === botconfig.prefix + "instagram") {
    const embed = new Discord.RichEmbed()
    .setTitle(`${botconfig.yayinciisim} Instagram adresine buradan ulaşabilirsin`)
    .setAuthor(botconfig.botisim, botconfig.botlogo)
    .setColor(0x9900ff)
    .setDescription("Yayın zamanlarını ve eğlenceli anlarımı takip etmek isterseniz Instagram üzerinden takip edebilirsiniz.")
    .setFooter(botconfig.botisim, botconfig.botlogo)
    .setThumbnail("https://otuzfps.com/wp-content/uploads/2019/08/ig-logo-email-150x150.png")
    .setTimestamp()
    .setURL(sosyalmedya.instagram)
    msg.reply({embed}); 
  };
  if (msg.content === botconfig.prefix +"youtube") {
    const embed = new Discord.RichEmbed()
    .setTitle(`${botconfig.yayinciisim} Youtube adresine buradan ulaşabilirsin`)
    .setAuthor(botconfig.botisim, botconfig.botlogo)
    .setColor(0xff0000)
    .setDescription("Eğer yayın yokken izleyicilerin yaptığı editleri izleyip vakit geçirmek istersen beni YouTube üzerinden takip edebilirsin.")
    .setFooter(botconfig.botisim, botconfig.botlogo)
    .setThumbnail("https://otuzfps.com/wp-content/uploads/2019/08/de1c91788be0d791135736995109272a-150x150.png")
    .setTimestamp()
    .setURL(sosyalmedya.youtube)
    msg.reply({embed}); 
  };
  if (msg.content === botconfig.prefix +"steam") {
    const embed = new Discord.RichEmbed()
    .setTitle(`${botconfig.yayinciisim} Steam adresine buradan ulaşabilirsin`)
    .setAuthor(botconfig.botisim, botconfig.botlogo)
    .setColor(0x3333cc)
    .setDescription("Eğer sende bana skin,oyun veya hediye göndermek istersen steam adresime buradan ulaşabilirsin.")
    .setFooter(botconfig.botisim, botconfig.botlogo)
    .setThumbnail("https://otuzfps.com/wp-content/uploads/2019/08/steam-png-blue-7-150x150.png")
    .setTimestamp()
    .setURL(sosyalmedya.steam)
    msg.reply({embed}); 
};
if (msg.content === botconfig.prefix +"durmapay") {
  const embed = new Discord.RichEmbed()
  .setTitle(`${botconfig.yayinciisim} DurmaPay adresine buradan ulaşabilirsin`)
  .setAuthor(botconfig.botisim, botconfig.botlogo)
  .setColor(0x3333cc)
  .setDescription("Eğer sende bana skin,oyun veya hediye göndermek istersen steam adresime buradan ulaşabilirsin.")
  .setFooter(botconfig.botisim, botconfig.botlogo)
  .setThumbnail("https://otuzfps.com/wp-content/uploads/2019/08/com.durmapay.durmaplay-150x150.png")
  .setTimestamp()
  .setURL(sosyalmedya.durmapay)
  msg.reply({embed}); 
};
if (msg.content === botconfig.prefix +"bynogame") {
  const embed = new Discord.RichEmbed()
  .setTitle(`${botconfig.yayinciisim} Bağış adresine buradan ulaşabilirsin`)
  .setAuthor(botconfig.botisim, botconfig.botlogo)
  .setColor(0xff9900)
  .setDescription("Eğer sende bana bağış göndermek istersen bynogame adresime buradan ulaşabilirsin.")
  .setFooter(botconfig.botisim, botconfig.botlogo)
  .setThumbnail("https://images.bynogame.com/images/anlatim/bynocan-kafa2-onizleme.png")
  .setTimestamp()
  .setURL(sosyalmedya.bynogame)
  msg.reply({embed}); 
};

}});
// Sosyal Medya Hesapları
  //Hoşgeldin Mesajı
  bot.on('guildMemberAdd', member => {
    let guild = member.guild;
    let joinRole = guild.roles.find('id', botconfig.yeniuyerolid);
    member.addRole(joinRole);
  
    const channel = member.guild.channels.find('id', botconfig.yeniuyekanaliid);
    if (!channel) return;
    const embed = new Discord.RichEmbed()
    .setColor('0x00cc44')
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setThumbnail(member.user.displayAvatarURL)
    .setTitle(`:inbox_tray: ${member.user.username} Sunucuya katıldı.`)
    .setTimestamp()
    channel.sendEmbed(embed);
  });
  bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('id', botconfig.gidenuyekanaliid);// 'notech-log' log ismidir. değiştirebilirsiniz. belirttiğiniz isme giriş çıkış gösterecektir.
    if (!channel) return;
    const embed = new Discord.RichEmbed()
    .setColor('0xff1a1a')
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`:outbox_tray: ${member.user.username} Sunucudan ayrıldı.`)
    .setThumbnail(member.user.displayAvatarURL) 
    .setTimestamp()
    channel.sendEmbed(embed);
  });
//resim gönderme
  pan1="./image/1.png";
  pan2="./image/2.png";
  pan3="./image/3.png";
  pan4="./image/4.png";
  pan5="./image/5.png";
  pan6="./image/6.png";
  pan7="./image/7.png";
  pan8="./image/8.png";
  pan9="./image/9.png";
  pan10="./image/10.png";

  bot.on('message', msg => {
    if(msg.channel.id === botconfig.botchatid){
        if (msg.content === botconfig.prefix +"resim") {
  number=10;
  var random = Math.floor (Math.random() * (number -1 + 1)) +1;
  switch(random){
    case 1: msg.channel.send({ files: [pan1] }); break;
    case 2: msg.channel.send({ files: [pan2] }); break;
    case 3: msg.channel.send({ files: [pan3] }); break;
    case 4: msg.channel.send({ files: [pan4] }); break;
    case 5: msg.channel.send({ files: [pan5] }); break;
    case 6: msg.channel.send({ files: [pan6] }); break;
    case 7: msg.channel.send({ files: [pan7] }); break;
    case 8: msg.channel.send({ files: [pan8] }); break;
    case 9: msg.channel.send({ files: [pan9] }); break;
    case 10: msg.channel.send({ files: [pan10] }); break;
  }}}});
//resim gönderme
//şaka gönderme
pan11=":sun_with_face: yaw başını önüne eğme be bilader güneş yansıyor gözümü alıyor. :sun_with_face: ";
pan12=":rotating_light: geleceğin parlak abi :rotating_light: ";
pan13=":sweat_smile: abi şampuan kullanıyor musun? :sweat_smile: ";
pan14=" :weary: kavağın yelleri severiz biz kelleri :poop: ";
pan15=":stuck_out_tongue: dekolte kafa:stuck_out_tongue: ";
pan16=":heart_eyes: Cekicilik beyinden gelir, uzerindeki killardan degil. :heart_eyes: ";
pan17=`-abi ben kel miyim?:tongue: 
-yok abi kel değilsin de kafa derin herkesten biraz daha fazla gözüküyo. :tongue: `;

bot.on('message', msg => {
  if(msg.channel.id === botconfig.botchatid){
      if (msg.content === botconfig.prefix +"şaka") {
number=17;
var random = Math.floor (Math.random() * (number -1 + 1)) +1;
switch(random){
  case 11: msg.channel.send(pan11); break;
  case 12: msg.channel.send(pan12); break;
  case 13: msg.channel.send(pan13); break;
  case 14: msg.channel.send(pan14); break;
  case 15: msg.channel.send(pan15); break;
  case 16: msg.channel.send(pan16); break;
  case 17: msg.channel.send(pan17); break;
}}}});
//şaka gönderme

bot.on('message', msg =>{
if(msg.content === botconfig.prefix +"server"){
  let sicon = msg.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Bilgileri")
  .setColor("#15f153")
  .setThumbnail(sicon)
  .addField("Server İsmi", msg.guild.name)
  .addField("Kuruluş Tarihi", msg.guild.createdAt, true)
  .addField("Toplam Üyeler", msg.guild.memberCount, true)
   .addField("Bölge", msg.guild.region, true)
  .addField("Sahibi", msg.guild.owner, true)
  .addField("Sunucuya Katılma Tarihin", msg.member.joinedAt, true)
  .addField("Sunucu Id", msg.guild.id, true);
  return msg.channel.send(serverembed);
}});


bot.on('message', function(message) {
  // Now, you can use the message variable inside
  if (message.content === "$loop") { 
      var interval = setInterval (function () {
          // use the message's channel (TextChannel) to send a new message
          message.channel.send("Yayına gel")
          .catch(console.error); // add error handling here
      }, 1 * 2000); 
  }
});



bot.on("message", (message) => {
  //reklam botu
  if (message.content.includes("https://")) {
    message.delete(1);
    message.channel.sendMessage("Reklam Yapmak Yasak, " + message.author)
  }
  if (message.content.includes("http://")) {
    message.delete(1);
    message.channel.sendMessage("Reklam Yapmak Yasak, " + message.author)
  }
  if (message.content.includes("www.")) {
    message.delete(1);
    message.channel.sendMessage("Reklam Yapmak Yasak, " + message.author)
  }
  //reklam botu
  if (message.content === botconfig.prefix +"davet") {
    message.author.sendMessage("Merhaba, " + message.author + `, Ben Umut Can Arda tarafından kodlanmakta olan bir Discord botuyum.\nEğer sende kendine özel Discord ve Twitch botu yaptırmak istersen **Umut Can Arda#7080** mesaj atman yeterli.
    ---------------------------------------------------------
    !facebook 
    !twitch
    !instagram
    !şaka
    !server
    !avatar
    !youtube
    !bynogame
    !ping
    !sürüm
    !davet`)
}
  if (message.content === botconfig.prefix +"ping") {
    console.log("ping from " + message.author)
    message.channel.sendMessage("Sunucu doldu taştı! Şuan tam olarak pingi: " + bot.ping + "ms.")
  }
  if (message.content === botconfig.prefix +"sürüm") {
    console.log("changelog from " + message.author)
    message.channel.sendMessage("Botun güncelleme notları: \n```\n01.09.2019\n- !komutlar komutu eklendi \n !ping konutu eklendi\n- Reklam engelleyici eklendi\n```")
  }

});

bot.login(botconfig.token);