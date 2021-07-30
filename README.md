# food operator...


## Inleiding

Een applicatie om recepten snel en makkelijk te zoeken aangepast aan je activiteiten en volgens de dynamiek  van de dag. Op basis van 4 categorieën kan de gebruiker recepten zoeken.  

![screenshot](./src/assets/food-operator-overview.png)

Hier kan je een voorbeeld zien van de No-time-for-cooking day hoe een categorie werkt. De gebruiker kan op basis van de aangegeven tijd recepten laten zoeken. In alle categorieen is het mogelijk om een selectie te maken van diet types en in deze categorie ook nog van dish types:

![screenshot](./src/assets/no-time-page.png) 

Resultaat:

![screenshot](./src/assets/no-time-result.png) 

## Lijst van de benodigdheden om de app te kunnen runnen:

GitHub repository

Email account

API-key
Om deze app te kunnen gebruiken, heb je een API-key nodig.
Deze kun je gemakkelijk verkrijgen door jezelf aan te melden bij Spoonacular.
Doe dat via de volgende link.

3.	Stappenplan
      
Eerst moet je de GitHub repository clonen.
Het project is opgezet met Create React App.
Wanneer je een project van iemand anders opent, draai je altijd eerst een globale installatie:
npm install
Hiermee haal je alle dependencies van het project binnen.
De applicatie kan gestart worden door npm start in de terminal in te voeren en op enter te drukken. De applicatie opent een tab met http://localhost:3000 in uw browser.

## Met welke gegevens er ingelogd kan worden of kan de gebruiker een nieuwe account registreren?

De gebruiker kan registreren en vervolgens inloggen met eigen account. Bij eerste keer registreren kan het zijn dat het 30 seconden duurt voordat  je wordt doorgestuurd naar de sign in pagina. Voor deze applicatie wordt gebruikt gemaakt van de Novi backend.

## Welke andere npm commando’s er nog beschikbaar zijn in deze applicatie?

Forms
Om react-hook-form te kunnen gebruiken moeten we eerst installeren in het project. Typ daarom het volgende in jouw terminal:

'npm install react-hook-form'

Routing
Routing omvat alles dat nodig is om de gebruikers op de juiste pagina, met de juiste content te krijgen.
Je moet in de terminal openen en react-router installeren:

'npm install react-router-dom'

http request maken
Door middel van een specifieke url gegevens kunnen recepten opvragen:  er wordt een GET-request gemaakt naar de Spoonacular API.  
De library  Axios hiervoor is handig om te gebruiken. We kunnen hierdoor de variabele axios gebruiken als basis om de verschillende functies die deze library beschikbaar heeft gesteld, te gebruiken.
Download Axios door het volgende in de terminal te typen:

'npm install axios'

JWT-token
We hebben hier de JWT token nodig om daaruit de userID te halen
 Hier gebruiken we de package jwt-decode voor:

'npm install jwt-decode'

React icons library 
Er wordt gebruik gemaakt van de React icons library, die kan je installeren om de volgende in de terminal te typen:

'npm install react-icons'
![img.png](img.png)