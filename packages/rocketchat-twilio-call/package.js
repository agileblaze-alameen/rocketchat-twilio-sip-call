Package.describe({
  name: 'ameen:rocketchat-twilio-call',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2');
  api.use('ecmascript');
  api.mainModule('rocketchat-twilio-call.js');
  api.use('rocketchat:lib');

  api.addFiles('settings.js', 'server');
  api.addFiles('SMS.js', 'server');
  api.addFiles('services/twilio.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ameen:rocketchat-twilio-call');
  api.mainModule('rocketchat-twilio-call-tests.js');
});
