# Script files for A&A's brief introduction to the Fokker-Planck equation

## Compiling the document

Install the Jupyter Book dependencies (if you already have an environment for compiling Jupyter Books, you can use that instead)

    python -m venv "env-fokker-planck"
    pip install -r requirements.txt

Compile the pages

    source env-fokker-planck/bin/activate
    pip install --upgrade pip
    jb build .


