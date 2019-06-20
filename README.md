# emotion-recognition-voice

Detecting emotions from the voice input of users and return them the results.

#### Note: The audio cannot be greater than 5 seconds.

## Prerequisites:
* The next course of action assumes that you have a sound understanding of Angular and have created SPAs using AngularCLI before.
* Make sure you have all the dependencies installed to create an Angular Project with AngularCLI.

* You’ll need an API Key to use WebEmpath’s Vocal Emotion Recognition API. You can SignUp for one [here!](https://webempath.net/agreement) 

* Store the API Key in environment.prod.ts

## Code Highlights
Services available currently to get emotions from user’s voice.

Services that would: record user’s voice; transform it into a format that the API would accept; send the audio sample to the API.

A component that will use these services and would provide the user with an interface to communicate with.

