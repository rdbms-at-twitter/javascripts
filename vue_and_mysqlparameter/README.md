## Check MySQL8.0 Parameter with vue.js

Sample View<br>

<img src="https://github.com/rdbms-at-twitter/javascripts/blob/master/vue_and_mysqlparameter/mysql_parameter.PNG" alt="Vue and MySQL" title="vue_and_mysql">


### Sample shell for creating sample parameter json files

```
mysqld --no-defaults --verbose --help | awk 'NR > 1779{print "{\"parameter\":\""$1"\",\"value\":\""$2"\"},"}' > parameter.json 
```


```
mysqld --no-defaults --verbose --help | awk 'NR > 1919{print "{\"parameter\":\""$1"\",\"value\":\""$2"\"},"}' > parameter.json
```
