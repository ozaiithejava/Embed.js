# Embed.js
embed.js for discord

## Kullanım
```Java

import { DiscordEmbed, EmbedMessage } from 'discord-embed-module';

// Discord Webhook URL'sini belirtin
const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL';
const embed = new DiscordEmbed(webhookUrl);

// Süre sonra mesaj gönderme
setTimeout(async () => {
  await embed.sendEmbed({
    title: 'Scheduled Embed',
    description: 'This message was sent after a delay.',
    color: 0x0000ff, // Blue color
  });
}, 5000); // 5 saniye gecikme

// Döngü ile mesaj gönderme
const loopCount = 3;
for (let i = 0; i < loopCount; i++) {
  await embed.sendEmbed({
    title: 'Looped Embed',
    description: `This is message number ${i + 1} in the loop.`,
    color: 0xff00ff, // Magenta color
  });
}

// Aynı mesajı birden çok kez gönderme
const repeatCount = 4;
await embed.sendRepeatedEmbed(
  {
    title: 'Repeated Embed',
    description: 'This is the same message sent multiple times.',
    color: 0xffff00, // Yellow color
  },
  repeatCount
);

// Çok detaylı mesaj gönderme
const detailedMessage = new EmbedMessage(
  'Detailed Embed',
  'This is a detailed message with specific options.',
  0x008000, // Green color
  [
    { name: 'Field 1', value: 'Value 1' },
    { name: 'Field 2', value: 'Value 2' },
  ]
);
await embed.sendDetailedEmbed(detailedMessage);
```