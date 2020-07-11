var cassandra = require('cassandra-driver');

var db = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'items'
});

module.exports = db;