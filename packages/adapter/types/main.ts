declare module '@adonisjs/core/http' {
  interface HttpContext {
    svelteHandler: () => Promise<void>
  }
}
