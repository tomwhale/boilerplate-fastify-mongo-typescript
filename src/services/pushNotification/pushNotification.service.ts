import { FastifyInstance } from "fastify"

class PushNotificationService {
  readonly app: FastifyInstance
  constructor (app: FastifyInstance) {
    if (!app.ready) throw new Error(`can't get .ready from fastify app.`);
    this.app = app;
    }
  

  async create ({
    heading,
    message,
    userIds,
    increaseBadgeCount = true,
    appUrl
  }: {
    heading?: string;
    message?: string;
    userIds: string[];
    increaseBadgeCount?: boolean;
    appUrl?: string;
  }) {
    this.app.oneSignal.createNotification({
      include_external_user_ids: userIds,
      headings: {
        en: heading,
      },
      contents: {
        en: message,
      },
      ...(increaseBadgeCount && {ios_badgeType: 'Increase'}),
      ...(increaseBadgeCount && {ios_badgeCount: 1}),
      app_url: appUrl,
    })
  }
}

export default PushNotificationService