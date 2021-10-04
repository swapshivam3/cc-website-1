python -m venv env
python3 -m venv env/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate --run-syncdb
python manage.py runserver