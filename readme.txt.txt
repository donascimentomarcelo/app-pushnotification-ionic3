First of all
	run in terminal
	
	ionic cordova plugin add onesignal-cordova-plugin
	npm install --save @ionic-native/onesignal

After, add OneSignal on providers in app.module.ts
	  providers: [
		...
		OneSignal
	  ]
	  
references: https://ionicframework.com/docs/native/onesignal/