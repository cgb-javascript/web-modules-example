import tools from './modules/tools.mjs'
console.log('require', require)
const app = () => {
  console.log('Tools are:', tools)
}
app()