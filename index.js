const { Client, Collection, MessageAttachment, MessageActionRow, MessageEmbed, MessageButton } = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const channel = "";

const client = new Client({ intents: 3276799 });

const { clientId, guildId, token, number } = require("./config.js");


client.commands = new Collection()
const commands = []

const commandFiles = fs.readdirSync("commands").filter((file) => file.endsWith(".js"))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.data.name, command)
    commands.push(command.data)
}



const eventsFiles = fs.readdirSync("events").filter((file) => file.endsWith(".js"))
for (const file of eventsFiles) {
    const event = require(`./events/${file}`)
    client.on(event.name, async (...args) => {
        event.execute(client, ...args)
    })
}


const rest = new REST().setToken(token)

client.once('ready', async () => {
    await rest.put(Routes.applicationCommands(client.user.id), { body: commands })
    console.log('bot is ready');
    client.user.setActivity("Versa Store", {
type: "STREAMING",
        url: "https://www.twitch.tv/#"
});
});

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.get("");
    if (!channel) return console.log('Did not find any channel');

    try {
        // تحميل صورة الترحيب
        const welcomeImage = await loadImage('');

        // تحميل أفتار العضو
        const avatarURL = member.user.displayAvatarURL({ format: 'png', size: 512 });
        const avatarImage = await loadImage(avatarURL); 

// إعداد الـ canvas
        const canvas = createCanvas(welcomeImage.width, welcomeImage.height);
        const ctx = canvas.getContext('2d');

        // رسم صورة الترحيب
        ctx.drawImage(welcomeImage, 0, 0);

        // إعداد القناع الدائري
        const avatarSize = 204; // حجم الأفتار
        const avatarX = 263; // موقع X للأفتار
        const avatarY = 100; // موقع Y للأفتار
        ctx.beginPath();
        ctx.arc(avatarX + avatarSize / 2, avatarY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.clip(); // تطبيق القناع

        // رسم أفتار العضو داخل القناع
        ctx.drawImage(avatarImage, avatarX, avatarY, avatarSize, avatarSize);

        // تحويل الصورة إلى ملف
        const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

        // إرسال الصورة إلى القناة
        setTimeout(() => {
            channel.send({ files: [attachment] });
        }, 1000);

        // إرسال رسالة ترحيب
        setTimeout(() => {
            channel.send(`*hey :* **${member.user.username}**`);
        }, 1500);
    } catch (error) {
        console.error('Error generating welcome image:', error);
    }
});

client.on("messageCreate", async message => {
if(message.content === "ticket"){
if(!message.member.permissions.has("ADMINISTRATOR")) return;
    const row = new MessageActionRow()
    .addComponents(
    new MessageButton()
        .setCustomId("1")
        .setLabel("Create ticket")
        .setEmoji("📩")
        .setStyle("SECONDARY")
    );
    const embed = new MessageEmbed()
    .setAuthor("Ticket")
    .setDescription(``)
    .setColor("RANDOM")
    .setTimestamp
          message.delete();
    message.channel.send({ embeds: [embed], components: [row] })
}
});

client.on("interactionCreate", async interaction => {
if(!interaction.isButton()) return;
    if(interaction.customId == "1"){
const categoryId = ''; // ايدي كاتجوري الى ينفتح فيه تكت
        config.number++;
const channel = await interaction.guild.channels.create(`ti ket-${number}`, {
      type: 'GUILD_TEXT',
      parent: categoryId,
      permissionOverwrites: [
        {
          id: interaction.user.id,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
        },
        {
          id: interaction.guild.roles.everyone,
          deny: ['VIEW_CHANNEL']
        }
      ]
    });
       const embed = new MessageEmbed()
       .setDescription(``)
       .setColor("RANDOM")
       .setTimestamp();
        
       const row = new MessageActionRow()
       .addComponents(
       new MessageButton()
           .setLabel("Close")
           .setEmoji("🔒")
           .setStyle("SECONDARY")
           .setCustomId("2")
       );
        await channel.send({ embeds: [embed], components: [row] });
        await interaction.reply({ content: `:heavy_check_mark: *Ticket Created ${channel}*`, ephemeral: true });
} else if(interaction.customId == "2"){
await interaction.channel.delete();
}
});

client.on("messageCreate", async message => {
if (channel.includes(message.channel.id) && !message.author.bot){
message.channel.send("") // رابط الخط
}
});

client.login(token)