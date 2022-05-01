import {existsSync} from 'fs';
import {cat} from './cat'
import {grep} from './grep'
function control_error(name: string): boolean{
  if (existsSync(name)) {
    return true;
  } else {
    console.log("File doesn't exist");
    return false;
  }
}

if (process.argv.length !== 4) {
  console.log('Please, specify a file and word');
} else {

  const name = new cat(process.argv[2]);
  const word = new grep(process.argv[3]);
  control_error(name);
  name.cat_command();
  word.grep_command();
}
