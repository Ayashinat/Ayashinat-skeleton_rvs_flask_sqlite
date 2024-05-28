import sqlite3

# Créer une connexion à une base de données en mémoire
conn = sqlite3.connect(':memory:')

# Créer un curseur pour exécuter des commandes SQL
c = conn.cursor()

# Créer une table
c.execute('''CREATE TABLE test (id INTEGER PRIMARY KEY, name TEXT)''')

# Insérer une donnée
c.execute("INSERT INTO test (name) VALUES ('Hello, World!')")

# Récupérer et afficher la donnée
c.execute('SELECT * FROM test')
print(c.fetchone())

# Fermer la connexion
conn.close()
