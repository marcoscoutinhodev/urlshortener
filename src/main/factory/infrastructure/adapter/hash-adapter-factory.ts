import { HashAdapter } from '../../../../infrastructure/adapter/hash-adapter';
import { environment } from '../../../configuration/environment';

export function makeHashAdapter() {
  const { amountOfBytesToHash } = environment;
  return new HashAdapter(Number(amountOfBytesToHash));
}
