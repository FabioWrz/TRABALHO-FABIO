create table clientes (
    cli_id_cliente   int primary key not null,
    cli_nome      varchar(100) not null,
    cli_cpf_cnpj  varchar(20) not null,
    cli_cidade    integer not null,
    cli_endereco  varchar(100)
);

create table funcionarios (
    fun_id_funcionario  int primary key not null,
    fun_nome         varchar(100) not null,
    fun_cidade       integer not null,
    fun_endereco     varchar(100),
    fun_cpf          varchar(20) not null
);

create table produtos (
    pro_id_produto  int primary key not null,
    pro_nome        varchar(100) not null,
    pro_estoque     numeric(15,2) not null,
    pro_fornecedor  integer not null,
    pro_marca       varchar(100) not null
);

create table vendas (
    ven_id_venda     int primary key not null,
    ven_cliente      integer not null,
    ven_datavenda    timestamp not null,
    ven_valor_total  numeric(15,2) default 0,
    ven_funcionario  integer not null,
    ven_pagamento    integer
);
