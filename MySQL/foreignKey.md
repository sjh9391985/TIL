### foreign key 이해

```
create table Club(

    id smallint unsigned not null auto_increment primary key,
    name varchar(31) not null,
    createdate timestamp not null default current_timestamp,
    leader int unsigned,
    constraint foreign key fk_leader_student(leader) references Student(id) // foreign key

    on delete || CASCADE: key 에 해당하는 값들이 모두 지워짐. // SET NULL: 데이터 삭제시 해당 값 null 처리 // RESTRICT: 제한처리
    on update
);

create table Prof(
    id smallint unsigned not null auto_increment primary key,
    name varchar(31) not null,
    likecnt int not null default 0
);

create table Subject(
    id smallint unsigned not null auto_increment primary key,
    name varchar(31) not null,
    prof smallint unsigned null default 39,
    constraint foreign key fk_prof_prof (prof) references Prof(id)
    on delete set default
)

create table Enroll(
    id int unsigned not null auto_increment primary_key,
    subject smallint unsigned not null,
    student int unsigned not null,
    constraint foreign key fk_subject (subject) references Subject(id)
    on delete cascade,
    constraint foreign key fk_student (student) references Student(id)
    on delete cascade,
)

-- unique index 수정
alter table 'doodb', 'Subject'
add unique index 'uq_subject_name' ('name' ASC);

```

- 하나의 record size는 16KB 이하인것이 좋음.
