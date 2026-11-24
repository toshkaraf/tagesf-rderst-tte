import json
G=[
(3,[("Wie viele Einwohner hat Schweden um 1650?",["Etwa 1,5 Millionen","Etwa 15 Millionen","Etwa 150 000","Etwa 50 Millionen"]),
 ("Welche Rohstoffe liefern die Bergwerke von Falun und Bergslagen?",["Kupfer und Eisen","Gold und Silber","Kohle und Öl","Salz und Zinn"]),
 ("Welcher Spruch zeigt die Angst der Deutschen vor den Schweden?",["„Bet, Kindlein, bet, morgen kommt der Schwed!“","„Wer zuletzt lacht, lacht am besten.“","„Ein Mann, ein Wort.“","„Ende gut, alles gut.“"])]),
(6,[("Was bekommt ein Soldat von den Höfen im schwedischen System?",["Ein Häuschen, Land und eine Kuh","Nur Geld","Ein Schloss","Einen Dienstwagen"]),
 ("Wer besiegt 1709 bei Poltawa das Heer von Karl XII.?",["Peter der Große","Napoleon","Gustav Adolf","Friedrich der Große"]),
 ("Gegen wen führt Schweden 1814 seinen letzten Krieg?",["Gegen Norwegen","Gegen Russland","Gegen Dänemark","Gegen Frankreich"])]),
(9,[("Welches Gesetz macht 1686 den Pastor zum Diener des Staates?",["Das Kirchengesetz","Das Steuergesetz","Das Schulgesetz","Das Wahlgesetz"]),
 ("Was passiert beim Hausverhör im Winter?",["Alle müssen vorlesen und Fragen beantworten.","Alle zahlen Steuern.","Alle werden Soldaten.","Alle ziehen um."]),
 ("Was geschieht, wenn jemand die Prüfung nicht besteht?",["Er darf nicht zum Abendmahl.","Er muss ins Gefängnis.","Er verliert sein Haus.","Er bekommt eine Medaille."])]),
(12,[("Wofür braucht man ein Zeugnis des Pastors?",["Für einen Umzug","Für den Kauf eines Pferdes","Für eine Reise nach Rom","Für die Jagd"]),
 ("Seit wann zählt Schweden seine Einwohner genau?",["Seit 1749","Seit 1349","Seit 1949","Seit 1049"]),
 ("Was bedeutet das Öffentlichkeitsprinzip von 1766?",["Jeder darf Akten der Behörden lesen.","Alle Zeitungen sind verboten.","Der König liest alle Briefe.","Nur Beamte kennen die Steuern."])]),
(15,[("Wann ist Schwedens Wirtschaft besonders frei und die Steuern niedrig?",["Zwischen 1870 und 1950","Zwischen 1600 und 1700","Nach 1990","Im Mittelalter"]),
 ("Was verkauft Schweden in den Weltkriegen an beide Seiten?",["Eisenerz und Kugellager","Schiffe und Pferde","Gold und Weizen","Autos und Computer"]),
 ("Was bedeutet das Motto „Esse, non videri“ der Wallenbergs?",["Sein, nicht scheinen","Alles oder nichts","Wissen ist Macht","Ehre dem Fleiß"])]),
(18,[("Wem gehören die Firmenanteile der Wallenbergs?",["Stiftungen","Dem König","Dem Staat","Den Arbeitern"]),
 ("Wer schließt 1938 den Pakt von Saltsjöbaden?",["Gewerkschaften und Arbeitgeber","Schweden und Norwegen","Pastoren und Bauern","Soldaten und Offiziere"]),
 ("Was heißt „Folkhemmet“?",["Das Volksheim","Das Rathaus","Die Kirche","Die Armee"])]),
(22,[("Wie entscheiden freie Bauern auf dem Thing?",["Sie verhandeln, bis alle zustimmen.","Der König entscheidet allein.","Sie stimmen mit einer knappen Mehrheit ab.","Der Pastor liest das Urteil."]),
 ("Was bedeutet „Lagom“?",["Genau richtig, nicht zu viel","Sehr schnell","Immer mehr","Ganz allein"]),
 ("Was wollen die Sozialdemokraten 1972 erreichen?",["Menschen sollen voneinander unabhängig sein.","Familien sollen zusammenwohnen.","Alle sollen Bauern werden.","Alle Firmen gehören dem Staat."])]),
(26,[("Was bedeutet „gå in i väggen“?",["Ein Burn-out bekommen","Eine Wand bauen","Ein Haus kaufen","Zum Thing gehen"]),
 ("Was ist „utfrysning“?",["Man wird ausgegrenzt und ignoriert.","Man wird laut beschimpft.","Man bekommt einen Preis.","Man wird befördert."]),
 ("Wie viele Menschen werden 1935 bis 1975 in Schweden sterilisiert?",["Rund 63 000","Rund 630","Rund 6 Millionen","Rund 6300"])]),
(30,[("Wer bricht 1997 das Schweigen über die Sterilisationen?",["Der Journalist Maciej Zaremba","Der König","Ein General","Ein Pastor"]),
 ("Welchen Betrag erhalten die Betroffenen später?",["175 000 Kronen","1 000 Kronen","10 Millionen Kronen","Nichts"]),
 ("Wann tritt Schweden der NATO bei?",["Im März 2024","Im Mai 1814","Im Juni 1949","Im Januar 2000"])
 ]),
]
out={"title":"Schweden: Kriegsmacht und Musterstaat","groups":[{"after":a,"q":[{"q":q,"a":ans} for q,ans in qs]} for a,qs in G]}
n=sum(len(g['q']) for g in out['groups']);print(len(out['groups']),n)
json.dump(out,open('quiz.json','w'),ensure_ascii=False,indent=1)
