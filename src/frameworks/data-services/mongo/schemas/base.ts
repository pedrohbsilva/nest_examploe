import { Schema } from 'mongoose';

function base(schema: Schema): void {
  schema.set('timestamps', true);

  schema.add({
    deletedAt: {
      type: Date,
      default: null,
    },
  });
}

export { base };
