export async function load(event) {
  console.log(event)
  return {
    ip: event.getClientAddress()
  }
}