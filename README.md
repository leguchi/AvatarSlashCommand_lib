# AvatarSlashCommand_lib
A Discord slash command to view your own or a separate user's Discord avatar.

## Introduction
This build is using [`lib`](https://www.npmjs.com/package/lib), which is an npm package for easily accessing API's listed [here](https://autocode.com/lib/). If you'd like to work on this locally rather than on [Autocode](https://autocode.com/), read [the docs](https://docs.autocode.com/online-ide/can-i-work-locally/)

## Setup
The only thing that will be sent by the bot will be the image 256 * 256. You will need to set up the command yourself in the [slash command builder](https://autocode.com/tools/discord/command-builder/) with one option that is not required being User. If you would rather have the code for the slash command directly, here it is:

```js
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.commands['@0.0.0'].create({
  "name": "avatar",
  "description": "Returns a user's avatar",
  "options": [
    {
      "type": 6,
      "name": "user",
      "description": "The user you'd like to get the avatar of. Is not required if you'd like your own."
    }
  ]
});
```
