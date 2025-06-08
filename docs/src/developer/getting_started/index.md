# Getting Started für Entwickler

## Git

### ProjektSetup

- clone das [SummitSeeker-Repository](https://github.com/SummitSeekerDevs/SummitSeeker/tree/main) in ein beliebiges 
  Verzeichnis auf deinem PC

## VSCode

In [diesem Video-Tutorial](https://www.youtube.com/watch?v=ihVAKiJdd40) sind die Schritte zur Installation und
Einrichtung von VSCode als IDE für Unity erklärt.  
Alle darin vorkommenden Einstellungen sind im Folgenden *:heavy_check_mark: hervorgehoben*.  
Die anderen Einstellungen sollten für das Projekt zusätzlich vorgenommen werden.

### Installation

- :heavy_check_mark: *[Downloade](https://code.visualstudio.com/download) und installiere VS Code für dein
  Betriebssystem*
- :heavy_check_mark: *[Downloade](https://dotnet.microsoft.com/en-us/download) und installiere das `.NET`-SDK für
  dein Betriebssystem*
- :heavy_check_mark: *[Downloade](https://dotnet.microsoft.com/en-us/download/dotnet-framework) und installiere das
  `.NET`-Framework*

### Projekt-Setup

- Installiere folgende Plugins in der IDE unter "Extensions"
  - :heavy_check_mark: *`C#`*  
  - :heavy_check_mark: *`Unity Tools`*
  - :heavy_check_mark: *`Unity Code Snippets`*
  - `CSharpier`
- Prüfe folgende Einstellungen unter `Settings`:
  - `Text Editor` -> `Default Formatter` = `CSharpier`
  - `Text Editor` -> `Formatting` -> `Format on Save` = `true`

## Unity

### Installation

- [Downloade](https://unity.com/de/download) den Unity Hub für dein Betriebssystem mit mindestens der Version `3.10.
0` oder höher
- Downloade im Unity Hub unter "Installs" Unity mit mindestens der Version `Unity6 (6000.0.43f1)` oder höher.
  Markiere dabei die Moduloptionen `Windows Build Support (IL2CPP)` und `Documentation`

### Projekt-Setup

- Füge das SummitSeeker-Projekt im Unity-Hub unter `Projects` --> `Add` --> `add project from disk` hinzu
- :heavy_check_mark: *Im Unity Editor unter `Edit` --> `Preferences` --> `External Tools` --> `External Script
Editor` "Visual Studio Code" wählen*
- :heavy_check_mark: *Im Unity Editor unter `Window` --> `Package Manager` --> `Packages: Unity Registry` das `Visual
Studio Code Editor` Package in der aktuellsten Version installieren*

::: tip Hinweis
Weitere Tipps und Einstellungen findest du unter [Tipps und Tricks](/developer/unity/tipps/index.md)
:::

## Weitere Tools

- Zur Erstellung von 3D-Assets nutzen wir [Blender](https://www.blender.org/download/) (Version 4.3 ++)
- Zur Erstellung von Texturen und Bildern nutzen wir [Gimp](https://www.gimp.org/downloads/)
