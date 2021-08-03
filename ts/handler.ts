export async function handleRequest(request: Request): Promise<Response> {
  //const bot = new Telegraf('775353639:AAEhw9--QEkWE5srelKLd9XXhT-BN7GnPjc');
  //bot.telegram.sendMessage(169459214, 'test!')
  request.url.valueOf()

  const wasm = await import('wasm_module')

  return new Response(await wasm.hello('world!'))
  // return new Response(await rss(1440)) //一天,用于测试
}
