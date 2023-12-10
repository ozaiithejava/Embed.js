// embed.ts

import axios from 'axios';

interface EmbedField {
  name: string;
  value: string;
}

interface EmbedOptions {
  title?: string;
  description?: string;
  color?: number;
  fields?: EmbedField[];
}

export class DiscordEmbed {
  private webhookUrl: string;

  constructor(webhookUrl: string) {
    this.webhookUrl = webhookUrl;
  }

  private async sendPayload(payload: any): Promise<void> {
    try {
      await axios.post(this.webhookUrl, payload);
    } catch (error) {
      console.error('Error sending embed:', error.message);
      throw new Error('Error sending embed.');
    }
  }

  public async sendEmbed(embedOptions: EmbedOptions): Promise<void> {
    const payload = {
      embeds: [
        {
          title: embedOptions.title || '',
          description: embedOptions.description || '',
          color: embedOptions.color || 0x00ff00,
          fields: embedOptions.fields || [],
        },
      ],
    };

    await this.sendPayload(payload);
  }

  public async sendMultipleEmbeds(embedOptionsArray: EmbedOptions[]): Promise<void> {
    const payload = {
      embeds: embedOptionsArray.map((options) => ({
        title: options.title || '',
        description: options.description || '',
        color: options.color || 0x00ff00,
        fields: options.fields || [],
      })),
    };

    await this.sendPayload(payload);
  }

  public async sendRepeatedEmbed(embedOptions: EmbedOptions, repeatCount: number): Promise<void> {
    const payloadArray = Array.from({ length: repeatCount }, () => ({
      embeds: [
        {
          title: embedOptions.title || '',
          description: embedOptions.description || '',
          color: embedOptions.color || 0x00ff00,
          fields: embedOptions.fields || [],
        },
      ],
    }));

    for (const payload of payloadArray) {
      await this.sendPayload(payload);
    }
  }

  public async sendDetailedEmbed(embedMessage: EmbedMessage): Promise<void> {
    const payload = {
      embeds: [
        {
          title: embedMessage.title || '',
          description: embedMessage.description || '',
          color: embedMessage.color || 0x00ff00,
          fields: embedMessage.fields || [],
        },
      ],
    };

    await this.sendPayload(payload);
  }
}

export class EmbedMessage {
  public title?: string;
  public description?: string;
  public color?: number;
  public fields?: EmbedField[];

  constructor(title?: string, description?: string, color?: number, fields?: EmbedField[]) {
    this.title = title;
    this.description = description;
    this.color = color;
    this.fields = fields;
  }
}
