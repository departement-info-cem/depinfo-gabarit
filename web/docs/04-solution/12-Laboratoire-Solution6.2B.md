# ✅ Solution – Labo 6.2B

## 🟡 Exercice 1
```csharp
static double[] CalculerMoyenne(int[,]e)
{
    double[] m = new double[e.GetLength(0)];

    for (int i = 0; i < e.GetLength(0); i++)
    {
        int avg = e[i,0];

        for (int j = 1; j < e.GetLength(1); j++)
        {
            avg += e[i, j];
        }

        m[i] = avg / e.GetLength(1);
    }

    return m;
}
static void Main(string[] args)
{
    int[,] employes =
    {
        { 1200, 3600, 600, 1000, 500, 6000, 1200, 500, 10000, 900, 8500, 100 },
        { 2500, 2600, 2550, 2700, 2650, 2800, 2750, 2900, 3000, 3100, 3050, 3200 },
        { 1500, 1800, 2000, 1700, 1600, 1900, 2100, 2500, 2300, 2200, 2000, 2400 },
        { 800, 1200, 950, 1100, 1000, 900, 1050, 980, 1020, 1150, 1080, 1110 }
    };

    double[] moyenneEmploye = CalculerMoyenne(employes);

    for (int i = 0; i < moyenneEmploye.Length; i++)
    {
        Console.WriteLine(moyenneEmploye[i]);
        
    }
}
```

---

## 🟡 Exercice 2

```csharp
static int CalculerSommeMensuelle(int[,] employes, int mois)
{
    int s = 0;
    for (int i = 0; i < employes.GetLength(0); i++)
    {
        s += employes[i, mois];
    }

    return s;

}
static void Main(string[] args)
{
    int[,] employes =
    {
        { 1200, 3600, 600, 1000, 500, 6000, 1200, 500, 10000, 900, 8500, 100 },
        { 2500, 2600, 2550, 2700, 2650, 2800, 2750, 2900, 3000, 3100, 3050, 3200 },
        { 1500, 1800, 2000, 1700, 1600, 1900, 2100, 2500, 2300, 2200, 2000, 2400 },
        { 800, 1200, 950, 1100, 1000, 900, 1050, 980, 1020, 1150, 1080, 1110 }
    };

    Console.Write("Choisissez un mois (0-Jan, 1-Fév, 2-Mar, 3-Avr, 4-Mai, 5-Juin, 6-Juil, 7-Août, 8-Sep, 9-Oct, 10-Nov, 11-Déc) : ");
    Console.WriteLine("Total : " + CalculerSommeMensuelle(employes, int.Parse(Console.ReadLine()) ));
}
```

---

## 🟡 Exercice 3

```csharp
static int CalculerSommeMensuelle(int[,] employes, int mois)
{
    int s = 0;
    for (int i = 0; i < employes.GetLength(0); i++)
    {
        s += employes[i, mois];
    }

    return s;

}
static void Main(string[] args)
{
    int[,] employes =
    {
        { 1200, 3600, 600, 1000, 500, 6000, 1200, 500, 10000, 900, 8500, 100 },
        { 2500, 2600, 2550, 2700, 2650, 2800, 2750, 2900, 3000, 3100, 3050, 3200 },
        { 1500, 1800, 2000, 1700, 1600, 1900, 2100, 2500, 2300, 2200, 2000, 2400 },
        { 800, 1200, 950, 1100, 1000, 900, 1050, 980, 1020, 1150, 1080, 1110 }
    };

    int t = 0;

    for (int i = 0; i < employes.GetLength(1); i++)
    {
        t+= CalculerSommeMensuelle(employes, i);
    }

    Console.WriteLine($"Total : {t}");
}
```

---

## 🟡 Exercice 4

```csharp
static bool EstUnPokemonFaible(int sommeStat)
{
    if (sommeStat < 250)
        return true;

    return false;
}
static void Main(string[] args)
{
    int[,] statPokemons =
    {
        { 35, 55, 40, 90, 50 },
        { 45, 49, 49, 45, 65 },
        { 39, 52, 43, 65, 50 },
        { 44, 48, 65, 43, 50 },
        { 40, 45, 40, 56, 35 },
        { 30, 56, 35, 72, 25 },
        { 115, 45, 20, 20, 25 },
        { 40, 45, 35, 90, 40 },
        { 70, 80, 50, 35, 35 },
        { 30, 35, 30, 80, 100 }
    };

    string[] nomsPokemons =
        {
        "Pikachu",
        "Bulbasaur",
        "Charmander",
        "Squirtle",
        "Pidgey",
        "Rattata",
        "Jigglypuff",
        "Meowth",
        "Machop",
        "Gastly"
    };

    int pokemonPuissant = 0;

    for (int i = 0; i < statPokemons.GetLength(0); i++)
    {
        int sommeStat = 0;

        for (int j = 0; j < statPokemons.GetLength(1); j++)
        {
            sommeStat += statPokemons[i, j];
        }

        if (!EstUnPokemonFaible(sommeStat))
        {
            pokemonPuissant++;
            Console.WriteLine(nomsPokemons[i]);
        }
    }

    Console.WriteLine($"\nPokémons puissants : {pokemonPuissant} / {statPokemons.GetLength(0)}");
}
```

---

## 🟡 Exercice 5

```csharp
    static int[] StatistiqueParPokemon(int[,] statPokemons, int numeroPokemon)
    {
        int[] statPokemon = new int[statPokemons.GetLength(1)];

        for (int i = 0; i < statPokemons.GetLength(1); i++)
        {
            statPokemon[i] = statPokemons[numeroPokemon, i];
        }

        return statPokemon;

    }
    static void Main(string[] args)
    {
        int[,] statPokemons =
        {
            { 35, 55, 40, 90, 50 },
            { 45, 49, 49, 45, 65 },
            { 39, 52, 43, 65, 50 },
            { 44, 48, 65, 43, 50 },
            { 40, 45, 40, 56, 35 },
            { 30, 56, 35, 72, 25 },
            { 115, 45, 20, 20, 25 },
            { 40, 45, 35, 90, 40 },
            { 70, 80, 50, 35, 35 },
            { 30, 35, 30, 80, 100 }
        };

        string[] nomsPokemons =
            {
                "Pikachu",
                "Bulbasaur",
                "Charmander",
                "Squirtle",
                "Pidgey",
                "Rattata",
                "Jigglypuff",
                "Meowth",
                "Machop",
                "Gastly"
            };

        string[] titresStatistiques = { "PV", "Attaque", "Défense", "Vitesse", "Spécial" };

        Console.WriteLine("Choisissez un Pokémon :");

        for (int i = 0; i < nomsPokemons.Length; i++)
        {
            Console.WriteLine($"{i}. {nomsPokemons[i]}");
        }

        Console.Write("\nChoix : ");
        int choix = int.Parse(Console.ReadLine());

        int[] statPokemon = StatistiqueParPokemon(statPokemons, choix);

        Console.WriteLine("\n" + nomsPokemons[choix]);
        for (int i = 0; i < statPokemon.Length; i++)
        {
            Console.WriteLine($"{titresStatistiques[i]} : {statPokemon[i]}");
        }

    }
```