import prompt from 'prompt';
import { Option } from 'fp-ts/Option';
import * as O from 'fp-ts/lib/Option';
import { TaskEither } from 'fp-ts/lib/TaskEither';

prompt.get(['username', 'email'], function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  console.log('  email: ' + result.email);
});

console.log('hello');
