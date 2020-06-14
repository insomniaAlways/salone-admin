import { schema } from 'normalizr';

const itemProcessStrategy = (value, parent, key) => {
  switch (key) {
    case 'items':
      return { ...value, category: parent.id };
    case 'package':
      return { ...value, package: [parent.id] };
    default:
      return { ...value };
  }
};

const itemSchema = new schema.Entity('items',);
const categorySchema = new schema.Entity('categories', {
  items: [itemSchema]
})
const packageSchema = new schema.Entity('packages', {
  items: [itemSchema]
})
const cartItemSchema = new schema.Entity('cartItems', {
  package: packageSchema,
  item: itemSchema
})

const appointmentSchema = new schema.Entity('appointment')

const itemArraySchema = new schema.Array(itemSchema)
const catergoryArraySchema = new schema.Array(categorySchema)
const packageArraySchema =  new schema.Array(packageSchema)
const cartItemArraySchema = new schema.Array(cartItemSchema)

const orderSchema = new schema.Entity('orders', {
  cartItems: cartItemArraySchema,
  appointment: appointmentSchema
});
const orderArraySchema =  new schema.Array(orderSchema);

const userSchema = new schema.Entity('users');
const userArraySchema = new schema.Array(userSchema)

export { itemSchema, categorySchema, packageSchema,
  itemArraySchema, catergoryArraySchema, packageArraySchema,
  orderSchema, orderArraySchema, userSchema,
  userArraySchema,  cartItemSchema, appointmentSchema,
  cartItemArraySchema }