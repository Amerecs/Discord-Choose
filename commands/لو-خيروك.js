const {SlashCommandBuilder} = require("@discordjs/builders");

const images = ["https://www12.0zz0.com/2024/09/06/21/418395035.jpeg", "https://www12.0zz0.com/2024/09/06/21/976872956.jpeg", "https://www4.0zz0.com/2024/09/06/21/476083002.jpeg", "https://www4.0zz0.com/2024/09/06/21/453717967.jpeg", "https://www4.0zz0.com/2024/09/06/21/777406574.jpeg", "https://www12.0zz0.com/2024/09/06/21/723868756.jpeg", "https://www3.0zz0.com/2024/09/06/22/304005543.jpeg", "https://www3.0zz0.com/2024/09/06/22/753807686.jpeg", "https://www12.0zz0.com/2024/09/06/21/604190991.jpeg", "https://www12.0zz0.com/2024/09/06/21/401841658.jpeg", "https://www3.0zz0.com/2024/09/06/22/891061467.jpeg", "https://www6.0zz0.com/2024/09/06/22/167271973.jpeg", "https://www6.0zz0.com/2024/09/06/22/709400174.jpeg", "https://www6.0zz0.com/2024/09/06/22/339198135.jpeg", "https://www6.0zz0.com/2024/09/06/22/253066782.jpeg", "https://www6.0zz0.com/2024/09/06/22/822466041.jpeg", "https://www11.0zz0.com/2024/09/06/23/274269708.jpeg", "https://www11.0zz0.com/2024/09/06/23/954304152.jpeg", "https://www11.0zz0.com/2024/09/06/23/693473493.jpeg", "https://www3.0zz0.com/2024/09/06/23/175544988.jpeg", "https://www3.0zz0.com/2024/09/06/23/212719598.jpeg", "https://www3.0zz0.com/2024/09/06/23/165228178.jpeg", "https://www7.0zz0.com/2024/09/06/23/498364586.jpeg", "https://www9.0zz0.com/2024/09/06/23/460952602.jpeg", "https://www9.0zz0.com/2024/09/06/23/460952602.jpeg", "https://www9.0zz0.com/2024/09/06/23/645320102.jpeg", "https://www10.0zz0.com/2024/09/06/23/932411475.jpeg", "https://www10.0zz0.com/2024/09/06/23/953155021.jpeg", "https://www10.0zz0.com/2024/09/06/23/181787457.jpeg", "https://www6.0zz0.com/2024/09/06/23/699258418.jpeg", "https://www6.0zz0.com/2024/09/06/23/691571780.jpeg", "https://www6.0zz0.com/2024/09/06/23/183943369.jpeg", "https://www8.0zz0.com/2024/09/06/23/215065178.jpeg", "https://www8.0zz0.com/2024/09/06/23/341170508.jpeg", "https://www8.0zz0.com/2024/09/06/23/414988427.jpeg", "https://www8.0zz0.com/2024/09/06/23/749357624.jpeg", "https://www8.0zz0.com/2024/09/06/23/179573383.jpeg", "https://www8.0zz0.com/2024/09/06/23/301666997.jpeg", "https://www5.0zz0.com/2024/09/06/23/103769631.jpeg", "https://www5.0zz0.com/2024/09/06/23/496512086.jpeg", "https://www8.0zz0.com/2024/09/06/23/741344905.jpeg", "https://www12.0zz0.com/2024/09/06/23/802893978.jpeg", "https://www12.0zz0.com/2024/09/06/23/566424089.jpeg", "https://www12.0zz0.com/2024/09/06/23/643102785.jpeg", "https://www12.0zz0.com/2024/09/06/23/952962548.jpeg", "https://www6.0zz0.com/2024/09/06/23/752572652.jpeg", "https://www8.0zz0.com/2024/09/06/23/543380967.jpeg", "https://www5.0zz0.com/2024/09/06/23/545946787.jpeg", "https://www5.0zz0.com/2024/09/06/23/409592712.jpeg", "https://www9.0zz0.com/2024/09/06/23/675275618.jpeg", "https://www9.0zz0.com/2024/09/06/23/638749960.jpeg"]

module.exports = {
  data: new SlashCommandBuilder()
    .setName('لو-خيروك')
    .setDescription('Sends a random image from a list of images.')
    .toJSON(),
  async execute(client, interaction) {
    const image = images[Math.floor(Math.random() * images.length)];
    
    try {
      await interaction.reply({
        files: [image]
      });
    } catch (error) {
      console.error('Error replying with image:', error);
    }
  }
};