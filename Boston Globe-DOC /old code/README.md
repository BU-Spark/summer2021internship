# BUXC433-BostonGlobe
Code for BUXC433 Justice Media Boston Globe Team

## Getting Started
### Google Cloud Vision API
The code for this project relies on the Google Cloud Vision Api. To install and get started with it, please follow steps 1-6 in this [codelab for the API](https://codelabs.developers.google.com/codelabs/cloud-vision-api-python#0).
### MySQL database
The project also uses a MySQL database to store the grievances data. To use it, MySQL needs to be installed. Here is the [installation page](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) for MySql and just install the one that is appropriate for the system you are using. I also highly recommend installing [mySQL Workbench](https://www.mysql.com/products/workbench/) which allows for database management using a GUI.
### Installing the packages
Once you have installed the the Google Cloud Vision API and mySQL, clone the repository and download the rest of the requirements by running the following commands:
```
pip install -r requirements.txt
```
### Running the code
To run the code, go into the code/ocr_scan directory. Then create an environment variable called `SQLPWD`to your mySQL password and `GRIEVANCES_DIRECTORY` to the directory of where the images of your grievances are. Once that is done, run the code with the following command
```
python3 vision.py
```
