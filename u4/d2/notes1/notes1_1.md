## Virtual Environment

```
python3 -m venv venv
```

this create a virtual environment call venv

```
source venv/bin/activate
```

this activate the virtual environment

## Package installer

```
pip freeze > requirements.txt
```

install packages through pip and we need a file to list <br>all the packages needed for the project. This output a file call <br>requirement.txt with the packages

```
pip install -r requirements.txt
```

this will install all the packages listed when we <br>bring this env or project to another location
