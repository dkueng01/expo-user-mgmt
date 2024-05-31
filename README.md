# expo supa push project
## how to get started
### if no app on phone yet
* create a build for your device:
- eas device:create
- eas build --profile development --platform ios

### if app on phone and develop mode activeted usw...
* start development server
- npx expo start --dev-client

* run supabase doker container local (new terminal + start docker)
- npx supabase start

* run supabase function serve (make sure u have a env.local file with content like this in it: EXPO_ACCESS_TOKEN=_qODE7sMvmreV_KssnYCpCPmAnr8iKjLre2W76Wo)
- npx supabase functions serve --no-verify-jwt --env-file .env.local

* open webbowser http://127.0.0.1:54321/functions/v1/push