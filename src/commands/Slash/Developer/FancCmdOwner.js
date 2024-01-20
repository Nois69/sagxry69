const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "owner-help",
    description: "Dev_.",
    category: "Developer",
    permissions: {
        bot: [],
        channel: [],
        user: [],
    },
    settings: {
        inVc: false,
        sameVc: false,
        player: false,
        current: false,
        owner: true,
        premium: true,
    },
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });

        const embed = new EmbedBuilder().setDescription(` Owner Commands\n\n  **Premium Commands**\`\`\`yml\ns.generate : Generate premium user code.\ns.unpremium : Delete user from premium.\ns.list : Get list of all premium user.\`\`\`\n\n  **Developer Commands**\`\`\`yml\ns.ban : Ban a user from using the bot.\ns.maintenance : Maintenance mode.\n!eval : Bot eval.\`\`\``).setColor(client.color);

        return interaction.editReply({ embeds: [embed] });
    },
};

