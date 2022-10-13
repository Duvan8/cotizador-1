(function($){
    $.fn.extend({
        tableHTMLExport: function(options) {
            var defaults = {
                separator: ',',
                newline: '\r\n',
                ignoreColumns: '',
                ignoreRows: '',
                type:'csv',
                htmlContent: false,
                consoleLog: false,
                trimContent: true,
                quoteFields: true,
                filename: 'tableHTMLExport.csv'
            };
            var options = $.extend(defaults, options);
            function quote(text) {
                return '"' + text.replace('"', '""') + '"';
            }
            function parseString(data){
                if(defaults.htmlContent){
                    content_data = data.html().trim();
                }else{
                    content_data = data.text().trim();
                }
                return content_data;
            }
            /**
             * Convierte la tabla enviada a json
             * @param el
             * @returns {{header: *, data: Array}}
             */
            function toJson(el){
                var jsonHeaderArray = [];
                $(el).find('thead').find('tr').not(options.ignoreRows).each(function() {
                    var tdData ="";
                    var jsonArrayTd = [];

                    $(this).find('th').not(options.ignoreColumns).each(function(index,data) {
                        if ($(this).css('display') != 'none'){
                            jsonArrayTd.push(parseString($(this)));
                        }
                    });
                    jsonHeaderArray.push(jsonArrayTd);

                });

                var jsonArray = [];
                $(el).find('tbody').find('tr').not(options.ignoreRows).each(function() {
                    var tdData ="";
                    var jsonArrayTd = [];

                    $(this).find('td').not(options.ignoreColumns).each(function(index,data) {
                        if ($(this).css('display') != 'none'){
                            jsonArrayTd.push(parseString($(this)));
                        }
                    });
                    jsonArray.push(jsonArrayTd);

                });


                return {header:jsonHeaderArray[0],data:jsonArray};
            }
            var el = this;
            if(options.type == 'pdf'){

                var jsonExportArray = toJson(el);

                if(defaults.consoleLog){
                    console.log(jsonExportArray);
                }

                var doc = new jsPDF('p', 'pt');
                doc.autoTable(jsonExportArray.header, jsonExportArray.data);
                doc.save(options.filename);

            }
            return this;
        }
    });
})(jQuery);

