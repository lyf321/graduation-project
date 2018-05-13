# graduation-project


账号:
1,管理员,三位（（lyf,123456）,（zhai,123456）,（xcvb,123456））
2,老师,(11111,123456)
3,学生,(liyangfan,123456)

管理员的职责
1. 首页有两个饼图，员工分布和课程分布，帮助管理员了解当前人员组成和授课情况
2. 课程管理，增删改查，查可以根据名字，课程id，教师id分别查到对应课程的列表
3. 教师管理，增删改查，查可以根据教师id和名字查询对应的信息列表，考勤查询
4. 学生管理，增删改查，查可以根据学生id和名字查询对应的信息列表
5. 员工管理，管理管理员，老师，学生，可以进行增删改查，修改用户名和密码，查可以根据员工id查询
6. 个人中心，包括基本信息，账户信息，修改密码

老师的职责
1. 首页可以申请课程，还有当前课程列表，包括课程的基本信息
2. 我的教学，包括的是被学生选择的课程的课程列表，点击可以查看课程信息，有上课按钮，可以直接跳转到视频课程界面
3. 我的学生，分为未评价课程，已评价课程，包括的是已选择课程的学生信息，在完成学习任务之后，老师可以对学生进行评价
4. 个人中心，包括基本信息，账户信息，修改密码，修改头像

学生的职责
1. 首页是一个视频，还有一些推荐的课程，热门课程
2. 我的课程，自己预约成功的课程列表，可以删除课程，可以直接跳转到视频课程界面
3. 预约课程，查看所有课程列表，然后点击查看详情，可以进行预约课程
4. 个人中心，包括基本信息，可以进行基本信息的修改，账户信息，修改密码，修改头像，老师评价


数据库（7个）

students
```
sid char(4)
sname varchar(20)
sage int
ssex char(1)
semail varchar(40)
saddress varchar(50)
snumber varchar(15)
savatar varchar(50)
```

stu_cour
```
create table stu_cour(
	sid char(4),
    cid char(4),
    UNIQUE (sid, cid)
);
```

evaluations
```
create table evaluations(
	sid char(4),
    cid char(4),
    tid char(4),
    evaluation varchar(200),
    suggestion varchar(200)
);
```

teachers

courses

user

administrator
```
uid char(4)
name varchar(10)
address varchar(20)
email varchar(20)
phone varchar(15)
tel varchar(15)
sex varchar(4)
age varchar(3)
birth varchar(20)

```

attendance
```
create table attendance(
	tid char(4),
    month char(2),
    year char(4),	
    day char(2),
    UNIQUE (tid,month,year,day)
);
```
evaluationCourse
```
create table evaluationCourse(
	cid char(4),
    tid char(4),
    evaluations varchar(400)
);
```
