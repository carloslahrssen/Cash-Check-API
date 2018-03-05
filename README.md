# Cash-Check-API

API that creates rooms, groups and calls the Plaid API. 

## Installation 

Install repo

`git clone https://github.com/carloslahrssen/Cash-Check-API.git`

Move into the working directory

`cd Cash-Check-API`

Add config file 

`touch config.js`

Open config.js in any editor and add the following

```
module.exports = {
	CLIENT_ID: '',
	PUBLIC_KEY: '',
	SECRET: '',
	PLAID_ENV: ''
}
```
After putting and saving your credentials within the config.js file you are ready to start the server!

To start the server you must have docker installed. If you do not have docker install please go to the [Docker Website]('https://docs.docker.com/install/')

To run and start the server enter 

`docker-compose up`

If everything runs smoothly you're all set!
