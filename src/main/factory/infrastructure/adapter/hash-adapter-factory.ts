import { HashAdapter } from '../../../../infrastructure/adapter/hash-adapter';
import { environment } from '../../../configuration/environment';

export function makeHashAdapter() {
  const { amountOfHashBytes } = environment;
  return new HashAdapter(Number(amountOfHashBytes));
}
