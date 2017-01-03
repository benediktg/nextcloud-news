OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Anfrage fehlgeschlagen, Netzwerkverbindung nicht verfügbar!",
    "Request unauthorized. Are you logged in?" : "Anfrage nicht authorisiert. Sind Sie angemeldet?",
    "Request forbidden. Are you an admin?" : "Anfrage verboten. Sind Sie ein Admin?",
    "Token expired or app not enabled! Reload the page!" : "Token abgelaufen oder App nicht aktiviert! Bitte Seite neu laden!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Interner Serverfehler! Bitte kontrollieren Sie data/nextcloud.log für weitere Informationen!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "Anfrage fehlgeschlagen, diese Nextcloud-Instanz befindet sich derzeit im Wartungsmodus.",
    "Feed contains invalid XML" : "Feed beinhaltet ungültiges XML",
    "Feed not found: either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl " : "Feed nicht gefunden: Entweder stellt die Website keinen Feed zur Verfügung oder blockiert den Zugriff. Um die Sperre zu umgehen, versuchen Sie den Feed über die Kommandozeile Ihres Servers mithilfe von curl herunterzuladen",
    "Detected feed format is not supported" : "Das ermittelte Format des Feeds wird nicht unterstützt",
    "Website not found" : "Webseite nicht gefunden",
    "More redirects than allowed, aborting" : "Mehr Weiterleitungen als erlaubt, Abbruch",
    "Bigger than maximum allowed size" : "Größer als die maximal erlaubte Größe",
    "Request timed out" : "Zeitüberschreitung bei der Anfrage",
    "Required credentials for feed were either missing or incorrect" : "Erforderliche Anmeldeinformationen für den Feed waren entweder nicht vorhanden oder falsch",
    "Forbidden to access feed" : "Zugriff auf den Feed verweigert",
    "Certificate error: A problem occurred somewhere in the SSL/TLS handshake. Could be certificates (file formats, paths, permissions), passwords, and others." : "Zertifikatsfehler: Beim SSL/TLS-Handshake ist ein Problem aufgetreten. Dies können die Zertifikate (Dateiformate, Pfade, Zugriffsrechte), Passwörter oder etwas anderes sein.",
    "Certificate error: The remote server's SSL certificate or SSH md5 fingerprint was deemed not OK." : "Zertifikatsfehler: Das SSL-Zertifikat des entfernten Servers oder der SSH-MD5 Fingerabdruck wurde als nicht in Ordnung erachtet.",
    "Certificate error: Problem with the local client certificate." : "Zertifikatsfehler: Problem mit dem lokalen Client-Zertifikat.",
    "Certificate error: Couldn't use specified cipher." : "Zertifikatsfehler: Die vorgegebene Verschlüsselung konnte nicht verwendet werden.",
    "Certificate error: Peer certificate cannot be authenticated with known CA certificates." : "Zertifikatsfehler: Peer-Zertifikat kann nicht mit den bekannten CA-Zertifikaten authentifiziert werden.",
    "Certificate error: Requested FTP SSL level failed." : "Zertifikatsfehler: Das angeforderte FTP-SSL-Level ist fehlgeschlagen.",
    "Certificate error: Initiating the SSL Engine failed." : "Zertifikatsfehler: Initialisierung der SSL-Engine ist fehlgeschlagen.",
    "Certificate error: Problem with reading the SSL CA cert (path? access rights?)" : "Zertifikatsfehler: Problem beim Lesen des SSL-CA-Zertifikats (Pfad oder Zugriffsrechte?)",
    "Certificate error: Issuer check failed" : "Zertifikatsfehler: Fehlerüberprüfung fehlgeschlagen",
    "Unknown SSL certificate error!" : "Unbekannter SSL-Zertifikatsfehler!",
    "Can not add feed: Exists already" : "Feed konnte nicht hinzugefügt werden:  Existiert bereits",
    "Articles without feed" : "Artikel ohne Feed",
    "Can not add folder: Exists already" : "Ordner kann nicht hinzgefügt werden: Existiert bereits",
    "Use system cron for updates" : "Verwende System-Cron für Aktualisierungen",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Deaktivieren Sie diese Option, wenn Sie einen eigenen Updater wie z.B. den Python-Updater aus der App laufen lassen",
    "Purge interval" : "Säuberungssintervall",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Minimum an Sekunden, nachdem gelöschte Feeds und Ordner aus der Datenbank entfernt werden; Werte unter 60 Sekunden werden ignoriert",
    "Maximum read count per feed" : "Maximale Anzahl an einzulesende Feeds",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off completely" : "Definiert die maximale Anzahl an Artikeln, die pro Feed gelesen und bei einem Säuberungsauftrag nicht aus der Datenbank gelöscht werden; wenn ältere Artikel nach dem Lesen erhalten bleiben sollen, erhöhen Sie diesen Wert; negative Werte sowie -1 deaktiviert diese Funktion komplett",
    "Maximum redirects" : "Maximale Anzahl Weiterleitungen",
    "How many redirects the feed fetcher should follow" : "Anzahl Weiterleitungen die der Feed-Sammler folgen soll",
    "Maximum feed page size" : "Maximale Seitengröße des Feeds",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Maximale Feedgröße in Bytes. Wenn die RSS/Atom-Seite größer als dieser Wert ist, wird die Aktualisierung abgebrochen",
    "Feed fetcher timeout" : "Zeitüberschreitung Feed-Sammler",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Maximale Anzahl an Sekunden zum Laden eines RSS- oder Atom-Feeds; Wenn dies länger dauert, wird die Aktualisierung abgebrochen.",
    "Explore Service URL" : "Service-URL entdecken",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "Falls angegeben, wird die URL dieses Dienstes zur Feed-Anzeige innerhalb des Explore-Feed-Bereichs abgefragt. Lassen Sie dieses Feld unausgefüllt, um auf den eingebauten Explore-Dienst zurückzugreifen.",
    "For more information check the Wiki" : "Für weiter Informationen besuchen Sie das Wiki",
    "Saved" : "Gespeichert",
    "Download" : "Herunterladen",
    "Close" : "Schließen",
    "Ajax or Web cron mode detected! Your feeds will not be updated!" : "Ajax oder ein webbasierter Cron-Modus gefunden! Ihre Feeds werden nicht aktualisiert!",
    "How to set up the operating system cron" : "Wie der systemeigene Cron eingerichtet wird",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Installieren und richten Sie einen schnellen, parallelen Updater ein, der die Update-API der News-App nutzt",
    "filter" : "Filter",
    "Language" : "Sprache",
    "Subscribe" : "Abonnieren",
    "Got more awesome feeds? Share them with us!" : "Haben Sie aufregende Feeds? Teilen Sie diese mit uns!",
    "No articles available" : "Keine Artikel verfügbar",
    "No unread articles available" : "Keine ungelesenen Artikel verfügbar",
    "Open website" : "Internetseite öffnen",
    "Star article" : "Artikel markieren",
    "Unstar article" : "Markierung aufheben",
    "Keep article unread" : "Artikel ungelesenen lassen",
    "Remove keep article unread" : "„Artikel ungelesenen lassen“ entfernen",
    "by" : "von",
    "from" : "von",
    "Play audio" : "Audio wiedergeben",
    "Download video" : "Video herunterladen",
    "Download audio" : "Audio herunterladen",
    "Keyboard shortcut" : "Tastaturbefehl",
    "Description" : "Beschreibung",
    "right" : "Rechts",
    "Jump to next article" : "Zum nächsten Artikel springen",
    "left" : "Links",
    "Jump to previous article" : "Zum vorherigen Artikel springen",
    "Toggle star article" : "Markierung des Artikels umschalten",
    "Star article and jump to next one" : "Artikel markieren und zum Nächsten springen",
    "Toggle keep current article unread" : "Umschalten lässt den Artikel ungelesen",
    "Open article in new tab" : "Artikel in neuen Tab öffnen",
    "Toggle expand article in compact view" : "Umschalten zeigt den kompletten Artikel in der kompakten Ansicht",
    "Refresh" : "Aktualisieren",
    "Load next feed" : "Nächsten Feed laden",
    "Load previous feed" : "Vorherigen Feed laden",
    "Load next folder" : "Nächsten Ordner laden",
    "Load previous folder" : "Vorherigen Ordner laden",
    "Scroll to active navigation entry" : "Zum aktiven Navigationseintrag scrollen",
    "Focus search field" : "Suchfeld aktivieren",
    "Mark current article's feed/folder read" : "Feed/Ordner dieses Artikels als gelesen markieren",
    "Web address" : "Internetadresse",
    "Feed exists already!" : "Der Feed existiert bereits!",
    "Folder" : "Ordner",
    "No folder" : "Kein Ordner",
    "New folder" : "Neuen Ordner",
    "Folder name" : "Ordnername",
    "Go back" : "Zurück gehen",
    "Folder exists already!" : "Der Ordner existiert bereits!",
    "Advanced settings" : "Erweiterte Einstellungen",
    "Credentials" : "Zugangsdaten",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "Die Anmeldeinformationen der HTTP-Standardauthentifizierung müssen unverschlüsselt gespeichert werden! Jeder mit Serverzugriff ist in der Lage diese Daten zu lesen.",
    "Username" : "Benutzername",
    "Password" : "Passwort",
    "New Folder" : "Neuer Ordner",
    "Create" : "Erstellen",
    "Explore" : "Entdecken",
    "Update failed more than 50 times" : "Aktualisierung ist mehr als 50 mal fehlgeschlagen",
    "Deleted feed" : "Gelöschter Feed",
    "Undo delete feed" : "Gelöschten Feed wiederherstellen",
    "Rename" : "Umbenennen",
    "Menu" : "Menü",
    "Unpin feed from the top" : "Hebe die Fixierung des Feed auf",
    "Pin feed to the top" : "Fixiere den Feed oben",
    "No feed ordering" : "Keine Feed-Sortierung",
    "Reversed feed ordering" : "Umgekehrte Feed-Sortierung",
    "Normal feed ordering" : "Normale Feed-Sortierung",
    "Enable full text feed fetching" : "Aktivieren der Volltextsuche",
    "Disable full text feed fetching" : "Deaktivieren der Volltextsuche",
    "Keep updated articles as is" : "Den Artikel aktualisiert halten",
    "Mark updated articles unread" : "Markiere aktualisierte Artikel als ungelesen",
    "Rename feed" : "Feed umbenennen",
    "Delete feed" : "Feed löschen",
    "Mark all articles read" : "Alles als gelesen kennzeichnen",
    "Dismiss" : "Ausblenden",
    "Collapse" : "Zuklappen",
    "Deleted folder" : "Gelöschter Ordner",
    "Undo delete folder" : "Gelöschten Ordner wiederherstellen",
    "Rename folder" : "Ordner umbenennen",
    "Delete folder" : "Ordner löschen",
    "Starred" : "Markiert",
    "Unread articles" : "Ungelesene Artikel",
    "All articles" : "Alle Artikel",
    "Settings" : "Einstellungen",
    "Disable mark read through scrolling" : "Keine Artikel während des Bildlaufs als gelesen markieren",
    "Compact view" : "Kompakte Ansicht",
    "Expand articles on key navigation" : "Artikel bei der Tasten-Navigation erweitern",
    "Show all articles" : "Alle Artikel anzeigen",
    "Reverse ordering (oldest on top)" : "Sortierung umkehren (älteste zuerst)",
    "Subscriptions (OPML)" : "Abonnements (OPML)",
    "Import" : "Importieren",
    "Export" : "Exportieren",
    "Error when importing: file does not contain valid OPML" : "Fehler beim Importieren: Datei enthält kein gültiges OPML",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Fehler beim Importieren: OPML enthält weder Feeds noch Ordner",
    "Unread/Starred Articles" : "Ungelese/Markierte Artikel",
    "Error when importing: file does not contain valid JSON" : "Fehler beim Importieren: Datei enthält kein gültiges JSON",
    "Help" : "Hilfe",
    "Keyboard shortcuts" : "Tastenkürzel",
    "Documentation" : "Dokumentation",
    "Report a bug" : "Melden Sie einen technischen Fehler"
},
"nplurals=2; plural=(n != 1);");
