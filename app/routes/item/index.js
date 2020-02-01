import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      items: A(),
      organizations: this.get('store').findAll('organization')
    })
  },

  setupController(controller, model) {
    this._super(...arguments);
    this.controllerFor('application').set('routeName', 'Items')
    controller.set('items', model.items);
    controller.set('organizations', model.organizations)
    controller.set('selectedOrganization', controller.get('organizations.firstObject'))
    controller.set('columns', A([
      EmberObject.create({ key: "name", name: "Name", width: '20%' }),
      EmberObject.create({ key: "category.display_name", name: "Category", width: '20%' }),
      EmberObject.create({ key: "description", name: "Description", width: '30%' }),
      EmberObject.create({ key: "price", name: "Price", width: '10%' }),
      EmberObject.create({ key: "mrp_price", name: "MRP Price", width: '10%' }),
      EmberObject.create({ key: "orgName", name: "Organization" }),
    ]))
  }
});
