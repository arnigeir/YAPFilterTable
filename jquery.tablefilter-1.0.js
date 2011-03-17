/* ************************************************
jQuery table filtering plugin
Copyright 2011,  G Sigurdsson  (arni.geir.sigurdsson@gmail.com)

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.


ver		when		who		what
------------------------------------------------------------
1.0		14.03.2011	AGS		initial version
============================================================

Example:

1. Filter on each keystroke in a textbox

<!DOCTYPE HTML>
<html>
<head>
	<title>Title of tde document</title>
	<script src="jquery-1.5.1.js" type="text/javascript" ></script>
	<script src="jquery.tablefilter-1.0.js" type="text/javascript" ></script>
	<script type="text/javascript">	
		$(document).ready(function(){
			$("#FilterTextBox").keyup(function(){
				$(".filterable").tablefilter($(this).val());
			 });
		});
	</script>
</head>

<body>
	Filter: <input type="text" id="FilterTextBox" name="FilterTextBox" />
	<p>Table to filter: </p>
	<table id="table" class="filterable">
		<tr style="background-color:silver;"><th>xol</th><th>Col2</th><th>Col2</th></tr>
		<tr><td>Col1</td><td>Col2</td><td>Col2</td></tr>
		<tr><td>Col1</td><td>Col2</td><td>Col2</td></tr>		
	</table>
</body>

</html>

If the table is very large it might be necessary to delay the filtering to avoid erratic typing

<script language="javascript" type="text/javascript">
    $(document).ready(function () {
        var n;
        $("#TextBoxFilter").keyup(function () {
            clearTimeout(n);
            n = setTimeout('$(".wv_GridView").tablefilter("' + $(this).val() + '")', 800);
        });
        $(".wv_GridView").tablefilter($("#TextBoxFilter").val())
    });
</script>

**************************************************/
(function ($) {
    $.fn.tablefilter = function (filtertext) {
        var s = filtertext.toString().toLowerCase().split(" ");
        this.each(function () {
            $(this).find("tr:has(td)").each(function () {
                var row = $(this).show();
                var rowText = row.text().toLowerCase();
                $.each(s, function () { if (rowText.indexOf(this) === -1) row.hide(); });
            });
        });

    };
})(jQuery);