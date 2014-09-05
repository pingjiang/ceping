/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var paper = require('./paper.model');

exports.register = function(socket) {
  paper.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  paper.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('paper:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('paper:remove', doc);
}
