export async function load(event, context) {
  console.log(event, context)
  return {
    event,
    context
  }
}