import { uuid } from 'uuidv4';

class Specification {
  id?: string;

  description: string;

  name: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Specification;
