require("dotenv").config();

module.exports = {
    // ⬇⬇⬇ BOT DETAILS
    token: process.env.TOKEN || "TOKEN",
    prefix: process.env.PREFIX || "s.",
    color: process.env.EMBED_COLOR || "#343434",
    owner: process.env.OWNER_ID || "761510616573542400",
    guildLogs: process.env.GUILD_LOGS || "1043193920722583673",
    leaveTimeout: process.env.LEAVE_TIMEOUT || "20000",
    disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || ""),

    // ⬇⬇⬇ PORU DETAILS
    playSource: process.env.PLAY_SOURCE || "ytsearch",
    poruOptions: {
        defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch",
        clientID: process.env.SPOTIFY_ID || "6c31645ffb004ab8b44d06f7b96d1b66",
        clientSecret: process.env.SPOTIFY_SECRET || "3618fdc0b4824cfd91a8d425dac32987",
        reconnectTries: 5,
        playlistLimit: 2, // <==== 1 = 100 TRACKS
        albumLimit: 2, // <==== 1 = 50 TRACKS
        artistLimit: 2, // <==== 1 = 50 TRACKS
        searchMarket: "us",
    },
    nodes: [
        {
            name: process.env.NODE_NAME1 || "Triped", 
            host: process.env.NODE_HOST1 || "lavalink.techpoint.world",
            port: parseInt(process.env.NODE_PORT1 || "80"),
            password: process.env.NODE_PASSWORD1 || "techpoint", 
            secure: parseBoolean(process.env.NODE_SECURE1 || "false"), // <==== LAVALINK SECURE "true/false"
            regions: process.env.NODE_REGIONS1 || [""],
        },
      {
          name: process.env.NODE_NAME1 || "Ohio", 
          host: process.env.NODE_HOST1 || "lava.link",
          port: parseInt(process.env.NODE_PORT1 || "80"),
          password: process.env.NODE_PASSWORD1 || "solarop", 
          secure: parseBoolean(process.env.NODE_SECURE1 || "false"), // <==== LAVALINK SECURE "true/false"
          regions: process.env.NODE_REGIONS1 || [""],
      }
    ],

    // ⬇⬇⬇ LINK BOTS DETAILS
    mongoUri: process.env.MONGO_URI || "mongodb+srv://testi:ahtest69@cluster0.kqfhrls.mongodb.net/?retryWrites=true&w=majority", // <==== YOUR MONGODB LINK
    supportUrl: process.env.SUPPORT_URL || "https://discord.gg/aGeeMwkJ2b", // <==== YOUR SUPPORT SERVER LINK
    voteUrl: process.env.VOTE_URL || "https://discord.gg/aGeeMwkJ2b", // <==== YOUR VOTE URL
    inviteUrl: process.env.INVITE_URL || "https://discord.gg/aGeeMwkJ2b", // <==== YOUR BOT INVITE LINK
    imageUrl: process.env.IMAGE_URL || "IMAGE_URL", // <==== YOUR IMAGE LINK 
};

function parseBoolean(value) {
    if (typeof value === "string") {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}