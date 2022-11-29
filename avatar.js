const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const ID = context.params.event.data.options.length
  ? context.params.event.data.options[0].value
  : context.params.event.member.user.id;

const member = await lib.discord.guilds['@0.1.0'].members.retrieve({
  user_id: ID, // required
  guild_id: context.params.event.guild_id,
});

await lib.discord.channels['@0.2.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: '',
  tts: false,
  embeds: [
    {
      type: 'rich',
      title: '',
      description: '',
      color: 0x00ffff,
      image: {
        url: member.user.avatar_url,
        height: 256,
        width: 256,
      },
    },
  ],
});
