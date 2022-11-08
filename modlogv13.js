const logs = require('discord-logs');
logs(client);
let MOD_CHANNEL = "1039266943938605126"
const { MessageEmbed } = require("discord.js");
client.on("channelDelete",async (channel, message) => {

  const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());

  
  let embed = new MessageEmbed();

  embed

    .setAuthor(

      channel.guild.name + ": Bir Kanal Silindi",

      channel.guild.iconURL()

    )

    .setDescription(

      `**#${channel.name}**(\`${channel.id}\`) Adlı Kanal Silindi.\n\n Silen Kişi **<@${entry.executor.id}>** (\`${entry.executor.id}\`) \n\n Silinen Kanal Türü : **${channel.type}**`

    )

  .setThumbnail(entry.executor.avatarURL({dynamic:true}))

    .setColor("#E70000");

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("channelCreate", async function(channel)  {

  const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());

  let embed = new MessageEmbed();

  embed

    .setAuthor(

      channel.guild.name + ": Bir Kanal Oluşturuldu",

      channel.guild.iconURL()

    )

    .setDescription(

      `**#${channel.name}**(\`${channel.id}\`) Adlı Kanal Oluşturuldu.\n\n Oluşturan Kişi : <@${entry.executor.id}> (\`${entry.executor.id}\`) \n\n Oluşturulan Kanal Türü : **${channel.type}**`

    )

  . setThumbnail (entry.executor.avatarURL({dynamic:true}))

    .setColor("#E70000");

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("channelPinsUpdate", async function(channel, time) {

  const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_UPDATE'}).then(audit => audit.entries.first());

  let embed = new MessageEmbed();

  embed

    .setAuthor(channel.guild.name + ": Sabitlemelerde Değişiklik Yapıldı", channel.guild.iconURL())

    .setDescription(

      ` **#${channel.name}**(\`${channel.id}\`) adlı kanal'da Sabitlemelerde Değişiklik Tespit Edildi.\n\n Yapan Kişi : <@${entry.executor.id}>(\`${entry.executor.id}\`) \n\n Yapılan Zaman : **${time}**`

    )

. setThumbnail (entry.executor.avatarURL({dynamic:true}))

    .setColor("#E70000");

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("channelUpdate", async function(oldChannel, newChannel) {
let channel = oldChannel;
  const entry = await channel.guild.fetchAuditLogs({type : "CHANNEL_UPDATE"}).then(audit => audit.entries.first());

  let embed = new MessageEmbed();

  

  embed

    .setAuthor(

      channel.guild.name + ": Bir Kanal Güncellendi",

      channel.guild.iconURL()

    )

    .setDescription(

      ` **#${channel.name}**(\`${channel.id}\`) Adlı Kanal'da Değişiklik Yapıldı.\n\n Yapan Kişi : **<@${entry.executor.id}>**(\`${entry.executor.id}\`) \n\n Değişiklik Yapılan Kanal Türü : ${channel.type}`

    )

    .setColor("#E70000");

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("emojiCreate", async function(emoji) {

  const entry = await emoji.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());

  let embed = new MessageEmbed();

  let emojis = emoji;

  embed

    .setAuthor(emoji.guild.name + ": Bir Emoji Eklendi", emoji.guild.iconURL())

    .setDescription(`Sunucuya Yeni Bir Emoji Eklendi => (${emoji}) \n\n Emojiyi Ekleyen Kişi : **<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)

    .setColor("#E70000")

  .setThumbnail(entry.executor.avatarURL({dynamic:true}));

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("emojiDelete", async function(emoji) {

  const entry = await emoji.guild.fetchAuditLogs({type:'CHANNEL_DELETE'}).then(audit => audit.entries.first());

  let embed = new MessageEmbed();

  let emojise = emoji;

  embed

    .setAuthor(emoji.guild.name + ":Bir Emoji Silindi", emoji.guild.iconURL())

    .setDescription(`**${emoji.name}** (\`${emoji.id}\`) Adlı Emoji Sunucudan Silindi.\n\n Silen Kişi : **<@${entry.executor.id}> ** (\`${entry.executor.id}\`)`)

    .setColor("#E70000")

  . setThumbnail (entry.executor.avatarURL({dynamic:true}));

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("emojiUpdate", async function(oldEmoji, newEmoji) {

  const entry = await oldEmoji.guild.fetchAuditLogs({type : 'CHANNEL_DELETE'}).then(autdit => autdit.entries.first());

  let embed = new MessageEmbed();

  let channel = oldEmoji;

  embed

    .setAuthor(channel.guild.name + ": Emoji Güncellendi", channel.guild.iconURL())

    .setDescription(`Bir Emoji Güncellendi Güncellenen Emoji => **${newEmoji}**(\`${newEmoji.id}\`) \n\n Emojiyi Güncelleyen Kişi :** <@${entry.executor.id}>**(\`${entry.executor.id}\`)`)

    .setColor("#E70000")

  .setThumbnail(entry.executor.avatarURL({dynamic:true}));

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});



client.on("guildBanAdd", async(guild, user) => {


const entry = await guild.fetchAuditLogs().then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()
embed




   

    .setDescription(

      `**${user.username}**(\`${user.id}\`) Adlı Kullanıcı Sunucudan Banlandi\n\n Banlayan Kişi **<@${entry.executor.id}>**(\`${entry.executor.id}\`)`

    )
. setThumbnail (entry.executor.avatarURL({dynamic:true}))
    .setColor("#E70000")



.setTimestamp()


client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]})

})

client.on("guildBanRemove", async(guild, user, message) => {


const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_REMOVE"}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

  

  embed

 
. setThumbnail (entry.executor.avatarURL({dynamic:true}))
    .setDescription(

      `**${user.username}**(\`${user.id}\`) Adlı Kullanıcının Banı Açıldı.\n\n Banını Açan Kişi : **<@${entry.executor.id}>**(\`${entry.executor.id}\`)`

    )

    .setColor("#E70000")




.setTimestamp()
                                 


client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]})

})
client.on("guildMemberAdd", function(member) {

  let embed = new MessageEmbed();

  embed

    .setAuthor(`${member.guild.name}: Sunucuya Biri Katıldı`, member.guild.iconURL())

    .setColor("#E70000")

 . setThumbnail (member.user.avatarURL({dynamic:true}))

    .setDescription(

      `**${member.user.tag}**(\`${member.id}\`) Sunucuya Katıldı \n\n Hesapının Kuruluş Tarihi : **${member.user.createdAt}**`

    );

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("guildMemberRemove", function(member) {

  let embed = new MessageEmbed();

  embed

    .setAuthor(`${member.guild.name}: Sunucudan Biri Ayrıldı`, member.guild.iconURL())

    .setColor("#E70000")

 
 . setThumbnail (member.user.avatarURL({dynamic:true}))
    .setDescription(

      `**${member.user.tag}**(\`${member.id}\`) Sunucudan Ayrıldı`

    );

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});


client.on("guildUpdate", function(oldGuild, newGuild) {

  let guild = oldGuild;

  let embed = new MessageEmbed();

  embed

    .setAuthor(`${guild.name}: Sunucu Güncellendi`, guild.iconURL())

    .setColor("#E70000")

    .setDescription(`Sunucu Güncellendi\n\n Güncellenmiş Olabilecek Şeyler : İsim, Sunucu İcon , Sunucu Banner vs`);

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("messageDelete", async function(message) {

  let embed = new MessageEmbed();

  if (message.partial) {

   

    embed

      .setAuthor(

        `${message.guild.name}: Bir Mesaj Silindi`,

        message.guild.iconURL()

      )
.setThumbnail(message.author.avatarURL({dynamic:true}))
      .setColor("#E70000")

      .setDescription(`Bir Mesaj Silindi. \n Silinen Kanal : <#${message.channel.id}>`)



    return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

  }

  embed

    .setAuthor(

      `${message.guild.name}: Bir Mesaj Silindi`,

      message.guild.iconURL()

    )

  

    .setColor("#E70000")

    .setDescription(

      `${message.author.username}(\`${message.author.id}\`) bir mesaj sildi.\n Sildiği Kanal : <#${message.channel.id}>`

    )

    .addField("Bir Mesaj Silindi", message.content || "Bilgi Yok")

    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("messageDeleteBulk", function(messages) {

  let embed = new MessageEmbed();

  embed

    .setAuthor(

      `${messages.array()[0].guild.name}: Çoklu Mesaj Silindi!`,

      messages.array()[0].guild.iconURL()

    )

    .setColor("#E70000")

    .setDescription(

      `**${messages.array()[0].author.username}**(\`${
        messages.array()[0].author.id
      }\`) Adlı Kullanıcı **${messages.size}** adet Mesaj Sildi! ** \n\n Sildiği Kanal :<#${
        messages.array()[0].channel.id
      }>**`

    );

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("messageReactionAdd", async function(messageReaction, user) {

  let message;

  try {

    message = await messageReaction.fetch();

  } catch (err) {

    message = messageReaction;

  }

  let embed = new MessageEmbed();

  embed

    .setAuthor(

      `${message.message.channel.guild.name}: Bir Mesaja Emoji Eklendi!`,

      message.message.channel.guild.iconURL()

    )

    .setColor("#E70000")

    .setDescription(`Bir Mesaja Tepki Eklendi!`)

    .addField(

      "Mesaj Bilgileri",

      `ID: ${message.message.id}\nMesaj: ${message.message.content ||
        "Mesaj Bilgisi Yok"}\n Yapan: ${message.message.author.username ||
        "Bulunamadı!"}`

    )

    .addField(

      "Emoji Bilgileri",

      `Ekleyen Kişi: ${user.username}\nID: ${user.id}\nEmoji: ${message._emoji.name}`

    )

    .setThumbnail(user.displayAvatarURL({ formate: "jpg" }));

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("messageReactionRemove", async function(messageReaction, user) {

  let message;

  try {

    message = await messageReaction.fetch();

  } catch (err) {

    message = messageReaction;

  }

  let embed = new MessageEmbed();

  embed

    .setAuthor(

      `${message.message.channel.guild.name}: Tepki Kaldırıldı`,

      message.message.channel.guild.iconURL()

    )

    .setColor("#E70000")

    .setDescription(`Bir Mesajdan Tepki Kaldırıldı`)

    .addField(

      "Mesaj Bilgileri Aşağıda",

      `ID: ${message.message.id}\n Mesaj: ${message.message.content ||
        "Mesaj Bilgisi Yok"}\n Yapan: ${message.message.author.username ||
        "Yok"}`

    )

    .addField(

      "Tepki Bilgisi",

      `Tepkiyi Kaldıran: ${user.username}\nID: ${user.id}\nEmoji: ${message._emoji.name}`

    )

    .setThumbnail(user.displayAvatarURL({ formate: "jpg" }));

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("messageReactionRemoveAll", async function(message) {
const entry = await message.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());


  let embed = new MessageEmbed();

  embed

    .setAuthor(

      `${message.guild.name}: Bir Mesajdaki Bütün Emojiler Kaldırıldı!`,

      message.guild.iconURL()

    )
. setThumbnail (entry.executor.avatarURL({dynamic:true}))
    .setColor("YELLOW")

    .setDescription(

      ` **<#${message.channel.id}>** (\`${message.channel.id}\`) Adlı Kanal'da Bir Mesajdaki Emojiler Silindi!\n\n Kaldıran Kişi <@${entry.executor.id}>(\`${entry.executor.id}\`)`

    );

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("messageUpdate", async function(oldMessage, newMessage) {

  let main = await oldMessage.fetch();

  if (oldMessage.content === newMessage.content) return;

  let message = newMessage;

  let embed = new MessageEmbed();

  embed

    .setAuthor(`${message.guild.name}: Mesaj Düzenlendi`, message.guild.iconURL())

    .setColor("#E70000")

  .setThumbnail(oldMessage.author.avatarURL({dynamic:true}))

  .addField("Eski Mesajı",`\`${oldMessage.content}\``)

  .addField("Yeni Mesajı",`\`${newMessage.content}\``)

    .setDescription(`<#${message.channel.id}> Adlı Kanal'da Bir Mesaj Düzenlendi.\n Düzenleyen : **${main.author}**\n Düzenlenen Mesaj İçin: [TIKLA](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`

    );

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});



client.on("roleCreate",async function(role) {
const entry = await role.guild.fetchAuditLogs().then(audit => audit.entries.first());


  let embed = new MessageEmbed();

  embed

    .setAuthor(role.guild.name + ": Bir Rol Oluşturuldu!!", role.guild.iconURL())

    .setDescription(

      ` **${role.name}**(\`${role.id}\`) Adlı Rol Oluşturuldu!\n\n Oluşturan Kişi : <@${entry.executor.id}>(\`${entry.executor.id}\`)`

    )

  . setThumbnail (entry.executor.avatarURL({dynamic:true}))
    .setColor("#E70000");

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("roleDelete", async function(role) {
const entry = await role.guild.fetchAuditLogs().then(audit => audit.entries.first());


  let embed = new MessageEmbed();

  embed

    .setAuthor(role.guild.name + ": Bir Rol Silindi!", role.guild.iconURL())

    .setDescription(`**${role.name}**(\`${role.id}\`) Adlı Rol Silindi!\n\n Silen Kişi : <@${entry.executor.id}>(\`${entry.executor.id}\`)`)
. setThumbnail (entry.executor.avatarURL({dynamic:true}))
    .setColor("#E70000");

  return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});



client.on("inviteCreate", async function (message)  {

  

const entry = await message.guild.fetchAuditLogs({type: 'INVITE_CREATE'}).then(audit => audit.entries.first());

let embed = new MessageEmbed();

  embed

  .setAuthor(message.guild.name+ ": Bir Davet Oluşturuldu",message.guild.iconURL())

  .setColor('#E70000')

  .setThumbnail(entry.executor.avatarURL({dynamic:true}))

  .setDescription(`Davet Link : ${message} \n\n Daveti Oluşturan :** <@${entry.executor.id}>**(\`${entry.executor.id}\`)`)

 return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

});

client.on("inviteDelete",async function (message) {

  const entry = await message.guild.fetchAuditLogs({type: 'INVITE_DELETE'}).then(audit => audit.entries.first());

  let embed = new MessageEmbed();

  embed

  .setAuthor(message.guild.name+": Bir Davet Silindi ", message.guild.iconURL())

  .setColor('#E70000')

  . setThumbnail (entry.executor.avatarURL({dynamic:true}))

  .setDescription (`Silinen Davet Linki : ${message} \n\n Daveti Silen Kişi **<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)

 return client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});

  });


client.on("guildMemberRoleRemove", async(member, role) => {
  const entry = await member.guild.fetchAuditLogs({type: ''}).then(audit => audit.entries.first());
 

          let embed = new Discord.MessageEmbed();
          embed
                .setAuthor(`${member.user.username}${member.user.discriminator}`, member.user.avatarURL({dynamic:true}))
                .setColor('#E70000')
                .setFooter(client.user.username, client.user.avatarURL())
                .setDescription(`✍️ <@${member.user.id}> **Adlı Kişiden Rol alındı!**`)
                .addField("Alınan Rol:", `${client.emotes.no} ${role}`, true)
  .addField(`Rolü Alan Kişi`, `**<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)
                .setThumbnail(member.user.avatarURL({dynamic:true}))
                .setTimestamp();
client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
        
});
client.on("guildMemberRoleAdd",async (member, role) => {
const entry = await member.guild.fetchAuditLogs({type: ''}).then(audit => audit.entries.first());
 

          let embed = new Discord.MessageEmbed();
embed
                .setAuthor(`${member.user.username}${member.user.discriminator}`, member.user.avatarURL({dynamic:true}))

                .setColor('#E70000')

                .setFooter(client.user.username, client.user.avatarURL())

                .setDescription(`✍️ <@${member.user.id}> **Kullanıcıya Bir Rol Verildi!**`)

                .addField("Verilen Rol:", `${client.emotes.yes} ${role}`, true)
.addField(`Rolü Veren Kişi`, `**<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)
                .setThumbnail(member.user.avatarURL({dynamic:true}))

                .setTimestamp();
client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
        

});

client.on("guildMemberNicknameUpdate", async(member, oldNickname, newNickname) => {
  const entry = await member.guild.fetchAuditLogs({type: ''}).then(audit => audit.entries.first());
 

          let embed = new Discord.MessageEmbed();
             embed   .setAuthor(`${member.user.username}${member.user.discriminator}`, member.user.avatarURL({dynamic:true}))
                .setColor('#E70000')
                .setFooter(client.user.username, client.user.avatarURL())
                .setDescription(`✍️ <@${member.user.id}> **Adlı Kullanicinin İsmi Sunucu'da Değişti!.** \n\n Değiştiren Kişi : **<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)
                .addField("Eski İsim: ", `\`\`\`${oldNickname}\`\`\`` || `\`\`\`${member.user.username}\`\`\``, true)
                .addField("Yeni İsim: ", `\`\`\`${newNickname}\`\`\`` || `\`\`\`${member.user.username}\`\`\``, true)
                .setThumbnail(member.user.avatarURL({dynamic:true}))
                .setTimestamp();
client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
    
});
client.on("guildMemberBoost", (member) => {
    
              let embed = new Discord.MessageEmbed();
                 embed   .setAuthor(`${member.guild.name}`, member.user.avatarURL({dynamic:true}))
                    .setColor("#E70000")
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(`${client.emotes.boost} **<@${member.user.id}>**(\`${member.user.id}\`) Adlı Kullanıcı** Sunucuya Boost Bastı!**`)
                    .setThumbnail(member.user.avatarURL({dynamic:true}))
                    .setTimestamp();
    
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("guildMemberUnboost", (member) => {
  
    
             let embed = new Discord.MessageEmbed();
               embed     .setAuthor(`${member.guild.name}`, member.user.avatarURL({dynamic:true}))
                    .setColor("#E70000")
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(`${client.emotes.boost} **<@${member.user.id}>**(\`${member.user.id}\`) **Adlı Kullanıcı Boostunu Çekti!**`)
                    .setThumbnail(member.user.avatarURL({dynamic:true}))
                    .setTimestamp();
    
          
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("guildBoostLevelUp", (guild, oldLevel, newLevel) => {
     
    
              let embed = new Discord.MessageEmbed();
                 embed   .setAuthor(`${guild.name}`, guild.iconURL({dynamic:true}))
                    .setColor("#E70000")
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(`${client.emotes.boost} **Sunucunun Boost Seviyesi Arttı!**`)
                    .addField("Eski Level: ", `\`\`\`${oldLevel}\`\`\``, true)
                    .addField("Yeni Level: ", `\`\`\`${newLevel}\`\`\``, true)
                    .setThumbnail(guild.iconURL({dynamic:true}))
                    .setTimestamp();
    
         
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("guildBoostLevelDown", (guild, oldLevel, newLevel) => {
   
    
              let embed = new Discord.MessageEmbed();
                embed    .setAuthor(`${guild.name}`, guild.iconURL({dynamic:true}))
                   .setColor("#E70000")
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(`${client.emotes.boost} **Sunucunun Boost Seviyesi Düştü!!**`)
                    .addField("Eski Level: ", `\`\`\`${oldLevel}\`\`\``, true)
                    .addField("Yeni Level: ", `\`\`\`${newLevel}\`\`\``, true)
                    .setThumbnail(guild.iconURL({dynamic:true}))
                    .setTimestamp();
    
             
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});



client.on("guildBannerAdd", (guild, bannerURL) => {
      
  
              let embed = new Discord.MessageEmbed();
                 embed  .setAuthor(guild.name, guild.iconURL({dynamic:true}))
                  .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription('⚒️ **Sunucu Banner Değişti!**')
                  .setImage(bannerURL)
                  .setTimestamp();
  
              
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});
client.on("guildAfkChannelAdd", (guild, afkChannel) => {


  
              let embed = new Discord.MessageEmbed();
                 embed .setAuthor(guild.name, guild.iconURL({dynamic:true}))
               .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription(`⚒️ ** AFK Kanalı Eklendi!!** `)
                  .addField('AFK Kanalı:', afkChannel, false)
                  .setThumbnail(guild.iconURL({dynamic:true}))
                  .setTimestamp();
  
            
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("guildVanityURLAdd", (guild, vanityURL) => {
      
            let embed = new Discord.MessageEmbed();
               embed   .setAuthor(guild.name, guild.iconURL({dynamic:true}))
                   .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription('⚒️ **Özel URL Eklendi!**')
                  .addField('Özel URL:', vanityURL, false)
                  .setThumbnail(guild.iconURL({dynamic:true}))
                  .setTimestamp();
  
             
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});
client.on("guildVanityURLRemove", (guild, vanityURL) => {
      
  
              let embed = new Discord.MessageEmbed();
                embed  .setAuthor(guild.name, guild.iconURL({dynamic:true}))
                   .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription('⚒️ **Özel URL Kaldırıldı!!**')
                  .addField('Özel URL:', `\`\`\`${vanityURL}\`\`\``, false)
                  .setThumbnail(guild.iconURL({dynamic:true}))
                  .setTimestamp();
  
             
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("guildVanityURLUpdate", (guild, oldVanityURL, newVanityURL) => {
      
  
          let embed = new Discord.MessageEmbed();
                  embed .setAuthor(guild.name, guild.iconURL({dynamic:true}))
                 .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription('⚒️ **Özel URL Değiştirildi!**')   
                  .addField('Eski Özel URL:', `\`\`\`${oldVanityURL}\`\`\``, true)
                  .addField('Yeni Özel URL:', `\`\`\`${newVanityURL}\`\`\``, true)
                  .setThumbnail(guild.iconURL({dynamic:true}))
                  .setTimestamp();
  
              
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("guildFeaturesUpdate", (oldGuild, newGuild) => {
      
  
              let embed = new Discord.MessageEmbed();
                 embed .setAuthor(newGuild.name, newGuild.iconURL({dynamic:true}))
                   .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription('⚒️ **Sunucuda Güncelleme Yapıldı!**')   
                  .addField('Güncellenen Olay:', `\`\`\`${newGuild.features.join(", ")}\`\`\``, true)
                  .setThumbnail(newGuild.iconURL({dynamic:true}))
                  .setTimestamp();
  
             
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("guildAcronymUpdate", (oldGuild, newGuild) => {
      
  
              let embed = new Discord.MessageEmbed();
                  embed .setAuthor(newGuild.name, newGuild.iconURL({dynamic:true}))
                   .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription('⚒️ **Kısaltma Güncellendi!!**')   
                  .addField('Yeni Kısaltma:', `\`\`\`${newGuild.nameAcronym}\`\`\``, true)
                  .setThumbnail(newGuild.iconURL({dynamic:true}))
                  .setTimestamp();
  
              
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("guildOwnerUpdate", (oldGuild, newGuild) => {
     
  
              let embed = new Discord.MessageEmbed();
                  embed .setAuthor(newGuild.name, newGuild.iconURL({dynamic:true}))
                  .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription('⚒️ **Sunucu Sahipi Değişti !**')   
                  .addField('Eski Sunucu Sahipi:', `<@${oldGuild.owner.id}>`, true)
                  .addField('Yeni Sunucu Sahipi:', `<@${newGuild.owner.id}>`, true)
                  .setThumbnail(newGuild.iconURL({dynamic:true}))
                  .setTimestamp();
  

  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("guildPartnerAdd", (guild) => {
    
  
              let embed = new Discord.MessageEmbed();
                  embed .setAuthor(guild.name, guild.iconURL({dynamic:true}))
                 .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription('⚒️ **Sunucu Partner Oldu!**')   
                  .setThumbnail(guild.iconURL({dynamic:true}))
                  .setTimestamp();
  
             
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("guildPartnerRemove", (guild) => {
      
             let embed = new Discord.MessageEmbed();
                embed  .setAuthor(guild.name, guild.iconURL({dynamic:true}))
                   .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription('⚒️ **Sunucu Artık Partner Değil!**')   
                  .setThumbnail(guild.iconURL({dynamic:true}))
                  .setTimestamp();
  
             
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("guildVerificationAdd", (guild) => {
     
  
         let embed = new Discord.MessageEmbed();
             embed     .setAuthor(guild.name, guild.iconURL({dynamic:true}))
                 .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription('⚒️ **Güvenlik Açıldı!!**')   
                  .setThumbnail(guild.iconURL({dynamic:true}))
                  .setTimestamp();
  
              
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("guildVerificationRemove", (guild) => {
     
  
              let embed = new Discord.MessageEmbed();
                  embed .setAuthor(guild.name, guild.iconURL({dynamic:true}))
                 .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription('⚒️ **Güvenlik Kaldırıldı!**')   
                  .setThumbnail(guild.iconURL({dynamic:true}))
                  .setTimestamp();
  
             
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});
client.on("rolePositionUpdate", async (role, oldPosition, newPosition) => {
      const entry = await role.guild.fetchAuditLogs().then(audit => audit.entries.first());

             let embed = new Discord.MessageEmbed();
               embed   .setAuthor(role.guild.name, role.guild.iconURL({dynamic:true}))
               .setColor("#E70000")
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription('⚒️ **Rol Sıra!**')
                  .addField('Rol:', `\`\`\`${role.name}\`\`\``, true) 
                  .addField('Eski Sırası:', `\`\`\`${oldPosition}\`\`\``, true)
                  .addField('Yeni Sırası:', `\`\`\`${newPosition}\`\`\``, true)
  .addField(`Değiştiren Kişi`,`**<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)
                  .setThumbnail(role.guild.iconURL({dynamic:true}))
                  .setTimestamp();
  
              
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("rolePermissionsUpdate", async(role, oldPermissions, newPermissions) => {
   
const entry = await role.guild.fetchAuditLogs({type: ''}).then(audit => audit.entries.first());


              let embed = new Discord.MessageEmbed();
             embed     .setAuthor(role.guild.name, role.guild.iconURL({dynamic:true}))
                  .setColor('#E70000')
                  .setFooter(client.user.username, client.user.avatarURL({dynamic:true}))
                  .setDescription(`⚒️ **Bir Rolde Yetki Değişikliği => ${role}!**`)
  .addField(`Güncellemeyi Yapan :`,`<@${entry.executor.id}>(\`${entry.executor.id}\`) `)
                  .setThumbnail(role.guild.iconURL({dynamic:true}))
                  .setTimestamp(); 
  
     
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("voiceChannelJoin", (member, channel) => {
 
              let embed = new Discord.MessageEmbed();
              embed      .setAuthor(`${member.user.username}${member.user.discriminator}`, member.user.avatarURL({dynamic:true}))
                    .setColor('#E70000')
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(` <@${member.user.id}> **Adlı Kullanıcı <#${channel.id}>Kanalına Katıldı!**`)
                    .setThumbnail(member.user.avatarURL({dynamic:true}))
                    .setTimestamp();
    
          
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("voiceChannelLeave", (member, channel) => {
 
    
              let embed = new Discord.MessageEmbed();
             embed       .setAuthor(`${member.user.username}${member.user.discriminator}`, member.user.avatarURL({dynamic:true}))
                    .setColor('#E70000')
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(` <@${member.user.id}> **adlı kullanıcı <#${channel.id}> Kanalından Ayrıldı!**`)
                    .setThumbnail(member.user.avatarURL({dynamic:true}))
                    .setTimestamp();
    
        
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {
   
    
              let embed = new Discord.MessageEmbed();
             embed       .setAuthor(`${member.user.username}${member.user.discriminator}`, member.user.avatarURL({dynamic:true}))
                    .setColor('#E70000')
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(` <@${member.user.id}> **Adlı Kullanıcı Başka Kanala Geçti!.**`)
                    .addField(`Eski Kanal: `, `\`\`\`${oldChannel.name}\`\`\``, true)
                    .addField(`Yeni Kanal: `, `\`\`\`${newChannel.name}\`\`\``, true)
                    .setThumbnail(member.user.avatarURL({dynamic:true}))
                    .setTimestamp();
    
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("voiceChannelMute", (member, muteType) => {
  
    
            let  embed = new Discord.MessageEmbed();
          embed          .setAuthor(`${member.user.username}${member.user.discriminator}`, member.user.avatarURL({dynamic:true}))
                    .setColor("#E70000")
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(` <@${member.user.id}> **Adlı kullanıcı Ses-Mute Yedi! (Tür: ${muteType})**`)
                    .setThumbnail(member.user.avatarURL({dynamic:true}))
                    .setTimestamp();
    
          
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("voiceChannelUnmute", (member, oldMuteType) => {
  
    
              let embed = new Discord.MessageEmbed();
              embed      .setAuthor(`${member.user.username}${member.user.discriminator}`, member.user.avatarURL({dynamic:true}))
                    .setColor('#E70000')
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(` <@${member.user.id}> **adlı kullanıcının ses-mutesi kalktı! **`)
                    .setThumbnail(member.user.avatarURL({dynamic:true}))
                    .setTimestamp();
    
        
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("voiceChannelDeaf",async  (member, deafType) => {
  const entry = await member.guild.fetchAuditLogs({type: ''}).then(audit => audit.entries.first());
   
    
              let embed = new Discord.MessageEmbed();
                  embed  .setAuthor(`${member.user.username}${member.user.discriminator}`, member.user.avatarURL({dynamic:true}))
                    .setColor('#E70000')
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(`** <@${member.user.id}>(\`${member.user.id}\`) ** Adlı Kullanıcı Sağırlaştırma Yedi! ** (Tür: ${deafType})** \n\n Sağırlaştıran Kişi : **<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)
                    .setThumbnail(member.user.avatarURL({dynamic:true}))
                    .setTimestamp();
    
           
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("voiceChannelUndeaf", async (member, deafType) => {
  const entry = await member.guild.fetchAuditLogs({type: ''}).then(audit => audit.entries.first());
   
              let embed = new Discord.MessageEmbed();
                 embed   .setAuthor(`${member.user.username}${member.user.discriminator}`, member.user.avatarURL({dynamic:true}))
                    .setColor('#E70000')
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(` **<@${member.user.id}>(\`${member.user.id}\`)** **Adlı Kullanıcının Sağırlaştırması Kaldırıldı! ** \n\n Kaldıran Kişi : **<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)
                    .setThumbnail(member.user.avatarURL({dynamic:true}))
                    .setTimestamp();
    
          
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("voiceStreamingStart", (member, voiceChannel) => {
    
    
              let embed = new Discord.MessageEmbed();
                 embed   .setAuthor(`${member.user.username}${member.user.discriminator}`, member.user.avatarURL({dynamic:true}))
                    .setColor('#E70000')
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(` **<@${member.user.id}>(\`${member.user.id}\`)** **Adlı Kullanıcı Yayın Yapmaya Başladı! \n\n Yayın Yaptığı Kanal : ${voiceChannel.name}!(\`${voiceChannel.id}\`) **`)
                    .setThumbnail(member.user.avatarURL({dynamic:true}))
                    .setTimestamp();
    
  client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
});

client.on("voiceStreamingStop", (member, voiceChannel) => {
  
    
              let embed = new Discord.MessageEmbed();
                 embed                         .setAuthor(`${member.user.username}${member.user.discriminator}`, member.user.avatarURL({dynamic:true}))
                    .setColor('#E70000')
                    .setFooter(client.user.username, client.user.avatarURL())
                    .setDescription(` **<@${member.user.id}>** (\`${member.user.id}\`)** Adlı Kullanıcı Yayın Yapmayı Bıraktı!** \n\n Yayını Bıraktığı Kanal ${voiceChannel}(\`${voiceChannel.id}\`)`)
                    .setThumbnail(member.user.avatarURL({dynamic:true}))
                    .setTimestamp();
    client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
      
});
client.on("guildChannelTopicUpdate", (channel, oldTopic, newTopic) => {


          let embed = new Discord.MessageEmbed();
          embed     
                .setColor('#E70000')
                .setFooter(client.user.username, client.user.avatarURL())
                .setDescription('⚒️ **Kanalda Durum Güncellemesi**')
                .addField("Eski Durum ", `\`\`\`${oldTopic}\`\`\``, true)
                .addField("Yeni Durum", `\`\`\`${newTopic}\`\`\``, true)
                .setTimestamp();
 client.channels.cache.get(MOD_CHANNEL).send({embeds : [embed]});
     
});


