# ✅ Solutions – Laboratoire 4.2 – Portée des variables

```csharp
using System;

class Program
{
    static int nombreGlobal = 42;  // portée : classe entière

    static void Main()
    {
        int nombreMain = 10;  // portée : méthode Main

        if (nombreMain > 5)
        {
            int nombreBloc = 5;  // portée : bloc if
            Console.WriteLine("Bloc if : " + nombreBloc);
        }

        Console.WriteLine("Main : " + nombreMain);     // ✅ OK
        Console.WriteLine("Global : " + nombreGlobal); // ✅ OK

        // Correction : On ne peut pas accéder à nombreBloc ici car il est déclaré dans le if
        // Console.WriteLine("Bloc : " + nombreBloc);  // ❌ Erreur

        AutreMethode();
        AfficherGlobalEtLocal();
    }

    static void AutreMethode()
    {
        // Correction : On ne peut pas accéder à nombreMain car il est local à Main
        // Console.WriteLine(nombreMain); // ❌ Erreur
        Console.WriteLine("Global dans AutreMethode : " + nombreGlobal); // ✅ OK
    }

    static void AfficherGlobalEtLocal()
    {
        int nombreLocalAfficher = 99; // portée : méthode AfficherGlobalEtLocal
        Console.WriteLine("Variable globale : " + nombreGlobal);
        Console.WriteLine("Variable locale (AfficherGlobalEtLocal) : " + nombreLocalAfficher);

        // Impossible d'accéder à nombreMain ou nombreBloc ici
        // Console.WriteLine(nombreMain);  // ❌
        // Console.WriteLine(nombreBloc);  // ❌
    }
}
```

---

## 💡 Explications

- **nombreGlobal** : variable **de classe** → accessible partout dans la classe `Program`.
- **nombreMain** : variable **locale** → accessible seulement dans la méthode `Main()`.
- **nombreBloc** : variable **de bloc** → accessible uniquement à l'intérieur du `{ }` où elle est déclarée.
- Chaque paire d’accolades `{ }` définit une **nouvelle portée**.

