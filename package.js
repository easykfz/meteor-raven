Package.describe({
  summary: 'Integrate with Raven JS for JavaScript errors and logs',
  version: '0.3.3',
  name: 'dvelopment:raven',
  git: 'https://github.com/dVelopment/meteor-raven.git',
  description: 'README.md'
});

Npm.depends({
  'raven': '1.1.1',
  'raven-js': '3.10.0',
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.4.2.3');
  api.use('ecmascript');
  api.mainModule('lib/main.js', [ 'client', 'server' ]);

  api.export([
    'RavenLogger'
  ], [
    'client',
    'server'
  ]);
});
