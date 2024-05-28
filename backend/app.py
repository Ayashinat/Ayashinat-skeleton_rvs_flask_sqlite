from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)
CORS(app)


def get_db_connection():
    # Utilisez os.path.abspath pour obtenir le chemin absolu du répertoire courant du script
    dir_path = os.path.dirname(os.path.abspath(__file__))
    database_path = os.path.join(dir_path, 'database.db')
    print("Database path:", database_path)  # Cela va imprimer le chemin pour vérifier
    conn = sqlite3.connect(database_path)
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/utilisateurs', methods=['GET'])
def get_utilisateurs():
    conn = get_db_connection()
    # Supposons que votre table a seulement les colonnes `id`, `nom`, `age`, et `email`
    utilisateurs = conn.execute('SELECT id, nom, age, email FROM utilisateurs').fetchall()
    conn.close()
    return jsonify([dict(utilisateur) for utilisateur in utilisateurs])

if __name__ == '__main__':
    app.run(debug=True)