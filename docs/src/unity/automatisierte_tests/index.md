## Automatisierte Tests

Zum Testen des in C# geschriebenen Codes verwenden wir das “Unity Test Framework”. 
Dieses Framework unterteilt die Tests in **Edit Mode** - und **Play Mode** - Tests.

Die Tests **Edit-Mode** laufen im Unity-Editor und haben Zugriff auf den Editor 
und den Code des Spiels. Dies bedeutet, dass die benutzerdefinierten 
Editor-Erweiterungen getestet oder Tests verwenden können, um Einstellungen im 
Editor zu ändern und den Abspielmodus aufzurufen, der nützlich ist, um 
Inspektorwerte anzupassen und dann automatisierte Tests mit vielen verschiedenen 
Einstellungen durchzuführen.

Mit den Tests **Play-Mode** kann der Spielcode zur Laufzeit getestet werden. 
Tests werden in der Regel als Coroutine unter Verwendung des Attributs `UnityTest` 
ausgeführt. So kann der Code getestet werden, der über mehrere Frames hinweg 
ausgeführt werden kann. Standardmäßig werden die Tests im Play-Mode im Editor 
ausgeführt, aber sie können auch in einem eigenständigen Player-Build für 
verschiedene Zielplattformen ausführen werden.

Wie diese Test eingebaut werden sollen, kann aus dem [Handbuch](https://docs.unity3d.com/Packages/com.unity.test-framework@1.4/manual/manual.html) 
oder aus einem [Tutorial](https://unity.com/de/how-to/automated-tests-unity-test-framework) entnommen werden.
