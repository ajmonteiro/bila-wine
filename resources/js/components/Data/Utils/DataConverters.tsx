export function TimeConverterFromUnix(UNIX_timestamp: any)  {
    var b = Date.parse(UNIX_timestamp)
    var a = new Date(b);
    var months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

export function AddOneMonthFromUnix(UNIX_timestamp: any) {
    var b = Date.parse(UNIX_timestamp)
    var a = new Date(b);
    var months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    var year = a.getFullYear();
    var month = months[a.getMonth() + 1];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}