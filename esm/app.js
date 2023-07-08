import tools from './modules/tools.js';
import { getDeviceType } from './modules/tools.js';
const app = () => {
  console.log('Tools are:', tools)
  console.log('Method is:', getDeviceType)
}
app()