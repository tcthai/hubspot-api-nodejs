/**
 * CRM Owners
 * HubSpot uses **owners** to assign CRM objects to specific people in your organization. The endpoints described here are used to get a list of the owners that are available for an account. To assign an owner to an object, set the hubspot_owner_id property using the appropriate CRM object update or create a request.  If teams are available for your HubSpot tier, these endpoints will also indicate which team an owner belongs to. Team membership can be one of PRIMARY (default), SECONDARY, or CHILD.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PublicTeam'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PublicTeam'));
  } else {
    // Browser globals (root is window)
    if (!root.CrmOwners) {
      root.CrmOwners = {};
    }
    root.CrmOwners.PublicOwner = factory(root.CrmOwners.ApiClient, root.CrmOwners.PublicTeam);
  }
}(this, function(ApiClient, PublicTeam) {
  'use strict';



  /**
   * The PublicOwner model module.
   * @module model/PublicOwner
   * @version v3
   */

  /**
   * Constructs a new <code>PublicOwner</code>.
   * @alias module:model/PublicOwner
   * @class
   * @param id {String} 
   * @param createdAt {String} 
   * @param updatedAt {String} 
   * @param archived {Boolean} 
   * @param teams {Array.<module:model/PublicTeam>} 
   */
  var exports = function(id, createdAt, updatedAt, archived, teams) {
    var _this = this;

    _this['id'] = id;
    _this['createdAt'] = createdAt;
    _this['updatedAt'] = updatedAt;
    _this['archived'] = archived;
    _this['teams'] = teams;
  };

  /**
   * Constructs a <code>PublicOwner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublicOwner} obj Optional instance to populate.
   * @return {module:model/PublicOwner} The populated <code>PublicOwner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
      }
      if (data.hasOwnProperty('archived')) {
        obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
      }
      if (data.hasOwnProperty('teams')) {
        obj['teams'] = ApiClient.convertToType(data['teams'], [PublicTeam]);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {String} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {String} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;
  /**
   * @member {Boolean} archived
   */
  exports.prototype['archived'] = undefined;
  /**
   * @member {Array.<module:model/PublicTeam>} teams
   */
  exports.prototype['teams'] = undefined;



  return exports;
}));

