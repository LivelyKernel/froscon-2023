import { AnOnlineDemo } from './ui/online-demo.cp.js';
import { part } from 'lively.morphic';

export async function main () {
  const demo = part(AnOnlineDemo).openInWorld();
  demo.center = $world.center;
}
