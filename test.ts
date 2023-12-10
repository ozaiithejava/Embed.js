import { DiscordEmbed, EmbedMessage } from './embed';

const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL'; // Discord Webhook URL'sini buraya ekleyin

const embed = new DiscordEmbed(webhookUrl);

// Örnek 1: Basit bir embed gönderme
const embedOptions1 = {
  title: 'Başlık 1',
  description: 'Açıklama 1',
  color: 0xFF0000, // Kırmızı renk
  fields: [
    { name: 'Alan 1', value: 'Değer 1' },
    { name: 'Alan 2', value: 'Değer 2' },
  ],
};

embed.sendEmbed(embedOptions1);

// Örnek 2: Birden fazla embed gönderme
const embedOptions2 = new EmbedMessage('Başlık 2', 'Açıklama 2', 0x00FF00, [
  { name: 'Alan 3', value: 'Değer 3' },
  { name: 'Alan 4', value: 'Değer 4' },
]);

const embedOptions3 = new EmbedMessage('Başlık 3', 'Açıklama 3', 0x0000FF, [
  { name: 'Alan 5', value: 'Değer 5' },
  { name: 'Alan 6', value: 'Değer 6' },
]);

embed.sendMultipleEmbeds([embedOptions2, embedOptions3]);

// Örnek 3: Tekrarlanan embed gönderme
const embedOptions4 = new EmbedMessage('Başlık 4', 'Açıklama 4', 0xFFFF00, [
  { name: 'Alan 7', value: 'Değer 7' },
  { name: 'Alan 8', value: 'Değer 8' },
]);

embed.sendRepeatedEmbed(embedOptions4, 3);

// Örnek 4: Detaylı embed gönderme
const detailedEmbed = new EmbedMessage('Detaylı Başlık', 'Detaylı Açıklama', 0x0088CC, [
  { name: 'Detay Alanı 1', value: 'Detay Değeri 1' },
  { name: 'Detay Alanı 2', value: 'Detay Değeri 2' },
]);

embed.sendDetailedEmbed(detailedEmbed);
