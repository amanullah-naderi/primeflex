// wa_ss24_primeflex/frontend/src/components/pages/DokumentationPage.js
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import '../styles/DocIns.css';

const DocumentationPage = () => {
    return (
        <div className="container">
            <header>
                <Link to="/" className="App-link">
                    <img src={logo} className="App-logos" alt="logo" />
                </Link>
            </header>
            <div className="content">
                <h1 style={{fontWeight: 'bold', textAlign: 'center', fontSize: '34px'}}>Dokumentation of primeflex
                    (Backend, Frontend, Swagger)</h1>
                <h1>Team Organisation</h1>
                <h1>Amanullah Naderi: Backend(Node-Express) - MongoDB, Frontend(JS-CSS-React), Docker, API-IMDB(Extern-Intern)</h1>
                <h1>Rudolf Minz: Backend(Node-Express), Frontend(JS-CSS-React), Docker, API-IMDB(Extern-Intern)</h1>
                <h1>Backend</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>➡</td>
                        <td>Ich habe eine MongoDB-Datenbank erfolgreich eingebunden und eine connectToMongoDB-Funktion
                            in mongo.js (init-mongo.js) implementiert, um eine stabile Verbindung herzustellen.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>In meinem authController.js habe ich die Grundlagen der Benutzerverwaltung und
                            Authentifizierung festgelegt. Benutzer können sich registrieren, anmelden und ihre Profile
                            abrufen. Alle Benutzerdaten werden sicher in meiner MongoDB gespeichert, und Passwörter
                            werden vor dem Speichern gehasht, um die Sicherheit zu gewährleisten.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Für die Filmverwaltung habe ich filmController.js entwickelt, um Filme abzurufen und neue
                            Filme zu erstellen. Diese Filmdaten werden ebenfalls in meiner MongoDB gespeichert, was eine
                            skalierbare und zuverlässige Lösung bietet.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Um Bewertungen zu verwalten, habe ich Routen und Controller implementiert, die es
                            ermöglichen, Bewertungen für Filme zu speichern und abzurufen. Die Bewertungen werden in
                            einer separaten MongoDB-Sammlung gespeichert und können für jeden Film individuell abgerufen
                            werden.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Für die Suchfunktion habe ich search Controller.js erstellt, um eine Funktion zu
                            implementieren, die es Benutzern ermöglicht, Filme basierend auf ihren Suchanfragen zu
                            durchsuchen.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Die Serienverwaltung wurde ebenfalls berücksichtigt, indem Routen und Controller
                            implementiert wurden, um alle Serien abzurufen. Für die Trendverwaltung habe ich Funktionen
                            erstellt, um Trends abzurufen und diese Informationen bereitzustellen.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Zur Verbesserung der Middleware habe ich Fehlerbehandlungs- und Logging- und
                            Authentication-Middleware
                            implementiert, um die Fehlererkennung und -behebung zu erleichtern.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Um sicherzustellen, dass die eingegebenen Benutzerdaten korrekt sind, haben wir auch externe
                            API-Service integriert und Validierungsmiddleware für die Benutzerregistrierung
                            implementiert. Dies stellt sicher, dass
                            die Datenintegrität gewahrt bleibt. Alle sensiblen Informationen und Konfigurationen wie
                            Portnummern, JWT-Secrets, MongoDB-URls und API-Schlüssel werden sicher in einer .env-Datei
                            gespeichert, um die Sicherheit zu gewährleisten und die Konfiguration zu vereinfachen.
                        </td>
                    </tr>
                    </tbody>
                </table>
                <h1>Frontend</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>➡</td>
                        <td>AddReview.js:</td>
                        <td>Hier können Benutzer Bewertungen hinzufügen, bearbeiten oder löschen.</td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>DisplayData.js:</td>
                        <td>Zeigt favorisierte Videos an und informiert, wenn keine als Favoriten markiert sind.</td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>HomepageStuff.js:</td>
                        <td>Enthält Header und Menü der Startseite, zeigt Benutzernamen und Rolle an und bietet
                            Administratoren einen Link zur Administrationsseite.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>HomeVideo.js:</td>
                        <td>Definiert die Hauptkomponente der Startseite mit favorisierten Videos, Teasern für neue
                            Videos, einer durchsuchbaren Video-Liste und einem Bereich für Bewertungen.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Teaser.js:</td>
                        <td>Zeigt Vorschauen von Videos an und ermöglicht das Markieren oder Aufheben der Markierung als
                            Favorit.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>VideoList.js:</td>
                        <td>Zeigt eine Liste von Videos an und bietet eine Suchfunktion zum Filtern.</td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>VideoThumbnail.js:</td>
                        <td>Zeigt ein Vorschaubild und den Titel eines Videos an und ermöglicht Benutzern, das Video als
                            Favorit zu markieren oder die Markierung aufzuheben.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Hauptdateien wie App.js, index.js und reportWebVitals.js:</td>
                        <td>Konfigurieren Routing-Logik und Web-Vitals-Messungen.</td>
                    </tr>
                    </tbody>
                </table>
                <h1>Zusätzliche Funktionen</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>➡</td>
                        <td>AdminPanel (AdminPage.js):</td>
                        <td>rmöglicht Administratoren das Verwalten von Benutzerkonten. Sie zeigt eine Liste
                            registrierter Benutzer an, ermöglicht das Löschen von Benutzern und das Ändern ihrer Rollen.
                            Zudem bietet sie ein Formular zum Hinzufügen neuer Benutzer an.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Passwort vergessen (ForgotPasswordPage.js):</td>
                        <td>Ermöglicht Benutzern das Zurücksetzen ihres Passworts. Sie enthält Formulare für den Versand
                            eines Reset-Links per E-Mail sowie das Festlegen eines neuen Passworts nach Erhalt des
                            Links.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Filme (MoviesPage.js):</td>
                        <td>Zeigt eine Liste der Top 100 Filme von einer IMDb-API und präsentiert sie auf der Seite.
                            Jeder Film wird mit seinen Details wie Bild, Titel, Beschreibung, Genres und IMDb-Link
                            angezeigt. Die Seite kümmert sich auch um Lade- und Fehlerzustände während des Datenabrufs,
                            um eine reibungslose Benutzererfahrung zu gewährleisten.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Bewertungen (RatingPage.js):</td>
                        <td>Ruft eine Liste der bestbewerteten Filme von einer IMDb-API ab und präsentiert sie auf der
                            Seite. Jeder Film wird mit seinen Bewertungen, Bewertungszahlen und Veröffentlichungsjahren
                            angezeigt. Die Seite behandelt auch Lade- und Fehlerzustände während des Datenabrufs.
                            Darüber hinaus zeigt sie die neuesten bewerteten Filme an.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Trend (TrendsPage.js):</td>
                        <td>Ruft eine Liste der Top-Filme von einer IMDb-API ab und präsentiert sie in einer
                            Schieberegleransicht auf der Seite. Dabei werden Lade- und Fehlerzustände während des
                            Datenabrufs berücksichtigt, um eine reibungslose Benutzererfahrung zu gewährleisten.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Suche (SearchPage.js):</td>
                        <td>Ermöglicht es Benutzern, in der IMDb-Datenbank zu suchen. Sie zeigt die Suchergebnisse an,
                            wenn vorhanden, oder eine Nachricht für keine Ergebnisse. Die Seite behandelt auch Lade- und
                            Fehlerzustände während der Suche. Benutzer können nach Filmen, Serien, Trends, Bewertungen,
                            Schauspielern und Jahren suchen.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Serien (SeriesPage.js):</td>
                        <td>Lädt eine Auswahl der populärsten Fernsehserien von einer IMDb-API. Diese Serien werden
                            anschließend auf der Seite mit ihren Details präsentiert, darunter Bild, Titel, Bewertung
                            und Veröffentlichungsjahr. Zusätzlich bietet die Seite eine Funktion zum Aktualisieren der
                            Bewertungen und Veröffentlichungsjahre der Serien, um den Benutzern eine Interaktion mit den
                            angezeigten Informationen zu ermöglichen.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Anmeldung (SignInPage.js):</td>
                        <td>Ermöglicht es Benutzern, sich mit ihren Anmeldeinformationen anzumelden. Sobald angemeldet,
                            wird der Benutzername und die Rolle des angemeldeten Benutzers angezeigt. Zusätzlich gibt es
                            eine Möglichkeit für den Benutzer, sich abzumelden. Außerdem bietet die Seite Links zur
                            Registrierung und zum Zurücksetzen des Passworts an, um Benutzern eine einfachere Navigation
                            zu ermöglichen.
                        </td>
                    </tr>
                    <tr>
                        <td>➡</td>
                        <td>Registrierung (SignUpPage.js):</td>
                        <td>Ermöglicht es Benutzern, sich mit Benutzername, E-Mail und Passwort anzumelden. Sie führt
                            Validierung durch und zeigt Fehlermeldungen an, falls erforderlich, um sicherzustellen, dass
                            alle erforderlichen Felder ausgefüllt sind. Nach einer erfolgreichen Anmeldung wird der
                            Benutzer auf die entsprechende Seite weitergeleitet.
                        </td>
                    </tr>
                    </tbody>
                </table>
                <h1>Swagger</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>➡</td>
                        <td>
                            <td>
                                Dies ist das OpenAPI-Schema für die Backend-API von PrimeFlex, die in einer
                                Node.js-Anwendung mit Express.js implementiert ist. Die API bietet RESTful-Endpunkte
                                für Benutzerregistrierung, Anmeldung, Abruf von Filmen und Serien,
                                Trending-Elementen, Bewertungen und Suchfunktionen. Es unterstützt sowohl externe
                                als auch interne APIs, die mit GET- und POST-Anfragen interagieren.
                            </td>
                            <td>➡</td>
                            <td>
                                Die Daten werden in MongoDB gespeichert, und die gesamte Anwendung ist in einem
                                Docker-Container gehostet, was eine einfache Bereitstellung und Skalierung
                                ermöglicht. Die API verarbeitet JSON-Daten, wie von RESTful-Web-APIs üblich, und
                                gibt HTTP-Statuscodes zurück, um den Erfolg oder das Scheitern einer Anfrage zu
                                signalisieren.
                            </td>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DocumentationPage;