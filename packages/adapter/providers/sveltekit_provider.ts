import { HttpContext } from '@adonisjs/core/http'
import type { ApplicationService } from '@adonisjs/core/types'

declare module '@adonisjs/core/http' {
  interface HttpContext {
    svelteHandler: () => Promise<void>
  }
}

export default class SvelteKitProvider {
  static needsApplication = true

  constructor(protected app: ApplicationService) {}

  async boot() {
    const env = this.app.getEnvironment()
    if (env !== 'web' && env !== 'test') {
      return
    }

    const sveltePath = this.app.makePath(this.app.inProduction ? '' : 'build', 'svelte')
    const { handler }: { handler: (ctx: HttpContext) => any } = await import(
      `${sveltePath}/handler.js`
    )

    HttpContext.getter(
      'svelteHandler',
      function (this: HttpContext) {
        return () =>
          new Promise((resolve) =>
            handler(this)(this.request.request, this.response.response, () => resolve())
          )
      },
      false
    )
  }
}
